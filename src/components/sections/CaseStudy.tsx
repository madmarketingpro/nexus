'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const G = '#87C232'
const GD = '#618930'

const CASES = [
  {
    tag: 'E-Commerce · Meta Ads',
    headline: 'From zero to 15x ROAS in the first 30 days.',
    highlightText: '15x ROAS',
    subheadline: 'A D2C food brand with a loyal community and real demand — but zero paid social running. We built the system that turned their audience into revenue.',
    metrics: [
      { value: '15x', label: 'Return on ad spend' },
      { value: '$25K+', label: 'Revenue, month one' },
      { value: '$0', label: 'Paid social before us' },
      { value: '30 days', label: 'From launch to results' },
    ],
    chart: {
      type: 'roas',
      label: 'Return on Ad Spend',
      sublabel: 'Month 1 · Brand new account',
      value: 15,
      max: 20,
    },
    steps: [
      'Built the full account from the ground up',
      'Launched cold audiences with creative that converts',
      'Retargeting live within the first week',
      'Shifted budget toward what the data proved out',
    ],
    before: '$0',
    after: '$25K+',
  },
  {
    tag: 'E-Commerce · Paid Search',
    headline: 'From $180k to $1.4M monthly revenue in 18 months.',
    highlightText: '$1.4M',
    subheadline: 'A solid product with stalled growth. We rebuilt the acquisition funnel from the ground up and turned a struggling brand into a category leader.',
    metrics: [
      { value: '+677%', label: 'Revenue growth' },
      { value: '4.8×', label: 'Blended ROAS' },
      { value: '-38%', label: 'Customer acquisition cost' },
      { value: '+212%', label: 'Email revenue contribution' },
    ],
    chart: {
      type: 'bar',
      label: 'Monthly Revenue ($000s)',
      sublabel: '18-month growth curve',
      bars: [12, 18, 22, 30, 38, 50, 63, 78, 95],
      months: ['Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb'],
    },
    steps: [
      'Full-funnel paid search restructure',
      'Creative testing framework across Meta + Google',
      'Email automation driving 30%+ of total revenue',
      'Weekly reporting with clear attribution',
    ],
    before: '$180K',
    after: '$1.4M',
  },
  {
    tag: 'E-Commerce · SEO',
    headline: 'Organic traffic up 340% in 6 months.',
    highlightText: '340%',
    subheadline: "A brand paying for every click with no organic foundation. We built the content and technical infrastructure that now generates free, compounding traffic every month.",
    metrics: [
      { value: '+340%', label: 'Organic traffic growth' },
      { value: '#1', label: 'Rankings for target keywords' },
      { value: '-61%', label: 'Cost per acquisition' },
      { value: '6 mo', label: 'To see major results' },
    ],
    chart: {
      type: 'bar',
      label: 'Organic Sessions (monthly)',
      sublabel: '6-month SEO ramp',
      bars: [8, 14, 24, 38, 56, 85],
      months: ['M1','M2','M3','M4','M5','M6'],
    },
    steps: [
      'Full technical SEO audit and remediation',
      'Keyword strategy targeting buyer-intent terms',
      'Content calendar and cluster publishing',
      'Authority link building campaign',
    ],
    before: '2,400/mo',
    after: '10,560/mo',
  },
]

