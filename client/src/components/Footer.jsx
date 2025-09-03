export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        © {new Date().getFullYear()} Sandrine Pichla — Tous droits réservés.
      </div>
    </footer>
  );
}