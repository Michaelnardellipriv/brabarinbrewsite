'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Distillerie() {
  const breweries = [
    {
      name: 'Distilleria del Nord',
      location: 'Piemonte',
      description: 'Dove tutto è iniziato. La distilleria originale dove Arvid ha creato la prima Barbarian Brew.',
      features: ['Sala Storica', 'Laboratorio Artigianale', 'Degustazione'],
    },
    {
      name: 'Monastero della Birra',
      location: 'Toscana',
      description: 'Tradizione medievale ancora viva. Un luogo dove la storia e la fermentazione si incontrano.',
      features: ['Architettura Medievale', 'Archivi Storici', 'Museo Interattivo'],
    },
    {
      name: 'Fortezza Artigianale',
      location: 'Lombardia',
      description: 'Innovazione e tradizione insieme. La distilleria moderna che rispetta le antiche ricette.',
      features: ['Tecnologie Moderne', 'Laboratorio di Ricerca', 'Bottega Artigianale'],
    },
  ];

  return (
    <div className="bg-amber-950 text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-amber-900 via-amber-950 to-amber-950">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-amber-400">
            Le Nostre Distillerie
          </h1>
          <p className="text-xl text-gray-300">Scopri le sedi della produzione Barbarian Brew</p>
        </div>
      </section>

      {/* Breweries */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-12">
            {breweries.map((brewery, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber-800 to-amber-950 rounded-lg h-80 flex items-center justify-center border-2 border-amber-400/40">
                  <div className="text-9xl font-bold text-amber-400/20">{String.fromCharCode(65 + idx)}</div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-amber-400 mb-2">{brewery.name}</h3>
                  <p className="text-amber-300 font-semibold mb-4">{brewery.location}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{brewery.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-amber-400 font-bold mb-3">Cosa Troverai:</p>
                    <ul className="space-y-2">
                      {brewery.features.map((feature, fidx) => (
                        <li key={fidx} className="text-gray-300">- {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contatti" className="bg-amber-400 text-amber-950 px-6 py-2 rounded-lg font-bold hover:bg-amber-300 transition inline-block">
                    Visita Ora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-amber-900/30 border-t border-b border-amber-400/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-300 mb-4 text-lg">
            Organizza una visita guidata alle nostre distillerie
          </p>
          <Link href="/contatti" className="bg-amber-400 text-amber-950 px-8 py-3 rounded-lg font-bold hover:bg-amber-300 transition">
            Prenota una Visita Guidata
          </Link>
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
