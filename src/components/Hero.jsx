import { useEffect, useState } from "react";
import headshotPlaceholder from "../assets/image.jpeg";

const links = {
  linkedin: "https://www.linkedin.com/in/roydon-tay/",
  github: "https://github.com/RoydonTay",
};

const roles = ["AI Engineer", "ML Engineer", "Researcher"];

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isComplete = characterCount === currentWord.length;
    const isEmpty = characterCount === 0;
    const delay = isComplete && !isDeleting ? 1300 : isDeleting ? 46 : 82;

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setCharacterCount((count) => count + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterCount, isDeleting, wordIndex, words]);

  return words[wordIndex].slice(0, characterCount);
}

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
  const typedRole = useTypewriter(roles);

  return (
    <section className="hero section-shell hero--animated" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">
          Data Science / ML Engineering / Applied AI / Research
          <span className="hero-wipe hero-wipe--one" aria-hidden="true" />
        </p>
        <h1 id="hero-title">
          Hi, I am <span>Roydon</span>
          <span className="hero-wipe hero-wipe--two" aria-hidden="true" />
        </h1>
        <div className="hero__role" aria-label={typedRole || roles[0]}>
          <span className="hero__role-text" aria-hidden="true">
            {typedRole}
            <span className="hero__role-cursor" />
          </span>
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
