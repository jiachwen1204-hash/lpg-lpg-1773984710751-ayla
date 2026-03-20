import AnimateIn from '@/components/ui/AnimateIn'
import { Sparkles, BarChart3, Workflow, Users, BrainCircuit, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'AI Content Generation',
    description: 'Create compelling marketing copy, product descriptions, and creative assets in seconds. Our language models understand context and brand voice to produce content that resonates with your audience.',
  },
  {
    icon: BarChart3,
    title: 'Intelligent Data Analysis',
    description: 'Transform raw data into actionable insights with machine learning algorithms that identify patterns, trends, and opportunities your team might miss. Make data-driven decisions faster.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Eliminate repetitive tasks and streamline business processes. Build automated pipelines that connect your tools and systems, reducing manual work by up to 80%.',
  },
  {
    icon: Users,
    title: 'Customer Engagement',
    description: 'Deploy intelligent chatbots and engagement tools that understand customer intent. Provide 24/7 support with personalized responses that increase satisfaction and retention.',
  },
  {
    icon: BrainCircuit,
    title: 'Decision Support',
    description: 'Equip leadership with AI-powered recommendations backed by comprehensive data analysis. From resource allocation to strategic planning, make confident choices faster.',
  },
  {
    icon: Lightbulb,
    title: 'Digital Transformation',
    description: 'Accelerate your digital journey with integrated AI solutions designed for scalability and security. Access enterprise-grade technology without the enterprise complexity.',
  },
]

const HEADING  = 'Powerful AI Capabilities'
const SUBTEXT  = 'Everything you need to automate, analyze, and accelerate — unified in one intelligent platform built for modern businesses.'

export default function Services() {
  return (
    <section id="services" className="py-section bg-[#0a0a12] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/[0.06] blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-brand-400 mb-4 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Platform Features
          </span>
          <h2 className="font-heading font-bold text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] text-content-primary mb-6">
            {HEADING}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-content-secondary leading-relaxed">
            {SUBTEXT}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <div className="group relative h-full p-8 rounded-card-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-500/30 transition-all duration-500 ease-expo-out overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-500 rounded-card-lg" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-700/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-brand-500/30 group-hover:to-brand-700/30 transition-all duration-300">
                    <svc.icon className="w-7 h-7 text-brand-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-content-primary mb-3 group-hover:text-brand-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-content-secondary leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}