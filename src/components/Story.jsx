import { useEffect, useRef, useState } from 'react'
import { process, story } from '../content'

// Hand-drawn marks: SVG strokes that draw themselves once the paragraph scrolls into view.
function Mark({ kind, children }) {
  if (kind.startsWith('hl-')) return <span className={`mk ${kind}`}>{children}</span>
  const paths = {
    circle: 'M8 30C4 12 60 4 120 6s112 8 110 24-58 22-118 20S6 44 10 26C12 16 30 10 52 8',
    wave: 'M2 8q8-8 16 0t16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0',
    underline: 'M3 7C60 3 140 2 236 5M12 13C80 9 150 9 226 11',
  }
  const vb = kind === 'circle' ? '0 0 240 50' : '0 0 240 16'
  return (
    <span className={`mk mk-${kind}`}>
      {children}
      <svg viewBox={vb} preserveAspectRatio="none" aria-hidden="true">
        <path d={paths[kind]} pathLength="1" />
      </svg>
    </span>
  )
}

function Gear() {
  return (
    <svg className="doodle gear" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 15a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM21 4h6l1 6 5 2 5-4 4 4-4 5 2 5 6 1v6l-6 1-2 5 4 5-4 4-5-4-5 2-1 6h-6l-1-6-5-2-5 4-4-4 4-5-2-5-6-1v-6l6-1 2-5-4-5 4-4 5 4 5-2z" />
    </svg>
  )
}

function Spark({ className }) {
  return (
    <svg className={`doodle spark ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    </svg>
  )
}

export default function Story() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.35 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <section id="about" className="story paper" aria-labelledby="story-title">
      <div className="story-grid">
        <div ref={ref} className={`story-text${seen ? ' seen' : ''}`}>
          <p className="eyebrow" id="story-title">
            {story.eyebrow}
          </p>
          <p className="story-p">
            {story.parts.map((p, i) => (typeof p === 'string' ? p : <Mark key={i} kind={p.mark}>{p.t}</Mark>))}
          </p>
          <Gear />
          <Spark className="s1" />
          <Spark className="s2" />
        </div>

        <ul className="story-notes">
          {story.notes.map((n, i) => (
            <li key={i} className="snote" style={{ background: n.color, '--tilt': `${n.tilt}deg` }}>
              <span className="tape" aria-hidden="true" />
              <p>{n.text}</p>
              {n.sub && <small>{n.sub}</small>}
              {n.chips && (
                <ul className="worked">
                  {n.chips.map((c) => (
                    <li key={c.label} style={{ '--c': c.c }}>
                      {c.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="process">
        <header className="sec-head">
          <p className="eyebrow">{process.eyebrow}</p>
          <h2>{process.title}</h2>
        </header>
        <ol className="steps">
          {process.steps.map((s, i) => (
            <li key={s.t}>
              <span className="step-n">{i + 1}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
