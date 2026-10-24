import { useEffect, useMemo, useRef, useState } from 'react'
import { process, story } from '../content'
import { prefersReducedMotion } from '../hooks'

const PATHS = {
  circle: 'M8 30C4 12 60 4 120 6s112 8 110 24-58 22-118 20S6 44 10 26C12 16 30 10 52 8',
  wave: 'M2 8q8-8 16 0t16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0',
  underline: 'M3 7C60 3 140 2 236 5M12 13C80 9 150 9 226 11',
}

// Hand-drawn marks: highlights sweep in, strokes draw themselves once their words have typed.
function Mark({ kind, done, children }) {
  if (kind.startsWith('hl-')) return <span className={`mk ${kind}${done ? ' on' : ''}`}>{children}</span>
  return (
    <span className={`mk mk-${kind}${done ? ' on' : ''}`}>
      {children}
      <svg viewBox={kind === 'circle' ? '0 0 240 50' : '0 0 240 16'} preserveAspectRatio="none" aria-hidden="true">
        <path d={PATHS[kind]} pathLength="1" />
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
  const total = useMemo(() => story.parts.reduce((n, p) => n + (typeof p === 'string' ? p : p.t).length, 0), [])
  const [shown, setShown] = useState(0) // characters typed so far
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setStarted(true), { threshold: 0.3 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    if (prefersReducedMotion()) {
      setShown(total)
      return
    }
    // ~2 characters per frame: the whole paragraph types in about 3.5 seconds.
    let raf
    const tick = () => {
      setShown((n) => {
        const next = Math.min(total, n + 2)
        if (next < total) raf = requestAnimationFrame(tick)
        return next
      })
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, total])

  // Slice the parts by how many characters have typed; untyped text stays in place, invisible,
  // so the layout never jumps while it types.
  let left = shown
  const rendered = story.parts.map((p, i) => {
    const text = typeof p === 'string' ? p : p.t
    const vis = text.slice(0, Math.max(0, left))
    const rest = text.slice(vis.length)
    left -= text.length
    const body = (
      <>
        {vis}
        {rest && <span className="ghost">{rest}</span>}
      </>
    )
    return typeof p === 'string' ? <span key={i}>{body}</span> : <Mark key={i} kind={p.mark} done={!rest}>{body}</Mark>
  })
  const finished = shown >= total

  return (
    <section id="about" className="story paper" aria-labelledby="story-title">
      <div className="story-grid">
        <div ref={ref} className="story-text">
          <p className="eyebrow" id="story-title">
            {story.eyebrow}
          </p>
          <p className="story-p" aria-label={story.parts.map((p) => (typeof p === 'string' ? p : p.t)).join('')}>
            <span aria-hidden="true">
              {rendered}
              {!finished && started && <span className="caret" />}
            </span>
          </p>
          <Gear />
          <Spark className="s1" />
          <Spark className="s2" />
        </div>

        <ul className="story-notes">
          {story.notes.map((n, i) => (
            <li
              key={i}
              className={`snote${finished ? ' pop' : ''}`}
              style={{ background: n.color, '--tilt': `${n.tilt}deg`, '--d': `${i * 0.25}s` }}
            >
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
