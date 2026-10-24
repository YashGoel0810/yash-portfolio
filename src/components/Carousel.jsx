import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Screenshot carousel for a project card: native scroll-snap (so touch swipe just works),
// arrow buttons, dots, and the menu/screen name under each slide.
export default function Carousel({ shots, title }) {
  const track = useRef(null)
  const [i, setI] = useState(0)

  useEffect(() => {
    const el = track.current
    if (!el) return
    const onScroll = () => setI(Math.round(el.scrollLeft / el.clientWidth))
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const go = (n) => {
    const el = track.current
    const next = (n + shots.length) % shots.length
    el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <figure className="carousel" aria-roledescription="carousel" aria-label={`${title} screenshots`}>
      <div className="car-track" ref={track} tabIndex={0}>
        {shots.map((s, n) => (
          <div className="car-slide" key={s.src} aria-roledescription="slide" aria-label={`${n + 1} of ${shots.length}: ${s.label}`}>
            <img src={s.src} alt={`${title}: ${s.label}`} width="1440" height="900" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
      {shots.length > 1 && (
        <>
          <button className="car-btn prev" onClick={() => go(i - 1)} aria-label="Previous screenshot">
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button className="car-btn next" onClick={() => go(i + 1)} aria-label="Next screenshot">
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </>
      )}
      <figcaption className="car-foot">
        <span className="car-label">{shots[i]?.label}</span>
        {shots.length > 1 && (
          <span className="car-dots">
            {shots.map((s, n) => (
              <button key={s.src} className={n === i ? 'on' : ''} onClick={() => go(n)} aria-label={`Show ${s.label}`} aria-current={n === i} />
            ))}
          </span>
        )}
      </figcaption>
    </figure>
  )
}
