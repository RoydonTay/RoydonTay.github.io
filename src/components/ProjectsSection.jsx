import { projects } from "../content/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function ProjectsSection() {
  return (
    <section className="section-shell" id="projects" aria-labelledby="projects-title">
      <SectionHeader
        eyebrow="Selected Projects"
        title="Focused builds that connect models, data, and real users."
        id="projects-title"
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} delay={index * 90} />
        ))}
      </div>
    </section>
  );
}
