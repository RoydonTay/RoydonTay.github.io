import headshotPlaceholder from "../assets/headshot-placeholder.jpg";

const links = {
  linkedin: "https://www.linkedin.com/in/roydon-tay/",
  github: "https://github.com/RoydonTay",
};

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section className="hero section-shell hero--animated" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">
          Data Science / Applied AI / Product-minded engineering
          <span className="hero-wipe hero-wipe--one" aria-hidden="true" />
        </p>
        <h1 id="hero-title">
          Hi, I am <span>Roydon</span>
          <span className="hero-wipe hero-wipe--two" aria-hidden="true" />
        </h1>
        <div className="hero__role" aria-label="Applied AI and machine learning engineer">
          <span>Applied AI Builder</span>
          <span className="hero-wipe hero-wipe--three" aria-hidden="true" />
        </div>
        <p className="hero__summary">
          I build practical AI systems across recommender models, LLM agents, retrieval workflows,
          and data products.
          <span className="hero-wipe hero-wipe--four" aria-hidden="true" />
        </p>
        <div className="hero__actions" aria-label="Primary links">
          <a className="button button--primary" href={resumeUrl} download>
            Download Resume
          </a>
          <a className="button button--secondary" href={links.linkedin} target="_blank" rel="noreferrer">
            View LinkedIn
          </a>
          <a className="button button--ghost" href={links.github} target="_blank" rel="noreferrer">
            View GitHub / Portfolio
          </a>
          <span className="hero-wipe hero-wipe--five" aria-hidden="true" />
        </div>
        <div className="hero__social" aria-label="Social links">
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            in
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            GH
          </a>
          <a href="mailto:roydontay21@gmail.com" aria-label="Email Roydon">
            @
          </a>
          <span className="hero-wipe hero-wipe--six" aria-hidden="true" />
        </div>
      </div>
      <div className="hero__portrait-wrap" aria-label="Portrait of Roydon Tay">
        <div className="hero__portrait-bubble">
          <img
            src={headshotPlaceholder}
            alt="Placeholder headshot for Roydon Tay"
            className="hero__portrait"
          />
        </div>
        <span className="hero-wipe hero-wipe--image" aria-hidden="true" />
      </div>
    </section>
  );
}
