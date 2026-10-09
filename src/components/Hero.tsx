import logoUrl from "../assets/logo.svg";
import { images, logo, site } from "../content";
import { CallButton } from "./CallButton";
import { Wave } from "./Divider";
import { Picture } from "./Picture";

export function Hero() {
  const { hero, name } = site;

  return (
    <header
      id="hero"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-basil text-cream"
    >
      <div className="absolute inset-0 -z-20">
        <Picture image={images.hero} sizes="100vw" eager />
      </div>
      <div className="absolute inset-0 -z-10 bg-basil/60" aria-hidden="true" />

      <div className="mx-auto w-full max-w-5xl px-6 pb-24 pt-16">
        <div className="flex items-center gap-4">
          <img
            src={logoUrl}
            alt={logo.alt}
            width={64}
            height={64}
            className="h-14 w-14 sm:h-16 sm:w-16"
          />
          <p className="text-sm font-extrabold uppercase tracking-[0.2em]">
            {name}
          </p>
        </div>
        <p className="mt-5 inline-block -rotate-3 rounded-tag bg-tomato px-4 py-2 font-display text-xl">
          {hero.label}
        </p>
        <h1 className="mt-4 text-[clamp(3.5rem,min(11vw,14vh),7rem)] leading-[0.95]">
          {hero.heading}
        </h1>
        <p className="mt-5 max-w-xl text-lg font-semibold sm:text-xl lg:text-2xl">
          {hero.subheading}
        </p>
        <div id="hero-cta" className="mt-8">
          <CallButton showNumber />
        </div>
      </div>

      <Wave className="absolute inset-x-0 bottom-0 text-cream" />
    </header>
  );
}
