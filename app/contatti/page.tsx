'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Contatti() {
  return (
    <div className="bg-amber-950 text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-amber-900 via-amber-950 to-amber-950">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-amber-400">
            Contatti
          </h1>
          <p className="text-xl text-gray-300">Rimani in contatto con noi</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-8 backdrop-blur-sm text-center">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Email</h3>
              <p className="text-gray-300 text-lg">barbarianbrew@gmail.com</p>
            </div>

            <div className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-8 backdrop-blur-sm text-center">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Telefono</h3>
              <p className="text-gray-300 text-lg">+39 345 678 9012</p>
            </div>

            <div className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-8 backdrop-blur-sm text-center">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Orari</h3>
              <p className="text-gray-300">Lun-Ven: 10:00-18:00</p>
              <p className="text-gray-300">Sab: 10:00-19:00</p>
              <p className="text-gray-300">Dom: 14:00-19:00</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-8 backdrop-blur-sm mb-12">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Dove Trovarci</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-amber-300 font-bold mb-2">Indirizzo</p>
                <p className="text-gray-300 text-lg mb-6">Via della Birra 12, Roma</p>
                
                <p className="text-amber-300 font-bold mb-2">Come Raggiungerci</p>
                <ul className="text-gray-300 space-y-2">
                  <li>Metro: Linea A - Fermata Cavour</li>
                  <li>Bus: Linea 64, 46, 75</li>
                  <li>Parcheggio: Via della Birra 15</li>
                </ul>
              </div>

              <div className="bg-amber-950 rounded-lg h-48 flex items-center justify-center border border-amber-400/20">
                <p className="text-amber-400 text-center">Mappa Google Maps</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Mandaci un Messaggio</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-amber-300 font-semibold mb-2">Nome</label>
                <input type="text" className="w-full bg-amber-950 border border-amber-400/40 rounded px-4 py-2 text-white placeholder-gray-500" placeholder="Il tuo nome" />
              </div>

              <div>
                <label className="block text-amber-300 font-semibold mb-2">Email</label>
                <input type="email" className="w-full bg-amber-950 border border-amber-400/40 rounded px-4 py-2 text-white placeholder-gray-500" placeholder="La tua email" />
              </div>

              <div>
                <label className="block text-amber-300 font-semibold mb-2">Messaggio</label>
                <textarea rows={5} className="w-full bg-amber-950 border border-amber-400/40 rounded px-4 py-2 text-white placeholder-gray-500" placeholder="Il tuo messaggio"></textarea>
              </div>

              <button type="submit" className="w-full bg-amber-400 text-amber-950 px-8 py-3 rounded-lg font-bold hover:bg-amber-300 transition">
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 border-t-2 border-amber-400 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Barbarian Brew Museum - Tutti i diritti riservati</p>
        </div>
      </footer>
    </div>
  );
}
