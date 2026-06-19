import Reveal from "./Reveal.jsx";

export default function ExperienceCard({ experience, delay = 0 }) {
  const { company, role, period, bullets, tags } = experience;

  return (
    <Reveal as="article" className="experience-card" delay={delay} replay>
      <div className="experience-card__header">
        <div className="experience-card__titles">
          <h3>{company}</h3>
          <span aria-hidden="true">/</span>
          <h3>{role}</h3>
        </div>
        <p className="experience-card__meta">
          <time>{period}</time>
        </p>
      </div>
      <ul className="experience-card__bullets">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {tags?.length ? (
        <ul className="tag-list" aria-label={`${company} skill tags`}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      ) : null}
    </Reveal>
  );
}
