import { useState } from "react";

import { sendWish } from "../lib/wishes";
const STORE_KEY = "wishes";
const MAX = 500;

function loadWishes() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || [];
  } catch {
    return [];
  }
}

export default function WishForm() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [msg, setMsg] = useState({ type: "", text: "" });
  const [busy, setBusy] = useState(false);
  const [wishes, setWishes] = useState(loadWishes);

  async function onSubmit(e) {
    e.preventDefault();
    const n = name.trim();
    const t = text.trim();
    if (!n || !t) {
      setMsg({ type: "error", text: "من فضلك اكتب اسمك ورسالتك." });
      return;
    }
    if (e.target._gotcha.value) return; // حقل مخفي: لو اتملى يبقى سبام

    setBusy(true);
    setMsg({ type: "", text: "جارٍ الإرسال…" });
    try {
      await sendWish({ name: n, text: t });
      const next = [{ name: n, text: t }, ...wishes];
      setWishes(next);
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(next));
      } catch {}
      setName("");
      setText("");
      setMsg({ type: "ok", text: "وصلتنا رسالتك، شكراً من قلبنا ❤️" });
    } catch {
      setMsg({
        type: "error",
        text: "تعذّر إرسال الرسالة الآن، جرّب مرة أخرى.",
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <section id="wishes">
      <h2>اترك لنا رسالة</h2>
      <div className="rule" />
      <p className="lead">كلماتكم الجميلة هتفضل ذكرى غالية في قلوبنا.</p>

      <form className="wish" onSubmit={onSubmit} noValidate>
        <label htmlFor="wn">اسمك</label>
        <input
          id="wn"
          type="text"
          placeholder="محمد أحمد"
          maxLength={60}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="wt">رسالة التهنئة</label>
        <textarea
          id="wt"
          maxLength={MAX}
          placeholder="بارك الله لكما وبارك عليكما وجمع بينكما في خير..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <p className="count" aria-hidden="true">
          {text.length} / {MAX}
        </p>

        {/* حقل مخفي ضد السبام */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="hp"
        />

        <div className="text-center">
          <button className="btn" type="submit" disabled={busy}>
            {busy ? "جارٍ الإرسال…" : "أرسل التهنئة"}
          </button>
        </div>
        <p
          id="wmsg"
          role="status"
          aria-live="polite"
          className={`text-center wmsg ${msg.type}`}
        >
          {msg.text}
        </p>
      </form>

      {wishes.length > 0 && (
        <div className="wlist">
          {wishes.map((w, i) => (
            <blockquote key={i}>
              <b>{w.name}</b>
              <p>{w.text}</p>
            </blockquote>
          ))}
        </div>
      )}
    </section>
  );
}
