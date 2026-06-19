const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__name">Roydon Tay Kaiying</p>
          <a href="mailto:roydontay21@gmail.com">roydontay21@gmail.com</a>
        </div>
        <div className="site-footer__links" aria-label="Footer links">
          <a href="https://www.linkedin.com/in/roydon-tay/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/RoydonTay" target="_blank" rel="noreferrer">
            GitHub / Portfolio
          </a>
        </div>
        <p className="site-footer__small">© {currentYear} Roydon Tay. Built with React.</p>
      </div>
    </footer>
  );
}
