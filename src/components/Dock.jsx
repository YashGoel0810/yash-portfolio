import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Avatar from './Avatar'

const ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

export default function Dock() {
  const [active, setActive] = useState('home')
  const [pill, setPill] = useState(null)
  const refs = useRef({})

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ITEMS.forEach((i) => {
      const el = document.getElementById(i.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useLayoutEffect(() => {
    const measure = () => {
      const el = refs.current[active]
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  return (
    <nav className="dock" aria-label="Sections">
      {pill && <span className="dock-pill" style={{ transform: `translateX(${pill.left}px)`, width: pill.width }} aria-hidden="true" />}
      {ITEMS.map((i) => (
        <a
          key={i.id}
          ref={(el) => (refs.current[i.id] = el)}
          href={`#${i.id}`}
          className={active === i.id ? 'on' : ''}
          aria-current={active === i.id ? 'true' : undefined}
        >
          {i.id === 'home' && <Avatar className="dock-avatar" label="" />}
          {i.label}
        </a>
      ))}
    </nav>
  )
}
