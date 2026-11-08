const MAP_URL = "https://maps.app.goo.gl/39FyDizZ9PHQAXNbA";

export default function Location() {
  return (
    <section id="loc">
      <h2>مكان الفرح</h2>
      <div className="rule" />
      <p className="venue">قاعة القصر – شربين</p>
      <a
        className="btn"
        href={MAP_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        افتح الموقع على الخريطة
      </a>
    </section>
  );
}
