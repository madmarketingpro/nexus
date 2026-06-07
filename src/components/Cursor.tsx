'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ mx: 0, my: 0, tx: 0, ty: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const trail = trailRef.current
    if (!cursor || !trail) return
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX; pos.current.my = e.clientY
      cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'
    }
    let rafId: number
    const animate = () => {
      const p = pos.current
      p.tx += (p.mx - p.tx) * 0.14; p.ty += (p.my - p.ty) * 0.14
      trail.style.left = p.tx + 'px'; trail.style.top = p.ty + 'px'
      rafId = requestAnimationFrame(animate)
    }
    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId) }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-trail" ref={trailRef} />
    </>
  )
}
