import { BRAND, FOOTER_LINKS, NAV_LINKS } from '../data/content'

function InstagramIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-extrabold mb-4">
              <span className="text-accent">HL</span> Consulting
            </div>
            <p className="text-sm leading-relaxed mb-6 text-surface/55">
              {BRAND.tagline}. Soluciones contables para PYMEs y personas físicas en Paraguay.
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-xs font-semibold text-accent hover:text-accent-light transition-colors duration-200 block mb-3"
            >
              {BRAND.email}
            </a>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-surface/55 hover:text-accent transition-colors duration-200"
            >
              <InstagramIcon size={14} />
              {BRAND.instagramHandle}
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-accent">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-surface/55 hover:text-surface transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-surface/8">
          <p className="text-xs text-surface/35">
            {BRAND.copyright}
          </p>
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-surface/40 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  )
}
