'use client'
import { useEffect, useRef } from 'react'

export function useCountUp(target: number, isDecimal = false, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const frame = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 4)
          const val = target * ease
          el.textContent = isDecimal ? val.toFixed(1) : Math.round(val).toLocaleString()
          if (progress < 1) requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame)
        io.disconnect()
      }
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [target, isDecimal, duration])
  return ref
}
