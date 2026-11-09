import { useEffect, useState } from "react";

const TARGET = new Date("2026-11-20T00:00:00+02:00").getTime(); // change the hour here if needed
const pad = (n) => String(n).padStart(2, "0");

function left() {
  const t = Math.max(0, TARGET - Date.now());
  return [
    Math.floor(t / 864e5),
    Math.floor((t % 864e5) / 36e5),
    Math.floor((t % 36e5) / 6e4),
    Math.floor((t % 6e4) / 1e3),
  ];
}

import React from "react";

function Countdown() {
  const [v, setV] = useState(left);
  useEffect(() => {
    const id = setInterval(() => setV(left()), 1000);
    return () => clearInterval(id);
  }, []);
  const units = ["يوم", "ساعة", "دقيقة", "ثانية"];

  return (
    <section id="count">
      <h2>باقي على فرحتنا</h2>
      <div className="cd" role="timer" aria-live="off">
        {units.map((u, i) => (
          <div key={u} className="contents">
            <div>
              <b>{pad(v[i])}</b>
              <small>{u}</small>
            </div>
            {i < 3 && <i>:</i>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Countdown;
