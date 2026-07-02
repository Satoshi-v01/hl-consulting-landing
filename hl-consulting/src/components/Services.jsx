import {
  FileText,
  ClipboardList,
  Building2,
  Briefcase,
  ShieldCheck,
  BarChart2,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { SERVICES, SERVICES_CTA } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ICON_MAP = { FileText, ClipboardList, Building2, Briefcase, ShieldCheck, BarChart2, TrendingUp }

export default function Services() {
  const headerRef = useScrollReveal()
  const gridRef   = useScrollReveal({ threshold: 0.05, rootMargin: '0px 0px -40px 0px' })

  return (
    <section id="servicios" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="reveal grid md:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full bg-primary/7 text-primary">
              Nuestros servicios
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-primary">
              Todo lo que tu negocio necesita, en un solo lugar.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-text-muted">
            Brindamos soluciones contables y tributarias completas para que puedas enfocarte en hacer crecer tu empresa.
          </p>
        </div>

        {/* Services grid — border-box approach: works at all breakpoints.
            A trailing CTA tile (SERVICES_CTA) rounds the count out to a number
            that divides evenly at every breakpoint below, so no row is ever
            left with empty, borderless cells. */}
        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon]

            return (
              <div
                key={service.id}
                className="group relative p-8 lg:p-10 border-b border-r border-border overflow-hidden
                           cursor-pointer transition-colors duration-200 hover:bg-surface-alt"
              >
                {/* Accent bar — slides in from left on hover */}
                <div className="absolute left-0 top-0 w-0.5 h-0 bg-accent transition-all duration-300 group-hover:h-full" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-primary/7 transition-colors duration-200 group-hover:bg-accent/12">
                    {Icon && (
                      <Icon
                        size={22}
                        className="text-primary transition-colors duration-200 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3 className="text-sm font-bold uppercase tracking-wider mb-3 leading-snug text-primary">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-6 text-text-muted">
                    {service.description}
                  </p>

                  <a
                    href="#contacto"
                    aria-label={`Consultar sobre ${service.title}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent transition-all duration-200 group-hover:gap-3"
                  >
                    Consultar
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            )
          })}

          {/* CTA tile — completes the grid and nudges visitors with atypical needs */}
          <a
            href={SERVICES_CTA.href}
            className="group relative p-8 lg:p-10 border-b border-r border-border overflow-hidden
                       cursor-pointer transition-colors duration-200 bg-primary hover:bg-primary-light"
          >
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 leading-snug text-surface">
                {SERVICES_CTA.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 text-surface/70">
                {SERVICES_CTA.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent transition-all duration-200 group-hover:gap-3">
                {SERVICES_CTA.buttonLabel}
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}
