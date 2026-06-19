import { useEffect, useMemo, useRef, useState } from "react";

export default function TokenStream({ text, speed = 38 }) {
  const ref = useRef(null);
  const tokens = useMemo(() => text.split(/(\s+)/).filter(Boolean), [text]);
  const [hasStarted, setHasStarted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const isComplete = visibleCount >= tokens.length;

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setHasStarted(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.22,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || isComplete) {
      return undefined;
    }

    const token = tokens[visibleCount] ?? "";
    const tokenDelay = token.trim() ? speed : Math.max(12, speed / 2);
    const timeout = window.setTimeout(() => {
      setVisibleCount((count) => count + 1);
    }, tokenDelay);

    return () => window.clearTimeout(timeout);
  }, [hasStarted, isComplete, speed, tokens, visibleCount]);

  return (
    <p ref={ref} className="token-stream" aria-label={text}>
      <span aria-hidden="true">
        {tokens.slice(0, visibleCount).map((token, index) => (
          <span className="token-stream__token" key={`${token}-${index}`}>
            {token}
          </span>
        ))}
      </span>
      {!isComplete ? <span className="token-stream__cursor" aria-hidden="true" /> : null}
    </p>
  );
}
