// src/components/ProjectCard.tsx
type Props = {
  image: string;
  title: string;
  href?: string;
};

export default function ProjectCard({ image, title, href }: Props) {
  const content = (
    <div className="card" style={{ position: "relative", overflow: "hidden" }}>
      <img src={image} alt={title} />
      <div
        style={{
          position: "absolute",
          inset: "auto 12px 12px 12px",
          color: "white",
          fontWeight: 900,
          fontSize: "clamp(20px, 2vw, 28px)",
          lineHeight: 1.05,
          textTransform: "uppercase",
          textShadow: "0 2px 10px rgba(0,0,0,.35)",
        }}
      >
        {title}
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
