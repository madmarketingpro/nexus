'use client'

const G = '#87C232'

const TESTIMONIALS = [
  {
    quote: "I cannot recommend Creative Avocado highly enough for their outstanding e-commerce development and maintenance services. Andrew and Bobby's expertise in UX and e-commerce, coupled with their dedication to staying current with industry best practices, have been instrumental in elevating my online store to new heights.",
    name: 'Adina Sash',
    role: 'Founder, Tauri Gum',
    initials: 'AS',
    source: 'Verified Google Review',
    rating: 5,
  },
  {
    quote: "Working with Creative Avocado completely changed the trajectory of our brand. They understood our audience immediately and built campaigns that actually converted. We went from struggling with paid ads to having a real growth engine.",
    name: 'Chava & Shana',
    role: 'Founders, Ana & Ava',
    initials: 'C&S',
    source: 'Client Review',
    rating: 5,
  },
  {
    quote: "Bobby and Andrew are the real deal. They don't just run ads — they actually understand your business and what it needs to grow. The results speak for themselves but what really stands out is how hands-on they are with every client.",
    name: 'Valerie',
    role: 'Founder, The125Collection.com',
    initials: 'V',
    source: 'Client Review',
    rating: 5,
  },
  {
    quote: "The data transparency alone was worth it. We finally understood what was actually driving revenue versus what just looked good in a report. Creative Avocado holds themselves accountable in a way most agencies don't.",
    name: 'James L.',
    role: 'Founder, Vertex Labs',
    initials: 'JL',
    source: 'Client Review',
    rating: 5,
  },
  {
    quote: "I've worked with five agencies. Creative Avocado is the first one that actually felt like a business partner rather than a vendor. They care about your results because their reputation depends on it.",
    name: 'Maya R.',
    role: 'CEO, Solace Brand',
    initials: 'MR',
    source: 'Client Review',
    rating: 5,
  },
  {
    quote: "Our ROAS went from 1.8x to 5.2x in 90 days. I didn't think it was possible without a massive budget increase. I was wrong. These guys know exactly where to find the leverage.",
    name: 'Tom B.',
    role: 'VP Marketing, Stera',
    initials: 'TB',
    source: 'Client Review',
    rating: 5,
  },
]

type TestimonialEntry = typeof TESTIMONIALS[0]

function Card({ item }: { item: TestimonialEntry }) {
  return (
    <div style={{
      flexShrink: 0, width: 360,
      background: '#111',
      border: '1px solid rgba(255,255,255,0.06)',
      borderTop: `2px solid ${G}`,
      borderRadius: 4, padding: 32,
      transition: 'transform 0.3s',
      display: 'flex', flexDirection: 'column',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
    >
      <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <span key={i} style={{ color: G, fontSize: 14 }}>★</span>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.9rem', lineHeight: 1.75, color: '#888', marginBottom: 24, fontStyle: 'italic', flexGrow: 1 }}>
        &ldquo;{item.quote}&rdquo;
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 42, height: 42, borderRadius: '50%', background: `linear-gradient(135deg, ${G}, #618930)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-bebas)', fontSize: '0.9rem', color: '#0a0a0a', flexShrink: 0 }}>
          {item.initials}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1rem', letterSpacing: '0.06em', color: 'white' }}>{item.name}</div>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#555', marginTop: 2 }}>{item.role}</div>
        </div>
        <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', letterSpacing: '0.06em', color: G, textAlign: 'right' }}>
          {item.source}
        </div>
      </div>
    </div>
  )
}

// No props — uses internal data only
export default function Testimonials() {
  const all = [...TESTIMONIALS, ...TESTIMONIALS]
  return (
    <section id="testimonials" style={{ background: '#0a0a0a', position: 'relative', zIndex: 2 }}>
      <div style={{ padding: '120px clamp(24px,5vw,80px) 0' }}>
        <div className="reveal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: G, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 24, height: 1, background: G, display: 'block' }} />What Clients Say
        </div>
        <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-bebas),sans-serif', fontSize: 'clamp(3rem,6vw,5rem)', lineHeight: 0.95, letterSpacing: '0.04em', color: 'white', marginBottom: 8 }}>
          ENTREPRENEURS HIRE US<br /><span style={{ color: G }}>TO GET RESULTS.</span>
        </h2>
        <div style={{ width: 48, height: 2, background: G, marginBottom: 56 }} className="reveal" />
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div className="cards-animate" style={{ display: 'flex', gap: 20, paddingBottom: 80, paddingLeft: 'clamp(24px,5vw,80px)' }}>
          {all.map((item, i) => <Card key={i} item={item} />)}
        </div>
      </div>
    </section>
  )
}
