'use client'
import { useState } from 'react'
import Link from 'next/link'

const G = '#39FF14'
const FAQS = [
  { q: 'How quickly will we see results?', a: 'Most clients see meaningful improvements in the first 30 days. Significant revenue growth typically becomes clear by day 60–90 as we exit the learning phase and scale winning strategies.' },
  { q: 'Do you work with businesses at any stage?', a: "We work best with brands doing at least $50k/month in revenue. We're built for companies that are ready to scale — not those still validating product-market fit." },
  { q: 'What makes Creative Avocado different from other agencies?', a: "Three things: we're obsessive about data transparency, we own outcomes rather than just outputs, and we don't take on more clients than we can serve well." },
  { q: 'How does pricing work?', a: "We offer retainer-based partnerships starting at $5,000/month, scoped to your specific channel mix and goals. Everything is tailored after our discovery call." },
  { q: 'Will I have a dedicated account manager?', a: "Yes. Every client has a lead strategist, a channel specialist, and a creative lead assigned to their account. Weekly meetings and Slack access included." },
  { q: 'What happens after the strategy call?', a: "If it's a fit, we'll send a scoped proposal within 48 hours. Onboarding starts within 5 business days and we're typically running campaigns within 3 weeks." },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" style={{ background: '#080808', position: 'relative', zIndex: 2 }}>
      <div style={{ padding: '120px clamp(24px,5vw,80px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
          <div>
            <div className="reveal" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: G, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 24, height: 1, background: G, display: 'block' }} />FAQ
            </div>
            <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem,5vw,4rem)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'white' }}>
              Common<br /><em style={{ fontStyle: 'normal', color: G }}>questions.</em>
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: '1.05rem', lineHeight: 1.65, color: '#A8B8A8', marginTop: 20, maxWidth: 300 }}>Still curious? Book a call and ask us directly.</p>
            <div className="reveal reveal-d3" style={{ marginTop: 36 }}>
              <Link href="#cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: G, color: '#080808', fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', boxShadow: '0 0 20px rgba(57,255,20,0.3)' }}>
                Book a Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
          <div className="reveal">
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(57,255,20,0.08)', overflow: 'hidden' }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', gap: 24, fontFamily: 'var(--font-syne),sans-serif', fontWeight: 600, fontSize: '1rem', color: open === i ? G : 'white', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}>
                  <span>{faq.q}</span>
                  <span style={{ width: 28, height: 28, borderRadius: '50%', border: `1px solid ${open === i ? 'rgba(57,255,20,0.3)' : 'rgba(255,255,255,0.12)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: open === i ? G : '#A8B8A8', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'all 0.3s' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </span>
                </button>
                <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                  <p style={{ paddingBottom: 24, fontSize: '0.9rem', lineHeight: 1.75, color: '#A8B8A8' }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
