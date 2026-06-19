import ThemeToggle from "./ThemeToggle.jsx";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

const handleAnchorClick = (event, href) => {
  const target = document.querySelector(href);

  if (!target) {
    return;
  }

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", href);
};

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a
          className="brand"
          href="#top"
          aria-label="Roydon Tay home"
          onClick={(event) => handleAnchorClick(event, "#top")}
        >
          <span className="brand-mark">RT</span>
          <span>Roydon Tay</span>
        </a>
        <div className="nav-actions">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(event) => handleAnchorClick(event, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
