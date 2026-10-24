import Avatar from './Avatar'
import { hero, person } from '../content'
import { useDrag, useTypewriter } from '../hooks'

function Draggable({ className = '', style, children, label }) {
  const { offset, dragging, props } = useDrag()
  return (
    <div
      className={`board-item ${className}${dragging ? ' dragging' : ''}`}
      style={{ ...style, translate: `${offset.x}px ${offset.y}px` }}
      aria-label={label}
      {...props}
    >
      {children}
    </div>
  )
}

const Pin = ({ color }) => <span className="pin" style={{ '--pin': color }} aria-hidden="true" />

const at = (x, y, r = 0) => ({ left: `${x}%`, top: `${y}%`, '--r': `${r}deg` })

export default function Hero() {
  const role = useTypewriter(person.roles)
  const { note, sticky, pass } = hero

  return (
    <section id="home" className="hero grid-bg" aria-label="Intro">
      <div className="hero-center">
        <Avatar className="hero-avatar" />
        <h1>{person.name}</h1>
        <p className="hero-role" aria-label={person.roles.join(', ')}>
          <span aria-hidden="true">
            {role}
            <span className="caret" />
          </span>
        </p>
        <p className="hero-line">{hero.line}</p>
      </div>

      {hero.photos.map((p) => (
        <Draggable key={p.id} className="polaroid" style={at(p.x, p.y, p.r)} label={`Photo: ${p.caption}`}>
          <Pin color={p.pin} />
          {p.src ? (
            <img src={p.src} alt={p.caption} width="400" height="300" draggable="false" />
          ) : (
            <div className="ph" style={{ background: p.tint }}>
              your photo
            </div>
          )}
          <p className="cap">{p.caption}</p>
        </Draggable>
      ))}

      <Draggable className="lined" style={at(21, 5, -2)} label="Off the clock note">
        <Pin color="#3b7de0" />
        <p className="lined-kicker">{note.kicker}</p>
        <p className="lined-title">{note.title}</p>
        {note.lists.map((l) => (
          <div key={l.h}>
            <p className="lined-h">{l.h}</p>
            <ul>
              {l.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </Draggable>

      <Draggable className="ticket" style={at(20, 70, 3)} label={`Boarding pass ${pass.fromCity} to ${pass.toCity}`}>
        <Pin color="#e0443b" />
        <div className="ticket-top">
          <span>Hometown → Now</span>
          <span>Boarding pass</span>
        </div>
        <div className="ticket-body">
          <div>
            <b>{pass.from}</b>
            <small>{pass.fromCity}</small>
          </div>
          <span className="ticket-line" aria-hidden="true" />
          <div className="right">
            <b>{pass.to}</b>
            <small>{pass.toCity}</small>
          </div>
        </div>
        <div className="ticket-meta">
          <span>
            <small>Passenger</small>
            {person.name}
          </span>
          <span>
            <small>Seat</small>
            {pass.seat}
          </span>
        </div>
      </Draggable>

      <Draggable className="sticky" style={at(64, 74, 3)} label="Sticky note">
        <span className="tape" aria-hidden="true" />
        <p>{sticky.text}</p>
        <small>{sticky.sub}</small>
      </Draggable>

      <p className="board-hint">{hero.hint} ;)</p>
    </section>
  )
}
