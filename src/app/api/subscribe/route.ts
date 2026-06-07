import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({ email: z.string().email(), firstName: z.string().optional(), listId: z.string().optional() })

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })

    const { email, firstName, listId } = parsed.data
    const klaviyoKey = process.env.KLAVIYO_PRIVATE_API_KEY
    const defaultListId = listId ?? process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID

    if (klaviyoKey && klaviyoKey !== 'placeholder' && klaviyoKey !== 'your_klaviyo_private_key') {
      const profileRes = await fetch('https://a.klaviyo.com/api/profiles/', {
        method: 'POST',
        headers: { accept: 'application/json', revision: '2024-02-15', 'content-type': 'application/json', Authorization: `Klaviyo-API-Key ${klaviyoKey}` },
        body: JSON.stringify({ data: { type: 'profile', attributes: { email, first_name: firstName ?? '', properties: { source: 'Website Form' } } } }),
      })
      if (!profileRes.ok && profileRes.status !== 409) return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 })
      if (defaultListId) {
        const profileData = await profileRes.json().catch(() => null)
        const profileId = profileData?.data?.id
        if (profileId) {
          await fetch(`https://a.klaviyo.com/api/lists/${defaultListId}/relationships/profiles/`, {
            method: 'POST',
            headers: { accept: 'application/json', revision: '2024-02-15', 'content-type': 'application/json', Authorization: `Klaviyo-API-Key ${klaviyoKey}` },
            body: JSON.stringify({ data: [{ type: 'profile', id: profileId }] }),
          })
        }
      }
      return NextResponse.json({ success: true })
    }

    // Stub mode
    console.log('[Subscribe stub]', { email, firstName, listId: defaultListId })
    await new Promise(r => setTimeout(r, 600))
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Subscribe]', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
