import SectionHeader from "./SectionHeader.jsx";
import TokenStream from "./TokenStream.jsx";
import Reveal from "./Reveal.jsx";

const introduction =
  "I am a Data Science and Analytics undergraduate at the National University of Singapore, with a minor in Computer Science. I enjoy working at the intersection of machine learning, recommender systems, LLM agents, and applied AI. I am especially interested in turning research ideas into practical systems, whether that means building intelligent chatbots, experimenting with ranking models, or designing AI workflows.";

export default function About() {
  return (
    <section className="section-shell about-section" id="about" aria-labelledby="about-title">
      <SectionHeader
        eyebrow="Introduction"
        title="A practical AI builder with a research habit."
        id="about-title"
      />
      <Reveal className="about-text" delay={120}>
        <TokenStream text={introduction} />
      </Reveal>
    </section>
  );
}
