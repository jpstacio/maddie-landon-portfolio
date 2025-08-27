export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16}}>
        <span>check out my socials!</span>
        <nav style={{display:"flex",gap:12}}>
          <a href="https://behance.net/" target="_blank" rel="noreferrer" className="badge" aria-label="Behance">Bē</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="badge" aria-label="LinkedIn">in</a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="badge" aria-label="Instagram">IG</a>
        </nav>
      </div>
    </footer>
  );
}
