
import { NavLink } from "react-router-dom";
import portrait from "@/assets/images/portrait.jpg";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero__inner">
        {/* Colonne photo */}
        <div className="hero__col hero__col--photo">
          <img
            className="hero__photo"
            src={portrait}
            alt="Sandrine Pichla"
          />
        </div>

        {/* Colonne titre */}
        <div className="hero__col hero__col--title">
          <div className="hero__title">
            <h1 className="hero__name">Sandrine Pichla</h1>
            <h2 className="hero__role">Informaticienne</h2>
          </div>

          {/* Coordonnées façon CV */}
          <div className="hero__meta">
            <a className="hero__chip" href="tel:+33672758148">06 72 75 81 48</a>
            <span className="hero__sep" aria-hidden="true" />
            <a className="hero__chip" href="mailto:sandrinepichla@hotmail.com">sandrinepichla@hotmail.com</a>
            <span className="hero__sep" aria-hidden="true" />
            <span className="hero__chip">Saint-Pierre-la-Palud (69210)</span>
          </div>

          {/* CTA */}
          <div className="hero__cta">
            <NavLink to="/projects" className="btn btn--primary">Voir mes projets</NavLink>
            <NavLink to="/contact" className="btn btn--ghost">Me contacter</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}