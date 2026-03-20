import Link from 'next/link'
import { Mail, MapPin, Twitter, Linkedin, Github, Youtube } from 'lucide-react'

const BRAND = {
  name: 'Toolify AI',
  tagline: 'AI-powered tools that simplify work and accelerate growth',
  description: 'We are an all-in-one AI technology company that builds intelligent tools designed to simplify work, automate processes, and accelerate digital transformation. Our platform integrates multiple AI capabilities — including content generation, data analysis, workflow automation, customer engagement, and decision support — into a single seamless ecosystem.',
  email: 'jiachwen99@gmail.com',
  address: 'B5-1-3, Forest Green Condominium, Bandar Sungai Long',
}

const navigation = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'API Docs', href: '#api' },
    { label: 'Changelog', href: '#changelog' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press Kit', href: '#press' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'Help Center', href: '#help' },
    { label: 'Community', href: '#community' },
    { label: 'Templates', href: '#templates' },
    { label: 'Webinars', href: '#webinars' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR', href: '/gdpr' },
  ],
}

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/toolifyai', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/toolifyai', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/toolifyai', icon: Github },
  { label: 'YouTube', href: 'https://youtube.com/@toolifyai', icon: Youtube },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0F172A] border-t border-[#334155]">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#0EA5E9]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img 
                src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773984709256-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
                alt="Toolify AI logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="font-heading font-bold text-xl text-[#F8FAFC] group-hover:text-[#0EA5E9] transition-colors">
                {BRAND.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              {BRAND.tagline}. By combining powerful machine learning models with user-friendly software, we help businesses reduce operational costs, improve productivity, and unlock new growth opportunities.
            </p>
            
            {/* Newsletter signup */}
            <div className="mt-6">
              <p className="text-sm font-medium text-[#F8FAFC] mb-3">Stay updated with AI insights</p>
              <form className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2.5 bg-[#1E293B] border border-[#334155] rounded-lg text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#0EA5E9]/50 focus:ring-1 focus:ring-[#0EA5E9]/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#0EA5E9] hover:bg-[#0369A1] text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#0EA5E9] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-[#94A3B8]">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {BRAND.address}
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div>
            <h3 className="font-heading font-semibold text-[#F8FAFC] mb-4 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              {navigation.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#0EA5E9] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-[#F8FAFC] mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#0EA5E9] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-[#F8FAFC] mb-4 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#0EA5E9] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-[#F8FAFC] mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#0EA5E9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#334155] to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#94A3B8]">
            © {year} {BRAND.name}. All rights reserved.
          </div>

          {/* Social links */}
          <div className="flex items-center gap-1">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#94A3B8] hover:text-[#0EA5E9] hover:bg-[#1E293B] rounded-lg transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* CTA link */}
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0EA5E9] hover:text-[#0369A1] transition-colors group"
          >
            Start Free Trial
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom glow accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent" />
    </footer>
  )
}