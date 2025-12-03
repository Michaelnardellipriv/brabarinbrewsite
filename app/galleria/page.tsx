'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Galleria() {
  return (
    <div className="bg-amber-950 text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-amber-900 via-amber-950 to-amber-950">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-amber-400">
            Galleria Fotografica
          </h1>
          <p className="text-xl text-gray-300">Scopri le immagini del nostro museo</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden border-2 border-amber-400/40 hover:border-amber-400 transition cursor-pointer group">
                <div className="w-full h-full bg-gradient-to-br from-amber-800 to-amber-950 flex items-center justify-center group-hover:from-amber-700 group-hover:to-amber-900 transition">
                  <div className="text-7xl font-bold text-amber-400/30 group-hover:text-amber-400/50 transition">{idx}</div>
                </div>
              </div>
            ))}
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
