import logoUrl from "../assets/logo.svg";
import { images, logo, site } from "../content";

export function Footer() {
  const credits = Object.values(images)
    .map((image) => image.photographer.trim())
    .filter((name, index, all) => name !== "" && all.indexOf(name) === index);

  return (
    <footer className="bg-basil pb-32 pt-10 text-tint lg:pb-12">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6">
        <div>
          <p className="font-display text-3xl text-cream">{site.name}</p>
          <p className="mt-2 text-lg font-semibold">{site.footerText}</p>
          {credits.length > 0 && (
            <p className="mt-6 text-sm">Foto: {credits.join(", ")}</p>
          )}
        </div>
        <img
          src={logoUrl}
          alt={logo.alt}
          width={80}
          height={80}
          loading="lazy"
          className="h-14 w-14 shrink-0 sm:h-20 sm:w-20"
        />
      </div>
    </footer>
  );
}
