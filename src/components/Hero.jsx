import headshotPlaceholder from "../assets/headshot-placeholder.jpg";

const links = {
  linkedin: "https://www.linkedin.com/in/roydon-tay/",
  github: "https://github.com/RoydonTay",
};

export default function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">Data Science / Applied AI / Product-minded engineering</p>
        <h1 id="hero-title">Hi there, I am Roydon</h1>
        <p className="hero__summary">
          I build practical AI systems across recommender models, LLM agents, retrieval workflows,
          and data products.
        </p>
        <div className="hero__actions" aria-label="Primary links">
          <a className="button button--primary" href="/resume.pdf" download>
            Download Resume
          </a>
          <a className="button button--secondary" href={links.linkedin} target="_blank" rel="noreferrer">
            View LinkedIn
          </a>
          <a className="button button--ghost" href={links.github} target="_blank" rel="noreferrer">
            View GitHub / Portfolio
          </a>
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
      </div>
    </section>
  );
}
