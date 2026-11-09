import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import useInView from "../lib/useInView";
import { reduceMotion } from "../lib/motion";

const EVENTS = [
  {
    variant: "a",
    title: "ليلة الحنة",
    rows: [
      ["التاريخ", "18 نوفمبر 2026"],
      ["المكان", "أمام المنزل"],
    ],
    text: "فرحتنا هتحلى بوجودكم معانا، مستنيينكم تشاركونا أجمل اللحظات ❤️",
  },
  {
    variant: "b",
    title: "ليلة الزفاف",
    rows: [
      ["التاريخ", "20 نوفمبر 2026"],
      ["المكان", "قاعة القصر"],
      ["المدينة", "شربين"],
    ],
    text: "في ليلة من أجمل ليالي العمر، وجودكم هو اللي هيكمل فرحتنا.",
  },
];

function EventCard({ ev }) {
  const ref = useRef(null);
  useInView(ref, (el) => {
    if (!reduceMotion)
      gsap.from(el, { opacity: 0, y: 30, duration: 1.4, ease: "power2.out" });
  });
  return (
    <article ref={ref} className={`card ${ev.variant}`}>
      <h3>{ev.title}</h3>
      <dl>
        {ev.rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <p>{ev.text}</p>
    </article>
  );
}

function Events() {
  return (
    <section id="events">
      <h2>موعدنا معاكم</h2>
      <div className="cards">
        {EVENTS.map((ev) => (
          <EventCard key={ev.title} ev={ev} />
        ))}
      </div>
    </section>
  );
}

export default Events;
