import { useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { BRAND, CONTACT_SERVICES_OPTIONS } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const INITIAL_FORM = { name: '', email: '', phone: '', service: '', message: '' }

const CONTACT_INFO = [
  { icon: Mail,           label: 'Correo electrónico', value: BRAND.email,   href: `mailto:${BRAND.email}` },
  { icon: Phone,          label: 'Teléfono',           value: BRAND.phone,   href: `tel:${BRAND.phone}` },
  { icon: MessageCircle,  label: 'WhatsApp',           value: BRAND.phone,   href: BRAND.whatsapp },
  { icon: MapPin,         label: 'Ubicación',          value: BRAND.address, href: null },
]

const INPUT_BASE =
  'w-full rounded-md px-4 py-3 text-sm outline-none transition-all duration-200 bg-surface-alt border border-border text-text placeholder:text-text-muted/50 focus:border-accent'

export default function Contact() {
  const [form, setForm]           = useState(INITIAL_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted]   = useState(false)

  const leftRef  = useScrollReveal()
  const rightRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch(`https://formspree.io/f/${BRAND.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Error al enviar')
      setSubmitted(true)
      setForm(INITIAL_FORM)
    } catch {
      alert('Hubo un problema al enviar. Por favor escribinos directamente a ' + BRAND.email)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <div ref={leftRef} className="reveal">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full bg-primary/7 text-primary">
              Contacto
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-primary">
              Hablemos de tu negocio.
            </h2>
            <p className="text-base leading-relaxed mb-10 text-text-muted">
              Completá el formulario o comunicate directamente. La primera consulta es gratuita y sin compromiso.
            </p>

            <div className="space-y-6">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-surface border border-border">
                      <Icon size={18} className="text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-0.5 text-text-muted">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-primary hover:text-accent transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-primary">{item.value}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div
            ref={rightRef}
            className="reveal p-8 lg:p-10 rounded-2xl bg-white border border-border shadow-[0_8px_40px_rgba(28,48,69,0.06)]"
          >
            {/* key prop triggers form-fade CSS animation on state change */}
            <div key={submitted ? 'success' : 'form'} className="form-fade">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-accent/12">
                    <Send size={22} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">¡Mensaje enviado!</h3>
                  <p className="text-sm text-text-muted">
                    Te contactaremos dentro de las próximas 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-text-muted">
                        Nombre completo
                      </label>
                      <input
                        id="name" name="name" type="text" required autoComplete="name"
                        value={form.name} onChange={handleChange}
                        placeholder="Juan García"
                        className={INPUT_BASE}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-text-muted">
                        Correo electrónico
                      </label>
                      <input
                        id="email" name="email" type="email" required autoComplete="email"
                        value={form.email} onChange={handleChange}
                        placeholder="juan@empresa.com"
                        className={INPUT_BASE}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-text-muted">
                        Teléfono (opcional)
                      </label>
                      <input
                        id="phone" name="phone" type="tel" autoComplete="tel"
                        value={form.phone} onChange={handleChange}
                        placeholder="+595 983 098 129"
                        className={INPUT_BASE}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-text-muted">
                        Servicio de interés
                      </label>
                      <select
                        id="service" name="service"
                        value={form.service} onChange={handleChange}
                        className={`${INPUT_BASE} cursor-pointer`}
                      >
                        <option value="" disabled>Seleccionar...</option>
                        {CONTACT_SERVICES_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-text-muted">
                      Mensaje
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="Contanos brevemente en qué podemos ayudarte..."
                      className={`${INPUT_BASE} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-md text-sm font-bold uppercase tracking-widest
                               bg-primary hover:bg-primary-light text-white transition-colors duration-200
                               disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {submitting ? 'Enviando...' : 'Enviar consulta'}
                    {!submitting && <Send size={14} aria-hidden="true" />}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
