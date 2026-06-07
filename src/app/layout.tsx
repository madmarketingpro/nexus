import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  weight: '400',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Creative Avocado',
    default: 'Creative Avocado — Modern Marketing. Measurable Impact.',
  },
  description: 'Creative Avocado is a full-service digital marketing agency. Paid ads, SEO, email marketing, and creative strategy built for growth.',
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Creative Avocado' },
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        {GTM_ID && GTM_ID !== 'placeholder' && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
