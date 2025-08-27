// src/pages/Home.tsx
export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="section">
        <div className="container twocol">
          {/* Left: portrait */}
          <img src="/standing-portrait.png" alt="Maddie portrait" className="card hero-img" />

          {/* Right: heading + copy */}
          <div>
            <div className="stack-tight" style={{ margin: 0 }}>
              <div className="display" style={{ color: "var(--green)" }}>DESIGN</div>
              <div className="display outline">PORTFOLIO</div>
            </div>

            <p className="lede" style={{ marginTop: 12 }}>
              Hello, I’m Maddie, a recent BFA Graphic Design graduate from Central Washington University!
            </p>

            <div className="body muted">
              <p>
                While I’m a recent graduate, I have years of experience building relationships with customers and coworkers,
                multi-tasking, and strong communication skills. I’ve taken art classes since middle school as it’s always
                been a hobby of mine and I use this passion to drive my career in graphic design.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
              <a className="btn outline" href="/about">Learn More</a>
              <a className="btn" href="/projects">Projects</a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE band */}
      <section className="section explore-band">
        <div className="container">
          <div className="explore-row">
            <div className="display" style={{ color: "var(--green)" }}>EXPLORE</div>
            <div className="display outline">BRANDING/LOGO</div>
            <div className="display outline">UI/UX DESIGN</div>
            <div className="display outline">ADVERTISING</div>
            <div className="display outline">MOTION/VIDEO</div>
            <div className="display outline">EDITORIAL</div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS + EXPERIENCE */}
  {/* FEATURED PROJECTS + EXPERIENCE */}
<section className="section">
  <div className="container">
    <h2 className="stack-tight" style={{margin:0, marginBottom:24}}>
      <span className="display" style={{color:"var(--green)", display:"block"}}>FEATURED</span>
      <span className="display outline" style={{display:"block"}}>PROJECTS</span>
    </h2>

    <div className="featured-wrap">
      {/* Left: grid (2 columns, equal spacing) */}
      <div className="projects-grid-2x3">
        <a className="tile wide"   href="#"><img src="/slipknot.png" alt="Slip Shop"/><div className="title">SLIP SHOP</div></a>
        <a className="tile square" href="#"><img src="/analogue-trash.png" alt="Analogue Trash"/><div className="title">ANALOGUE TRASH</div></a>
        <a className="tile wide"   href="#"><img src="/marias.png" alt="The Marías—Submarine"/><div className="title">THE MARIAS — SUBMARINE</div></a>
        <a className="tile tall"   href="#"><img src="/aviation.png" alt="Aviation Poster"/><div className="title">AVIATION POSTER</div></a>
        <a className="tile square" href="#"><img src="/campus-cruiser.png" alt="Campus Cruiser"/><div className="title">CAMPUS CRUISER</div></a>
        <a className="tile square" href="https://behance.net/" target="_blank" rel="noreferrer">
          <img src="/proj-6.jpg" alt="More Work"/><div className="title">MORE WORK →</div>
        </a>
      </div>

      {/* Right: Experience column that matches the grid height visually */}
      <aside className="experience">
        <div className="label">EXPERIENCE</div>
        <div className="card">
          <p className="muted">
            During my 6 months working on <strong>PULSE</strong>, an award-winning student run magazine,
            I ideated and designed spreads for stories while incorporating feedback from an art director.
          </p>
          <p className="muted">
            Check out the spreads:
            {" "}<a href="#" target="_blank" rel="noreferrer">Winter 2025 Edition</a>,
            {" "}<a href="#" target="_blank" rel="noreferrer">Spring 2025 Edition</a>.
          </p>
          <p className="muted">
            During my graphic design internship at <strong>Yakima Valley College</strong>, I gained
            experience working with clients and multiple projects under tight deadlines. I used Microsoft
            PowerPoint, Word, Canva, Adobe Creative Cloud, and Adobe Premiere Pro.
          </p>
        </div>
      </aside>
    </div>
  </div>
</section>
    </main>
  );
}
