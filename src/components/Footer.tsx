'use client'
import Link from 'next/link'
import Image from 'next/image'
const G = '#87C232'

export default function Footer() {
  return (
    <footer style={{ background: '#0d0d0d', borderTop: `1px solid rgba(135,194,50,0.1)`, padding: 'clamp(48px,6vw,64px) clamp(24px,5vw,80px) 40px', position: 'relative', zIndex: 2 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 40, marginBottom: 56 }}>
        <div>
          <Image src="/images/wordmark.png" alt="Creative Avocado" width={160} height={64} style={{ objectFit: 'contain', objectPosition: 'left', height: 52, width: 'auto', marginBottom: 16 }} />
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: '#555', lineHeight: 1.6, maxWidth: 240, marginBottom: 24 }}>
            Modern Marketing. Measurable Impact. Full-service digital agency built for ambitious brands.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {['LinkedIn','Twitter','Instagram'].map(s => (
              <a key={s} href="#" aria-label={s} style={{ width: 36, height: 36, border: `1px solid rgba(135,194,50,0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', textDecoration: 'none', transition: 'all 0.2s', borderRadius: 2 }}
                onMouseEnter={e => { e.currentTarget.style.color = G; e.currentTarget.style.borderColor = G }}
                onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = 'rgba(135,194,50,0.15)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {s === 'LinkedIn' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>}
                  {s === 'Twitter' && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>}
                  {s === 'Instagram' && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>}
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1rem', letterSpacing: '0.12em', color: 'white', marginBottom: 20 }}>SERVICES</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Paid Search & PPC','Paid Social','Email & SMS','SEO & Content','Creative Strategy','Analytics'].map(s => (
              <li key={s}><Link href="#services" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: '#555', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = G)} onMouseLeave={e => (e.currentTarget.style.color = '#555')}>{s}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1rem', letterSpacing: '0.12em', color: 'white', marginBottom: 20 }}>COMPANY</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['About','#about'],['Case Studies','#'],['Blog','#'],['Careers','#'],['Contact','#cta']].map(([l,h]) => (
              <li key={l}><Link href={h} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: '#555', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'white')} onMouseLeave={e => (e.currentTarget.style.color = '#555')}>{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1rem', letterSpacing: '0.12em', color: 'white', marginBottom: 20 }}>CONTACT</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <li><a href="mailto:hello@creativeavocado.com" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: '#555', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = G)} onMouseLeave={e => (e.currentTarget.style.color = '#555')}>hello@creativeavocado.com</a></li>
            <li style={{ marginTop: 8 }}><Link href="#cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: G, color: '#0a0a0a', fontFamily: 'var(--font-bebas)', fontSize: '0.9rem', letterSpacing: '0.1em', padding: '8px 18px', borderRadius: 2, textDecoration: 'none' }}>Book a Call →</Link></li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: `1px solid rgba(135,194,50,0.08)`, paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#444' }}>© {2026} Creative Avocado. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Privacy Policy','Terms of Service'].map(l => (
            <a key={l} href="#" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#444', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = G)} onMouseLeave={e => (e.currentTarget.style.color = '#444')}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
