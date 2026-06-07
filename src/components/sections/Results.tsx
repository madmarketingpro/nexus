'use client'
import { useCountUp } from '@/hooks/useCountUp'
import type { ResultItem } from '@/types'

const G = '#87C232'

function Card({ item, delay }: { item: ResultItem; delay: number }) {
  const ref = useCountUp(parseFloat(item.number), item.isDecimal)
  return (
    <div className="reveal" style={{ transitionDelay: `${delay}s`, background: '#141414', padding: 'clamp(28px,4vw,44px)', minWidth: 0, borderLeft: `2px solid ${G}`, transition: 'background 0.3s' }}
      onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
      onMouseLeave={e => (e.currentTarget.style.background = '#141414')}
    >
      <div style={{ fontFamily: 'var(--font-bebas),sans-serif', fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'white', lineHeight: 1, display: 'flex', alignItems: 'flex-start', letterSpacing: '0.02em' }}>
        {item.prefix && <span style={{ fontSize: '0.55em', color: G, paddingTop: '0.15em' }}>{item.prefix}</span>}
        <span ref={ref}>0</span>
        <span style={{ fontSize: '0.5em', color: G, paddingTop: '0.2em' }}>{item.suffix}</span>
      </div>
      <p style={{ fontFamily: 'var(--font-dm-sans),sans-serif', fontSize: '0.875rem', color: '#777', marginTop: 10, lineHeight: 1.5 }}>{item.label}</p>
    </div>
  )
}

export default function Results({ results }: { results: ResultItem[] }) {
  return (
    <section id="results" style={{ background: '#0d0d0d', position: 'relative', zIndex: 2 }}>
      <div style={{ padding: '120px clamp(24px,5vw,80px)' }}>
        <div className="reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: G, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 24, height: 1, background: G, display: 'block' }} />By The Numbers
        </div>
        <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-bebas),sans-serif', fontSize: 'clamp(3rem,6vw,5rem)', lineHeight: 0.95, letterSpacing: '0.04em', color: 'white', marginBottom: 12 }}>
          RESULTS THAT <span style={{ color: G }}>SPEAK</span><br />FOR THEMSELVES.
        </h2>
        <div style={{ width: 48, height: 2, background: G, marginBottom: 20 }} />
        <p className="reveal reveal-d2" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.05rem', lineHeight: 1.65, color: '#777', maxWidth: 480, marginBottom: 64 }}>
          Every metric below comes from real client campaigns. We don&apos;t estimate. We report.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
          {results.map((item, i) => <Card key={i} item={item} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  )
}
