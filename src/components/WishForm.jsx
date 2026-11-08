import { useState } from "react";

export default function WishForm() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const [wishes, setWishes] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      setMsg("من فضلك اكتب اسمك ورسالتك.");
      return;
    }
    setWishes([{ name: name.trim(), text: text.trim() }, ...wishes]);
    setName("");
    setText("");
    setMsg("تم الإرسال، شكراً لك ❤️");
  }

  return (
    <section id="wishes">
      <h2>اترك لنا رسالة</h2>
      <div className="rule" />
      <p className="lead">كلمتك هتفضل معانا طول العمر.</p>
      <form className="wish" onSubmit={onSubmit} noValidate>
        <label htmlFor="wn">اسمك</label>
        <input
          id="wn"
          type="text"
          maxLength={60}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="wt">رسالة التهنئة</label>
        <textarea
          id="wt"
          maxLength={500}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <div className="text-center">
          <button className="btn" type="submit">
            أرسل التهنئة
          </button>
        </div>
        <p id="wmsg" role="status" aria-live="polite" className="text-center">
          {msg}
        </p>
      </form>

      <div className="wlist">
        {wishes.map((w, i) => (
          <blockquote key={i}>
            <b>الاسم : {w.name}</b>
            <b>التهنئه : {w.text}</b>
          </blockquote>
        ))}
      </div>
    </section>
  );
}