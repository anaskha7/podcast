import { Link } from "react-router-dom";
import {
  auditBaseline,
  auditFinal,
  projectOverview,
  siteMeta
} from "../data/content";
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
            Proyecto final publicado en React donde el podcast, la promoción en
            vídeo, la transcripción y la documentación quedan integrados en una
            única experiencia web.
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

      <section className="section-panel">
        <div className="section-heading">
          <p className="eyebrow">Contenido</p>
          <h2>Qué incluye la web</h2>
        </div>

        <div className="feature-grid">
          {projectOverview.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel">
        <div className="section-heading">
          <p className="eyebrow">Accesibilidad</p>
          <h2>Auditoría antes y después</h2>
          <p className="section-text">
            La versión inicial ya tenía buena base semántica, pero faltaban
            páginas separadas, formulario accesible y una estructura final más
            completa.
          </p>
        </div>

        <div className="audit-grid">
          <article className="audit-card">
            <h3>Antes</h3>
            <ul className="score-list">
              <li>Rendimiento: {auditBaseline.performance}</li>
              <li>Accesibilidad: {auditBaseline.accessibility}</li>
              <li>Buenas prácticas: {auditBaseline.bestPractices}</li>
              <li>SEO: {auditBaseline.seo}</li>
            </ul>
          </article>

          <article className="audit-card audit-card-strong">
            <h3>Después</h3>
            <ul className="score-list">
              <li>
                Rendimiento:{" "}
                {auditFinal.performance === null ? "Pendiente de medición final" : auditFinal.performance}
              </li>
              <li>
                Accesibilidad:{" "}
                {auditFinal.accessibility === null ? "Pendiente de medición final" : auditFinal.accessibility}
              </li>
              <li>
                Buenas prácticas:{" "}
                {auditFinal.bestPractices === null ? "Pendiente de medición final" : auditFinal.bestPractices}
              </li>
              <li>
                SEO: {auditFinal.seo === null ? "Pendiente de medición final" : auditFinal.seo}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-panel section-panel-compact">
        <div className="publish-grid">
          <div>
            <p className="eyebrow">Entrega</p>
            <h2>Publicación y repositorio</h2>
            <p className="section-text">
              La entrega final queda preparada con una URL pública y un
              repositorio accesible para revisión.
            </p>
          </div>

          <div className="link-list" aria-label="Enlaces del proyecto">
            <a href={siteMeta.publicUrl} target="_blank" rel="noreferrer">
              Abrir web publicada
            </a>
            <a href={siteMeta.repoUrl} target="_blank" rel="noreferrer">
              Abrir repositorio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
