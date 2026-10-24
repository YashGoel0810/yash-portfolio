import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import Clouds from './Clouds'
import Icon from './Icon'
import { contact, person } from '../content'
import { useScrollProgress } from '../hooks'

function open(key) {
  if (key.download) window.open(key.href, '_blank', 'noopener')
  else if (key.href.startsWith('mailto:') || key.href.startsWith('#')) window.location.href = key.href
  else window.open(key.href, '_blank', 'noopener')
}

export default function Contact() {
  const sec = useRef(null)
  const p = useScrollProgress(sec, { mode: 'enter' })
  const [copied, setCopied] = useState(false)
  const [pressed, setPressed] = useState(null)

  // Keyboard shortcuts (E / L / R) once the section is on screen.
  useEffect(() => {
    if (p < 0.5) return
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey || /input|textarea/i.test(e.target.tagName)) return
      const key = contact.keys.find((k) => k.k.toLowerCase() === e.key.toLowerCase())
      if (!key) return
      setPressed(key.k)
      setTimeout(() => setPressed(null), 180)
      open(key)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [p])

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard blocked: the mailto link still works */
    }
  }

  const rise = (1 - p) * 14 // sky starts pushed down, rises as the section scrolls in

  return (
    <section id="contact" ref={sec} className="contact" aria-labelledby="contact-title">
      <Clouds style={{ transform: `translate3d(0, ${rise}%, 0)` }} />

      <div className="contact-inner">
        <h2 id="contact-title">
          {contact.title[0]}
          <br />
          <span className="swoosh">{contact.title[1]}</span>
        </h2>
        <p className="contact-sub">{contact.sub}</p>

        <div className="keypad grid-bg">
          <p className="keypad-hint">
            psst, these work on your keyboard too:
            {contact.keys.map((k) => (
              <kbd key={k.k}>{k.k}</kbd>
            ))}
          </p>
          <ul className="keys">
            {contact.keys.map((k) => (
              <li key={k.k}>
                <a
                  className={`key${pressed === k.k ? ' down' : ''}${k.dark ? ' dark' : ''}`}
                  href={k.href}
                  style={{ '--k': k.color }}
                  target={k.href.startsWith('http') ? '_blank' : undefined}
                  download={k.download ? 'Yash-Goel-Resume.pdf' : undefined}
                  rel={k.href.startsWith('http') ? 'noopener' : undefined}
                  aria-label={`${k.label} (shortcut ${k.k})`}
                >
                  <span className="key-letter">{k.k}</span>
                  <Icon name={k.icon} size={36} />
                </a>
                <p className="key-note">
                  <span aria-hidden="true">↑</span>
                  {k.note}
                </p>
                {k.copy && (
                  <button className="copy" onClick={() => copy(k.copy)}>
                    {k.copy}
                    {copied ? <Check size={14} aria-label="Copied" /> : <Copy size={14} aria-label="Copy email" />}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <footer className="site-foot">
          © {new Date().getFullYear()} {person.name} · {person.location}
        </footer>
      </div>
    </section>
  )
}
