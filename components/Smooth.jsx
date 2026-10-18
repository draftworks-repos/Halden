"use client";
import { useEffect } from "react";
import Lenis from "lenis";
export default function Smooth() {
  useEffect(() => {
    const l = new Lenis({ lerp: 0.09 }); let r;
    const f = (t) => { l.raf(t); r = requestAnimationFrame(f); }; r = requestAnimationFrame(f);
    return () => { cancelAnimationFrame(r); l.destroy(); };
  }, []);
  return null;
}
