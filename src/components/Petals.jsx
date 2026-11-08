import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { reduceMotion } from "../lib/motion";

export default function Petals() {
  const root = useRef(null);
  const count = useMemo(
    () => (matchMedia("(max-width:700px)").matches ? 9 : 16),
    [],
  );
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        scale: 0.7 + Math.random() * 0.8,
        small: i % 3 === 0,
      })),
    [count],
  );
  const dust = useMemo(
    () =>
      Array.from({ length: 10 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      })),
    [],
  );

  useEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray(".petal")
        .forEach((p) =>
          gsap.to(p, {
            y: innerHeight + 60,
            x: `+=${Math.random() * 160 - 80}`,
            rotation: Math.random() * 360,
            duration: 14 + Math.random() * 12,
            delay: Math.random() * 14,
            repeat: -1,
            ease: "none",
            startAt: { y: -30 },
          }),
        );
      gsap.utils
        .toArray(".dust")
        .forEach((d) =>
          gsap.to(d, {
            y: -40,
            opacity: 0.05,
            duration: 5 + Math.random() * 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 4,
          }),
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div className="fx" ref={root} aria-hidden="true">
      {petals.map((p, i) => (
        <div
          key={i}
          className={`petal${p.small ? " s" : ""}`}
          style={{ left: p.left + "%", transform: `scale(${p.scale})` }}
        />
      ))}
      {dust.map((d, i) => (
        <div
          key={i}
          className="dust"
          style={{ left: d.left + "%", top: d.top + "%" }}
        />
      ))}
    </div>
  );
}
