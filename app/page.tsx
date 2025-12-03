'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="bg-amber-950 text-white">
      <Navbar />

      {/* Hero Landing Section */}
      <section className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-gradient-to-b from-amber-900 via-amber-950 to-amber-950 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black mb-8 text-amber-400 drop-shadow-lg tracking-tighter">
            BARBARIAN<br />BREW<br />MUSEUM
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 mb-6 font-light">
            La storia della birra incontra la leggenda
          </p>
          
          <div className="bg-amber-400/15 border-2 border-amber-400/60 rounded-xl p-10 mb-16 backdrop-blur-md shadow-2xl">
            <p className="text-lg md:text-xl text-amber-50 mb-4 leading-relaxed font-medium">
              Siamo felici di annunciare l'apertura ufficiale di <span className="font-bold text-amber-300">Barbarian Brew Museum</span>
            </p>
            <p className="text-base md:text-lg text-amber-100 mb-5">
              Immergiti in 2000 anni di storia della birra, tra tradizione medievale e innovazione moderna
            </p>
            <p className="text-amber-300 font-bold text-base">
              Roma - Via della Birra, 12
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-amber-900/50 to-amber-950/50 border border-amber-400/40 rounded-lg p-8 hover:border-amber-400 hover:bg-amber-900/70 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4 font-bold text-amber-400">A</div>
              <h3 className="text-amber-300 font-bold mb-3 text-lg">Degustazioni</h3>
              <p className="text-amber-100">Prova le nostre birre artigianali con guide esperte</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-amber-950/50 border border-amber-400/40 rounded-lg p-8 hover:border-amber-400 hover:bg-amber-900/70 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4 font-bold text-amber-400">B</div>
              <h3 className="text-amber-300 font-bold mb-3 text-lg">Laboratori</h3>
              <p className="text-amber-100">Scopri come si produce una vera birra medievale</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-amber-950/50 border border-amber-400/40 rounded-lg p-8 hover:border-amber-400 hover:bg-amber-900/70 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4 font-bold text-amber-400">C</div>
              <h3 className="text-amber-300 font-bold mb-3 text-lg">Esperienze</h3>
              <p className="text-amber-100">Vivi la storia attraverso esperienze immersive</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/museo" className="bg-amber-400 text-amber-950 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-300 transition transform hover:scale-105 shadow-lg hover:shadow-amber-400/50">
              Scopri il Museo
            </Link>
            <Link href="/contatti" className="border-2 border-amber-400 text-amber-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-400/20 transition">
              Prenota una Visita
            </Link>
          </div>
        </div>
      </section>

      {/* Announcement Box */}
      <section className="py-16 bg-amber-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-linear-to-r from-amber-700/20 to-amber-600/20 border-l-4 border-amber-400 p-8 rounded-r-lg">
            <h2 className="text-amber-400 text-2xl font-bold mb-4">Novità! Apertura ufficiale</h2>
            <p className="text-lg text-amber-100 leading-relaxed mb-4">
              Dopo mesi di preparazione, il Barbarian Brew Museum è finalmente pronto per accogliervi. 
              Un viaggio affascinante attraverso i secoli della storia della birra, dalle antiche civiltà 
              ai maestri birrai medievali, fino all'artigianato moderno.
            </p>
            <p className="text-amber-300 italic">
              "Dove ogni storia inizia con un bicchiere"
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-amber-950">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-amber-400">
            Esplora il Museo
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/museo" className="group">
              <div className="bg-amber-900/40 border border-amber-400/30 rounded-lg p-6 text-center hover:bg-amber-900/60 hover:border-amber-400 transition cursor-pointer">
                <div className="text-5xl mb-4">1</div>
                <h3 className="text-amber-400 font-bold mb-2 group-hover:text-amber-300">Il Museo</h3>
                <p className="text-gray-300">La nostra storia e mission</p>
              </div>
            </Link>

            <Link href="/shop" className="group">
              <div className="bg-amber-900/40 border border-amber-400/30 rounded-lg p-6 text-center hover:bg-amber-900/60 hover:border-amber-400 transition cursor-pointer">
                <div className="text-5xl mb-4">2</div>
                <h3 className="text-amber-400 font-bold mb-2 group-hover:text-amber-300">Prodotti</h3>
                <p className="text-gray-300">Le nostre birre artigianali</p>
              </div>
            </Link>

            <Link href="/galleria" className="group">
              <div className="bg-amber-900/40 border border-amber-400/30 rounded-lg p-6 text-center hover:bg-amber-900/60 hover:border-amber-400 transition cursor-pointer">
                <div className="text-5xl mb-4">3</div>
                <h3 className="text-amber-400 font-bold mb-2 group-hover:text-amber-300">Galleria</h3>
                <p className="text-gray-300">Momenti dal museo</p>
              </div>
            </Link>

            <Link href="/eventi" className="group">
              <div className="bg-amber-900/40 border border-amber-400/30 rounded-lg p-6 text-center hover:bg-amber-900/60 hover:border-amber-400 transition cursor-pointer">
                <div className="text-5xl mb-4">4</div>
                <h3 className="text-amber-400 font-bold mb-2 group-hover:text-amber-300">Eventi</h3>
                <p className="text-gray-300">Prossimi appuntamenti</p>
              </div>
            </Link>

            <Link href="/distillerie" className="group">
              <div className="bg-amber-900/40 border border-amber-400/30 rounded-lg p-6 text-center hover:bg-amber-900/60 hover:border-amber-400 transition cursor-pointer">
                <div className="text-5xl mb-4">5</div>
                <h3 className="text-amber-400 font-bold mb-2 group-hover:text-amber-300">Distillerie</h3>
                <p className="text-gray-300">Le nostre sedi</p>
              </div>
            </Link>

            <Link href="/contatti" className="group">
              <div className="bg-amber-900/40 border border-amber-400/30 rounded-lg p-6 text-center hover:bg-amber-900/60 hover:border-amber-400 transition cursor-pointer">
                <div className="text-5xl mb-4">6</div>
                <h3 className="text-amber-400 font-bold mb-2 group-hover:text-amber-300">Contatti</h3>
                <p className="text-gray-300">Raggiungici facilmente</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950/80 border-t-2 border-amber-400 py-8 text-center text-gray-400">
        <p>© 2025 Barbarian Brew Museum - Tutti i diritti riservati</p>
        <p className="mt-2 text-sm">Dove ogni storia inizia con un bicchiere</p>
      </footer>
    </div>
  );
}
