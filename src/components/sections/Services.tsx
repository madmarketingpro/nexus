'use client'
import Link from 'next/link'
import type { ServiceItem } from '@/types'

const G = '#87C232'
const ICONS: Record<string, React.ReactNode> = {
  search: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
  social: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  email: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  seo: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  creative: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  analytics: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
}

function ServiceCard({ service, delay }: { service: ServiceItem; delay: number }) {
  return (
    <div className="reveal" style={{ transitionDelay: `${delay}s`, background: '#111', padding: 'clamp(28px,4vw,44px)', borderTop: `2px solid transparent`, transition: 'all 0.3s', minWidth: 0, position: 'relative' }}
      onMouseEnter={e => { e.currentTarget.style.borderTopColor = G; e.currentTarget.style.background = '#161616' }}
      onMouseLeave={e => { e.currentTarget.style.borderTopColor = 'transparent'; e.currentTarget.style.background = '#111' }}
    >
      <div style={{ width: 44, height: 44, borderRadius: 2, background: 'rgba(135,194,50,0.08)', border: `1px solid rgba(135,194,50,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, color: G }}>
        {ICONS[service.icon] ?? ICONS.search}
      </div>
      <h3 style={{ fontFamily: 'var(--font-bebas),sans-serif', fontSize: '1.5rem', letterSpacing: '0.06em', color: 'white', marginBottom: 10 }}>{service.title}</h3>
      <p style={{ fontFamily: 'var(--font-dm-sans),sans-serif', fontSize: '0.875rem', lineHeight: 1.7, color: '#777' }}>{service.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
        {service.tags.map(tag => (
          <span key={tag} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: G, background: 'rgba(135,194,50,0.06)', border: `1px solid rgba(135,194,50,0.15)`, borderRadius: 2, padding: '3px 10px' }}>{tag}</span>
        ))}
      </div>
      <Link href="#cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 24, fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 500, color: '#555', textDecoration: 'none', transition: 'color 0.2s' }}
        onMouseEnter={e => (e.currentTarget.style.color = G)}
        onMouseLeave={e => (e.currentTarget.style.color = '#555')}
      >
        Learn more <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
  )
}

export default function Services({ services }: { services: ServiceItem[] }) {
  return (
    <section id="services" style={{ background: '#0a0a0a', position: 'relative', zIndex: 2 }}>
      <div style={{ padding: '120px clamp(24px,5vw,80px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32, marginBottom: 64 }}>
          <div>
            <div className="reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: G, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 24, height: 1, background: G, display: 'block' }} />What We Do
            </div>
            <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-bebas),sans-serif', fontSize: 'clamp(3rem,6vw,5rem)', lineHeight: 0.95, letterSpacing: '0.04em', color: 'white' }}>
              EVERY SERVICE.<br /><span style={{ color: G }}>ONE GOAL.</span>
            </h2>
            <div style={{ width: 48, height: 2, background: G, marginTop: 16 }} />
          </div>
          <p className="reveal reveal-d2" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1rem', lineHeight: 1.7, color: '#777', maxWidth: 360 }}>
            We don&apos;t offer everything. We&apos;ve mastered the channels that actually move revenue at scale.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
          {services.map((s, i) => <ServiceCard key={i} service={s} delay={(i % 3) * 0.1} />)}
        </div>
      </div>
    </section>
  )
}
