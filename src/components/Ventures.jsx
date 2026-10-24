import Icon from './Icon'
import { ventures } from '../content'

export default function Ventures() {
  return (
    <section id="ventures" className="paper" aria-labelledby="ventures-title">
      <header className="sec-head">
        <p className="eyebrow">{ventures.eyebrow}</p>
        <h2 id="ventures-title">{ventures.title}</h2>
        <p className="sec-sub">{ventures.sub}</p>
      </header>
      <ul className="notes">
        {ventures.items.map((v) => (
          <li key={v.name} className="note" style={{ '--tilt': `${v.tilt}deg`, background: v.color }}>
            <span className="tape" aria-hidden="true" />
            <div className="note-top">
              <span className="note-icon">
                <Icon name={v.icon} size={22} />
              </span>
              <span className="badge">{v.badge}</span>
            </div>
            <h3>{v.name}</h3>
            <p>{v.kind}</p>
            {v.cta && (
              <a className="note-cta" href={v.cta.href} target="_blank" rel="noopener">
                <Icon name="MessageCircle" size={18} />
                {v.cta.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
