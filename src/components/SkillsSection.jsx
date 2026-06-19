import { skillGroups } from "../content/skills.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function SkillsSection() {
  return (
    <section className="section-shell skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeader
        eyebrow="Skills"
        title="A compact toolkit for shipping data and AI systems."
        id="skills-title"
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal as="article" className="skills-card" key={group.title} delay={index * 90}>
            <h3>{group.title}</h3>
            <ul className="tag-list tag-list--skills">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
