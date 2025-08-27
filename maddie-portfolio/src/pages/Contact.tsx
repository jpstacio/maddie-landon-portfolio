export default function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to Formspree/Netlify or your API.
    alert("Thanks! Your message has been captured (demo).");
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <main className="section">
      <div className="container">
        {/* Header: LET'S / CHAT! */}
        <h1 style={{ margin: 0 }}>
          <span className="display" style={{ color: "var(--green)", display: "block" }}>
            LET’S
          </span>
          <span className="display outline" style={{ display: "block", marginTop: "-6px" }}>
            CHAT!
          </span>
        </h1>

        <p className="muted" style={{ maxWidth: 720, marginTop: 8 }}>
          Learn more about me and my work or get in touch so I can help your dream come to life!
        </p>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="card"
          style={{ padding: 24, borderColor: "var(--green)", marginTop: 16 }}
        >
          {/* NAME */}
          <div className="contact-grid">
            <label className="kicker" style={{ fontSize: 28 }} htmlFor="name">
              NAME
            </label>
            <input id="name" name="name" required placeholder="Your name" className="input" />
          </div>

          {/* CONTACT INFO */}
          <div className="contact-grid">
            <label className="kicker" style={{ fontSize: 28 }} htmlFor="contact">
              CONTACT INFO
            </label>
            <input
              id="contact"
              name="contact"
              required
              placeholder="Email or phone"
              className="input"
              inputMode="email"
            />
          </div>

          {/* MESSAGE */}
          <div className="contact-grid" style={{ alignItems: "start" }}>
            <label className="kicker" style={{ fontSize: 28, marginTop: 10 }} htmlFor="message">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about your project…"
              className="textarea"
              rows={6}
            />
          </div>

          <div className="muted" style={{ marginBottom: 12 }}>
            Response time varies.
          </div>

          <button className="btn" type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}
