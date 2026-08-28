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
  ["01", "Production vidéo", "Films de marque, publicités et contenus qui donnent du mouvement à vos idées."],
  ["02", "Photographie", "Des images précises et sensibles pour révéler vos produits, équipes et univers."],
  ["03", "Montage & post-production", "Rythme, couleur et finition : chaque détail compte jusqu'à la dernière image."],
  ["04", "Audio & musique", "Une identité sonore qui installe l'émotion et rend vos messages mémorables."],
  ["05", "Marketing digital", "Des contenus pensés pour circuler, engager et construire une présence durable."],
];

const projects = [
  ["Publicité automobile", "Campagne / Film de marque", "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85"],
  ["Clip musical", "Direction artistique / Clip", "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=85"],
  ["Film institutionnel", "Portrait / Entreprise", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"],
  ["Spot commercial", "Publicité / Social media", "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85"],
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#accueil" onClick={closeMenu} aria-label="Synovitch Media Center, accueil">
          <span className="brand-mark">S</span>
          <span>SYNOVITCH <b>MEDIA CENTER</b></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav id="main-navigation" className={menuOpen ? "is-open" : ""} aria-label="Navigation principale">
          <a href="#accueil" onClick={closeMenu}>Accueil</a>
          <a href="#a-propos" onClick={closeMenu}>À propos</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#realisations" onClick={closeMenu}>Réalisations</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={contact.whatsapp} target="_blank" rel="noreferrer" onClick={closeMenu}>Nous contacter <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section id="accueil" className="hero">
          <div className="hero-backdrop" />
          <div className="hero-content">
            <p className="eyebrow">Création <span>•</span> Production <span>•</span> Innovation</p>
            <h1>Nous racontons<br />votre histoire<br /><em>en grand.</em></h1>
            <p className="hero-copy">SYNOVITCH MEDIA CENTER crée des contenus audiovisuels puissants pour les marques, les entreprises et les artistes.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#services">Découvrir nos services <span>↓</span></a>
              <a className="button button-quiet" href="#realisations">Voir nos réalisations <span>↗</span></a>
            </div>
          </div>
          <p className="scroll-note">Défiler pour découvrir <span>↓</span></p>
        </section>

        <section className="stats-bar" aria-label="Chiffres clés">
          {stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </section>

        <section id="a-propos" className="about section-shell">
          <div className="about-label">SYNOVITCH<br />MEDIA CENTER</div>
          <div className="about-content">
            <SectionHeading eyebrow="À propos" title={<>Des idées fortes.<br /><em>Des images mémorables.</em></>} />
            <p>Nous sommes une maison de création audiovisuelle basée à Abidjan. Nous transformons les intentions en images, les messages en émotions et les projets en histoires qui restent.</p>
            <a className="text-link" href="#contact">Parlons de votre projet <span>↗</span></a>
          </div>
          <div className="about-number">01 <span>/ 04</span></div>
        </section>

        <section id="services" className="services section-shell">
          <SectionHeading eyebrow="Ce que nous faisons" title={<>Des talents réunis<br /><em>pour créer l'impact.</em></>} copy="De la première idée à la diffusion, nous donnons à chaque projet une forme juste, singulière et ambitieuse." />
          <div className="service-grid">
            {services.map(([number, title, description]) => <article className="service-card" key={title}><span className="service-number">{number}</span><div className="service-icon">✦</div><h3>{title}</h3><p>{description}</p><a className="card-link" href="#contact" aria-label={`En savoir plus sur ${title}`}>En savoir plus <span>↗</span></a></article>)}
          </div>
        </section>

        <section id="realisations" className="work section-shell">
          <div className="work-heading"><SectionHeading eyebrow="Notre regard" title={<>Les histoires parlent<br /><em>plus fort que les mots.</em></>} /><a className="text-link desktop-link" href="#contact">Voir tous les projets <span>↗</span></a></div>
          <div className="project-grid">
            {projects.map(([title, category, image], index) => <article className={`project-card project-${index + 1}`} key={title}><img src={image} alt={`Projet ${title}`} /><div className="project-overlay"><p>{category}</p><h3>{title}</h3><a href="#contact" aria-label={`Découvrir le projet ${title}`}>▶</a></div></article>)}
          </div>
        </section>

        <section id="produits" className="products section-shell">
          <SectionHeading eyebrow="La boutique" title={<>Une autre façon de<br /><em>porter notre signature.</em></>} copy="Retrouvez également notre sélection de parfums et de tee-shirts, disponible pour vos commandes à Abidjan." />
          <div className="product-grid">
            <article className="product-card"><span className="product-symbol">◎</span><div><h3>Parfums</h3><p>Élégance, Prestige et Intense. Des fragrances raffinées et longue tenue.</p></div><a className="card-link" href="#contact">Commander <span>↗</span></a></article>
            <article className="product-card"><span className="product-symbol">□</span><div><h3>Tee-shirts</h3><p>Classic, Premium et Urban. Des modèles modernes et universels.</p></div><a className="card-link" href="#contact">Commander <span>↗</span></a></article>
          </div>
        </section>

        <section id="contact" className="contact section-shell">
          <p className="eyebrow">Un projet en tête ?</p><h2>Faisons-le<br /><em>exister.</em></h2><p className="contact-copy">Discutons-en et créons ensemble quelque chose d'exceptionnel.</p>
          <div className="contact-actions"><a className="button button-gold" href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a><a className="button button-outline" href={`mailto:${contact.email}`}>E-mail <span>↗</span></a><a className="button button-outline" href={`mailto:${contact.email}?subject=Démarrer un projet`}>Démarrer un projet <span>↗</span></a></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-top"><a className="brand" href="#accueil"><span className="brand-mark">S</span><span>SYNOVITCH <b>MEDIA CENTER</b></span></a><p>Créateurs d'images,<br />façonneurs d'histoires.</p><a className="footer-arrow" href="#accueil" aria-label="Retour en haut">↑</a></div><div className="footer-columns"><div><span className="footer-label">Navigation</span><a href="#a-propos">À propos</a><a href="#services">Services</a><a href="#realisations">Réalisations</a><a href="#contact">Contact</a></div><div><span className="footer-label">Contact</span><a href={contact.whatsapp} target="_blank" rel="noreferrer">+225 05 04 83 10 90</a><a href={`mailto:${contact.email}`}>{contact.email}</a><span>Abidjan, Côte d'Ivoire</span></div></div><div className="footer-bottom"><span>© 2026 Synovitch Media Center</span><span>Mentions légales · Politique de confidentialité</span><span>Fait avec intention.</span></div></footer>
    </div>
  );
}

export default App;