'use client'
const G = '#87C232'
const items = ['Paid Search','Email Marketing','Paid Social','SEO & Content','Creative Strategy','Analytics','CRO','Growth Strategy','Meta Ads','TikTok Ads','Google Ads','Klaviyo']

export function Marquee() {
  const all = [...items, ...items]
  return (
    <div style={{ borderTop: `1px solid rgba(135,194,50,0.1)`, borderBottom: `1px solid rgba(135,194,50,0.1)`, background: 'rgba(135,194,50,0.02)', overflow: 'hidden', padding: '20px 0', position: 'relative', zIndex: 2 }}>
      <div className="marquee-animate" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {all.map((item, i) => (
          <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '0 36px', borderRight: `1px solid rgba(135,194,50,0.1)`, fontFamily: 'var(--font-bebas),sans-serif', fontSize: '1rem', letterSpacing: '0.12em', color: '#555', flexShrink: 0 }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill={G}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
