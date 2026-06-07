'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const G = '#39FF14'
const schema = z.object({ email: z.string().email('Please enter a valid email address') })
type FormData = z.infer<typeof schema>

export default function EmailCapture({ headline = 'Get our free Growth Audit', subheadline = "We analyse your current marketing and send you a personalised breakdown of where your growth is leaking.", buttonText = 'Send My Free Audit', disclaimer = 'No spam. Unsubscribe any time.', klaviyoListId }: { headline?: string; subheadline?: string; buttonText?: string; disclaimer?: string; klaviyoListId?: string }) {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [errMsg, setErrMsg] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, listId: klaviyoListId }) })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error)
      setStatus('success'); reset()
    } catch (e) { setStatus('error'); setErrMsg(e instanceof Error ? e.message : 'Something went wrong.') }
  }

  if (status === 'success') return (
    <div style={{ textAlign: 'center', padding: '40px 0' }}>
      <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(57,255,20,0.1)', border: '1px solid rgba(57,255,20,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '1.25rem', color: 'white', marginBottom: 8 }}>You&apos;re in!</h3>
      <p style={{ color: '#A8B8A8', fontSize: '0.9rem' }}>Check your inbox — your audit is on its way.</p>
    </div>
  )

  return (
    <div>
      {headline && <h3 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2rem)', color: 'white', marginBottom: 12, letterSpacing: '-0.01em' }}>{headline}</h3>}
      {subheadline && <p style={{ color: '#A8B8A8', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: 28 }}>{subheadline}</p>}
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input {...register('email')} type="email" placeholder="Enter your email address" style={{ width: '100%', padding: '16px', borderRadius: 4, background: 'rgba(57,255,20,0.04)', border: `1px solid ${errors.email ? '#FF4444' : 'rgba(57,255,20,0.15)'}`, color: 'white', fontSize: '0.9rem', outline: 'none' }} />
        {errors.email && <p style={{ color: '#FF4444', fontSize: '0.8rem' }}>{errors.email.message}</p>}
        <button type="submit" disabled={status === 'loading'} style={{ width: '100%', padding: '16px', background: G, color: '#080808', fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase', borderRadius: 4, border: 'none', cursor: 'pointer', boxShadow: '0 0 24px rgba(57,255,20,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {status === 'loading' ? 'Sending...' : buttonText}
        </button>
      </form>
      {status === 'error' && <p style={{ color: '#FF4444', fontSize: '0.85rem', marginTop: 10 }}>{errMsg}</p>}
      {disclaimer && <p style={{ color: '#6B7A6B', fontSize: '0.75rem', marginTop: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        {disclaimer}
      </p>}
    </div>
  )
}
