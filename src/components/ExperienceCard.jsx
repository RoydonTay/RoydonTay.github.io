import Reveal from "./Reveal.jsx";

export default function ExperienceCard({ experience, delay = 0 }) {
  const { company, role, period, logo, bullets, tags } = experience;

  return (
    <Reveal as="article" className="experience-card" delay={delay}>
      <div className="experience-card__header">
        <img src={logo} alt={`${company} logo`} className="experience-card__logo" />
        <div>
          <h3>{role}</h3>
          <p className="experience-card__meta">
            <span>{company}</span>
            <span aria-hidden="true">/</span>
            <time>{period}</time>
          </p>
        </div>
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
