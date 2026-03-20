'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

const stats = [
  { value: 50000,  suffix: '+', label: 'Teams Powered', description: 'Businesses streamlining workflows' },
  { value: 99.9,   suffix: '%', label: 'Uptime Guaranteed', description: 'Enterprise-grade reliability' },
  { value: 85,   suffix: '%', label: 'Cost Reduction', description: 'Average operational savings' },
  { value: 24,   suffix: '/7', label: 'AI Availability', description: 'Always-on intelligent support' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 2000
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        const current = eased * target
        setCount(target % 1 === 0 ? Math.round(current) : Math.round(current * 10) / 10)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  return (
    <div className="group relative">
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.06] 
                      rounded-card-lg blur-xl transition-all duration-500 -z-10" />
      
      {/* Card */}
      <div className="relative overflow-hidden rounded-card-lg 
                      border border-surface-border
                      bg-surface-raised/50
                      hover:border-brand-500/30
                      hover:bg-surface-overlay/60
                      transition-all duration-300">
        
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-px 
                        bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
        
        {/* Inner glow line that animates on hover */}
        <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full 
                        bg-gradient-to-r from-brand-500 via-brand-400 to-brand-500
                        transition-all duration-500" />
        
        <div className="p-6 md:p-8">
          {/* Number */}
          <div className="font-heading font-black text-display-lg text-brand-500 mb-3
                          group-hover:text-brand-400 transition-colors duration-300">
            <CountUp target={stat.value} suffix={stat.suffix} />
          </div>
          
          {/* Label */}
          <div className="text-base md:text-lg font-semibold text-content-primary mb-1
                          group-hover:text-white transition-colors duration-300">
            {stat.label}
          </div>
          
          {/* Description */}
          <div className="text-sm text-content-muted">
            {stat.description}
          </div>
        </div>
        
        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16 
                        bg-gradient-to-tl from-brand-500/10 to-transparent 
                        rounded-tl-full opacity-0 group-hover:opacity-100 
                        transition-opacity duration-500" />
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-section-lg overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-surface-raised" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[800px] h-[400px] rounded-full 
                      bg-brand-500/8 blur-[180px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
             maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
           }} />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
             backgroundRepeat: 'repeat',
             backgroundSize: '256px 256px',
           }} />
      
      {/* Gradient line divider top */}
      <div className="absolute top-0 left-0 right-0 h-px 
                      bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 
                           rounded-full border border-brand-500/30 
                           bg-brand-500/10 text-brand-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Trusted by Industry Leaders
          </span>
          <h2 className="font-heading font-bold text-display-xl text-content-primary mb-4">
            Powering the Future of{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r 
                             from-brand-400 via-brand-300 to-brand-400">
              AI-Driven Work
            </span>
          </h2>
          <p className="text-lg text-content-muted max-w-2xl mx-auto">
            Toolify AI enables organizations to automate processes, reduce costs, 
            and unlock new growth opportunities through intelligent technology.
          </p>
        </AnimateIn>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100} className="group">
              <StatCard stat={stat} index={i} />
            </AnimateIn>
          ))}
        </div>
        
        {/* Bottom supporting metrics */}
        <AnimateIn delay={500} className="mt-12">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 
                          py-8 border-t border-surface-border">
            {[
              { icon: '⚡', label: 'Processing Speed', value: '<100ms avg' },
              { icon: '🔒', label: 'Data Security', value: 'SOC 2 Type II' },
              { icon: '🌍', label: 'Global Reach', value: '150+ Countries' },
              { icon: '🔄', label: 'Integrations', value: '200+ APIs' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="text-xs text-content-muted uppercase tracking-wider">{item.label}</div>
                  <div className="text-sm font-semibold text-content-secondary">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
      
      {/* Gradient line divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px 
                      bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
    </section>
  )
}