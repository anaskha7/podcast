import { chapters, siteMeta, transcript } from "../data/content";

export function PodcastPage() {
  return (
    <div className="page-stack">
      <section className="section-panel page-intro">
        <p className="eyebrow">Podcast</p>
        <h1>Página del podcast</h1>
        <p className="lead page-lead">
          Esta página concentra el episodio principal, la división en tres
          capítulos, el vídeo promocional y la transcripción completa del
          fragmento seleccionado.
        </p>
      </section>

      <section className="section-panel">
        <div className="section-heading">
          <p className="eyebrow">Reproductor principal</p>
          <h2>Episodio completo</h2>
          <p className="section-text">
            El audio corresponde al mismo fragmento utilizado en la promoción
            en vídeo, para mantener una experiencia coherente dentro de la web.
          </p>
        </div>

        <div className="player-card">
          <audio
            className="media-player"
            controls
            preload="metadata"
            aria-label="Reproductor del episodio completo"
          >
            <source src={siteMeta.fullEpisodeSrc} type="audio/mpeg" />
            Tu navegador no puede reproducir este audio.
          </audio>
        </div>
      </section>

      <section className="section-panel">
        <div className="section-heading">
          <p className="eyebrow">Capítulos</p>
          <h2>Escucha por partes</h2>
        </div>

        <div className="chapter-grid">
          {chapters.map((chapter) => (
            <article key={chapter.title} className="chapter-card">
              <div className="chapter-head">
                <div>
                  <p className="chapter-kicker">{chapter.duration}</p>
                  <h3>{chapter.title}</h3>
                </div>
              </div>
              <p>{chapter.description}</p>
              <audio
                className="media-player"
                controls
                preload="metadata"
                aria-label={`Reproductor de ${chapter.title}`}
              >
                <source src={chapter.src} type="audio/mpeg" />
                Tu navegador no puede reproducir este audio.
              </audio>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel">
        <div className="section-heading">
          <p className="eyebrow">Promoción integrada</p>
          <h2>Vídeo promocional</h2>
          <p className="section-text">
            El vídeo se puede ver directamente dentro de la web, sin depender
            de abrir otra página aparte.
          </p>
        </div>

        <div className="video-card">
          <video
            className="video-player"
            controls
            preload="metadata"
            poster={siteMeta.promoPosterSrc}
            aria-label="Vídeo promocional del podcast"
          >
            <source src={siteMeta.promoVideoSrc} type="video/mp4" />
            Tu navegador no puede reproducir este vídeo.
          </video>
        </div>
      </section>

      <section className="section-panel">
        <div className="section-heading">
          <p className="eyebrow">Transcripción</p>
          <h2>Transcripción completa del episodio</h2>
          <p className="section-text">
            La transcripción se muestra por bloques temporales para facilitar
            la lectura y la localización de cada momento del debate.
          </p>
        </div>

        <ol className="transcript-list">
          {transcript.map((item) => (
            <li key={`${item.time}-${item.text}`} className="transcript-item">
              <div className="transcript-meta">
                <span>{item.time}</span>
                <span>{item.speaker}</span>
              </div>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
