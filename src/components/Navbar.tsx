'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { NavigationData } from '@/types'

const G = '#87C232'

export default function Navbar({ data }: { data: NavigationData }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(24px,5vw,80px)', height: '80px',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid rgba(135,194,50,0.15)` : '1px solid transparent',
        transition: 'all 0.3s',
      }}>
        {/* Real logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/images/wordmark-bracketed.png"
            alt="Creative Avocado"
            width={180}
            height={52}
            style={{ objectFit: 'contain', height: 44, width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {data.links.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '0.875rem', fontWeight: 500,
                color: '#aaa', letterSpacing: '0.06em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}
              >{link.label}</Link>
            ))}
          </div>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <Link href={data.ctaLink} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: G, color: '#0a0a0a',
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '1rem', letterSpacing: '0.12em',
            padding: '10px 24px', borderRadius: 2, textDecoration: 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#618930'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = G; e.currentTarget.style.transform = 'none' }}
          >
            {data.ctaText}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            gap: 5, width: 40, height: 40, padding: 8, background: 'none', border: 'none', cursor: 'pointer',
          }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', height: 1.5, background: G,
                opacity: i === 1 && menuOpen ? 0 : 1,
                transition: 'transform 0.3s, opacity 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'none'
                  : 'none',
              }} />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      {isMobile && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 40, background: '#0a0a0a',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <Image src="/images/wordmark.png" alt="Creative Avocado" width={200} height={80} style={{ objectFit: 'contain', marginBottom: 16 }} />
          {data.links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '2.5rem', color: 'white', textDecoration: 'none', letterSpacing: '0.1em',
            }}>{link.label}</Link>
          ))}
          <Link href={data.ctaLink} onClick={() => setMenuOpen(false)} style={{
            marginTop: 16, display: 'inline-flex', alignItems: 'center',
            background: G, color: '#0a0a0a',
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '1.1rem', letterSpacing: '0.12em',
            padding: '14px 32px', borderRadius: 2, textDecoration: 'none',
          }}>{data.ctaText}</Link>
        </div>
      )}
    </>
  )
}
