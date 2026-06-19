import Reveal from "./Reveal.jsx";

export default function ProjectCard({ project, delay = 0 }) {
  const hasLinks = project.links?.github || project.links?.demo;

  return (
    <Reveal as="article" className="project-card" delay={delay}>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <ul className="tag-list" aria-label={`${project.title} tags`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {hasLinks ? (
        <div className="project-card__links">
          {project.links.github ? (
            <a href={project.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
          {project.links.demo ? (
            <a href={project.links.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          ) : null}
        </div>
      ) : null}
    </Reveal>
  );
}
