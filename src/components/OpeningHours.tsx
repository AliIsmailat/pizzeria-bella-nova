import { useState } from 'react'
import { images, site } from '../content'
import { Picture } from './Picture'

export function OpeningHours() {
  const { openingHours } = site
  const [todayIndex] = useState(() => (new Date().getDay() + 6) % 7)

  return (
    <section
      id="oppettider"
      aria-labelledby="oppettider-rubrik"
      className="bg-tint pb-16 pt-12 sm:pb-24 sm:pt-16"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="oppettider-rubrik" className="text-6xl text-tomato sm:text-7xl">
            {openingHours.heading}
          </h2>

          <table className="mt-8 w-full text-left text-lg sm:text-xl">
            <caption className="sr-only">{openingHours.heading} per veckodag</caption>
            <thead className="sr-only">
              <tr>
                <th scope="col">Dag</th>
                <th scope="col">Tid</th>
              </tr>
            </thead>
            <tbody>
              {openingHours.days.map((row, index) => {
                const isToday = index === todayIndex
                return (
                  <tr
                    key={row.day}
                    className={`border-b-2 border-dashed border-basil/20 ${isToday ? 'font-extrabold' : 'font-semibold'}`}
                  >
                    <th scope="row" className="py-4 pr-4 font-[inherit]">
                      {row.day}
                      {isToday && (
                        <span className="ml-3 inline-block -rotate-3 rounded-tag bg-tomato px-2 py-0.5 align-middle text-xs font-extrabold uppercase tracking-wide text-cream">
                          {openingHours.todayLabel}
                        </span>
                      )}
                    </th>
                    <td className="py-4 text-right tabular-nums">{row.hours}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <p className="mt-6 text-basil-muted">{openingHours.note}</p>
        </div>

        <div className="aspect-[4/3] rotate-1 overflow-hidden rounded-card">
          <Picture image={images.oven} sizes="(min-width: 1024px) 480px, 100vw" />
        </div>
      </div>
    </section>
  )
}
