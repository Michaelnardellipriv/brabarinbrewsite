'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Museo() {
  return (
    <div className="bg-amber-950 text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-amber-900 via-amber-950 to-amber-950">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-amber-400">
            Il Museo della Birra
          </h1>
          <div className="h-1 w-24 bg-amber-400 mx-auto"></div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-amber-400">Una Nuova Esperienza</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">La Nostra Missione</h3>
              <p className="text-gray-300 leading-relaxed">
                Benvenuti nel luogo dove la storia incontra il gusto, dove la tradizione diventa esperienza, 
                e dove un semplice sorso racconta secoli di cultura. Il Barbarian Brew Museum non è soltanto 
                uno spazio espositivo, ma un viaggio affascinante attraverso il tempo.
              </p>
            </div>

            <div className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Nel Museo Potrete:</h3>
              <ul className="space-y-3 text-gray-300">
                <li>- Esplorare ricostruzioni interattive delle prime birrerie</li>
                <li>- Osservare ingredienti e strumenti storici</li>
                <li>- Scoprire storie di mastri birrai e innovatori</li>
                <li>- Vivere degustazioni guidate e laboratori sensoriali</li>
              </ul>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-8 text-amber-400">La Storia Leggendaria</h2>

          <div className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-8 backdrop-blur-sm mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Nel Medioevo, in un piccolo villaggio del nord, un fabbro chiamato Arvid decise di creare una birra 
              perché nessuna di quelle locali gli piaceva. Con il fuoco della sua fucina nel cuore, mischiò orzo, 
              miele e erbe selvatiche, ottenendo una bevanda scura, potente e straordinaria.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Gli abitanti, colpiti dal suo sapore "selvaggio", la chiamarono "Barbarian Brew". In poco tempo la birra 
              divenne famosa tra viaggiatori e mercanti, che la consideravano ideale per scaldarsi e trovare un po' di 
              coraggio durante i lunghi viaggi attraverso le gelide terre del nord.
            </p>
            <p className="text-lg text-amber-100 font-semibold">
              Così, per caso, nacque la Barbarian Brew: una birra semplice, potente e ricordata per il suo spirito 
              rude, autentico e nordico.
            </p>
          </div>

          <h2 className="text-4xl font-bold mb-8 text-amber-400">Orari di Apertura</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-6 backdrop-blur-sm text-center">
              <p className="text-amber-300 font-bold mb-2">Lunedì - Venerdì</p>
              <p className="text-2xl text-amber-400 font-bold">10:00 - 18:00</p>
            </div>
            <div className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-6 backdrop-blur-sm text-center">
              <p className="text-amber-300 font-bold mb-2">Sabato</p>
              <p className="text-2xl text-amber-400 font-bold">10:00 - 19:00</p>
            </div>
            <div className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-6 backdrop-blur-sm text-center">
              <p className="text-amber-300 font-bold mb-2">Domenica</p>
              <p className="text-2xl text-amber-400 font-bold">14:00 - 19:00</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contatti" className="bg-amber-400 text-amber-950 px-8 py-3 rounded-lg font-bold hover:bg-amber-300 transition">
              Prenota una Visita
            </Link>
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
