import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  eyebrow: 'Start Your AI Transformation',
  heading: 'Unlock the Power of AI for Your Business',
  subtext: 'Join innovative teams leveraging Toolify AI to automate workflows, generate intelligent content, and accelerate growth — all from one unified platform.',
  cta: { label: 'Start Free Trial', href: '#pricing' },
  secondary: { label: 'See Platform Demo', href: '#features' },
  stats: [
    { value: '10x', label: 'Faster workflows' },
    { value: '85%', label: 'Cost reduction' },
    { value: '24/7', label: 'AI automation' },
  ],
}

export default function CTA() {
  return (
    <section className="py-section-lg relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#0d0d1f] to-[#080810]" />

      {/* Mesh gradient orbs */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div className="w-[700px] h-[700px] rounded-full bg-brand-500/12 blur-[180px] animate-float" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/8 blur-[140px] animate-float [animation-delay:2s]" />
      </div>

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            AI-powered business transformation
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="text-content-primary">Unlock the Power of </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-violet-400 to-brand-400 bg-[length:200%_auto] animate-shimmer">
              AI
            </span>
            <span className="text-content-primary"> for Your Business</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p className="text-lg md:text-xl text-content-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Join innovative teams leveraging Toolify AI to automate workflows,
            generate intelligent content, and accelerate growth — all from one
            unified platform.
          </p>
        </AnimateIn>

        <AnimateIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-pill scale-110 opacity-60" />
              <a
                href={CONTENT.cta.href}
                className="relative z-10 px-8 py-4 font-body font-semibold text-content-inverse bg-brand-500 rounded-card hover:bg-brand-700 hover:shadow-glow transition-all ease-expo-out active:scale-[0.97] text-lg"
              >
                {CONTENT.cta.label}
              </a>
            </div>
            <a
              href={CONTENT.secondary.href}
              className="relative z-10 px-8 py-4 font-body font-medium border border-surface-border text-content-primary rounded-card hover:border-brand-500 hover:text-brand-500 hover:bg-brand-500/5 transition-all ease-expo-out text-lg"
            >
              {CONTENT.secondary.label}
            </a>
          </div>
        </AnimateIn>

        {/* Stats row */}
        <AnimateIn delay={400}>
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {CONTENT.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative p-6 rounded-card border border-surface-border bg-surface-raised/50 backdrop-blur-sm"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
                <div className="font-heading font-black text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-violet-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-content-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Floating AI badge */}
        <AnimateIn delay={500} animation="scale-in" className="hidden lg:block">
          <div className="absolute -right-8 top-1/4">
            <div className="relative p-4 rounded-card-lg border border-surface-border bg-surface-overlay/80 backdrop-blur-md shadow-card animate-float">
              <div className="absolute inset-0 bg-brand-500/5 rounded-card-lg" />
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brand-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-content-primary">
                    AI Processing
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">Active now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Floating workflow badge */}
        <AnimateIn delay={600} animation="scale-in" className="hidden lg:block">
          <div className="absolute -left-6 bottom-1/4">
            <div className="relative p-3 rounded-card border border-surface-border bg-surface-overlay/80 backdrop-blur-md shadow-card animate-float [animation-delay:1.5s]">
              <div className="relative flex items-center gap-2">
                <div className="flex -space-x-1">
                  {['📄', '📊', '⚡'].map((emoji, i) => (
                    <span
                      key={i}
                      className="w-6 h-6 rounded-full bg-surface-raised border border-surface-border flex items-center justify-center text-xs"
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-medium text-content-secondary">
                  Workflows active
                </span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
    </section>
  )
}