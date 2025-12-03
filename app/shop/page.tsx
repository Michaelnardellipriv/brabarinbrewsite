'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Shop() {
  const products = [
    {
      name: 'Barbarian Original',
      description: 'La birra che ha fondato la leggenda. Scura, potente e caratteristica.',
      abv: '7.2%',
      style: 'Strong Ale',
      price: '6,99 €',
    },
    {
      name: 'Northern Frost',
      description: 'Fredda come il vento del nord, luminosa e rinfrescante.',
      abv: '5.8%',
      style: 'Lager',
      price: '5,99 €',
    },
    {
      name: 'Viking Treasure',
      description: 'Una miscela speziata con miele e erbe selvatiche medievali.',
      abv: '8.1%',
      style: 'Spiced Ale',
      price: '7,99 €',
    },
    {
      name: 'Monastery Dark',
      description: 'Ispirata alle ricette monastiche del Medioevo.',
      abv: '6.5%',
      style: 'Porter',
      price: '6,49 €',
    },
  ];

  return (
    <div className="bg-amber-950 text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-amber-900 via-amber-950 to-amber-950">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-amber-400">
            I Nostri Prodotti
          </h1>
          <p className="text-xl text-gray-300">Scopri la collezione completa delle nostre birre</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="bg-amber-900/40 border border-amber-400/40 rounded-lg overflow-hidden backdrop-blur-sm hover:border-amber-400 transition transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-amber-800 to-amber-950 flex items-center justify-center">
                  <div className="text-6xl font-bold text-amber-400">{String.fromCharCode(65 + idx)}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-2">{product.name}</h3>
                  <p className="text-sm text-amber-300 mb-3">{product.style}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-amber-400/20">
                    <div>
                      <p className="text-amber-300 font-bold">{product.abv}</p>
                      <p className="text-xl font-bold text-amber-400">{product.price}</p>
                    </div>
                    <button className="bg-amber-400 text-amber-950 px-4 py-2 rounded font-bold hover:bg-amber-300 transition">
                      Acquista
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-12 bg-amber-900/30 border-t border-b border-amber-400/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-300 mb-4">
            Acquista i nostri prodotti direttamente dal museo o ordina online
          </p>
          <button className="bg-amber-400 text-amber-950 px-8 py-3 rounded-lg font-bold hover:bg-amber-300 transition">
            Ordina Online
          </button>
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
