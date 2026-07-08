import { ArrowRight } from 'lucide-react'
import { PROCESS_SECTION, PROCESS_STEPS } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Process() {
  const headerRef = useScrollReveal()
  const stepsRef  = useScrollReveal({ threshold: 0.1 })
  const ctaRef    = useScrollReveal()

  return (
    <section id="proceso" className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full bg-accent/15 text-accent">
            {PROCESS_SECTION.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-surface">
            {PROCESS_SECTION.title}
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto leading-relaxed text-surface/65">
            {PROCESS_SECTION.description}
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="reveal-stagger mb-16">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">

                {/* Step number */}
                <div
                  className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-none select-none mb-5 text-accent/25"
                >
                  {item.step}
                </div>

                <h3 className="text-lg font-bold mb-3 text-surface">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-surface/60 max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="reveal text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold uppercase tracking-widest
                       bg-accent hover:bg-accent-dark text-white transition-all duration-200
                       hover:shadow-[0_8px_24px_rgba(184,149,106,0.35)]"
          >
            Empezá hoy, primera consulta gratis
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}
