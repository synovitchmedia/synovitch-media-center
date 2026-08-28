import { useState } from "react";
import "./App.css";

const contact = {
  email: "synovitchmediacenter@gmail.com",
  whatsapp: "https://wa.me/2250504831090",
};

const stats = [
  ["150+", "Projets réalisés"],
  ["80+", "Clients satisfaits"],
  ["5+", "Années d'expérience"],
  ["ABJ", "Abidjan, Côte d'Ivoire"],
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
    text: "Rythme, couleur et finition : chaque détail compte jusqu'à la dernière image.",
  },
  {
    number: "04",
    title: "Audio & musique",
    text: "Une identité sonore qui installe l'émotion et rend vos messages mémorables.",
  },
  {
    number: "05",
    title: "Marketing digital",
    text: "Des contenus pensés pour circuler, engager et construire une présence durable.",
  },
];

const projects = [
  {
    title: "Publicité automobile",
    category: "Campagne / Film de marque",
    image: "https://images.unsplash.com/photo-1617469767537-b85ba699fcde?w=800&h=600&fit=crop",
    fallback: "https://via.placeholder.com/800x600/1a1a1a/c9a45c?text=Publicité+Automobile",
  },
  {
    title: "Clip musical",
    category: "Direction artistique / Clip",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    fallback: "https://via.placeholder.com/800x600/1a1a1a/c9a45c?text=Clip+Musical",
  },
  {
    title: "Film institutionnel",
    category: "Portrait / Entreprise",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
    fallback: "https://via.placeholder.com/800x600/1a1a1a/c9a45c?text=Film+Institutionnel",
  },
  {
    title: "Spot commercial",
    category: "Publicité / Social media",
    image: "https://images.unsplash.com/photo-1578567321235-9cfe4248b26e?w=800&h=600&fit=crop",
    fallback: "https://via.placeholder.com/800x600/1a1a1a/c9a45c?text=Spot+Commercial",
  },
];

const manifestoPhrases = [
  {
    text: "Les grandes idées commencent toujours quelque part.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    fallback: "linear-gradient(135deg, rgba(201,164,92,0.1), rgba(9,9,9,0.9))",
  },
  {
    text: "Créons aujourd'hui les images qui raconteront demain.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    fallback: "linear-gradient(135deg, rgba(9,9,9,0.9), rgba(201,164,92,0.1))",
  },
  {
    text: "L'Afrique ne manque pas d'idées. Elle mérite de les faire rayonner.",
    image: "https://images.unsplash.com/photo-1516738901601-de50cf0d2b4b?w=1200&h=600&fit=crop",
    fallback: "linear-gradient(135deg, rgba(120,100,70,0.2), rgba(9,9,9,0.95))",
  },
  {
    text: "Votre vision mérite une image à sa hauteur.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=600&fit=crop",
    fallback: "linear-gradient(135deg, rgba(201,164,92,0.15), rgba(0,0,0,0.95))",
  },
];

const africaHighlights = [
  {
    title: "Talents Africains",
    description: "Révéler et amplifier les voix créatives du continent",
    icon: "🎬",
  },
  {
    title: "Entrepreneuriat & Innovation",
    description: "Accompagner la croissance économique avec des images percutantes",
    icon: "🚀",
  },
  {
    title: "Culture & Créativité",
    description: "Célébrer la richesse culturelle et la modernité africaine",
    icon: "🎭",
  },
  {
    title: "Technologie & Développement",
    description: "Montrer une Afrique ambitieuse, connectée et tournée vers l'avenir",
    icon: "💡",
  },
];

