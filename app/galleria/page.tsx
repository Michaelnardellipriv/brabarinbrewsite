'use client';

import Navbar from '../components/Navbar';
import g1 from './galleria1.png';
import g2 from './galleria2.png';
import g3 from './galleria3.png';

const images = [g1, g2, g3];
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
  {images.map((src, i) => (
    <div key={i} className="gallery-item">
      <img
        src={src.src}
        alt={`Galleria immagine ${i + 1}`}
        className="gallery-image"
      />
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
