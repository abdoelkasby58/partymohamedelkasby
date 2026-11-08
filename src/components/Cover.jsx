import { useEffect, useRef } from "react";
import gsap from "gsap";
import Branch from "./Branch";
import { reduceMotion } from "../lib/motion";

export default function Cover({ opened, onOpen, onGone }) {
  const root = useRef(null);

  useEffect(() => {
    if (reduceMotion) return;
    gsap.from(".frame", {
      opacity: 0,
      y: 24,
      duration: 1.6,
      ease: "power2.out",
    });
    gsap.from(".cover-btn", { opacity: 0, duration: 1.2, delay: 1.1 });
  }, []);

  useEffect(() => {
    if (!opened) return;
    if (reduceMotion) return onGone();
    gsap.to(root.current, {
      opacity: 0,
      scale: 1.04,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: onGone,
    });
  }, [opened]);

  return (
    <div id="cover" ref={root}>
      <Branch
        style={{
          left: -14,
          top: "6%",
          width: 110,
          height: 330,
          transform: "rotate(14deg)",
        }}
      />
      <Branch
        style={{
          right: -14,
          bottom: "4%",
          width: 110,
          height: 330,
          transform: "rotate(194deg)",
        }}
      />
      <div className="frame">
        {/* The original uploaded card, unchanged */}
        <img
          src="/partymohamed.png"
          width="900"
          height="1350"
          alt="بطاقة حفظ الموعد: بسمة ومحمد، 20 / 11 / 2026"
        />
      </div>
      <button className="btn cover-btn" type="button" onClick={onOpen}>
        افتحوا دعوتنا ❤️
      </button>
    </div>
  );
}
