'use client'
import Image from 'next/image'

const G = '#87C232'

const TEAM = [
  {
    name: 'Bobby Bruno',
    role: 'Co-Founder & Growth Strategist',
    bio: 'Specialist in paid media, growth strategy, and scaling e-commerce brands from 6 to 7 figures. Bobby brings a data-first approach to every campaign.',
    photo: '/images/bobby.png',
    initials: 'BB',
  },
  {
    name: 'Andrew',
    role: 'Co-Founder & SEO Director',
    bio: 'With deep expertise in technical SEO and content strategy, Andrew builds the organic growth engines that drive compounding, long-term results.',
    photo: '/images/andrew.png',
    initials: 'A',
  },
]

export default function Team() {
  return (
    <section id="about" style={{ background: '#0a0a0a', position: 'relative', zIndex: 2 }}>
      <div style={{ padding: '120px clamp(24px,5vw,80px)' }}>
        {/* Header */}
        <div className="reveal" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: G, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-dm-sans)' }}>
          <span style={{ width: 24, height: 1, background: G, display: 'block' }} />Who We Are
        </div>
        <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-bebas),sans-serif', fontSize: 'clamp(3rem,6vw,5rem)', lineHeight: 0.95, letterSpacing: '0.04em', color: 'white', marginBottom: 20 }}>
          TWO GUYS.<br /><span style={{ color: G }}>ONE MISSION.</span>
        </h2>
        <div style={{ width: 48, height: 2, background: G, marginBottom: 20 }} className="reveal reveal-d1" />
        <p className="reveal reveal-d2" style={{ fontFamily: 'var(--font-dm-sans),sans-serif', fontSize: '1.05rem', lineHeight: 1.7, color: '#9a9a9a', maxWidth: 560, marginBottom: 72 }}>
          We are two guys with strong digital marketing experience and a great track record of getting results. We built Creative Avocado because we believe agencies should be obsessed with your growth — not just your retainer.
        </p>

        {/* Team cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 32 }}>
          {TEAM.map((member) => (
            <div key={member.name} className="reveal" style={{ position: 'relative' }}>
              {/* Bracket decoration */}
              <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                {/* Corner brackets */}
                <div style={{ position: 'absolute', top: -8, left: -8, width: 24, height: 24, borderTop: `2px solid ${G}`, borderLeft: `2px solid ${G}`, zIndex: 2 }} />
                <div style={{ position: 'absolute', bottom: -8, right: -8, width: 24, height: 24, borderBottom: `2px solid ${G}`, borderRight: `2px solid ${G}`, zIndex: 2 }} />
                {/* Photo */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1', overflow: 'hidden', background: '#1e2020' }}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(100%)' }}
                  />
                  {/* Green overlay on hover */}
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(135,194,50,0.3), transparent)` }} />
                </div>
              </div>
              {/* Info */}
              <div style={{ padding: '24px 0 0' }}>
                <h3 style={{ fontFamily: 'var(--font-bebas),sans-serif', fontSize: '1.8rem', letterSpacing: '0.06em', color: 'white', marginBottom: 4 }}>{member.name}</h3>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: G, marginBottom: 14, fontFamily: 'var(--font-dm-sans)' }}>{member.role}</div>
                <p style={{ fontFamily: 'var(--font-dm-sans),sans-serif', fontSize: '0.9rem', lineHeight: 1.7, color: '#9a9a9a' }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
