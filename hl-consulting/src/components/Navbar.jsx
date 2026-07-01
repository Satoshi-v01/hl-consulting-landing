import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="HL Consulting — Ir al inicio"
          className="text-surface font-extrabold text-lg tracking-tight"
        >
          <span className="text-accent">HL</span> Consulting
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-surface/70 hover:text-accent text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-md bg-accent hover:bg-accent-dark text-white transition-colors duration-200"
        >
          Consulta gratis
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden cursor-pointer p-2 text-surface hover:text-accent transition-colors duration-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary px-6 pb-6 pt-2 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-surface/80 hover:text-accent text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md bg-accent hover:bg-accent-dark text-white transition-colors duration-200"
          >
            Consulta gratis
          </a>
        </div>
      )}
    </nav>
  )
}
