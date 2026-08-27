import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          SYNOVITCH <span>MEDIA CENTER</span>
        </div>

        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#produits">Produits</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="accueil" className="hero">
          <div className="hero-content">
            <p className="welcome">BIENVENUE CHEZ</p>

            <h1>
              SYNOVITCH
              <br />
              <span>MEDIA CENTER</span>
            </h1>

            <p>
              Découvrez notre sélection de parfums et de Tee-Shirts,
              avec livraison rapide à Abidjan.
            </p>

            <a href="#produits" className="hero-button">
              Découvrir nos produits
            </a>
          </div>
        </section>

        <section id="produits" className="products">
          <h2>Nos produits</h2>

          <div className="product-grid">
            <div className="product-card">
              <div className="product-icon">🌹</div>
              <h3>Parfums</h3>

<p>
  Des fragrances élégantes, raffinées et longue tenue
  pour homme et femme.
</p>

<div className="perfume-list">
  <div className="perfume-item">
    <h4>Parfum Élégance</h4>
    <p>Une fragrance raffinée et agréable.</p>
    <strong>15 000 FCFA</strong>
  </div>

  <div className="perfume-item">
    <h4>Parfum Prestige</h4>
    <p>Une senteur élégante pour toutes les occasions.</p>
    <strong>20 000 FCFA</strong>
  </div>

  <div className="perfume-item">
    <h4>Parfum Intense</h4>
    <p>Une fragrance moderne au caractère affirmé.</p>
    <strong>25 000 FCFA</strong>
  </div>
</div> 
              <a href="#parfums" className="button">Voir les parfums</a>
            </div>

            <div id="parfums" className="product-card">
              <div className="product-icon">👕</div>
              <h3>Tee-Shirts</h3>

<p>
  Des modèles modernes et universels pour compléter
  votre style.
</p>

<div className="tshirt-list">
  <div className="tshirt-item">
    <h4>Tee-Shirt Classic</h4>
    <p>Un modèle simple et confortable.</p>
    <strong>8 000 FCFA</strong>
  </div>

  <div className="tshirt-item">
    <h4>Tee-Shirt Premium</h4>
    <p>Un modèle moderne pour un style soigné.</p>
    <strong>12 000 FCFA</strong>
  </div>

  <div className="tshirt-item">
    <h4>Tee-Shirt Urban</h4>
    <p>Un modèle décontracté au style contemporain.</p>
    <strong>15 000 FCFA</strong>
  </div>
</div> 

              <button>Voir les Tee-Shirts</button>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Besoin d'informations ?</h2>

          <p>
            Contactez SYNOVITCH MEDIA CENTER pour vos commandes et
            renseignements.
          </p>

          <div className="contact-actions">
  <a
    className="contact-button"
    href="https://wa.me/2250504831090"
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp
  </a>

  <a
    className="contact-button"
    href="mailto:synovitchmediacenter@gmail.com"
  >
    E-mail
  </a>
</div> 
        </section>
      </main>

      <footer>
        <p>© 2026 SYNOVITCH MEDIA CENTER — Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App; 