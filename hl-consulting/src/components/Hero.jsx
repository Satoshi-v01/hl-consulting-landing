import { ArrowRight, CheckCircle } from 'lucide-react'
import { BRAND, STATS, TRUST_BADGES } from '../data/content'

export default function Hero() {
  return (
    <section
      className="relative flex items-start pt-14 bg-primary"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 56px), 0 100%)' }}
    >
      {/* Radial accent glow */}
      <div
        className="absolute inset-0 opacity-12 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 15% 60%, #b8956a 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, #b8956a 0%, transparent 45%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 pt-14 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Copy with stagger animation */}
          <div>
            <div
              className="animate-fade-up inline-flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-accent/15 text-accent"
              style={{ animationDelay: '0ms' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Contabilidad para PYMEs y personas físicas
            </div>

            <h1
              className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-surface"
              style={{ animationDelay: '100ms' }}
            >
              Contabilidad para PYMEs,{' '}
              <span className="italic font-light text-accent">
                sin complicaciones.
              </span>
            </h1>

            <p
              className="animate-fade-up text-lg md:text-xl leading-relaxed mb-8 max-w-lg text-surface/75"
              style={{ animationDelay: '200ms' }}
            >
              {BRAND.description}
            </p>

            {/* Trust badges */}
            <ul
              className="animate-fade-up flex flex-col sm:flex-row gap-3 mb-10"
              style={{ animationDelay: '300ms' }}
            >
              {TRUST_BADGES.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2 text-sm font-medium text-surface/85"
                >
                  <CheckCircle size={16} className="text-accent shrink-0" aria-hidden="true" />
                  {badge}
                </li>
              ))}
            </ul>

            <div
              className="animate-fade-up flex flex-col sm:flex-row gap-4"
              style={{ animationDelay: '400ms' }}
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-widest bg-accent hover:bg-accent-dark text-white transition-all duration-200 hover:shadow-[0_8px_24px_rgba(184,149,106,0.35)]"
              >
                Consultar ahora
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-7 py-4 rounded-md text-sm font-bold uppercase tracking-widest border border-surface/20 text-surface/85 hover:bg-surface/5 transition-colors duration-200"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* Right — Stats card */}
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="rounded-2xl p-6 sm:p-8 bg-surface/6 border border-surface/10 backdrop-blur-sm">
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-surface">
                Resultados que hablan
              </h2>
              <p className="text-sm mb-6 sm:mb-8 text-surface/55">
                Años de experiencia respaldan cada servicio que brindamos.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="min-w-0">
                    <div className="text-base sm:text-2xl md:text-3xl font-extrabold mb-1 text-accent leading-tight whitespace-nowrap">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-normal sm:tracking-wider text-surface/50 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-6 border-t border-surface/8">
                <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-accent">
                  Cumplimiento regulatorio
                </p>
                <div className="w-full h-1.5 rounded-full overflow-hidden bg-surface/10">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: '99.8%' }}
                  />
                </div>
                <p className="text-xs mt-1 text-right text-surface/40">
                  99.8% sin observaciones
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
