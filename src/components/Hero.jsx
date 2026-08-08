import React, { useState } from 'react';

const PREVIEW_MODELS = {
  ecommerce: {
    title: 'Nordic Store - E-Ticarət',
    category: 'E-Commerce Platform',
    accent: '#00F0FF',
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=85',
    tag: 'Kartla Ödəniş + Səbət'
  },
  corporate: {
    title: 'Apex Holding - Korporativ',
    category: 'B2B Şirkət Saytı',
    accent: '#3B82F6',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=85',
    tag: 'Çoxdilli + SEO Lider'
  },
  restaurant: {
    title: 'Gastro Lounge - Restoran',
    category: 'QR Menyu & Rezervasiya',
    accent: '#F59E0B',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=85',
    tag: 'QR Menyu + Rezervasiya'
  }
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState('ecommerce');
  const activeModel = PREVIEW_MODELS[activeTab];

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column: Bold Copywriting & Badges */}
          <div>
            <div className="badge-neon-pill" style={{ marginBottom: '22px' }}>
              <span className="pulse-neon-dot"></span>
              Biznesinizin Onlayn Siması
            </div>

            <h1 className="hero-title">
              YARADIRIQ <br />
              <span className="text-cyan-glow">DƏYƏR QATIRIQ</span>
            </h1>

            <p className="hero-desc">
              Biznesiniz üçün müasir, yüksək sürətli və satış gətirən veb həllər. Şirkətinizi internetdə ən zərif şəkildə tanıdın.
            </p>

            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <a href="#calculator" className="btn-cyber-primary">
                LAYİHƏ BAŞLAT ➔
              </a>
              <a href="https://wa.me/994106011201?text=Salam,%20CodeX%20Studio!%20Sayt%20sifari%C5%9Fi%20etm%C9%99k%20ist%C9%99yir%C9%99m." target="_blank" rel="noreferrer" className="btn-cyber-ghost">
                💬 010 601 12 01 (WhatsApp)
              </a>
            </div>

            {/* Micro Live Trust Stats */}
            <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#E2E8F0', fontWeight: 700 }}>
                <span style={{ color: '#00F0FF' }}>⚡</span> 0.6s Sürətli Yüklənmə
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#E2E8F0', fontWeight: 700 }}>
                <span style={{ color: '#00F0FF' }}>🛡️</span> 100% Təhlükəsiz SSL
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#E2E8F0', fontWeight: 700 }}>
                <span style={{ color: '#00F0FF' }}>💎</span> Retina 4K Hazır
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Interactive 3D Cyber Simulator */}
          <div>
            <div className="cyber-simulator-frame">
              
              <div className="simulator-header">
                <div className="sim-dots">
                  <span className="sim-dot red"></span>
                  <span className="sim-dot yellow"></span>
                  <span className="sim-dot green"></span>
                </div>

                <div className="sim-domain-bar">
                  <span>🔒</span> https://codexstudio.az/demo/{activeTab}
                </div>

                {/* Preset Switcher Tabs */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  {Object.keys(PREVIEW_MODELS).map(key => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      style={{
                        background: activeTab === key ? '#0066FF' : 'rgba(255, 255, 255, 0.08)',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {key === 'ecommerce' ? 'Mağaza' : key === 'corporate' ? 'Şirkət' : 'Restoran'}
                    </button>
                  ))}
                </div>
              </div>

              {/* High-Resolution Dynamic Image Preview */}
              <div className="sim-screen-content">
                <img 
                  src={activeModel.url} 
                  alt={activeModel.title} 
                  style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'all 0.4s ease'
                  }} 
                />

                <div style={{
                  padding: '16px 20px',
                  background: 'rgba(4, 8, 20, 0.95)',
                  borderTop: '1px solid rgba(0, 102, 255, 0.4)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <strong style={{ fontSize: '1.05rem', color: '#FFFFFF', display: 'block' }}>{activeModel.title}</strong>
                    <span style={{ fontSize: '0.8rem', color: '#00F0FF' }}>{activeModel.category}</span>
                  </div>

                  <span style={{
                    background: 'rgba(0, 102, 255, 0.2)',
                    border: '1px solid #0066FF',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    color: '#60A5FA',
                    fontWeight: 700
                  }}>
                    {activeModel.tag}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
