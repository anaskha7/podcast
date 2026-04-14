import { Link } from "react-router-dom";
import { siteMeta } from "../data/content";
import { downloadReportPdf } from "../lib/report";

const summaryCards = [
  { label: "Formato", value: "Web React publicada" },
  { label: "Tema central", value: "Debate sobre la Copa de África 2025" },
  { label: "Acceso", value: "Audio, vídeo y texto" }
];

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Inicio</p>
          <h1>{siteMeta.title}</h1>
          <p className="lead">
            Podcast sobre un debate de la Copa de África 2025 con audio
            integrado, vídeo dentro de la web y transcripción completa.
          </p>

          <div className="action-row">
            <Link className="button button-primary" to="/podcast">
              Ir a la página del podcast
            </Link>
            <Link className="button button-secondary" to="/contacto">
              Abrir contacto
            </Link>
            <button
              className="button button-secondary"
              type="button"
              onClick={downloadReportPdf}
            >
              Descargar informe PDF
            </button>
          </div>
        </div>

        <aside className="summary-grid" aria-label="Resumen del proyecto">
          {summaryCards.map((card) => (
            <article key={card.label} className="summary-card">
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </article>
          ))}
        </aside>
      </section>
    </div>
  );
}
