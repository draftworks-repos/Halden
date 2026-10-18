"use client";
import { useState } from "react";
const rooms = { Living: ["living-day", "living-night"], Hall: ["hall-day", "hall-night"] };
export default function Spaces() {
  const [room, setRoom] = useState("Living"), [night, setNight] = useState(false);
  return (
    <section id="spaces" className="mx-auto max-w-6xl px-6 py-32">
      <p className="eyebrow">Spaces</p>
      <h2 className="font-display mt-3 text-5xl font-light md:text-8xl">One home, <em>two</em> moods.</h2>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">{Object.keys(rooms).map((r) => (
          <button key={r} onClick={() => setRoom(r)} className={`rounded-full border px-5 py-2 text-sm ${room === r ? "border-sand bg-sand text-ink" : "border-cream/25"}`}>{r}</button>))}
        </div>
        <button onClick={() => setNight(!night)} aria-label="Toggle day and night" className="flex items-center gap-3 rounded-full border border-cream/25 p-1 pr-4 text-sm">
          <span className="grid h-9 w-14 rounded-full bg-cream/10 p-1"><span className={`h-7 w-7 rounded-full bg-sand transition-transform duration-500 ${night ? "translate-x-5" : ""}`} /></span>
          {night ? "Night" : "Day"}
        </button>
      </div>
      <div className="relative mt-8 aspect-video overflow-hidden rounded-[28px]">
        {Object.entries(rooms).flatMap(([r, [d, n]]) => [[r, d, false], [r, n, true]]).map(([r, f, nt]) => (
          <img key={f} src={`/img/${f}.webp`} alt={`${r} ${nt ? "night" : "day"}`} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000" style={{ opacity: r === room && nt === night ? 1 : 0 }} />
        ))}
      </div>
    </section>
  );
}
