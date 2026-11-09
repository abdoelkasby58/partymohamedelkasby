import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import Branch from "./Branch";
import useInView from "../lib/useInView";
import { reduceMotion } from "../lib/motion";


function Final() {
  const ref = useRef(null);
  useInView(ref, () => {
    if (reduceMotion) return;
    gsap.from("#bg, #end .lead, #end .rule, #end .names", {
      opacity: 0,
      y: 14,
      duration: 1.6,
      stagger: 0.5,
      ease: "power2.out",
    });
    gsap.to("#ht", {
      scale: 1.25,
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <section id="end" ref={ref} style={{ paddingBottom: "7rem" }}>
      <Branch
        style={{
          position: "absolute",
          left: 15,
          bottom: 20,
          width: 90,
          height: 270,
          transform: "rotate(5deg)",
        }}
      />
      <Branch
        style={{
          position: "absolute",
          right: 15,
          bottom: 20,
          width: 90,
          height: 270,
          transform: "rotate(-8deg) scaleX(-1)",
        }}
      />
      <p className="big" id="bg">
        وجودكم وسط فرحتنا هو أجمل هدية لينا.
      </p>
      <p className="lead">
        ربنا يتمم فرحتنا على خير ويجمعنا دايماً في الخير والسعادة.
      </p>
      <div className="rule" />
      <p className="names" style={{ margin: 0 }}>
        محمد <span className="amp">&amp;</span> بسمة
      </p>
      <span className="heart" id="ht" aria-hidden="true">
        ❤
      </span>
    </section>
  );
}

export default Final;