// Gauge chart for ROAS
function GaugeChart({ value, max }: { value: number; max: number }) {
  const ref = useRef<SVGPathElement>(null)
  const animated = useRef(false)
  const pct = value / max
  const r = 80
  const cx = 110
  const cy = 100
  const startAngle = -Math.PI
  const endAngle = 0
  const totalArc = endAngle - startAngle
  const targetAngle = startAngle + totalArc * pct

  const arcPath = (end: number) => {
    const x1 = cx + r * Math.cos(startAngle)
    const y1 = cy + r * Math.sin(startAngle)
    const x2 = cx + r * Math.cos(end)
    const y2 = cy + r * Math.sin(end)
    const large = end - startAngle > Math.PI ? 1 : 0
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`
  }

  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true
        const start = performance.now()
        const dur = 1800
        const animate = (now: number) => {
          const t = Math.min((now - start) / dur, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          const angle = startAngle + totalArc * pct * ease
          el.setAttribute('d', arcPath(angle))
          if (t < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <svg viewBox="0 0 220 120" style={{ width: '100%', maxWidth: 280 }}>
      {/* Track */}
      <path d={arcPath(endAngle)} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" strokeLinecap="round" />
      {/* Fill */}
      <path ref={ref} d={arcPath(startAngle + 0.01)} fill="none" stroke={G} strokeWidth="14" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 6px ${G})` }} />
      {/* Labels */}
      <text x={cx - r - 6} y={cy + 18} fill="#555" fontSize="11" textAnchor="middle">0x</text>
      <text x={cx + r + 6} y={cy + 18} fill="#555" fontSize="11" textAnchor="middle">{max}x</text>
      {/* Value */}
      <text x={cx} y={cy - 8} fill="white" fontSize="38" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-bebas)">{value}x</text>
      <text x={cx} y={cy + 16} fill={G} fontSize="11" textAnchor="middle" letterSpacing="2">ROAS</text>
    </svg>
  )
}

// Bar chart
function BarChart({ bars, months }: { bars: number[]; months: string[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true
        el.querySelectorAll<HTMLElement>('.bar-fill').forEach((b, i) => {
          setTimeout(() => { b.style.height = b.dataset.h + '%' }, i * 80)
        })
      }
    }, { threshold: 0.3 })
    io.observe(el); return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 140 }}>
        {bars.map((val, i) => (
          <div key={i} style={{ flex: 1, background: 'rgba(135,194,50,0.1)', borderRadius: '3px 3px 0 0', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div className="bar-fill" style={{ background: G, borderRadius: '3px 3px 0 0', height: 0, transition: 'height 0.7s cubic-bezier(0.16,1,0.3,1)', boxShadow: `0 0 6px rgba(135,194,50,0.3)` }} data-h={val} />
          </div>
        ))}
      </div>
      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ display: 'flex', gap: 4 }}>
        {months.map((m, i) => <div key={i} style={{ flex: 1, textAlign: 'center', fontSize: '0.58rem', color: '#555', fontFamily: 'var(--font-dm-sans)' }}>{m}</div>)}
      </div>
    </div>
  )
}

