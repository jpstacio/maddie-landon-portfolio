import "./../styles/home.css";
import ProjectCard from "../components/ProjectCard";

export default function Home(){
  return (
    <main>
      {/* Hero */}
// inside <section className="section"> ... </section> for the hero
<div className="container twocol">
  <img src="/portrait.jpg" alt="Maddie portrait" className="card" />
  <div>
    <div className="stack-tight" style={{ margin: 0 }}>
      <div className="display" style={{ color: "var(--green)" }}>DESIGN</div>
      <div className="display outline">PORTFOLIO</div>
    </div>

    {/* Lede matches About’s style */}
    <p className="lede" style={{ marginTop: 12 }}>
      Hello, I’m Maddie, a recent BFA Graphic Design graduate from Central Washington University!
    </p>

    {/* Body copy block matches About */}
    <div className="body muted">
      <p>
        While I’m a recent graduate, I have years of experience building relationships, multi-tasking,
        and strong communication skills. I’ve taken art classes since middle school and use this passion
        to drive my career in graphic design.
      </p>
    </div>

    <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
      <a className="btn outline" href="/about">Learn More</a>
      <a className="btn" href="/projects">Projects</a>
    </div>
  </div>
</div>


      {/* Explore */}
      <section className="section">
        <div className="container">
          <div className="kicker">EXPLORE</div>
          <div className="huge outline" style={{fontSize:"clamp(22px,3.2vw,38px)", marginTop:8}}>
            BRANDING/LOGO &nbsp; UI/UX DESIGN &nbsp; ADVERTISING &nbsp; MOTION/VIDEO &nbsp; EDITORIAL
          </div>
        </div>
      </section>

      {/* Featured + Experience */}
      <section className="section">
        <div className="container grid" style={{gridTemplateColumns:"2fr 1fr", alignItems:"start"}}>
          {/* Grid of projects */}
          <div className="grid" style={{gridTemplateColumns:"repeat(2, 1fr)"}}>
            <ProjectCard image="/proj-1.jpg" title="SLIP SHOP"/>
            <ProjectCard image="/proj-2.jpg" title="ANALOGUE TRASH"/>
            <ProjectCard image="/proj-3.jpg" title="THE MARIAS — Submarine"/>
            <ProjectCard image="/proj-4.jpg" title="AVIATION POSTER"/>
            <ProjectCard image="/proj-5.jpg" title="CAMPUS CRUISER"/>
            <ProjectCard image="/proj-6.jpg" title="MORE WORK →"/>
          </div>

          {/* Experience column */}
          <aside style={{position:"relative"}}>
            <div className="huge kicker" style={{writingMode:"vertical-rl", transform:"rotate(180deg)", position:"absolute", left:"-40px", top:0}}>
              EXPERIENCE
            </div>
            <div className="card" style={{padding:20, marginLeft:24}}>
              <p className="muted"><strong>PULSE (student-run magazine)</strong><br/>
                6-month role ideating and designing spreads while incorporating feedback from an art director.
                Check out the spreads: <a href="#" style={{color:"var(--green)"}}>Winter 2025 Edition</a>, <a href="#" style={{color:"var(--green)"}}>Spring 2025 Edition</a>.
              </p>
              <p className="muted"><strong>Yakima Valley College</strong><br/>
                Graphic design internship working with clients and tight deadlines. Comfortable with Microsoft
                tools, Canva, Adobe Creative Cloud & Premiere Pro.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
