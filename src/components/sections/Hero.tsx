'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { HeroData } from '@/types'

const G = '#87C232'

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      overflow: 'hidden', position: 'relative',
      padding: '120px clamp(24px,5vw,80px) 80px',
    }}>
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(135,194,50,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(135,194,50,0.03) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
        width: 900, height: 600, pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(135,194,50,0.07) 0%, transparent 70%)',
      }} />

      {/* Bracket corners */}
      <div style={{ position: 'absolute', top: 100, left: 'clamp(24px,5vw,80px)', width: 40, height: 40, borderTop: `2px solid ${G}`, borderLeft: `2px solid ${G}` }} />
      <div style={{ position: 'absolute', top: 100, right: 'clamp(24px,5vw,80px)', width: 40, height: 40, borderTop: `2px solid ${G}`, borderRight: `2px solid ${G}` }} />
      <div style={{ position: 'absolute', bottom: 60, left: 'clamp(24px,5vw,80px)', width: 40, height: 40, borderBottom: `2px solid ${G}`, borderLeft: `2px solid ${G}` }} />
      <div style={{ position: 'absolute', bottom: 60, right: 'clamp(24px,5vw,80px)', width: 40, height: 40, borderBottom: `2px solid ${G}`, borderRight: `2px solid ${G}` }} />

      {/* Main layout — headline left, founders right */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>

        {/* Left — headline + CTAs */}
        <div style={{ flex: '1 1 480px', maxWidth: 640 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(135,194,50,0.08)', border: `1px solid rgba(135,194,50,0.2)`,
            borderRadius: 2, padding: '6px 14px', marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: G, display: 'block', animation: 'pulse-dot 2s infinite' }} />
            <span style={{ color: G, fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-dm-sans)' }}>
              {data.badge}
            </span>
          </div>

          {/* Headline — smaller, tighter */}
          <h1 style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(3rem,6vw,5.5rem)',
            lineHeight: 0.95, letterSpacing: '0.04em',
            color: 'white', marginBottom: 20,
          }}>
            {data.headline.split(data.highlightWord).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <span style={{ color: G }}>{data.highlightWord}</span>}
              </span>
            ))}
          </h1>

          {/* Divider */}
          <div style={{ width: 48, height: 2, background: G, marginBottom: 20 }} />

          {/* Sub */}
          <p style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 'clamp(0.9rem,1.4vw,1.05rem)', lineHeight: 1.7,
            color: '#9a9a9a', maxWidth: 480, marginBottom: 36,
          }}>
            {data.subheadline}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link href={data.primaryCta.link} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: G, color: '#0a0a0a',
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '1rem', letterSpacing: '0.1em',
              padding: '12px 28px', borderRadius: 2, textDecoration: 'none',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#618930'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = G; e.currentTarget.style.transform = 'none' }}
            >
              {data.primaryCta.text}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href={data.secondaryCta.link} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: '#aaa', border: '1px solid rgba(255,255,255,0.15)',
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '1rem', letterSpacing: '0.1em',
              padding: '11px 24px', borderRadius: 2, textDecoration: 'none',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = G; e.currentTarget.style.borderColor = G }}
              onMouseLeave={e => { e.currentTarget.style.color = '#aaa'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
            >
              {data.secondaryCta.text}
            </Link>
          </div>
        </div>

        {/* Right — founder photos */}
        <div style={{ flex: '0 1 420px', display: 'flex', gap: 16, alignItems: 'flex-end' }} className="hidden-mobile">
          {/* Bobby */}
          <div style={{ flex: 1, position: 'relative' }}>
            <div style={{ position: 'absolute', top: -8, left: -8, width: 20, height: 20, borderTop: `2px solid ${G}`, borderLeft: `2px solid ${G}`, zIndex: 2 }} />
            <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', borderRadius: 4, background: '#1a1a1a' }}>
              <Image
                src="/images/bobby.png"
                alt="Bobby Bruno — Co-Founder"
                fill
                sizes="200px"
                style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(100%)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(135,194,50,0.25), transparent 60%)` }} />
            </div>
            <div style={{ position: 'absolute', bottom: -8, right: -8, width: 20, height: 20, borderBottom: `2px solid ${G}`, borderRight: `2px solid ${G}`, zIndex: 2 }} />
            <div style={{ marginTop: 12, paddingLeft: 4 }}>
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1rem', letterSpacing: '0.08em', color: 'white' }}>Bobby Bruno</div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', color: '#555', letterSpacing: '0.04em' }}>Co-Founder</div>
            </div>
          </div>

          {/* Andrew — slightly taller */}
          <div style={{ flex: 1, position: 'relative', marginBottom: 32 }}>
            <div style={{ position: 'absolute', top: -8, left: -8, width: 20, height: 20, borderTop: `2px solid ${G}`, borderLeft: `2px solid ${G}`, zIndex: 2 }} />
            <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', borderRadius: 4, background: '#1a1a1a' }}>
              <Image
                src="/images/andrew.png"
                alt="Andrew Muller — Co-Founder"
                fill
                sizes="200px"
                style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(100%)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(135,194,50,0.25), transparent 60%)` }} />
            </div>
            <div style={{ position: 'absolute', bottom: -8, right: -8, width: 20, height: 20, borderBottom: `2px solid ${G}`, borderRight: `2px solid ${G}`, zIndex: 2 }} />
            <div style={{ marginTop: 12, paddingLeft: 4 }}>
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1rem', letterSpacing: '0.08em', color: 'white' }}>Andrew Muller</div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', color: '#555', letterSpacing: '0.04em' }}>Co-Founder</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 2 }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', fontFamily: 'var(--font-dm-sans)' }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${G}, transparent)` }} className="scroll-line-animate" />
      </div>

      <style>{`.hidden-mobile{display:flex}@media(max-width:900px){.hidden-mobile{display:none!important}}`}</style>
    </section>
  )
}
