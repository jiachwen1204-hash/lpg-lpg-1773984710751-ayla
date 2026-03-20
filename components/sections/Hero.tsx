import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge: 'Powering 10,000+ Businesses with AI',
  headline: 'AI-Powered Tools That',
  highlight: 'Transform Work',
  subline: 'We build intelligent tools designed to simplify work, automate processes, and accelerate digital transformation. Our platform integrates multiple AI capabilities into a single seamless ecosystem.',
  cta: { label: 'Start Free Trial', href: '#pricing' },
  secondary: { label: 'See How It Works', href: '#features' },
  stats: [
    { value: '50+', label: 'AI Tools Available' },
    { value: '10k+', label: 'Businesses Served' },
    { value: '85%', label: 'Time Saved' },
    { value: '99.9%', label: 'Uptime Guaranteed' },
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A] pt-nav"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] rounded-full bg-sky-500/20 blur-[180px] animate-float" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-cyan-500/15 blur-[160px] animate-float [animation-delay:3s]" />
        <div className="absolute top-[40%] left-[60%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px] animate-float [animation-delay:6s]" />
        
        {/* Dot grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
        
        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-[#334155] bg-[#1E293B]/80 backdrop-blur-sm text-sm text-[#94A3B8] mb-8">
                <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            {/* Headline with gradient highlight */}
            <AnimateIn delay={80}>
              <h1 className="font-[Sora] font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-[#F8FAFC] mb-6">
                {CONTENT.headline}{' '}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            {/* Subline */}
            <AnimateIn delay={160}>
              <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-10">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#0EA5E9]/40 blur-2xl rounded-xl scale-110 pointer-events-none" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative inline-flex items-center gap-2 px-8 py-4 font-[Outfit] font-semibold bg-[#0EA5E9] text-[#F8FAFC] rounded-xl hover:bg-[#0369A1] shadow-lg shadow-[#0EA5E9]/25 transition-all duration-300 ease-expo-out active:scale-[0.97]"
                  >
                    <img 
                      src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773984709256-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
                      alt="Toolify AI logo" 
                      className="h-5 w-auto object-contain brightness-0 invert" 
                    />
                    {CONTENT.cta.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="inline-flex items-center gap-2 px-8 py-4 font-[Outfit] font-medium border border-[#334155] text-[#F8FAFC] rounded-xl hover:border-[#0EA5E9]/50 hover:bg-[#1E293B]/50 transition-all duration-300 ease-expo-out"
                >
                  {CONTENT.secondary.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12">
                {CONTENT.stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="font-[Sora] font-bold text-3xl md:text-4xl text-[#0EA5E9] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#94A3B8]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Floating AI Dashboard Mockup */}
          <AnimateIn delay={200} animation="scale-in" className="hidden lg:block relative">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="relative rounded-2xl border border-[#334155]/50 bg-[#1E293B]/80 backdrop-blur-xl p-6 shadow-2xl shadow-black/40 overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/40 to-transparent" />
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773984709256-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
                      alt="Toolify AI logo" 
                      className="h-8 w-auto object-contain" 
                    />
                    <span className="font-[Outfit] text-sm text-[#F8FAFC] font-medium">AI Dashboard</span>
                  </div>
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                </div>

                {/* AI Processing visualization */}
                <div className="mb-6 p-4 rounded-xl bg-[#0F172A]/60 border border-[#334155]/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-cyan-400 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#F8FAFC] font-medium">AI Processing</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#94A3B8]">Content Generation</span>
                      <span className="text-[#0EA5E9]">Complete</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#334155]/50 overflow-hidden">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-[#0EA5E9] to-cyan-400 animate-shimmer" />
                    </div>
                  </div>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Tasks Automated', value: '1,247', trend: '+23%', color: 'text-emerald-400' },
                    { label: 'Hours Saved', value: '847h', trend: '+45%', color: 'text-emerald-400' },
                    { label: 'AI Requests', value: '12.5k', trend: '+18%', color: 'text-[#0EA5E9]' },
                    { label: 'Accuracy', value: '99.2%', trend: '', color: 'text-[#F8FAFC]' },
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-xl bg-[#0F172A]/40 p-3 border border-[#334155]/20">
                      <div className="label-sm text-[#94A3B8] text-xs mb-1">{metric.label}</div>
                      <div className="font-[Sora] font-bold text-lg text-[#F8FAFC]">{metric.value}</div>
                      {metric.trend && (
                        <div className={`text-xs mt-0.5 ${metric.color}`}>{metric.trend}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 p-4 rounded-xl bg-[#1E293B]/90 backdrop-blur-xl border border-[#334155]/50 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">Workflow Complete</div>
                    <div className="font-[Sora] font-bold text-[#F8FAFC]">Data Analyzed</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 p-3 rounded-xl bg-[#1E293B]/90 backdrop-blur-xl border border-[#334155]/50 shadow-xl animate-float [animation-delay:1.5s]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-blue-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">Efficiency Boost</div>
                    <div className="font-[Sora] font-bold text-lg text-[#F8FAFC]">+85%</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />
    </section>
  )
}