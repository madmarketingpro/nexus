'use client'
// Process
import type { ProcessStep } from '@/types'
const G = '#39FF14'

export default function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="process" style={{ background: '#0E1A0E', position: 'relative', zIndex: 2 }}>
      <div style={{ padding: '120px clamp(24px,5vw,80px)' }}>
        <div className="reveal" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: G, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 24, height: 1, background: G, display: 'block' }} />How We Work
        </div>
        <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem,5vw,4rem)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'white', marginBottom: 20 }}>
          From onboarding to <em style={{ fontStyle: 'normal', color: G }}>results</em><br />in 30 days.
        </h2>
        <p className="reveal reveal-d2" style={{ fontSize: '1.05rem', lineHeight: 1.65, color: '#A8B8A8', maxWidth: 520, marginBottom: 72 }}>
          No 90-day ramp-up. No fluff. A clear, repeatable system that delivers momentum from week one.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 0 }}>
          {steps.map((step, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.12}s`, padding: '0 clamp(0px,3vw,32px) 48px', position: 'relative', zIndex: 1 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid rgba(57,255,20,0.25)', background: '#0E1A0E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, position: 'relative' }}>
                <span style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: '1rem', color: G }}>{step.step}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'white', marginBottom: 12 }}>{step.title}</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: '#A8B8A8' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
