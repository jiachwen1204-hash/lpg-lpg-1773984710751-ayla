'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
]

const BRAND_NAME = 'Toolify AI'
const CTA = { label: 'Start Free Trial', href: '#trial' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0f172a]/95 backdrop-blur-md border-b border-[#334155] shadow-card'
          : 'bg-transparent',
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent pointer-events-none" />
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-nav">
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <img 
            src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773984709256-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
            alt="Toolify AI logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="font-heading font-bold text-xl text-content-primary group-hover:text-brand-500 transition-colors">
            {BRAND_NAME}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-content-muted hover:text-content-primary rounded-card hover:bg-surface-raised transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-500/40 blur-xl rounded-pill scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <a
              href={CTA.href}
              className="relative px-5 py-2.5 text-sm font-medium bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 hover:shadow-glow-sm transition-all"
            >
              {CTA.label}
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-card text-content-muted hover:text-content-primary hover:bg-surface-raised transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-surface border-b border-surface-border">
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-content-muted hover:text-content-primary rounded-card hover:bg-surface-raised transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={CTA.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-sm font-medium text-center bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 transition-colors"
              >
                {CTA.label}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}