import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/",          label: "Accueil" },
  { to: "/projects",  label: "Projets" },
  { to: "/skills",    label: "Compétences" },
  { to: "/resume",    label: "CV" },
  { to: "/contact",   label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink className="header__brand" to="/">Sandrine Pichla</NavLink>
        <ul className="header__menu">
          {LINKS.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  "header__link" + (isActive ? " is-active" : "")
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}