const whyUs = [
  {
    title: "Vision Créative",
    description: "Une approche artistique unique mêlant tradition et modernité africaine",
  },
  {
    title: "Qualité Professionnelle",
    description: "Standards internationaux appliqués à chaque projet",
  },
  {
    title: "Identité Africaine",
    description: "Expertise dans la valorisation de l'Afrique et des talents du continent",
  },
  {
    title: "Technologie Premium",
    description: "Équipements et expertise à la pointe de l'audiovisuel mondial",
  },
  {
    title: "Accompagnement Personnalisé",
    description: "Un partenaire qui comprend vraiment votre ambition",
  },
  {
    title: "Ambition Mondiale",
    description: "Créer localement, impacter globalement",
  },
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
          <a href="#afrique" onClick={() => setMenuOpen(false)}>Afrique</a>
          <a href="#agence" onClick={() => setMenuOpen(false)}>L'agence</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a className="nav-cta" href={contact.whatsapp} target="_blank" rel="noreferrer">
          Parlons de votre projet ↗
        </a>
      </header>

      <main>
        {/* HERO SECTION */}
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
              De l'idée à la diffusion, nous créons des expériences visuelles et sonores qui marquent les esprits. SYNOVITCH MEDIA CENTER accompagne les marques, entreprises et artistes dans une vision créative sans limites.
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

        {/* STATS */}
        <section className="stats">
          {stats.map(([number, label]) => (
            <div className="stat" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        {/* SERVICES SECTION */}
        <section className="section services" id="services">
          <SectionHeading
            eyebrow="NOS EXPERTISES"
            title="Une vision. Plusieurs savoir-faire."
            text="De l'idée à la diffusion, nous construisons des expériences de marque cohérentes, créatives et efficaces."
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

        {/* PROJECTS SECTION */}
        <section className="section projects" id="projets">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Des images qui parlent."
            text="Quelques univers créatifs parmi les projets que nous pouvons imaginer avec vous."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article 
                className={`project project-${index + 1}`} 
                key={project.title}
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="project-overlay">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <a href="#contact">Voir le projet ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AFRICA SECTION */}
        <section className="section africa" id="afrique">
          <div className="africa-header">
            <SectionHeading
              eyebrow="NOTRE CONVICTION"
              title="L'Afrique crée. Le monde regarde."
              text="Nous croyons en une Afrique créative, ambitieuse et capable de raconter ses propres histoires au monde."
            />
          </div>

          <div className="africa-grid">
            {africaHighlights.map((highlight, index) => (
              <div className="africa-card" key={highlight.title}>
                <div className="africa-card-icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="africa-cta">
            <p>L'Afrique n'a pas besoin de clichés. Elle a besoin d'histoires authentiques, ambitieuses et inspirantes.</p>
          </div>
        </section>

        {/* MANIFESTO SECTION */}
        <section className="section manifesto">
          <div className="manifesto-header">
            <h2>Notre Manifeste</h2>
            <p>Des idées qui créent l'impact</p>
          </div>

          <div className="manifesto-grid">
            {manifestoPhrases.map((phrase, index) => (
              <div 
                className="manifesto-card" 
                key={index}
                style={{
                  backgroundImage: `url('${phrase.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="manifesto-overlay">
                  <h3>{phrase.text}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNATIONAL SECTION */}
        <section className="section international">
          <SectionHeading
            eyebrow="VISION MONDIALE"
            title="D'Abidjan au monde."
            text="Nous construisons des histoires capables de traverser les frontières, les cultures et les écrans."
          />

          <div className="international-grid">
            <div className="international-card">
              <div className="intl-icon">🌍</div>
              <h3>Créer Localement</h3>
              <p>Enracinés à Abidjan, nous comprenons les nuances locales et l'identité africaine.</p>
            </div>
            <div className="international-card">
              <div className="intl-icon">🚀</div>
              <h3>Penser Mondialement</h3>
              <p>Avec une expertise reconnue internationalement et une ambition sans limites.</p>
            </div>
            <div className="international-card">
              <div className="intl-icon">🌟</div>
              <h3>Rayonner Partout</h3>
              <p>Vos projets trouvent leur audience, qu'elle soit à proximité ou à l'autre bout du monde.</p>
            </div>
          </div>
        </section>

        {/* WHY US SECTION */}
        <section className="section why-us">
          <SectionHeading
            eyebrow="VOS RAISONS DE NOUS CHOISIR"
            title="Pourquoi nous."
            text="Six atouts qui font la différence."
          />

          <div className="why-us-grid">
            {whyUs.map((item, index) => (
              <div className="why-us-card" key={item.title}>
                <div className="why-us-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section about" id="agence">
          <div className="about-number">SMC</div>

          <div>
            <p className="eyebrow">L'AGENCE</p>
            <h2>
              La créativité au service
              <br />
              de <em>l'impact.</em>
            </h2>
          </div>

          <div className="about-text">
            <p>
              Nous croyons qu'une bonne image ne se contente pas d'être belle.
              Elle doit raconter, provoquer une émotion et rester en mémoire.
            </p>
            <p>
              Notre approche combine direction artistique, production,
              technologie et stratégie pour créer des contenus qui servent
              réellement vos ambitions et rayonnent internationalement.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">UN PROJET EN TÊTE ?</p>
            <h2>
              Parlons de votre
              <br />
              prochain <em>projet.</em>
            </h2>
          </div>

          <div className="contact-actions">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="contact-btn whatsapp-btn">
              WhatsApp ↗
            </a>
            <a href={`mailto:${contact.email}`} className="contact-btn email-btn">
              {contact.email}
            </a>
            <a href="#" className="contact-btn quote-btn">
              Demander un devis ↗
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <span className="logo-mark">S</span>
              <span>
                SYNOVITCH
                <small>MEDIA CENTER</small>
              </span>
            </div>
            <p className="footer-location">Abidjan, Côte d'Ivoire</p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <nav className="footer-nav">
              <a href="#accueil">Accueil</a>
              <a href="#services">Services</a>
              <a href="#projets">Projets</a>
              <a href="#afrique">Afrique</a>
              <a href="#agence">L'agence</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SYNOVITCH MEDIA CENTER · Créativité Africaine, Ambition Mondiale</p>
          <a href="#accueil" className="back-to-top">Retour en haut ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
