import { experiences } from "../content/experiences.js";
import ExperienceCard from "./ExperienceCard.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function ExperienceSection() {
  return (
    <section className="section-shell" id="experience" aria-labelledby="experience-title">
      <SectionHeader
        eyebrow="Experience"
        title="Internships across research, recommender systems, and applied AI."
        id="experience-title"
      />
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.role}`}
            experience={experience}
            delay={index * 90}
          />
        ))}
      </div>
    </section>
  );
}
