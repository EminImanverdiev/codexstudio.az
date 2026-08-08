import React, { useState } from 'react';

const CATEGORIES = {
  landing: { name: 'Təqdimat Saytı (Landing Page)', basePrice: 650, basePages: 1, days: '3-5 gün' },
  corporate: { name: 'Korporativ Şirkət Saytı', basePrice: 950, basePages: 5, days: '7-10 gün' },
  ecommerce: { name: 'Onlayn Mağaza (E-ticarət)', basePrice: 1350, basePages: 8, days: '12-16 gün' },
  restaurant: { name: 'Restoran / QR Menyu', basePrice: 850, basePages: 4, days: '5-7 gün' }
};

const ADDONS = [
  { id: 'multilingual', name: 'Çoxdilli Dəstək (AZ / EN / RU)', price: 150 },
  { id: 'payment', name: 'Onlayn Kartla Ödəniş (Kapital / Paşa / m10)', price: 250 },
  { id: 'cms', name: 'Admin İdarəetmə Paneli (CMS)', price: 200 },
  { id: 'seo', name: 'Google SEO & Sayt Xəritəsi Optimizasiyası', price: 120 },
  { id: 'urgent', name: 'Təcili Təhvil Rejimi (Express 2x Sürət)', price: 180 }
];

export default function Calculator() {
  const [selectedCat, setSelectedCat] = useState('corporate');
  const [pages, setPages] = useState(5);
  const [selectedAddons, setSelectedAddons] = useState(['cms', 'seo']);

  const catInfo = CATEGORIES[selectedCat];
  const extraPages = Math.max(0, pages - catInfo.basePages);
  const pagesPrice = extraPages * 40;
  
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = ADDONS.find(a => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = catInfo.basePrice + pagesPrice + addonsTotal;

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleWhatsAppOrder = () => {
    const addonsList = selectedAddons.map(id => `• ${ADDONS.find(a => a.id === id)?.name}`).join('\n');
    const msg = `Salam, CodeX Studio! Sayt sifarişi üçün kalkulyatordan qiymət hesabladım:\n\n` +
                `📌 *Sayt Növü:* ${catInfo.name}\n` +
                `📄 *Səhifə Sayı:* ${pages} səhifə\n` +
                `⚡ *Seçilmiş Funksiyalar:*\n${addonsList || '• Standart paket'}\n` +
                `🎁 *Hədiyyə:* 1 İllik .AZ Domen + SSD Hostinq + SSL\n` +
                `💰 *Yekun Qiymət:* ${totalPrice} AZN\n\n` +
                `Bu layihə üzrə müzakirəyə başlaya bilərik?`;
    window.open(`https://wa.me/994106011201?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="section" id="calculator" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge-neon-pill">
            <span className="pulse-neon-dot"></span>
            Canlı Qiymətləndirmə
          </div>
          <h2 style={{ fontSize: '3.2rem', margin: '16px 0' }}>
            Saytınızın Qiymətini <span className="text-cyan-glow">Dərhal Hesablayın</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            İstədiyiniz funksiyaları seçin, dəqiq büdcəni görün və birbaşa WhatsApp-a göndərin.
          </p>
        </div>

        <div className="calculator-box">
          
          {/* Controls Column */}
          <div>
            
            {/* Step 1: Category */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontWeight: 900, fontSize: '1.1rem', marginBottom: '14px', color: '#00F0FF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>1.</span> Saytın növünü seçin:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                {Object.entries(CATEGORIES).map(([key, item]) => (
                  <button
                    key={key}
                    className={`cat-select-card ${selectedCat === key ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedCat(key);
                      setPages(item.basePages);
                    }}
                  >
                    <strong>{item.name}</strong>
                    <small>⚡ {item.days} təhvil</small>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pages Slider */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#00F0FF' }}>2. Səhifə sayı:</span>
                <strong style={{ color: '#00F0FF', fontSize: '1.2rem' }}>{pages} səhifə</strong>
              </div>
              <input 
                type="range" 
                min="1" 
                max="25" 
                value={pages} 
                onChange={(e) => setPages(parseInt(e.target.value, 10))}
                style={{ width: '100%', accentColor: '#0066FF', cursor: 'pointer', height: '10px' }}
              />
            </div>

            {/* Step 3: Addons */}
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.1rem', marginBottom: '14px', color: '#00F0FF' }}>3. Əlavə imkanlar:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {ADDONS.map(addon => {
                  const isActive = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      style={{
                        background: isActive ? 'rgba(0, 102, 255, 0.22)' : 'rgba(12, 20, 42, 0.6)',
                        border: `1.5px solid ${isActive ? '#00F0FF' : 'rgba(255, 255, 255, 0.08)'}`,
                        borderRadius: '14px',
                        padding: '14px 18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: isActive ? '0 0 20px rgba(0, 102, 255, 0.35)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '8px',
                          background: isActive ? '#0066FF' : 'transparent',
                          border: `2px solid ${isActive ? '#00F0FF' : 'rgba(255, 255, 255, 0.25)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          fontSize: '0.9rem',
                          fontWeight: 900
                        }}>
                          {isActive ? '✓' : ''}
                        </div>
                        <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>{addon.name}</span>
                      </div>
                      <span style={{ color: '#00F0FF', fontWeight: 800, fontSize: '0.95rem' }}>+{addon.price} AZN</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Price Summary Column */}
          <div className="summary-panel-cyber">
            <div>
              <div className="badge-neon-pill" style={{ marginBottom: '16px', fontSize: '0.75rem' }}>Hesablanmış Təklif</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Sifariş Xülasəsi</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '28px' }}>Dəqiq, şəffaf və rəsmi qiymətləndirmə.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.95rem', color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sayt növü:</span>
                  <strong style={{ color: '#FFFFFF' }}>{catInfo.name}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Həcm:</span>
                  <strong style={{ color: '#FFFFFF' }}>{pages} səhifə ({catInfo.basePrice + pagesPrice} AZN)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Əlavələr:</span>
                  <strong style={{ color: '#FFFFFF' }}>{selectedAddons.length} ədəd ({addonsTotal} AZN)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#00F0FF', fontWeight: 700 }}>
                  <span>🎁 Hədiyyə:</span>
                  <strong>1 İllik Domen + SSD Hostinq (0 AZN)</strong>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '30px' }}>
              <div className="total-display-box">
                <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 700 }}>YEKUN QİYMƏT:</span>
                <span className="total-num-val">
                  {totalPrice} AZN
                </span>
              </div>

              <button 
                onClick={handleWhatsAppOrder} 
                className="btn-cyber-primary" 
                style={{ width: '100%', fontSize: '1.15rem', padding: '18px', borderRadius: '16px' }}
              >
                💬 Sifariş üçün yazın (WhatsApp)
              </button>
              
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#64748B', marginTop: '12px' }}>
                010 601 12 01 nömrəsinə birbaşa pre-filled mesaj göndəriləcək.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
