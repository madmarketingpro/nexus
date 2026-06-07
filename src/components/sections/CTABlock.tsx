'use client'
import Link from 'next/link'
const G = '#87C232'

export default function CTABlock({ headline, highlightText, subheadline, primaryCta, disclaimer }: { headline: string; highlightText: string; subheadline: string; primaryCta: { text: string; link: string }; disclaimer: string }) {
  const parts = highlightText && headline.includes(highlightText) ? headline.split(highlightText) : null
  return (
    <section id="cta" style={{ background: '#0a0a0a', position: 'relative', zIndex: 2, padding: '0 clamp(24px,5vw,80px) 120px' }}>
      <div className="reveal" style={{ position: 'relative', background: '#111', border: `1px solid rgba(135,194,50,0.15)`, borderRadius: 4, padding: 'clamp(48px,8vw,100px) clamp(32px,6vw,80px)', textAlign: 'center', overflow: 'hidden' }}>
        {/* Corner brackets */}
        <div style={{ position: 'absolute', top: 20, left: 20, width: 32, height: 32, borderTop: `2px solid ${G}`, borderLeft: `2px solid ${G}` }} />
        <div style={{ position: 'absolute', top: 20, right: 20, width: 32, height: 32, borderTop: `2px solid ${G}`, borderRight: `2px solid ${G}` }} />
        <div style={{ position: 'absolute', bottom: 20, left: 20, width: 32, height: 32, borderBottom: `2px solid ${G}`, borderLeft: `2px solid ${G}` }} />
        <div style={{ position: 'absolute', bottom: 20, right: 20, width: 32, height: 32, borderBottom: `2px solid ${G}`, borderRight: `2px solid ${G}` }} />
        <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(135,194,50,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-bebas),sans-serif', fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 0.95, letterSpacing: '0.04em', color: 'white', marginBottom: 16 }}>
            {parts ? <>{parts[0].toUpperCase()}<span style={{ color: G }}>{highlightText.toUpperCase()}</span>{parts[1].toUpperCase()}</> : headline.toUpperCase()}
          </h2>
          <div style={{ width: 48, height: 2, background: G, margin: '0 auto 20px' }} />
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.05rem', color: '#777', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.65 }}>{subheadline}</p>
          <Link href={primaryCta.link} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: G, color: '#0a0a0a', fontFamily: 'var(--font-bebas),sans-serif', fontSize: '1.1rem', letterSpacing: '0.1em', padding: '14px 36px', borderRadius: 2, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#618930'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = G; e.currentTarget.style.transform = 'none' }}
          >
            {primaryCta.text}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          {disclaimer && (
            <p style={{ marginTop: 24, fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', color: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              {disclaimer}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
