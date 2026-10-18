const P = [
  ["01", "Corner Residence", "Bhilai · 4,200 sq ft · 2024", "/img/hero.webp", "Concrete · Timber · Solar"],
  ["02", "Villa Noor", "Raipur · 3,600 sq ft · 2023", "/img/villa.webp", "Brick · Glass · Garden"],
  ["03", "The Stair Hall", "Durg · 2,900 sq ft · 2023", "/img/hall-night.webp", "Board-formed concrete · Teak"],
  ["04", "Courtyard Living", "Nagpur · 5,100 sq ft · 2022", "/img/living-day.webp", "Double height · Open plan"],
];
export default function Projects() {
  return (
    <section id="work" className="bg-cream px-4 pb-24 pt-28 text-ink md:px-10">
      <div className="mx-auto mb-16 max-w-6xl">
        <p className="eyebrow">Selected work</p>
        <h2 className="font-display mt-3 text-5xl font-light md:text-8xl">Homes that <em>hold</em> the light.</h2>
      </div>
      {P.map(([n, t, m, src, tags], i) => (
        <div key={n} className="sticky" style={{ top: `${10 + i * 3}vh` }}>
          <article className="relative mx-auto mb-[14vh] h-[72vh] max-w-6xl overflow-hidden rounded-[28px] shadow-2xl">
            <img src={src} alt={t} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span className="font-display absolute right-8 top-6 text-6xl text-cream/70">{n}</span>
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-8 text-cream md:p-12">
              <div><h3 className="font-display text-4xl font-light md:text-6xl">{t}</h3><p className="mt-2 text-sm text-cream/70">{m}</p></div>
              <p className="rounded-full border border-cream/30 px-5 py-2 text-xs uppercase tracking-widest backdrop-blur">{tags}</p>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
}
