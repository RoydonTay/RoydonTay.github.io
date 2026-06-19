import { skillGroups } from "../content/skills.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const skills = skillGroups.flatMap((group) => group.skills);
const firstRowSkills = skills.filter((_, index) => index % 2 === 0);
const secondRowSkills = skills.filter((_, index) => index % 2 === 1);

function SkillMarqueeRow({ skills: rowSkills, direction = "left" }) {
  return (
    <div className={`skills-marquee__row skills-marquee__row--${direction}`}>
      <ul className="skills-marquee__track">
        {[...rowSkills, ...rowSkills].map((skill, index) => (
          <li
            className="skill-bubble"
            key={`${direction}-${skill}-${index}`}
            aria-hidden={index >= rowSkills.length}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="section-shell skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeader
        eyebrow="Skills"
        title="A compact toolkit for shipping data and AI systems."
        id="skills-title"
      />
      <Reveal className="skills-marquee" delay={120} aria-label="Roydon's technical skills">
        <SkillMarqueeRow skills={firstRowSkills} direction="left" />
        <SkillMarqueeRow skills={secondRowSkills} direction="right" />
      </Reveal>
    </section>
  );
}
