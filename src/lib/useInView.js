import { useEffect } from 'react'

// Runs `onEnter` once when the referenced element is scrolled into view.
export default function useInView(ref, onEnter, threshold = 0.25) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { io.disconnect(); onEnter(el) } },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
}
