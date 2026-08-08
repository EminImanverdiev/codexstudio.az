import React, { useState } from 'react';

const TEMPLATES = [
  {
    id: '1',
    title: 'Gastro Elite - Restoran & Lounge',
    category: 'restaurant',
    badge: 'Çox Satılan',
    price: '890 AZN',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=90',
    tags: ['Restoran', 'QR Menyu', 'Rezervasiya'],
    desc: 'Restoranlar və kafelər üçün interaktiv menyu və zərif qonaq rezervasiya saytı.'
  },
  {
    id: '2',
    title: 'Nordic Market - Geyim & Brend Mağazası',
    category: 'ecommerce',
    badge: 'Premium Mağaza',
    price: '1390 AZN',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=90',
    tags: ['E-ticarət', 'Kartla Ödəniş', 'Səbət'],
    desc: 'Onlayn satış edən butiklər üçün sürətli, təhlükəsiz və qazanclı ticarət platforması.'
  },
  {
    id: '3',
    title: 'Apex Holding - Korporativ Şirkət Saytı',
    category: 'business',
    badge: 'Biznes Nüfuzu',
    price: '1190 AZN',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=90',
    tags: ['Korporativ', 'B2B', 'Çoxdilli'],
    desc: 'Böyük şirkətlər və holdinqlər üçün yüksək etimad yaradan rəsmi portal.'
  }
];

export default function Templates() {
  const [filter, setFilter] = useState('all');
  const [activeModal, setActiveModal] = useState(null);

  const filtered = filter === 'all' ? TEMPLATES : TEMPLATES.filter(t => t.category === filter);

  return (
    <section className="section" id="templates" style={{ padding: '90px 0', background: 'rgba(4, 7, 18, 0.6)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge-neon-pill">
            <span className="pulse-neon-dot"></span>
            Canlı Portfolio
          </div>
          <h2 style={{ fontSize: '3.2rem', margin: '16px 0' }}>
            Ultra-HD <span className="text-cyan-glow">Dizayn Nümunələri</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.2rem' }}>
            Bəyəndiyiniz şablonu seçin və brendiniz üçün tam fərdiləşdirək.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '44px', flexWrap: 'wrap' }}>
          {['all', 'restaurant', 'ecommerce', 'business'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? '#0066FF' : 'rgba(12, 20, 42, 0.7)',
                color: '#FFFFFF',
                border: `1.5px solid ${filter === cat ? '#00F0FF' : 'rgba(255, 255, 255, 0.1)'}`,
                padding: '12px 26px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: filter === cat ? '0 0 25px rgba(0, 102, 255, 0.6)' : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {cat === 'all' ? 'Hamısı' : cat === 'restaurant' ? 'Restoran & Menyu' : cat === 'ecommerce' ? 'E-ticarət' : 'Korporativ'}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {filtered.map(t => (
            <div 
              key={t.id}
              style={{
                background: 'rgba(8, 14, 30, 0.85)',
                border: '2px solid rgba(0, 102, 255, 0.35)',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img 
                  src={t.img} 
                  alt={t.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
                <span style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: 'rgba(0, 102, 255, 0.9)',
                  color: '#FFFFFF',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  boxShadow: '0 0 15px rgba(0, 102, 255, 0.7)'
                }}>
                  {t.badge}
                </span>
              </div>

              <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {t.tags.map(tag => (
                    <span key={tag} style={{ background: 'rgba(0, 102, 255, 0.15)', border: '1px solid rgba(0, 102, 255, 0.3)', padding: '4px 12px', borderRadius: '8px', fontSize: '0.75rem', color: '#60A5FA', fontWeight: 700 }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.35rem' }}>{t.title}</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6 }}>{t.desc}</p>
                
                <div style={{ marginTop: 'auto', paddingTop: '18px', display: 'flex', gap: '12px' }}>
                  <button 
                    onClick={() => setActiveModal(t)}
                    className="btn-cyber-ghost" 
                    style={{ flex: 1, padding: '12px 16px', fontSize: '0.9rem' }}
                  >
                    🔍 Canlı Baxış
                  </button>
                  <a 
                    href="#calculator" 
                    className="btn-cyber-primary" 
                    style={{ flex: 1.2, padding: '12px 16px', fontSize: '0.9rem' }}
                  >
                    ⚡ Bu Şablonu Seç
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Preview */}
      {activeModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(16px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#040816',
            border: '2px solid #00F0FF',
            borderRadius: '28px',
            maxWidth: '650px',
            width: '100%',
            padding: '36px',
            position: 'relative',
            boxShadow: '0 0 60px rgba(0, 102, 255, 0.6)'
          }}>
            <button 
              onClick={() => setActiveModal(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                border: 'none',
                fontWeight: 900
              }}
            >
              ✕
            </button>
            <img src={activeModal.img} alt={activeModal.title} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '16px', marginBottom: '20px', border: '1px solid rgba(0, 102, 255, 0.4)' }} />
            <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{activeModal.title}</h3>
            <p style={{ color: '#94A3B8', fontSize: '1rem', marginBottom: '28px', lineHeight: 1.6 }}>{activeModal.desc}</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px' }}>
              <button onClick={() => setActiveModal(null)} className="btn-cyber-ghost">Bağla</button>
              <a href="#calculator" onClick={() => setActiveModal(null)} className="btn-cyber-primary">⚡ Bu Şablonla Başla</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
