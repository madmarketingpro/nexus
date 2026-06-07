export interface Cta { text: string; link: string }
export interface SeoData {
  metaTitle?: string; metaDescription?: string
  ogImage?: { asset: { url: string } }; noIndex?: boolean
}
export interface NavLink { label: string; href: string; isExternal?: boolean }
export interface NavigationData { links: NavLink[]; ctaText: string; ctaLink: string }
export interface HeroStat { number: string; suffix: string; label: string }
export interface HeroData {
  badge: string; headline: string; highlightWord: string
  subheadline: string; primaryCta: Cta; secondaryCta: Cta; stats: HeroStat[]
}
export interface ResultItem {
  prefix?: string; number: string; suffix: string; isDecimal?: boolean; label: string
}
export interface ServiceItem {
  title: string; description: string; tags: string[]
  icon: 'search' | 'social' | 'email' | 'seo' | 'creative' | 'analytics'
}
export interface ProcessStep { step: string; title: string; description: string }
export interface TestimonialItem {
  quote: string; name: string; role: string; initials: string; rating: number; source?: string
}
export interface CaseStudyMetric { value: string; label: string }
export interface ChartDataPoint { month: string; value: number }
export interface CaseStudyData {
  eyebrow: string; headline: string; highlightText: string
  subheadline: string; metrics: CaseStudyMetric[]; chartData: ChartDataPoint[]
}
export interface HomepageData {
  hero: HeroData
  trustedBy: { name: string }[]
  results: ResultItem[]
  services: ServiceItem[]
  process: ProcessStep[]
  caseStudy: CaseStudyData
  testimonials: TestimonialItem[]
  cta: { headline: string; highlightText: string; subheadline: string; primaryCta: Cta; disclaimer: string }
}
export interface TrackingPixels {
  metaPixelId?: string; tiktokPixelId?: string; googleAdsId?: string
  customHeadScripts?: string; customBodyScripts?: string
}
export interface LandingPageData {
  title: string; slug: { current: string }; seo?: SeoData
  hero: { badge?: string; headline: string; highlightWord?: string; subheadline?: string; primaryCta?: Cta; features?: string[] }
  sections: PageSection[]; trackingPixels?: TrackingPixels
}
export type PageSection =
  | { _type: 'emailCaptureSection'; headline: string; subheadline?: string; buttonText: string; klaviyoListId?: string; disclaimer?: string }
  | { _type: 'featuresSection'; eyebrow?: string; headline: string; items: { icon: string; title: string; description: string }[] }
  | { _type: 'testimonialsSection'; eyebrow?: string; headline: string; items: { quote: string; name: string; role: string; initials: string }[] }
  | { _type: 'ctaSection'; headline: string; subheadline?: string; buttonText: string; buttonLink: string; disclaimer?: string }
