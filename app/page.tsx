'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#472708', color: '#EFAE3A', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero Landing Section */}
      <section style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #472708, #EFAE3A)' }}>
        <div style={{ textAlign: 'center', maxWidth: '64rem', margin: '0 auto' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '2rem', textShadow: '2px 2px #000' }}>
            BARBARIAN<br />BREW<br />MUSEUM
          </h1>
          
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', fontWeight: '300' }}>
            La storia della birra incontra la leggenda
          </p>
          
          <div style={{ background: 'rgba(239, 174, 58, 0.1)', border: '2px solid rgba(239, 174, 58, 0.5)', borderRadius: '1rem', padding: '2rem', marginBottom: '4rem', backdropFilter: 'blur(10px)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}>
            <p style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600' }}>
              Siamo felici di annunciare l'apertura ufficiale di <span style={{ color: '#EFAE3A', fontWeight: 'bold' }}>Barbarian Brew Museum</span>
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
              Immergiti in 2000 anni di storia della birra, tra tradizione medievale e innovazione moderna
            </p>
            <p style={{ color: '#EFAE3A', fontWeight: 'bold' }}>
              📍 Roma - Via della Birra, 12
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { icon: '🍺', title: 'Degustazioni', desc: 'Prova le nostre birre artigianali con guide esperte' },
              { icon: '🧪', title: 'Laboratori', desc: 'Scopri come si produce una vera birra medievale' },
              { icon: '⚔️', title: 'Esperienze', desc: 'Vivi la storia attraverso esperienze immersive' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(71, 39, 8, 0.6)', border: '1px solid rgba(239, 174, 58, 0.5)', borderRadius: '1rem', padding: '2rem', transition: 'transform 0.3s', cursor: 'pointer' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ color: '#EFAE3A', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#EFAE3A', fontSize: '0.875rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/museo" style={{ backgroundColor: '#EFAE3A', color: '#472708', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', textAlign: 'center', textDecoration: 'none' }}>
              Scopri il Museo
            </Link>
            <Link href="/contatti" style={{ border: '2px solid #EFAE3A', color: '#EFAE3A', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', textAlign: 'center', textDecoration: 'none' }}>
              Prenota una Visita
            </Link>
          </div>
        </div>
      </section>

      {/* Announcement Box */}
      <section style={{ padding: '4rem 0', background: 'rgba(71, 39, 8, 0.4)' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ background: 'linear-gradient(to right, rgba(71, 39, 8, 0.3), rgba(239, 174, 58, 0.1))', borderLeft: '4px solid rgba(239, 174, 58, 1)', padding: '2rem', borderRadius: '0 1rem 1rem 0', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}>
            <h2 style={{ color: '#EFAE3A', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>🎉 Novità! Apertura ufficiale</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
              Dopo mesi di preparazione, il Barbarian Brew Museum è finalmente pronto per accogliervi. 
              Un viaggio affascinante attraverso i secoli della storia della birra, dalle antiche civiltà 
              ai maestri birrai medievali, fino all'artigianato moderno.
            </p>
            <p style={{ color: '#EFAE3A', fontStyle: 'italic', fontWeight: '500' }}>
              "Dove ogni storia inizia con un bicchiere"
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#472708' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '0 1rem' }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-amber-400 tracking-tight">
        Esplora il Museo
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { num: '1', title: 'Il Museo', desc: 'La nostra storia e mission', href: '/museo' },
          { num: '2', title: 'Prodotti', desc: 'Le nostre birre artigianali', href: '/shop' },
          { num: '3', title: 'Galleria', desc: 'Momenti dal museo', href: '/galleria' },
          { num: '4', title: 'Eventi', desc: 'Prossimi appuntamenti', href: '/eventi' },
          { num: '5', title: 'Distillerie', desc: 'Le nostre sedi', href: '/distillerie' },
          { num: '6', title: 'Contatti', desc: 'Raggiungici facilmente', href: '/contatti' }
        ].map((item) => (
          <Link key={item.num} href={item.href} className="group">
          <div className="bg-gradient-to-br from-amber-900/50 to-amber-950/50 border border-amber-400/40 rounded-xl p-8 text-center hover:from-amber-900/80 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300 transform hover:scale-105 h-full">
            <div className="text-5xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">{item.num}</div>            <h3 className="text-amber-400 font-bold mb-2 group-hover:text-amber-300 transition-colors">{item.title}</h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300">{item.desc}</p>
          </div>
          </Link>
        ))}
        </div>
      </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t-2 border-amber-400 py-8 text-center text-gray-500">
      <p className="font-semibold text-gray-400">© 2025 Barbarian Brew Museum - Tutti i diritti riservati</p>
      <p className="mt-2 text-sm italic">Dove ogni storia inizia con un bicchiere</p>
      </footer>
    </div>
  );
}
