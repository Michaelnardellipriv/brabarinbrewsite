'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">BARBARIAN<br />BREW<br />MUSEUM</h1>
          <p className="hero-subtitle">La storia della birra incontra la leggenda</p>
          
          <div className="announcement-box">
            <p>Siamo felici di annunciare l'apertura ufficiale di <span className="highlight">Barbarian Brew Museum</span></p>
            <p>Immergiti in 2000 anni di storia della birra, tra tradizione medievale e innovazione moderna</p>
            <p className="location">📍 Roma - Via della Birra, 12</p>
          </div>

          <div className="features-grid">
            {[
              { icon: '🍺', title: 'Degustazioni', desc: 'Prova le nostre birre artigianali con guide esperte' },
              { icon: '🧪', title: 'Laboratori', desc: 'Scopri come si produce una vera birra medievale' },
              { icon: '⚔️', title: 'Esperienze', desc: 'Vivi la storia attraverso esperienze immersive' }
            ].map((item, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="cta-buttons">
            <Link href="/museo" className="cta-button cta-primary">Scopri il Museo</Link>
            <Link href="/contatti" className="cta-button cta-secondary">Prenota una Visita</Link>
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <section className="announcement-section">
        <div className="announcement-container">
          <div className="announcement-content">
            <h2>Novità! Apertura ufficiale</h2>
            <p>
              Dopo mesi di preparazione, il Barbarian Brew Museum è finalmente pronto per accogliervi. 
              Un viaggio affascinante attraverso i secoli della storia della birra, dalle antiche civiltà 
              ai maestri birrai medievali, fino all'artigianato moderno.
            </p>
            <p className="announcement-quote">
              "Dove ogni storia inizia con un bicchiere"
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <div className="container">
          <h2 className="quick-links-title">Esplora il Museo</h2>
          
          <div className="links-grid">
            {[
              { num: '1', title: 'Il Museo', desc: 'La nostra storia e mission', href: '/museo' },
              { num: '2', title: 'Prodotti', desc: 'Le nostre birre artigianali', href: '/shop' },
              { num: '3', title: 'Galleria', desc: 'Momenti dal museo', href: '/galleria' },
              { num: '4', title: 'Eventi', desc: 'Prossimi appuntamenti', href: '/eventi' },
              { num: '5', title: 'Distillerie', desc: 'Le nostre sedi', href: '/distillerie' },
              { num: '6', title: 'Contatti', desc: 'Raggiungici facilmente', href: '/contatti' }
            ].map((item) => (
              <Link key={item.num} href={item.href} className="link-card">
                <div className="link-number">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p className="footer-main">© 2025 Barbarian Brew Museum - Tutti i diritti riservati</p>
        <p className="footer-quote">Dove ogni storia inizia con un bicchiere</p>
      </footer>
    </div>
  );
}
