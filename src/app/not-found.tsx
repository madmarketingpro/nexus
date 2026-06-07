import Link from 'next/link'
const G = '#39FF14'
export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(6rem,15vw,10rem)', lineHeight: 1, color: 'rgba(255,255,255,0.03)', marginBottom: -40 }}>404</div>
        <h1 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: 16 }}>Page not found</h1>
        <p style={{ color: '#A8B8A8', marginBottom: 40, maxWidth: 320, margin: '0 auto 40px', lineHeight: 1.6 }}>The page you&apos;re looking for doesn&apos;t exist or may have been moved.</p>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: G, color: '#080808', fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase', padding: '14px 28px', borderRadius: 4, textDecoration: 'none', boxShadow: '0 0 24px rgba(57,255,20,0.35)' }}>Back to Home</Link>
      </div>
    </div>
  )
}
