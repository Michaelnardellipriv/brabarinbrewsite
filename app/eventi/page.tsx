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
    <div className="eventi-container">
      <Navbar />

      <main className="eventi-main">
        <div className="eventi-content">
          {/* Header */}
          <div className="eventi-header">
            <h1>Eventi e Attività</h1>
            <p>Partecipa ai nostri affascinanti eventi</p>
          </div>

          {/* Events List */}
          <div className="events-list">
            {events.map((event, idx) => (
              <div key={idx} className="event-card">
                <div className="event-date-box">
                  <p className="event-date">{event.date}</p>
                  <p className="event-time">{event.time}</p>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <p className="event-location">Luogo: {event.location}</p>
                  <button className="event-button">Prenota</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="eventi-cta-section">
        <p>Non vuoi perderti nessun evento?</p>
        <Link href="/contatti" className="eventi-cta-button">Iscriviti alla Newsletter</Link>
      </section>

      {/* Footer */}
      <footer className="eventi-footer">
        <p>© 2025 Barbarian Brew Museum - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
