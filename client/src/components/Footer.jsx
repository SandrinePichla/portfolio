import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__meta">
          <a className="footer__chip" href="tel:+33672758148">
            <FontAwesomeIcon icon={faPhone} className="footer__icon" />
            06 72 75 81 48
          </a>
          <span className="footer__sep" aria-hidden="true" />
          <a className="footer__chip" href="mailto:sandrinepichla@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
            sandrinepichla@hotmail.com
          </a>
          <span className="footer__sep" aria-hidden="true" />
          <a className="footer__chip" href="https://github.com/toncompte" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="footer__icon" />
            GitHub
          </a>
          <span className="footer__sep" aria-hidden="true" />
          <a className="footer__chip" href="https://linkedin.com/in/tonprofil" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="footer__icon" />
            LinkedIn
          </a>
        </div>

        <p className="footer__copy">© {new Date().getFullYear()} Sandrine Pichla — Tous droits réservés.</p>
      </div>
    </footer>
  );
}