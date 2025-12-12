'use client';

import Navbar from '../components/Navbar';
import React from 'react';

export default function Contatti(): React.JSX.Element {
  return (
    <div className="contatti-container">
      <Navbar />

      <main className="contatti-main">
        <div className="contatti-content">
          <div className="contatti-grid">

            {/* COLONNA SINISTRA */}
            <div className="contatti-left">
              
              {/* TITOLO */}
              <div className="contatti-title">
                <h1>Contattaci</h1>
                <p>Siamo qui per rispondere alle tue domande e accogliere i tuoi feedback.</p>
              </div>

              {/* CARD INFO */}
              <div className="contatti-cards">
                
                {/* Email Card */}
                <div className="contatti-card">
                  <h3>Email</h3>
                  <p>barbarian.brew.museum@gmail.com</p>
                </div>
                
                {/* Telefono Card */}
                <div className="contatti-card">
                  <h3>Telefono</h3>
                  <p>+39 345 678 9012</p>
                </div>

                {/* Orari Card */}
                <div className="contatti-card">
                  <h3>Orari</h3>
                  <p>Lun-Ven: 10:00-18:00</p>
                  <p>Sab: 10:00-19:00</p>
                  <p>Dom: 14:00-19:00</p>
                </div>
              </div>

              {/* MODULO CONTATTI */}
              <div className="contatti-form-container">
                <h3>Mandaci un Messaggio</h3>
                <form className="contatti-form">
                  <div className="contatti-form-group">
                    <label>Nome</label>
                    <input 
                      type="text" 
                      placeholder="Il tuo nome" 
                    />
                  </div>
                  <div className="contatti-form-group">
                    <label>Email</label>
                    <input 
                      type="email" 
                      placeholder="La tua email" 
                    />
                  </div>
                  <div className="contatti-form-group">
                    <label>Messaggio</label>
                    <textarea 
                      placeholder="Il tuo messaggio"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="contatti-form-submit"
                  >
                    Invia Messaggio
                  </button>
                </form>
              </div>
            </div>

            {/* COLONNA DESTRA */}
            <div className="contatti-right">
              <div className="contatti-location-container">
                <h3>Dove Trovarci</h3>
                
                {/* MAPPA */}
                <div className="contatti-map">
                  <p>Mappa Google Maps</p>
                </div>
                
                {/* DETTAGLI INDIRIZZO */}
                <div className="contatti-location-details">
                    <div className="contatti-location-detail">
                      <h4>Indirizzo</h4>
                      <p>Via della Birra 12, Roma</p>
                    </div>
                    
                    <div className="contatti-location-detail">
                      <h4>Come Raggiungerci</h4>
                      <ul>
                        <li>• Metro: Linea A - Fermata Cavour</li>
                        <li>• Bus: Linea 64, 46, 75</li>
                        <li>• Parcheggio: Via della Birra 15</li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="contatti-footer">
        <p>© 2025 Barbarian Brew Museum - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
