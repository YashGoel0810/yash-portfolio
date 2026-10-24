import { useEffect, useState } from 'react'
import Avatar from './Avatar'
import { person } from '../content'
import { prefersReducedMotion, useTypewriter } from '../hooks'

export default function Splash() {
  const [show, setShow] = useState(true)
  const role = useTypewriter(person.roles, { typeMs: 80, holdMs: 900 })

  useEffect(() => {
    const t = setTimeout(() => setShow(false), prefersReducedMotion() ? 0 : 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`splash grid-bg${show ? '' : ' hidden'}`} aria-hidden="true">
      <Avatar className="splash-avatar" />
      <p className="splash-name">{person.name}</p>
      <p className="splash-role">
        {role}
        <span className="caret" />
      </p>
      <div className="ruler" />
    </div>
  )
}
