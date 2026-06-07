import type { HomepageData, NavigationData } from '@/types'

export const DEFAULT_NAV: NavigationData = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Results', href: '#results' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaText: 'Book a Call',
  ctaLink: '#cta',
}

export const DEFAULT_HOMEPAGE: HomepageData = {
  hero: {
    badge: 'Now accepting new clients — Q3 2026',
    headline: 'Modern Marketing. Measurable Impact.',
    highlightWord: 'Measurable',
    subheadline: 'We partner with ambitious brands to drive real, compounding growth — through data-driven strategy, creative excellence, and relentless optimization.',
    primaryCta: { text: 'Book a Strategy Call', link: '#cta' },
    secondaryCta: { text: 'See Our Results', link: '#results' },
    stats: [
      { number: '2.4', suffix: 'B+', label: 'Revenue Generated' },
      { number: '340', suffix: '+', label: 'Brands Scaled' },
      { number: '97', suffix: '%', label: 'Client Retention' },
    ],
  },
  trustedBy: [
    { name: 'Archetype' }, { name: 'Vertex Labs' }, { name: 'Meridian' },
    { name: 'Solace Co.' }, { name: 'Pinnacle' }, { name: 'Orizon' }, { name: 'Stera' },
  ],
  results: [
    { prefix: '$', number: '2.4', suffix: 'B+', isDecimal: true, label: 'Total client revenue driven across all channels' },
    { number: '340', suffix: '+', label: 'Brands scaled from 6 to 7 and 8 figures' },
    { number: '312', suffix: '%', label: 'Average ROAS improvement in first 90 days' },
    { number: '97', suffix: '%', label: 'Client retention rate — year over year' },
  ],
  services: [
    { title: 'Paid Search & PPC', description: 'Full-funnel Google and Bing campaign management — from keyword architecture to bid strategy to creative testing. We squeeze every dollar for maximum return.', tags: ['Google Ads', 'Bing Ads', 'Shopping'], icon: 'search' },
    { title: 'Paid Social', description: 'Meta, TikTok, LinkedIn, and YouTube campaigns engineered for scale. Creative-led strategies backed by data — built to find and convert your ideal customer.', tags: ['Meta', 'TikTok', 'LinkedIn'], icon: 'social' },
    { title: 'Email & SMS Marketing', description: "Revenue-generating lifecycle programs — from welcome sequences to retention flows. We build automated systems that print money while you sleep.", tags: ['Klaviyo', 'Automation', 'SMS'], icon: 'email' },
    { title: 'SEO & Content', description: 'Long-term organic growth built on technical SEO, strategic content, and link authority. We build assets that compound over time and reduce paid dependency.', tags: ['Technical SEO', 'Content', 'Authority'], icon: 'seo' },
    { title: 'Creative Strategy', description: 'Ad creative, landing pages, and copy engineered to convert — not just look good. We test systematically and scale what works, fast.', tags: ['Ad Creative', 'Landing Pages', 'CRO'], icon: 'creative' },
    { title: 'Analytics & Reporting', description: "Real-time dashboards, attribution modeling, and weekly performance reviews. You'll always know exactly what's working, what isn't, and what we're doing about it.", tags: ['GA4', 'Attribution', 'Dashboards'], icon: 'analytics' },
  ],
  process: [
    { step: '01', title: 'Deep Discovery', description: 'We spend 5–7 days learning your business: data, competitors, customers, and current performance. No assumptions. No templates.' },
    { step: '02', title: 'Strategy Build', description: "We design a channel-by-channel growth plan with 90-day targets, KPIs, and a testing roadmap. You sign off before we spend a dollar." },
    { step: '03', title: 'Launch & Test', description: 'Campaigns go live with a structured creative test framework. We identify winning angles fast and reallocate budget toward what works.' },
    { step: '04', title: 'Scale & Report', description: "Weekly reports. Monthly strategy reviews. Continuous optimization. We scale what's working and kill what isn't — decisively." },
  ],
  caseStudy: {
    eyebrow: 'Client Story',
    headline: 'From $180k to $1.4M monthly revenue.',
    highlightText: '$1.4M',
    subheadline: "Meridian Outfitters came to us with a solid product and stalled growth. Eighteen months later, they're a category leader.",
    metrics: [
      { value: '+677%', label: 'Revenue growth in 18 months' },
      { value: '4.8×', label: 'Blended ROAS at scale' },
      { value: '-38%', label: 'Customer acquisition cost' },
      { value: '+212%', label: 'Email revenue contribution' },
    ],
    chartData: [
      { month: 'Jun', value: 12 }, { month: 'Jul', value: 18 },
      { month: 'Aug', value: 22 }, { month: 'Sep', value: 30 },
      { month: 'Oct', value: 38 }, { month: 'Nov', value: 50 },
      { month: 'Dec', value: 63 }, { month: 'Jan', value: 78 },
      { month: 'Feb', value: 95 },
    ],
  },
  testimonials: [
    { quote: "Creative Avocado didn't just run ads — they rebuilt our entire acquisition funnel. We went from $200k to $900k monthly revenue in under a year.", name: 'Sarah K.', role: 'CMO, Archetype Co.', initials: 'SK', rating: 5 },
    { quote: "The data transparency alone was worth it. We finally understood what was actually driving revenue versus what just looked good in a report.", name: 'James L.', role: 'Founder, Vertex Labs', initials: 'JL', rating: 5 },
    { quote: "I've worked with five agencies. Creative Avocado is the first one that actually felt like a business partner rather than a vendor.", name: 'Maya R.', role: 'CEO, Solace Brand', initials: 'MR', rating: 5 },
    { quote: "97% retention rate isn't a statistic to us — it's a reflection of how they treat their clients. Results plus relationship. Rare combination.", name: 'David T.', role: 'Head of Growth, Pinnacle', initials: 'DT', rating: 5 },
    { quote: "They launched our TikTok strategy from zero and scaled it to $400k/month in 6 months. The creative testing process is genuinely impressive.", name: 'Priya M.', role: 'Director of Marketing, Orizon', initials: 'PM', rating: 5 },
    { quote: "Our ROAS went from 1.8x to 5.2x in 90 days. I didn't think it was possible without a massive budget increase. I was wrong.", name: 'Tom B.', role: 'VP Marketing, Stera', initials: 'TB', rating: 5 },
  ],
  cta: {
    headline: 'Ready to scale without the guesswork?',
    highlightText: 'without the guesswork?',
    subheadline: "Book a free 30-minute strategy call. We'll audit your current marketing and show you exactly where your growth is leaking.",
    primaryCta: { text: 'Book Your Free Strategy Call', link: 'mailto:hello@creativeavocado.com' },
    disclaimer: 'No commitment. No pitch deck. Just a real conversation about your growth.',
  },
}
