'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Distillerie() {
  const breweries = [
    {
      name: 'Distilleria del Nord',
      location: 'Norvegia',
      description: 'Dove tutto è iniziato. La distilleria originale dove Arvid ha creato la prima Barbarian Brew.',
      features: ['Sala Storica', 'Laboratorio Artigianale', 'Degustazione'],
    },
    {
      name: 'Monastero della Birra',
      location: 'Regno Unito',
      description: 'Tradizione medievale ancora viva. Un luogo dove la storia e la fermentazione si incontrano.',
      features: ['Architettura Medievale', 'Archivi Storici', 'Museo Interattivo'],
    },
    {
      name: 'Fortezza Artigianale',
      location: 'Canada',
      description: 'Innovazione e tradizione insieme. La distilleria moderna che rispetta le antiche ricette.',
      features: ['Tecnologie Moderne', 'Laboratorio di Ricerca', 'Bottega Artigianale'],
    },
  ];

  return (
    <div className="distillerie-container">
      <Navbar />

      <main className="distillerie-main">
        <div className="distillerie-content">
          {/* Header */}
          <div className="distillerie-header">
            <h1>Le Nostre Distillerie</h1>
            <p>Scopri le sedi della produzione Barbarian Brew</p>
          </div>

          {/* Breweries */}
          <div className="breweries-list">
            {breweries.map((brewery, idx) => (
              <div key={idx} className="brewery-item">
                <div className="brewery-image">{String.fromCharCode(65 + idx)}</div>
                <div className="brewery-info">
                  <h3>{brewery.name}</h3>
                  <p className="brewery-location">{brewery.location}</p>
                  <p className="brewery-description">{brewery.description}</p>
                  
                  <div>
                    <p className="brewery-features-label">Cosa Troverai:</p>
                    <ul className="brewery-features">
                      {brewery.features.map((feature, fidx) => (
                        <li key={fidx}>- {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contatti" className="brewery-button">Visita Ora</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="distillerie-cta-section">
        <p>Organizza una visita guidata alle nostre distillerie</p>
        <Link href="/contatti" className="distillerie-cta-button">Prenota una Visita Guidata</Link>
      </section>

      {/* Footer */}
      <footer className="distillerie-footer">
        <p>© 2025 Barbarian Brew Museum - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
