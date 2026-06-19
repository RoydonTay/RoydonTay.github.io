import Reveal from "./Reveal.jsx";

export default function SectionHeader({ eyebrow, title, description, id }) {
  return (
    <Reveal className="section-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </Reveal>
  );
}
