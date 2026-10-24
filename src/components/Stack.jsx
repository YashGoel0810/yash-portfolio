import { useState } from 'react'
import { siClaude, siFigma, siGooglesheets, siMake, siN8n, siNotion, siShopify, siSupabase, siVercel, siZapier } from 'simple-icons'
import Icon from './Icon'
import { stack } from '../content'

const SI = { siClaude, siFigma, siGooglesheets, siMake, siN8n, siNotion, siShopify, siSupabase, siVercel, siZapier }

// Brand marks on dark/neutral colours read badly, so give those a light tile instead.
const LIGHT_TILE = new Set(['Notion', 'Vercel', 'Make'])

function Logo({ tool, size = 30 }) {
  const s = tool.si && SI[tool.si]
  if (!s) return <Icon name={tool.lucide} size={size} />
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={s.path} />
    </svg>
  )
}

function tileStyle(tool) {
  const s = tool.si && SI[tool.si]
  if (LIGHT_TILE.has(tool.name)) return { background: '#fdf6f3', color: '#111' }
  return { background: tool.bg || `#${s.hex}`, color: tool.dark ? '#111' : '#fff' }
}

export default function Stack() {
  const [active, setActive] = useState(null) // { g, t }
  const group = active && stack.groups[active.g]
  const tool = group && group.tools[active.t]

  return (
    <section id="stack" className="stack" aria-labelledby="stack-title">
      <div className="spotlight" aria-hidden="true" />
      <div className="sparkles" aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>
      <header className="sec-head on-dark center">
        <p className="eyebrow">{stack.eyebrow}</p>
        <h2 id="stack-title">{stack.title}</h2>
        <p className="sec-sub">{stack.sub}</p>
      </header>

      <div className="stack-body">
        <aside className={`tool-card${tool ? ' show' : ''}`} aria-live="polite">
          {tool ? (
            <>
              <div className="tool-card-top">
                <span className="tile sm" style={tileStyle(tool)}>
                  <Logo tool={tool} size={24} />
                </span>
                <span>
                  <b>{tool.name}</b>
                  <small>{group.name}</small>
                </span>
              </div>
              <p>{tool.line}</p>
            </>
          ) : (
            <p className="tool-card-hint">Point at a tool to see what it does for me.</p>
          )}
        </aside>

        <div className={`shelves${tool ? ' dim' : ''}`} onMouseLeave={() => setActive(null)}>
          {stack.groups.map((g, gi) => (
            <div key={g.name} className={`shelf${active?.g === gi ? ' live' : ''}`}>
              <h3 className="shelf-name">
                {g.name}
                <span>{g.tools.length}</span>
              </h3>
              <ul className="tools-grid">
                {g.tools.map((t, ti) => {
                  const on = active?.g === gi && active?.t === ti
                  return (
                    <li key={t.name}>
                      <button
                        className={`tool${on ? ' on' : ''}`}
                        onMouseEnter={() => setActive({ g: gi, t: ti })}
                        onFocus={() => setActive({ g: gi, t: ti })}
                        onClick={() => setActive(on ? null : { g: gi, t: ti })}
                        aria-pressed={on}
                      >
                        <span className="tile" style={tileStyle(t)}>
                          <Logo tool={t} />
                        </span>
                        <span className="tool-name">{t.name}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
