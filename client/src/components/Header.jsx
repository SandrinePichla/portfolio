export default function Header() {
  const links = [
    { href: "#home", label: "Accueil" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "#resume", label: "CV" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="header">
      <nav className="header__nav">
        <a className="header__brand" href="#home">TonNom</a>
        <ul className="header__menu">
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}