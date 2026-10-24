import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// 0 when the element's top hits the viewport top, 1 when its bottom hits the viewport bottom.
// One rAF-throttled scroll listener per caller; cheap enough for a handful of sections.
export function useScrollProgress(ref, { mode = 'through' } = {}) {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      let v
      if (mode === 'enter') {
        // 0 when the top enters the bottom of the screen, 1 when the top reaches the screen top.
        v = (vh - r.top) / vh
      } else {
        v = -r.top / Math.max(1, r.height - vh)
      }
      setP(Math.min(1, Math.max(0, v)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [ref, mode])
  return p
}

// Types each word in `words` letter by letter, then deletes and moves on.
export function useTypewriter(words, { typeMs = 90, holdMs = 1600 } = {}) {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : '')
  const state = useRef({ i: 0, n: 0, del: false })
  useEffect(() => {
    if (prefersReducedMotion()) return
    let t
    const tick = () => {
      const s = state.current
      const w = words[s.i % words.length]
      if (!s.del) {
        s.n++
        setText(w.slice(0, s.n))
        if (s.n === w.length) {
          s.del = true
          t = setTimeout(tick, holdMs)
          return
        }
      } else {
        s.n--
        setText(w.slice(0, s.n))
        if (s.n === 0) {
          s.del = false
          s.i++
        }
      }
      t = setTimeout(tick, s.del ? typeMs / 2 : typeMs)
    }
    t = setTimeout(tick, 400)
    return () => clearTimeout(t)
  }, [words, typeMs, holdMs])
  return text
}

// Drag by pointer, desktop only. Returns props to spread on the element.
export function useDrag() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const start = useRef(null)
  const props = {
    onPointerDown: (e) => {
      if (window.matchMedia('(max-width: 767px)').matches) return
      if (e.target.closest('a,button')) return
      e.currentTarget.setPointerCapture(e.pointerId)
      start.current = { x: e.clientX - offset.x, y: e.clientY - offset.y }
      setDragging(true)
    },
    onPointerMove: (e) => {
      if (!dragging) return
      setOffset({ x: e.clientX - start.current.x, y: e.clientY - start.current.y })
    },
    onPointerUp: () => setDragging(false),
    onPointerCancel: () => setDragging(false),
  }
  return { offset, dragging, props }
}
