import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { reduceMotion } from "../lib/motion";


function Welcome() {
  useEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.5 })
        .from(".bism", { opacity: 0, y: 10, duration: 1 })
        .from(
          "#nm span",
          {
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
            duration: 1.4,
            stagger: 0.35,
            ease: "power3.out",
            clearProps: "filter",
          },
          "-=.5",
        )
        .from(
          ".en, #welcome .rule, #welcome .lead",
          { opacity: 0, duration: 1.2, stagger: 0.3 },
          "-=.6",
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="welcome" className="flex min-h-svh flex-col justify-center">
      <p className="bism">بسم الله الرحمن الرحيم</p>
      <h1 className="names" id="nm" aria-label="محمد وبسمة">
        <span>محمد</span>
        <span className="amp">&amp;</span>
        <span>بسمة</span>
      </h1>
      <p className="en">Our Forever Begins</p>
      <div className="rule" />
      <p className="lead">
        بكل الحب والسعادة، يسعدنا دعوتكم لمشاركتنا أجمل لحظات العمر.
      </p>
    </section>
  );
}

export default Welcome;
