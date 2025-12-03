'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Eventi() {
  const events = [
    {
      date: '15 Dicembre',
      time: '18:00',
      title: 'Degustazione Privata',
      description: 'Esperienza esclusiva con i nostri maestri birrai. Scopri i segreti della produzione',
      location: 'Museo - Sala Degustazione',
    },
    {
      date: '22 Dicembre',
      time: '14:00',
      title: 'Workshop di Homebrewing',
      description: 'Impara a fare la birra come un vero artigiano. Tutto quello che devi sapere',
      location: 'Museo - Laboratorio',
    },
    {
      date: '28 Dicembre',
      time: '20:00',
      title: 'Festa di Capodanno Norreno',
      description: 'Celebrazione tradizionale con musica dal vivo e degustazioni speciali',
      location: 'Museo - Area Events',
    },
    {
      date: '5 Gennaio',
      time: '15:00',
      title: 'Visita Guidata Storica',
      description: 'Un percorso affascinante attraverso la storia della Barbarian Brew',
      location: 'Museo - Sezioni Espositive',
    },
  ];

  return (
    <div className="bg-amber-950 text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-amber-900 via-amber-950 to-amber-950">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-amber-400">
            Eventi e Attività
          </h1>
          <p className="text-xl text-gray-300">Partecipa ai nostri affascinanti eventi</p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {events.map((event, idx) => (
              <div key={idx} className="bg-amber-900/40 border border-amber-400/40 rounded-lg p-8 backdrop-blur-sm hover:border-amber-400 transition">
                <div className="flex items-start gap-6">
                  <div className="bg-amber-400 text-amber-950 rounded-lg p-4 min-w-fit">
                    <p className="font-bold text-sm">{event.date}</p>
                    <p className="text-lg font-bold">{event.time}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-amber-400 mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-3">{event.description}</p>
                    <p className="text-sm text-amber-300 mb-4">Luogo: {event.location}</p>
                    <button className="bg-amber-400 text-amber-950 px-6 py-2 rounded font-bold hover:bg-amber-300 transition">
                      Prenota
                    </button>
                  </div>
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
            Non vuoi perderti nessun evento?
          </p>
          <Link href="/contatti" className="bg-amber-400 text-amber-950 px-8 py-3 rounded-lg font-bold hover:bg-amber-300 transition">
            Iscriviti alla Newsletter
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
