import { useLayoutEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { journey } from '../content'
import { prefersReducedMotion, useScrollProgress } from '../hooks'

const W = 1200
const H = 700
const ROAD = 'M90 600 C230 610 250 430 380 430 S560 560 650 440 S700 180 840 200 S1080 330 1110 120'
const STOP_AT = [0.04, 0.27, 0.5, 0.73, 0.97] // where each stop sits along the road
const INTRO = 0.1 // share of scroll spent on the overview before the walk starts
const OUTRO = 0.9

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const smooth = (t) => t * t * (3 - 2 * t)

function PinMark({ color, icon, active }) {
  return (
    <g className={`jpin${active ? ' on' : ''}`}>
      <path d="M0 0c-14-18-22-28-22-40a22 22 0 0 1 44 0c0 12-8 22-22 40z" fill={color} stroke="#fff" strokeWidth="3" />
      <foreignObject x="-12" y="-52" width="24" height="24">
        <div className="jpin-icon">
          <Icon name={icon} size={18} />
        </div>
      </foreignObject>
    </g>
  )
}

export default function Journey() {
  const sec = useRef(null)
  const road = useRef(null)
  const p = useScrollProgress(sec)
  const [geo, setGeo] = useState(null)

  useLayoutEffect(() => {
    const path = road.current
    const len = path.getTotalLength()
    setGeo({ len, pins: STOP_AT.map((f) => path.getPointAtLength(f * len)) })
  }, [])

  const t = clamp((p - INTRO) / (OUTRO - INTRO))
  const walking = p > INTRO && p < OUTRO + 0.04
  let active = -1
  STOP_AT.forEach((f, i) => {
    if (t >= f - 0.06 && p > INTRO * 0.6) active = i
  })
  const stop = journey.stops[Math.max(0, active)]

  let dot = { x: 90, y: 600 }
  let zoom = 1
  let cam = { x: W / 2, y: H / 2 }
  if (geo) {
    const pt = road.current.getPointAtLength(t * geo.len)
    dot = { x: pt.x, y: pt.y }
    if (!prefersReducedMotion()) {
      const zin = smooth(clamp((p - INTRO * 0.5) / (INTRO * 0.8)))
      const zout = smooth(clamp((p - OUTRO) / 0.08))
      zoom = 1 + 0.55 * zin * (1 - zout)
      const k = zoom > 1 ? (zoom - 1) / 0.55 : 0
      cam = { x: W / 2 + (dot.x - W / 2) * k, y: H / 2 + (dot.y - H / 2) * k }
    }
  }
  // On phones the story card sits at the bottom, so keep the walker in the upper part of the map.
  const lift = typeof window !== 'undefined' && window.innerWidth < 768 && zoom > 1 ? 150 * ((zoom - 1) / 0.55) : 0
  const camera = `translate(${W / 2} ${H / 2 - lift}) scale(${zoom}) translate(${-cam.x} ${-cam.y})`
  const overview = p < INTRO * 0.6 || p > OUTRO + 0.04

  return (
    <section id="journey" ref={sec} className="journey" style={{ height: `${(journey.stops.length + 2) * 100}vh` }} aria-labelledby="journey-title">
      <div className="journey-sticky">
        <header className={`journey-head${overview ? '' : ' faded'}`}>
          <p className="eyebrow">{journey.eyebrow}</p>
          <h2 id="journey-title">{journey.title}</h2>
          <p className="sec-sub">{journey.sub}</p>
        </header>

        <svg className="journey-map" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <pattern id="jgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="rgba(255,240,240,.07)" />
            </pattern>
          </defs>
          <g transform={camera}>
            <rect x="-600" y="-400" width={W + 1200} height={H + 800} fill="url(#jgrid)" />
            <g className="streets">
              <path d="M-200 300 L1400 260" />
              <path d="M300 -100 L340 900" />
              <path d="M760 -100 L700 900" />
              <path d="M-200 520 L1400 640" />
              <path d="M1000 -100 L1060 900" />
            </g>
            <ellipse className="park" cx="250" cy="250" rx="90" ry="50" />
            <ellipse className="park" cx="980" cy="520" rx="110" ry="60" />
            <path className="river" d="M-200 380 C200 340 500 380 800 330 S1200 300 1400 340" />
            <text className="city" x="120" y="660">MEERUT</text>
            <text className="city" x="960" y="90">GURGAON</text>
            <path ref={road} className="road-base" d={ROAD} />
            {geo && (
              <path
                className="road-done"
                d={ROAD}
                strokeDasharray={geo.len}
                strokeDashoffset={geo.len * (1 - t)}
              />
            )}
            {geo &&
              geo.pins.map((pt, i) => (
                <g key={i} transform={`translate(${pt.x} ${pt.y - 4})`}>
                  <PinMark color={journey.stops[i].color} icon={journey.stops[i].icon} active={i === active} />
                  <text className="pin-label" x="28" y="-28">
                    {journey.stops[i].place.split(' · ')[0]}
                  </text>
                </g>
              ))}
            {walking && <circle className="walker" cx={dot.x} cy={dot.y} r="9" />}
          </g>
        </svg>

        <article className={`jcard${active >= 0 && !overview ? ' show' : ''}`} aria-live="polite" key={stop.code}>
          <div className="jcard-top" style={{ '--c': stop.color }}>
            <span className="jcard-icon">
              <Icon name={stop.icon} size={20} />
            </span>
            <span>
              <b>{stop.place}</b>
              <small>{stop.year}</small>
            </span>
            <span className="jcard-code">{stop.code}/05</span>
          </div>
          <h3>{stop.title}</h3>
          <p>{stop.desc}</p>
          <p className="jcard-stat">
            {stop.stat} <small>{stop.statLabel}</small>
          </p>
        </article>

        <ol className="jprogress" aria-hidden="true">
          {journey.stops.map((s, i) => (
            <li key={s.code} className={i <= active ? 'on' : ''} style={{ '--c': s.color }} />
          ))}
          <span>{overview ? 'scroll to walk the road' : `${stop.year} · ${stop.place.split(' · ')[0]}`}</span>
        </ol>
      </div>
    </section>
  )
}