export default function CaseStudy() {
  const [active, setActive] = useState(0)
  const c = CASES[active]

  function renderHeadline(headline: string, highlight: string) {
    if (!highlight || !headline.includes(highlight)) return headline
    const [before, after] = headline.split(highlight)
    return <>{before}<span style={{ color: G }}>{highlight}</span>{after}</>
  }

  return (
    <section id="case-study" style={{ background: '#0d0d0d', position: 'relative', zIndex: 2 }}>
      <div style={{ padding: '120px clamp(24px,5vw,80px)' }}>

        {/* Header */}
        <div className="reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: G, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 24, height: 1, background: G, display: 'block' }} />Client Stories
        </div>
        <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-bebas),sans-serif', fontSize: 'clamp(3rem,6vw,5rem)', lineHeight: 0.95, letterSpacing: '0.04em', color: 'white', marginBottom: 12 }}>
          REAL CLIENTS.<br /><span style={{ color: G }}>REAL RESULTS.</span>
        </h2>
        <div style={{ width: 48, height: 2, background: G, marginBottom: 48 }} className="reveal" />

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 48, flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {CASES.map((c, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 500,
              letterSpacing: '0.04em', padding: '12px 24px',
              color: active === i ? G : '#555',
              borderBottom: `2px solid ${active === i ? G : 'transparent'}`,
              background: 'none',
              cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { if (active !== i) e.currentTarget.style.color = '#aaa' }}
              onMouseLeave={e => { if (active !== i) e.currentTarget.style.color = '#555' }}
            >
              {c.tag}
            </button>
          ))}
        </div>

        {/* Case content */}
        <div key={active} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
          
          {/* Left — story */}
          <div>
            {/* Tag */}
            <div style={{ display: 'inline-block', background: 'rgba(135,194,50,0.08)', border: `1px solid rgba(135,194,50,0.2)`, borderRadius: 2, padding: '4px 12px', marginBottom: 20, fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: G }}>
              {c.tag}
            </div>

            <h3 style={{ fontFamily: 'var(--font-bebas),sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 0.95, letterSpacing: '0.04em', color: 'white', marginBottom: 16 }}>
              {renderHeadline(c.headline, c.highlightText)}
            </h3>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', lineHeight: 1.7, color: '#777', marginBottom: 28 }}>{c.subheadline}</p>

            {/* What we did */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.9rem', letterSpacing: '0.1em', color: G, marginBottom: 14 }}>WHAT WE DID</div>
              {c.steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: G, color: '#0a0a0a', fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', lineHeight: 1.6, color: '#aaa', margin: 0 }}>{step}</p>
                </div>
              ))}
            </div>

            {/* Before / After */}
            <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
              {[['BEFORE', c.before, '#333'], ['AFTER', c.after, G]].map(([label, val, col]) => (
                <div key={label as string} style={{ flex: 1, background: '#111', border: `1px solid rgba(255,255,255,0.06)`, borderRadius: 4, padding: '16px 20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginBottom: 6 }}>{label as string}</div>
                  <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.8rem', letterSpacing: '0.04em', color: col as string }}>{val as string}</div>
                </div>
              ))}
            </div>

            <Link href="#cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: G, color: '#0a0a0a', fontFamily: 'var(--font-bebas),sans-serif', fontSize: '1.05rem', letterSpacing: '0.1em', padding: '14px 28px', borderRadius: 2, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = GD; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = G; e.currentTarget.style.transform = 'none' }}
            >
              Get Similar Results
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Right — chart + metrics */}
          <div>
            {/* Chart */}
            <div style={{ background: '#111', border: `1px solid rgba(135,194,50,0.1)`, borderRadius: 4, padding: 'clamp(24px,4vw,40px)', marginBottom: 24, position: 'relative' }}>
              {/* Corner brackets */}
              <div style={{ position: 'absolute', top: 12, left: 12, width: 16, height: 16, borderTop: `1px solid ${G}`, borderLeft: `1px solid ${G}` }} />
              <div style={{ position: 'absolute', bottom: 12, right: 12, width: 16, height: 16, borderBottom: `1px solid ${G}`, borderRight: `1px solid ${G}` }} />

              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginBottom: 4 }}>{c.chart.label}</div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', color: '#444', marginBottom: 24 }}>{c.chart.sublabel}</div>

              <div style={{ display: 'flex', justifyContent: 'center', minHeight: 160, alignItems: 'flex-end' }}>
                {c.chart.type === 'roas' && <GaugeChart value={(c.chart as { type: 'roas'; value: number; max: number; label: string; sublabel: string }).value} max={(c.chart as { type: 'roas'; value: number; max: number; label: string; sublabel: string }).max} />}
                {c.chart.type === 'bar' && (
                  <div style={{ width: '100%', height: 180 }}>
                    <BarChart bars={(c.chart as { type: 'bar'; bars: number[]; months: string[]; label: string; sublabel: string }).bars} months={(c.chart as { type: 'bar'; bars: number[]; months: string[]; label: string; sublabel: string }).months} />
                  </div>
                )}
              </div>
            </div>

            {/* Metrics grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {c.metrics.map((m, i) => (
                <div key={i} style={{ background: '#111', border: `1px solid rgba(135,194,50,0.08)`, borderLeft: `2px solid ${G}`, borderRadius: 2, padding: '16px 18px' }}>
                  <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.8rem', color: G, lineHeight: 1, letterSpacing: '0.04em' }}>{m.value}</div>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#555', marginTop: 4 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div style={{ display: 'flex', gap: 8, marginTop: 48, justifyContent: 'center' }}>
          {CASES.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: active === i ? 32 : 8, height: 8,
              borderRadius: 4, background: active === i ? G : 'rgba(255,255,255,0.15)',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s',
              padding: 0,
            }} />
          ))}
        </div>

      </div>
    </section>
  )
}
