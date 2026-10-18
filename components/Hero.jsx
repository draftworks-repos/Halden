"use client";
import { useEffect, useRef } from "react";
const N = 160, K = 0.22; // K = share of scroll used to grow the window
const caps = [[.22, .44, "01", "Foundation"], [.44, .62, "02", "Structure"], [.62, .8, "03", "Envelope"], [.8, 1.02, "04", "Handover"]];
const L = (a, b, t) => a + (b - a) * t;
const E = (t) => (t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
export default function Hero() {
  const wrap = useRef(), win = useRef(), cv = useRef(), txt = useRef(), bg = useRef(), lbl = useRef(), cap = useRef([]), bar = useRef();
  useEffect(() => {
    const x = cv.current.getContext("2d"), im = []; let cur = 0, s = 0, raf;
    const draw = (i) => { for (let j = i; j >= 0; j--) if (im[j]?.complete && im[j].naturalWidth) { x.drawImage(im[j], 0, 0, 1440, 810); return; } };
    for (let i = 0; i < N; i++) { const m = new Image(); m.src = `/frames/f${String(i + 1).padStart(3, "0")}.webp`; m.onload = () => i === 0 && draw(0); im[i] = m; }
    const tick = () => {
      const W = innerWidth, H = innerHeight, r = wrap.current.getBoundingClientRect();
      const t = Math.min(1, Math.max(0, -r.top / (r.height - H)));
      s += (t - s) * 0.1; if (Math.abs(t - s) < 0.004) s = t; // snap so it can reach exactly 1
      const e = E(Math.min(1, s / K)), w0 = W < 768 ? W * .5 : Math.max(260, W * .2), h0 = w0 * 9 / 16, w = win.current.style;
      w.width = L(w0, W, e) + "px"; w.height = L(h0, H, e) + "px"; w.left = L(W - w0 - W * .05, 0, e) + "px";
      w.top = L(H - h0 - H * .09, 0, e) + "px"; w.borderRadius = L(18, 0, e) + "px";
      txt.current.style.opacity = 1 - Math.min(1, e * 2.2); txt.current.style.transform = `translateY(${-e * 60}px)`;
      lbl.current.style.opacity = 1 - Math.min(1, e * 5);
      bg.current.style.transform = `scale(${1 + e * .12})`;
      const p = Math.max(0, (s - K) / (1 - K)), f = Math.round(Math.min(1, p / 0.92) * (N - 1)); // last frame reached at 92%, then held
      if (f !== cur) { cur = f; draw(f); } // frames advance only after the window is full-screen
      bar.current.style.height = p * 100 + "%";
      caps.forEach(([a, b], i) => { const o = Math.max(0, Math.min(1, (s - a) / .03, (b - s) / .03)); const el = cap.current[i]; el.style.opacity = o; el.style.transform = `translateY(${(1 - o) * 24}px)`; });
      raf = requestAnimationFrame(tick);
    };
    tick(); return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <section ref={wrap} id="top" className="relative" style={{ height: "700vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        <img ref={bg} src="/img/hero.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-ink/90" />
        <nav className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 text-sm md:px-14">
          <a href="#top" className="font-display text-2xl tracking-wide">HALDEN</a>
          <div className="flex gap-7 text-cream/80"><a href="#work">Work</a><a href="#spaces">Spaces</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
        </nav>
        <div ref={txt} className="absolute inset-0 z-10">
          <h2 className="font-display absolute inset-x-0 top-[14vh] text-center text-[22vw] font-light leading-none tracking-tight text-cream/15 md:text-[17vw]">HALDEN</h2>
          <div className="absolute bottom-[9vh] left-6 max-w-xl md:left-14">
            <p className="eyebrow mb-4">Architecture &amp; Construction</p>
            <h1 className="font-display text-5xl font-light leading-[1.02] md:text-7xl">Where concrete <em>meets</em> warmth.</h1>
            <a href="#work" className="mt-7 inline-block rounded-full bg-cream px-7 py-3 text-sm text-ink">Discover our work ↗</a>
          </div>
        </div>
        <div ref={win} className="absolute z-20 overflow-hidden shadow-2xl ring-1 ring-cream/20" style={{ width: "20vw", height: "11.25vw", right: "5vw", bottom: "9vh" }}>
          <canvas ref={cv} width="1440" height="810" className="h-full w-full object-cover" />
          <span ref={lbl} className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.3em] text-cream">▶ The build · scroll</span>
        </div>
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,.55)_100%)]" />
        {caps.map(([, , n, t], i) => (
          <div key={n} ref={(el) => (cap.current[i] = el)} className="absolute bottom-[9vh] left-6 z-30 opacity-0 md:left-14">
            <p className="eyebrow mb-2">{n} / 04</p><h3 className="font-display text-5xl font-light md:text-8xl">{t}</h3>
          </div>
        ))}
        <div className="absolute right-6 top-1/2 z-30 h-24 w-px -translate-y-1/2 bg-cream/20 md:right-10"><div ref={bar} className="w-px bg-sand" /></div>
      </div>
    </section>
  );
}
