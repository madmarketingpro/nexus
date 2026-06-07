'use client'
const G = '#87C232'

const BRANDS = [
  'Meat So Hungry',
  'The 125 Collection',
  'Mother Nature Organics',
  'Patriot Tactical',
  'Wholesale Sock Deals',
  'Tauri Gum',
]

export default function TrustedBy({ brands }: { brands?: { name: string }[] }) {
  return (
    <section style={{ position: 'relative', zIndex: 2, padding: '60px clamp(24px,5vw,80px)' }}>
      <p style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#444', textAlign: 'center', marginBottom: 32, fontFamily: 'var(--font-dm-sans)' }}>
        Trusted by growth-stage and enterprise brands
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '20px 48px' }}>
        {BRANDS.map((name) => (
          <span key={name} style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(0.9rem,1.4vw,1.1rem)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.18)', transition: 'color 0.3s', cursor: 'default',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.18)')}
          >{name}</span>
        ))}
      </div>
    </section>
  )
}
