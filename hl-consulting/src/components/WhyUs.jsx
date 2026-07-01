import { UserCheck, Clock, Lock, Banknote } from 'lucide-react'
import { WHY_US, STATS } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ICON_MAP = { UserCheck, Clock, Lock, Banknote }

export default function WhyUs() {
  const leftRef  = useScrollReveal()
  const rightRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' })

  return (
    <section id="nosotros" className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Intro + Stats */}
          <div ref={leftRef} className="reveal">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full bg-primary/7 text-primary">
              ¿Por qué elegirnos?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-primary">
              Contabilidad accesible que da resultados reales.
            </h2>
            <p className="text-base leading-relaxed mb-10 text-text-muted">
              Somos un equipo de profesionales comprometidos con el éxito de cada cliente. No importa si sos una empresa en crecimiento o un emprendedor independiente, te acompañamos en cada paso.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl bg-surface border border-border"
                >
                  <div className="text-2xl font-extrabold mb-1 text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Why us cards */}
          <div ref={rightRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US.map((item) => {
              const Icon = ICON_MAP[item.icon]
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-surface border border-border transition-all duration-200
                             hover:border-accent hover:shadow-[0_4px_20px_rgba(184,149,106,0.1)]"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-accent/12">
                    {Icon && (
                      <Icon size={18} className="text-accent" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="text-sm font-bold mb-2 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
