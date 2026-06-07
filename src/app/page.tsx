'use client'
import { DEFAULT_HOMEPAGE, DEFAULT_NAV } from '@/lib/defaultData'
import Cursor from '@/components/Cursor'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import TrustedBy from '@/components/TrustedBy'
import Results from '@/components/sections/Results'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import CaseStudy from '@/components/sections/CaseStudy'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTABlock from '@/components/sections/CTABlock'
import Footer from '@/components/Footer'

export default function HomePage() {
  const hp = DEFAULT_HOMEPAGE
  const nav = DEFAULT_NAV

  return (
    <>
      <Cursor />
      <ScrollRevealProvider>
        <Navbar data={nav} />
        <main>
          <Hero data={hp.hero} />
          <Marquee />
          <TrustedBy brands={hp.trustedBy} />
          <Results results={hp.results} />
          <Services services={hp.services} />
          <Process steps={hp.process} />
          <CaseStudy />
          <Team />
          <Testimonials />
          <FAQ />
          <CTABlock
            headline={hp.cta.headline}
            highlightText={hp.cta.highlightText}
            subheadline={hp.cta.subheadline}
            primaryCta={hp.cta.primaryCta}
            disclaimer={hp.cta.disclaimer}
          />
        </main>
        <Footer />
      </ScrollRevealProvider>
    </>
  )
}
