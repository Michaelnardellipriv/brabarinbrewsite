'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Museo() {
  return (
    <div className="museo-container">
      <Navbar />

      <main className="museo-main">
        <div className="museo-content">
          {/* Header */}
          <div className="museo-header">
            <h1>Il Museo della Birra</h1>
            <div className="museo-divider"></div>
          </div>

          {/* Mission Section */}
          <section className="museo-section">
            <h2>Una Nuova Esperienza</h2>

            <div className="mission-grid">
              <div className="mission-card">
                <h3>La Nostra Missione</h3>
                <p>
                  Benvenuti nel luogo dove la storia incontra il gusto, dove la tradizione diventa esperienza, 
                  e dove un semplice sorso racconta secoli di cultura. Il Barbarian Brew Museum non è soltanto 
                  uno spazio espositivo, ma un viaggio affascinante attraverso il tempo.
                </p>
              </div>

              <div className="mission-card">
                <h3>Nel Museo Potrete:</h3>
                <ul>
                  <li>- Esplorare ricostruzioni interattive delle prime birrerie</li>
                  <li>- Osservare ingredienti e strumenti storici</li>
                  <li>- Scoprire storie di mastri birrai e innovatori</li>
                  <li>- Vivere degustazioni guidate e laboratori sensoriali</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="museo-section">
            <h2>La Storia Leggendaria</h2>

            <div className="story-box">
              <p>
               La Barbarian Brew nacque in tempi antichi, quando i vichinghi cercavano una birra che fosse forte, calda e piena di carattere. Da una miscela speciale di malto, luppoli, lieviti e acqua pura venne fuori una bevanda dal gusto deciso, capace di unire le persone nei momenti di festa e viaggio e addolcirle con l’inconfondibile nota di miele della Barbarian Brew. 

Da allora la ricetta è stata tramandata come un piccolo tesoro, e oggi continua a vivere come simbolo di forza e tradizione. Il nuovo museo racconterà proprio questo percorso, semplice ma affascinante.
              </p>
              <p>
                Gli abitanti, colpiti dal suo sapore "selvaggio", la chiamarono "Barbarian Brew". In poco tempo la birra 
                divenne famosa tra viaggiatori e mercanti, che la consideravano ideale per scaldarsi e trovare un po' di 
                coraggio durante i lunghi viaggi attraverso le gelide terre del nord.
              </p>
              <p>
                Così, per caso, nacque la <span className="story-highlight">Barbarian Brew: una birra semplice, potente e ricordata per il suo spirito 
                rude, autentico e nordico.</span>
              </p>
            </div>
          </section>

          {/* Hours Section */}
          <section className="museo-section">
            <h2>Orari di Apertura</h2>

            <div className="orari-grid">
              <div className="orari-card">
                <p className="orari-label">Lunedì - Venerdì</p>
                <p className="orari-time">10:00 - 18:00</p>
              </div>
              <div className="orari-card">
                <p className="orari-label">Sabato</p>
                <p className="orari-time">10:00 - 19:00</p>
              </div>
              <div className="orari-card">
                <p className="orari-label">Domenica</p>
                <p className="orari-time">14:00 - 19:00</p>
              </div>
            </div>

            <div className="museo-cta">
              <Link href="/contatti" className="btn-primary">Prenota una Visita</Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="museo-footer">
        <p>© 2025 Barbarian Brew Museum - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
