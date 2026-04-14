import { NavLink, Outlet } from "react-router-dom";
import { siteMeta } from "../data/content";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/podcast", label: "Podcast" },
  { to: "/contacto", label: "Contacto" }
];

export function SiteLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>

      <header className="site-header">
        <div className="shell site-header-inner">
          <div className="brand-block">
            <p className="brand-kicker">Proyecto React publicado</p>
            <span className="brand-name">{siteMeta.shortTitle}</span>
          </div>

          <nav className="site-nav" aria-label="Principal">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="contenido-principal" className="site-main shell" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="shell site-footer-inner">
          <p>
            Web publicada en{" "}
            <a href={siteMeta.publicUrl} target="_blank" rel="noreferrer">
              Vercel
            </a>
            {" "}y código disponible en{" "}
            <a href={siteMeta.repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
          <p>{siteMeta.author}</p>
        </div>
      </footer>
    </div>
  );
}
