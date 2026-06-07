import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({ name: z.string().min(2), email: z.string().email(), company: z.string().optional(), message: z.string().min(10) })

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input.' }, { status: 400 })

    const { name, email, company, message } = parsed.data
    const resendKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL ?? 'hello@creativeavocado.com'

    if (resendKey && resendKey !== 'placeholder' && resendKey !== 'your_resend_api_key') {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'Creative Avocado Website <noreply@creativeavocado.com>',
        to: toEmail, replyTo: email,
        subject: `New strategy call request from ${name}`,
        html: `<div style="font-family:sans-serif;max-width:600px;background:#080808;color:#fff;padding:40px;border-radius:12px"><h2 style="color:#39FF14">New Contact: ${name}</h2><p>Email: ${email}</p>${company ? `<p>Company: ${company}</p>` : ''}<p style="margin-top:20px">${message}</p></div>`,
      })
      return NextResponse.json({ success: true })
    }

    console.log('[Contact stub]', { name, email, company, message })
    await new Promise(r => setTimeout(r, 700))
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact]', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
