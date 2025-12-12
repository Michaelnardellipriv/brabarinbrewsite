'use client';

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
    <div className="shop-container">
      <Navbar />

      <main className="shop-main">
        <div className="shop-content">
          {/* Header */}
          <div className="shop-header">
            <h1>I Nostri Prodotti</h1>
            <p>Scopri la collezione completa delle nostre birre</p>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {products.map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="product-image">{String.fromCharCode(65 + idx)}</div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-style">{product.style}</p>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <div>
                      <p className="product-abv">{product.abv}</p>
                      <p className="product-price">{product.price}</p>
                    </div>
                    <button className="product-button">Acquista</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Info Section */}
      <section className="shop-info-section">
        <p>Acquista i nostri prodotti direttamente dal museo o ordina online</p>
        <button className="shop-info-button">Ordina Online</button>
      </section>

      {/* Footer */}
      <footer className="shop-footer">
        <p>© 2025 Barbarian Brew Museum - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
