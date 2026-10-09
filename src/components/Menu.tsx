import { images, site } from '../content'
import { Picture } from './Picture'

export function Menu() {
  const { menu } = site

  return (
    <section
      id="meny"
      aria-labelledby="meny-rubrik"
      className="bg-cream pb-16 pt-12 sm:pb-24 sm:pt-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 id="meny-rubrik" className="text-6xl text-tomato sm:text-7xl">
          {menu.heading}
        </h2>
        <p className="mt-4 max-w-xl text-lg font-semibold text-basil-muted sm:text-xl">
          {menu.intro}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-8 lg:max-w-3xl">
          <div className="aspect-[4/5] -rotate-2 overflow-hidden rounded-card">
            <Picture image={images.menuPizza} sizes="(min-width: 1024px) 360px, 50vw" />
          </div>
          <div className="aspect-[4/5] rotate-2 overflow-hidden rounded-card">
            <Picture image={images.menuSalad} sizes="(min-width: 1024px) 360px, 50vw" />
          </div>
        </div>

        <nav aria-label={menu.navLabel} className="mt-10">
          <ul role="list" className="flex flex-wrap gap-3">
            {menu.categories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="inline-block rounded-button border-2 border-basil px-5 py-2 font-extrabold transition-colors hover:bg-basil hover:text-cream"
                >
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-x-16">
          {menu.categories.map((category, index) => (
            <div
              key={category.id}
              id={category.id}
              className={`scroll-mt-6 ${index === 0 ? 'lg:row-span-2' : ''}`}
            >
              <h3 className="text-4xl sm:text-5xl">{category.title}</h3>
              <div className="duk mt-3 h-4 overflow-hidden rounded-tag" aria-hidden="true" />
              <ul role="list" className="mt-2">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="border-b-2 border-dashed border-basil/20 py-5 last:border-b-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-2xl">
                          {item.name}
                          {item.badge && (
                            <span className="ml-3 inline-block -rotate-3 rounded-tag bg-tomato px-2 py-0.5 align-middle font-sans text-xs font-extrabold uppercase tracking-wide text-cream">
                              {item.badge}
                            </span>
                          )}
                        </h4>
                        <p className="mt-1 text-basil-muted">{item.ingredients}</p>
                      </div>
                      <p className="shrink-0 whitespace-nowrap rounded-tag bg-basil px-3 py-1 text-lg font-extrabold text-cream">
                        {item.price} kr
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
