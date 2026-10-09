import { site } from '../content'

const DELTA = 0.0045

export function Location() {
  const { location } = site
  const { lat, lon } = location.map

  const bbox = [lon - DELTA * 2, lat - DELTA, lon + DELTA * 2, lat + DELTA].join('%2C')
  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`
  const largeMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=16/${lat}/${lon}`

  return (
    <section
      id="hitta-hit"
      aria-labelledby="hitta-hit-rubrik"
      className="bg-cream pb-16 pt-12 sm:pb-24 sm:pt-16"
    >
      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 id="hitta-hit-rubrik" className="text-6xl text-tomato sm:text-7xl">
            {location.heading}
          </h2>
          <address className="mt-8 font-display text-3xl not-italic sm:text-4xl">
            {location.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-6 text-lg text-basil-muted">{location.description}</p>
          <a
            href={largeMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-extrabold text-tomato underline decoration-2 underline-offset-4 hover:text-tomato-dark"
          >
            {location.mapLinkLabel}
            <span className="sr-only"> (öppnas i ny flik)</span>
          </a>
        </div>

        <div>
          <div className="aspect-[4/3] overflow-hidden rounded-card border-4 border-basil bg-tint">
            <iframe
              src={embedUrl}
              title={location.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-full w-full border-0"
            />
          </div>
          <p className="mt-3 text-sm text-basil-muted">{location.mapNote}</p>
        </div>
      </div>
    </section>
  )
}
