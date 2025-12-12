'use client';

import Navbar from '../components/Navbar';

export default function Galleria() {
  return (
    <div className="galleria-container">
      <Navbar />

      <main className="galleria-main">
        <div className="galleria-content">
          {/* Header */}
          <div className="galleria-header">
            <h1>Galleria Fotografica</h1>
            <p>Scopri le immagini del nostro museo</p>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
              <div key={idx} className="gallery-item">
                <div className="gallery-image">{idx}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="galleria-footer">
        <p>© 2025 Barbarian Brew Museum - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
