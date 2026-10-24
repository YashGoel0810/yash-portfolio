import { ArrowDown, Bot, Briefcase, MessageCircle, Car, Clapperboard, Feather, Fuel, Gem, Gift, GraduationCap, Landmark, Mail, MessageSquare, Orbit, Palette, PenLine, Salad, Sparkles, WandSparkles } from 'lucide-react'

function LinkedinGlyph(props) {
  // lucide dropped brand icons; simple "in" mark drawn by hand.
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="3" y="9" width="4" height="12" rx="1" />
      <circle cx="5" cy="4.8" r="2.2" />
      <path d="M10 9h3.8v1.8c.6-1.1 2-2.1 4-2.1 3.3 0 4.2 2.1 4.2 5V21h-4v-6.4c0-1.5-.3-2.8-1.9-2.8-1.7 0-2.1 1.2-2.1 2.8V21h-4z" />
    </svg>
  )
}

const MAP = { ArrowDown, Bot, Briefcase, MessageCircle, Car, Clapperboard, Feather, Fuel, Gem, Gift, GraduationCap, Landmark, Mail, MessageSquare, Orbit, Palette, PenLine, Salad, Sparkles, WandSparkles, Linkedin: LinkedinGlyph }

export default function Icon({ name, size = 24, ...rest }) {
  const C = MAP[name]
  return C ? <C width={size} height={size} aria-hidden="true" {...rest} /> : null
}
