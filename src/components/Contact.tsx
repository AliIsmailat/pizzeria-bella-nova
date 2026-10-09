import { site } from '../content'

const linkClass =
  'inline-block py-1 font-display text-3xl underline decoration-4 underline-offset-8 [overflow-wrap:anywhere] sm:text-5xl'

const labelClass = 'text-sm font-extrabold uppercase tracking-[0.2em]'

export function Contact() {
  const { contact } = site

  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-rubrik"
      className="bg-tomato pb-16 pt-12 text-cream sm:pb-24 sm:pt-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 id="kontakt-rubrik" className="text-6xl sm:text-7xl">
          {contact.heading}
        </h2>
        <p className="mt-4 max-w-xl text-lg font-semibold sm:text-xl">{contact.intro}</p>

        <address className="mt-12 grid gap-8 not-italic sm:gap-10">
          <div>
            <p className={labelClass}>{contact.phoneLabel}</p>
            <a href={contact.phoneHref} className={linkClass}>
              {contact.phoneDisplay}
            </a>
          </div>
          <div>
            <p className={labelClass}>{contact.emailLabel}</p>
            <a href={`mailto:${contact.email}`} className={linkClass}>
              {contact.email}
            </a>
          </div>
          <div>
            <p className={labelClass}>{contact.instagramLabel}</p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {contact.instagramHandle}
              <span className="sr-only"> (öppnas i ny flik)</span>
            </a>
          </div>
        </address>
      </div>
    </section>
  )
}
