// src/pages/Projects.tsx
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        {/* Header */}
        <h1 style={{ marginBottom: 32 }}>
          <span className="display" style={{ color: "var(--green)", display: "block" }}>
            FEATURED
          </span>
          <span className="display outline" style={{ display: "block", marginTop: "-6px" }}>
            PROJECTS
          </span>
        </h1>

        {/* Grid */}
        <div className="projects-grid">
          <ProjectCard image="/proj-1.jpg" title="Slip Shop" />
          <ProjectCard image="/proj-2.jpg" title="Analogue Trash" />
          <ProjectCard image="/proj-3.jpg" title="The Marías — Submarine" />
          <ProjectCard image="/proj-4.jpg" title="Aviation Poster" />
          <ProjectCard image="/proj-5.jpg" title="Campus Cruiser" />
          <ProjectCard image="/proj-6.jpg" title="More on Behance" href="https://behance.net/" />
        </div>
      </div>
    </main>
  );
}
