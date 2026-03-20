import AnimateIn from '@/components/ui/AnimateIn'

const clients = [
  { name: 'TechFlow Inc', logo: 'TF' },
  { name: 'DataStream', logo: 'DS' },
  { name: 'CloudNova', logo: 'CN' },
  { name: 'AIVenture', logo: 'AV' },
  { name: 'SmartOps', logo: 'SO' },
  { name: 'NeuralPath', logo: 'NP' },
  { name: 'DataPulse', logo: 'DP' },
  { name: 'FutureStack', logo: 'FS' },
]

const stats = [
  { value: '10,000+', label: 'Active Users', suffix: '' },
  { value: '500+', label: 'Enterprise Clients', suffix: '' },
  { value: '99.9', label: 'Uptime SLA', suffix: '%' },
  { value: '4.9', label: 'Customer Rating', suffix: '★' },
]

const testimonials = [
  {
    quote: 'Toolify AI transformed our content workflow completely. We reduced production time by 70% while improving quality across all channels.',
    author: 'Sarah Chen',
    role: 'Head of Digital, Meridian Tech',
    avatar: 'SC',
  },
  {
    quote: 'The workflow automation capabilities are incredible. Our team now focuses on strategy instead of repetitive tasks. Game-changing ROI.',
    author: 'Marcus Rodriguez',
    role: 'CTO, Apex Solutions',
    avatar: 'MR',
  },
  {
    quote: 'Finally, an AI platform that actually delivers on its promises. The data analysis tools have given us insights we never could have found manually.',
    author: 'Emily Watson',
    role: 'VP of Operations, CloudScale',
    avatar: 'EW',
  },
  {
    quote: 'Seamless integration with our existing stack. The decision support features have become essential to our daily operations.',
    author: 'David Kim',
    role: 'Director of Analytics, NexGen',
    avatar: 'DK',
  },
]

export default function SocialProof() {
  return (
    <section className="relative py-section overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-400/5 blur-[100px] pointer-events-none" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
             backgroundRepeat: 'repeat',
             backgroundSize: '256px 256px',
           }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-sm text-brand-400 uppercase tracking-widest font-medium mb-4">
            Trusted by industry leaders
          </p>
          <h2 className="font-heading text-display-xl font-bold text-content-primary">
            Powering the future of <span className="gradient-text">intelligent work</span>
          </h2>
        </AnimateIn>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100}>
              <div className="relative text-center p-6 rounded-card-lg border border-surface-border bg-surface-raised hover:border-brand-500/40 transition-colors duration-300 group">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/5 rounded-card-lg transition-all duration-500 blur-xl" />
                
                <div className="relative">
                  <div className="font-heading text-display-lg font-bold text-content-primary mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-content-muted font-medium">{stat.label}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Client Logos Marquee */}
        <AnimateIn className="mb-20">
          <div className="text-center mb-8">
            <p className="text-sm text-content-muted uppercase tracking-widest">
              Trusted by 500+ companies worldwide
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-6 animate-marquee w-max">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-6 py-4 rounded-card border border-surface-border bg-surface-raised hover:border-brand-500/30 hover:bg-surface-overlay transition-all duration-300 whitespace-nowrap"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center font-heading font-bold text-brand-400 text-sm">
                    {client.logo}
                  </div>
                  <span className="text-content-secondary font-medium">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Testimonials */}
        <AnimateIn className="mb-12">
          <div className="text-center mb-12">
            <h3 className="font-heading text-display-lg font-bold text-content-primary">
              What our clients say
            </h3>
            <p className="text-content-muted mt-3 max-w-xl mx-auto">
              Join thousands of businesses already transforming their operations with Toolify AI
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 100}>
              <div className="h-full relative group">
                {/* Card glow on hover */}
                <div className="absolute -inset-px rounded-card-lg bg-gradient-to-r from-brand-500/0 via-brand-500/30 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative h-full p-8 rounded-card-lg border border-surface-border bg-surface-raised hover:border-brand-500/40 transition-all duration-300">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
                  
                  {/* Quote icon */}
                  <div className="mb-6 w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  <p className="text-content-primary leading-relaxed mb-6 text-lg font-light">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center font-heading font-bold text-content-inverse text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-content-primary">{t.author}</div>
                      <div className="text-sm text-content-muted">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <AnimateIn delay={600} className="text-center mt-16">
          <p className="text-content-muted mb-4">
            Ready to transform your workflow?
          </p>
          <div className="inline-flex items-center gap-2 text-brand-400 font-medium">
            <span>Start your free trial today</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}