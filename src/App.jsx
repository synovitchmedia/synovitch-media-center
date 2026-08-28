import { useState } from "react";
import "./App.css";

const contact = {
  email: "synovitchmediacenter@gmail.com",
  whatsapp: "https://wa.me/2250504831090",
};

const stats = [
  ["150+", "Projets réalisés"],
  ["80+", "Clients satisfaits"],
  ["5+", "Années d’expérience"],
  ["ABJ", "Abidjan, Côte d’Ivoire"],
];

const services = [
  {
    number: "01",
    title: "Production vidéo",
    text: "Films de marque, publicités et contenus qui donnent du mouvement à vos idées.",
  },
  {
    number: "02",
    title: "Photographie",
    text: "Des images précises et sensibles pour révéler vos produits, équipes et univers.",
  },
  {
    number: "03",
    title: "Montage & post-production",
    text: "Rythme, couleur et finition : chaque détail compte jusqu’à la dernière image.",
  },
  {
    number: "04",
    title: "Audio & musique",
    text: "Une identité sonore qui installe l’émotion et rend vos messages mémorables.",
  },
  {
    number: "05",
    title: "Marketing digital",
    text: "Des contenus pensés pour circuler, engager et construire une présence durable.",
  },
];

const projects = [
  ["Publicité automobile", "Campagne / Film de marque"],
  ["Clip musical", "Direction artistique / Clip"],
  ["Film institutionnel", "Portrait / Entreprise"],
  ["Spot commercial", "Publicité / Social media"],
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">
      <header className="navbar">
        <a href="#accueil" className="logo">
          <span className="logo-mark">S</span>
          <span>
            SYNOVITCH
            <small>MEDIA CENTER</small>
          </span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#projets" onClick={() => setMenuOpen(false)}>Projets</a>
          <a href="#agence" onClick={() => setMenuOpen(false)}>L’agence</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a className="nav-cta" href={contact.whatsapp} target="_blank" rel="noreferrer">
          Parlons de votre projet ↗
        </a>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>

          <div className="hero-content">
            <p className="eyebrow">STUDIO CRÉATIF · ABIDJAN</p>

            <h1>
              Nous donnons
              <br />
              <em>vie à vos idées.</em>
            </h1>

            <p className="hero-text">
              SYNOVITCH MEDIA CENTER accompagne les marques, entreprises et
              artistes dans la création de contenus visuels et sonores
              qui marquent les esprits.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projets">
                Découvrir nos projets
              </a>
              <a className="button button-secondary" href="#contact">
                Nous contacter
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span>SMC</span>
              <span>01 / 05</span>
            </div>
            <div className="hero-card-center">
              <div className="play">▶</div>
              <p>CREATE · CAPTURE · CONNECT</p>
            </div>
          </div>
        </section>

        <section className="stats">
          {stats.map(([number, label]) => (
            <div className="stat" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section services" id="services">
          <SectionHeading
            eyebrow="NOS EXPERTISES"
            title="Une vision. Plusieurs savoir-faire."
            text="De l’idée à la diffusion, nous construisons des expériences de marque cohérentes, créatives et efficaces."
          />

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projets">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Des images qui parlent."
            text="Quelques univers créatifs parmi les projets que nous pouvons imaginer avec vous."
          />

          <div className="projects-grid">
            {projects.map(([title, category], index) => (
              <article className={`project project-${index + 1}`} key={title}>
                <div className="project-overlay">
                  <span>{category}</span>
                  <h3>{title}</h3>
                  <a href="#contact">Voir le projet ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="agence">
          <div className="about-number">SMC</div>

          <div>
            <p className="eyebrow">L’AGENCE</p>
            <h2>
              La créativité au service
              <br />
              de <em>l’impact.</em>
            </h2>
          </div>

          <div className="about-text">
            <p>
              Nous croyons qu’une bonne image ne se contente pas d’être belle.
              Elle doit raconter, provoquer une émotion et rester en mémoire.
            </p>
            <p>
              Notre approche combine direction artistique, production,
              technologie et stratégie pour créer des contenus qui servent
              réellement vos ambitions.
            </p>
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">UN PROJET EN TÊTE ?</p>
            <h2>
              Faisons quelque chose
              <br />
              de <em>mémorable.</em>
            </h2>
          </div>

          <div className="contact-actions">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp ↗
            </a>
            <a href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="logo">
          <span className="logo-mark">S</span>
          <span>
            SYNOVITCH
            <small>MEDIA CENTER</small>
          </span>
        </div>

        <p>© 2026 SYNOVITCH MEDIA CENTER · Abidjan, Côte d’Ivoire</p>

        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </div>
  );
}

export default App;
