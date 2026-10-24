import { useState } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'
import Carousel from './Carousel'
import { projects } from '../content'

export default function Projects() {
  const [open, setOpen] = useState(null)

  return (
    <section id="work" className="work grid-bg" aria-labelledby="work-title">
      <div className="blob b1" aria-hidden="true" />
      <div className="blob b2" aria-hidden="true" />
      <div className="blob b3" aria-hidden="true" />
      <header className="sec-head on-dark">
        <p className="eyebrow">{projects.eyebrow}</p>
        <h2 id="work-title">{projects.title}</h2>
        <p className="sec-sub">{projects.sub}</p>
      </header>

      <ul className="proj-list">
        {projects.items.map((p) => {
          const isOpen = open === p.n
          return (
            <li key={p.n} className={`proj glass${isOpen ? ' open' : ''}`} style={{ '--c': p.color }}>
              <h3>
                <button
                  className="proj-head"
                  aria-expanded={isOpen}
                  aria-controls={`proj-${p.n}`}
                  onClick={() => setOpen(isOpen ? null : p.n)}
                >
                  <span className="num">{p.n}</span>
                  <span className="proj-title">{p.title}</span>
                  <span className="proj-tag">{p.tag}</span>
                  <span className="proj-toggle" aria-hidden="true">
                    <Plus size={22} />
                  </span>
                </button>
              </h3>
              <div id={`proj-${p.n}`} className="proj-body" role="region" aria-label={p.title} hidden={false} inert={!isOpen}>
                <div className={`proj-inner${p.shots?.length ? ' has-shot' : ''}`}>
                  {p.shots?.length > 0 && (
                    <div className="proj-shot">
                      <Carousel shots={p.shots} title={p.title} />
                    </div>
                  )}
                  <div className="proj-main">
                    <p className="proj-summary">{p.summary}</p>
                    {p.groups ? (
                      p.groups.map((g) => (
                        <div key={g.h} className="proj-group">
                          <p className="proj-label">{g.h}</p>
                          <ul className="proj-built">
                            {g.items.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <>
                        <p className="proj-label">What I built</p>
                        <ul className="proj-built">
                          {p.built.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  <div className="proj-side">
                    {p.link && (
                      <a className="proj-link" href={p.link.href} target="_blank" rel="noopener">
                        {p.link.label} <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}
                    <dl className="proj-results">
                      {p.result.map((r) => (
                        <div key={r.l}>
                          <dt>{r.l}</dt>
                          <dd>{r.v}</dd>
                        </div>
                      ))}
                    </dl>

                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
