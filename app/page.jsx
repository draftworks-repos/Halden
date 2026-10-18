import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Spaces from "@/components/Spaces";
const stats = [["120+", "Homes delivered"], ["14", "Years of practice"], ["98%", "Client satisfaction"], ["22", "Design awards"]];
const steps = [["Brief", "We listen first — site, light, and how you live."], ["Design", "Models, materials and drawings, refined together."], ["Build", "Our own crews, weekly walk-throughs, no surprises."], ["Handover", "Keys, care guides and a year of aftercare."]];
export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <section className="mx-auto max-w-6xl px-6 py-32">
        <p className="eyebrow">Approach</p>
        <h2 className="font-display mt-3 max-w-4xl text-4xl font-light leading-tight md:text-6xl">We design and build in one hand — so the drawing and the house never drift apart.</h2>
        <div className="mt-16 grid grid-cols-2 gap-px bg-cream/10 md:grid-cols-4">
          {stats.map(([n, l]) => (<div key={l} className="bg-ink py-10"><p className="font-display text-5xl text-sand md:text-6xl">{n}</p><p className="mt-2 text-sm text-cream/60">{l}</p></div>))}
        </div>
      </section>
      <Spaces />
      <section id="process" className="bg-cream px-6 py-32 text-ink">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Process</p><h2 className="font-display mt-3 text-5xl font-light md:text-8xl">From brief to <em>keys</em>.</h2>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {steps.map(([t, d], i) => (<div key={t} className="border-t border-ink/20 pt-6"><p className="font-display text-4xl text-sand">0{i + 1}</p><h3 className="mt-3 text-xl">{t}</h3><p className="mt-2 text-sm text-ink/60">{d}</p></div>))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="font-display text-3xl font-light italic leading-snug md:text-5xl">“They built the house we drew on a napkin — and somehow it feels even calmer than we imagined.”</p>
        <p className="mt-8 text-sm text-cream/50">— The Verma family, Corner Residence</p>
      </section>
      <section id="contact" className="px-6 pb-24 pt-10 text-center">
        <h2 className="font-display text-6xl font-light md:text-[10rem] md:leading-none">Let’s build <em>quietly</em>.</h2>
        <div className="mt-10 flex justify-center gap-3 text-sm">
          <a href="mailto:hello@halden.studio" className="rounded-full bg-sand px-7 py-3 text-ink">Book a consultation</a>
          <a href="tel:+910000000000" className="rounded-full border border-cream/30 px-7 py-3">Call the studio</a>
        </div>
        <p className="mt-24 text-xs text-cream/40">© Halden Studio · Mockup content for demonstration</p>
      </section>
    </main>
  );
}
