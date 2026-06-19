import { useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}
