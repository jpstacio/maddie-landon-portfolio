export default function About() {
  return (
    <main className="section">
      <div className="container twocol">
        {/* Left: portrait */}
        <img src="/portrait.png" alt="Maddie portrait" className="card" />


        {/* Right: heading + copy */}
        <div>
          <h1 aria-label="About me" className="stack-tight" style={{ margin: 0 }}>
            <span className="display" style={{ color: "var(--green)", display: "block" }}>ABOUT</span>
            <span className="display outline" style={{ display: "block" }}>ME</span>
          </h1>

          {/* Lede with green block */}
          <p className="lede">
            If there’s anything to know about me, it’s that I’m addicted to watching TikTok videos
            so you know I’m up-to-date on what’s trending!
          </p>

          {/* Body copy (size/leading & spacing match) */}
          <div className="body muted">
            <p>
              I grew up in Bremerton, WA and started working as soon as I could drive. One of my first
              jobs was Dutch Bros where I stayed for several years, including summer breaks. I’ve always
              enjoyed working hard and meeting new people whether it was coworkers or customers.
            </p>
            <p>
              When I’m not on a screen, I enjoy going on walks, working out, crocheting, playing the guitar,
              and watching movies. I specifically enjoy watching Rom-Coms, one of my favorites being
              <em> 10 Things I Hate About You</em>.
            </p>
            <p>
              People who know me would say I’m kind, down-to-earth, and a leader by example.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
