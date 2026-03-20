import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, Zap, BarChart3, Workflow, Users, Brain } from 'lucide-react'

const CONTENT = {
  label: 'About Toolify AI',
  heading: 'Intelligent Automation for the Modern Enterprise',
  subheading: 'We build AI-powered tools that simplify work and accelerate growth.',
  paragraphs: [
    'Toolify AI is an all-in-one AI technology company that builds intelligent tools designed to simplify work, automate processes, and accelerate digital transformation. Our platform integrates multiple AI capabilities into a single seamless ecosystem.',
    'By combining powerful machine learning models with user-friendly software, we help businesses reduce operational costs, improve productivity, and unlock new growth opportunities. Our solutions are designed for scalability, security, and real-world usability.',
  ],
  capabilities: [
    { icon: Brain, title: 'Content Generation', description: 'Create compelling content at scale with advanced NLP models' },
    { icon: BarChart3, title: 'Data Analysis', description: 'Transform raw data into actionable insights instantly' },
    { icon: Workflow, title: 'Workflow Automation', description: 'Streamline operations with intelligent process automation' },
    { icon: Users, title: 'Customer Engagement', description: 'Deliver personalized experiences that drive loyalty' },
    { icon: Zap, title: 'Decision Support', description: 'AI-powered recommendations for smarter business decisions' },
  ],
  stats: [
    { value: '5+', label: 'AI Capabilities', suffix: '' },
    { value: '24/7', label: 'Automation', suffix: '' },
    { value: '99.9', label: 'Uptime %', suffix: '%' },
  ],
  cta: { label: 'Start Free Trial', href: '#trial' },
}

export default function About() {
  return (
    <section id="about" className="relative py-section overflow-hidden">
      {/* Background Layer 1: Base dark */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      
      {/* Background Layer 2: Ambient glow orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full bg-sky-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-sky-600/8 blur-[150px] pointer-events-none" />
      
      {/* Background Layer 3: Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
           }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <AnimateIn>
            <p className="text-sm font-medium tracking-widest uppercase text-sky-500 mb-4">
              {CONTENT.label}
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2 className="font-heading font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight text-content-primary mb-6">
              {CONTENT.heading.split(' ').slice(0, 3).join(' ')}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 bg-[length:200%_auto] animate-shimmer">
                {CONTENT.heading.split(' ').slice(3).join(' ')}
              </span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-xl text-content-secondary leading-relaxed mb-6">
              {CONTENT.subheading}
            </p>
          </AnimateIn>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content & Capabilities */}
          <div>
            <AnimateIn direction="left" delay={300}>
              {CONTENT.paragraphs.map((p, i) => (
                <p key={i} className="text-content-secondary leading-relaxed mb-6">
                  {p}
                </p>
              ))}
            </AnimateIn>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {CONTENT.capabilities.map((cap, i) => (
                <AnimateIn key={cap.title} delay={400 + i * 100}>
                  <div className="group relative p-5 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/60 hover:border-sky-500/30 transition-all duration-300">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/5 rounded-xl blur-xl transition-all duration-500" />
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative">
                      <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition-colors">
                        <cap.icon className="w-5 h-5 text-sky-400" />
                      </div>
                      <h3 className="font-heading font-semibold text-content-primary mb-1">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-content-muted leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Right: Stats & CTA */}
          <AnimateIn direction="right" delay={300}>
            <div className="relative">
              {/* Stats Card */}
              <div className="relative rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8 backdrop-blur-sm overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent" />
                
                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.03]" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                     }} />

                <div className="relative">
                  <p className="text-sm font-medium tracking-widest uppercase text-sky-500 mb-6">
                    Platform Highlights
                  </p>
                  
                  <div className="space-y-8">
                    {CONTENT.stats.map((stat, i) => (
                      <div key={stat.label} className="relative">
                        {/* Large background number */}
                        <span className="absolute -top-4 -left-2 font-heading font-black text-[5rem] text-sky-500/5 leading-none select-none pointer-events-none">
                          0{i + 1}
                        </span>
                        <div className="relative flex items-baseline gap-2">
                          <span className="font-heading font-black text-5xl text-content-primary">
                            {stat.value}
                          </span>
                          {stat.suffix && (
                            <span className="font-heading font-bold text-2xl text-sky-400">
                              {stat.suffix}
                            </span>
                          )}
                          <span className="text-content-muted ml-2">{stat.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8" />

                  {/* Accessibility statement */}
                  <p className="text-content-muted text-sm leading-relaxed mb-6">
                    Making advanced AI accessible to organizations of all sizes — from startups to enterprises.
                  </p>

                  {/* CTA with glow */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-sky-500/40 blur-xl rounded-xl scale-110" />
                    <a
                      href={CONTENT.cta.href}
                      className="relative inline-flex items-center gap-2 px-6 py-3 font-body font-semibold bg-sky-500 text-white rounded-xl hover:bg-sky-400 transition-all duration-300 shadow-lg shadow-sky-500/25"
                    >
                      {CONTENT.cta.label}
                      <Zap className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-xl px-4 py-3 animate-float shadow-xl shadow-black/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-content-primary">AI-Powered</div>
                    <div className="text-xs text-content-muted">ML Models</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Trust indicators */}
        <AnimateIn delay={500}>
          <div className="mt-16 pt-12 border-t border-slate-800">
            <div className="flex flex-wrap items-center justify-center gap-8 text-content-muted text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-500" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-500" />
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-500" />
                <span>Enterprise Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-500" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}