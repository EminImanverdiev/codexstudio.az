import React from 'react';

export default function Navbar() {
  return (
    <header className="app-header">
      <div className="container">
        <div className="header-row">
          
          {/* Official CS Logo */}
          <a href="#hero" className="brand-cs">
            <svg className="cs-logo-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cs-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
              </defs>
              {/* Stylized 'C' in white */}
              <path 
                d="M24 10H15C9.47715 10 5 14.4772 5 20V28C5 33.5228 9.47715 38 15 38H24" 
                stroke="#FFFFFF" 
                strokeWidth="5" 
                strokeLinecap="round" 
              />
              {/* Stylized 'S' in electric blue */}
              <path 
                d="M38 14C38 11.7909 35.5 10 32 10C27 10 24 14 24 18C24 24 38 22 38 29C38 34 33 38 27 38C22 38 20 35 20 32" 
                stroke="url(#cs-gradient)" 
                strokeWidth="5" 
                strokeLinecap="round" 
              />
            </svg>
            <div className="brand-titles">
              <span className="title-main">CODEX</span>
              <span className="title-sub">STUDIO</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            <a href="#process" style={{ color: '#94A3B8', fontWeight: 600, textDecoration: 'none' }}>Mərhələlər</a>
            <a href="#calculator" style={{ color: '#94A3B8', fontWeight: 600, textDecoration: 'none' }}>Qiymət Hesabla</a>
            <a href="#templates" style={{ color: '#94A3B8', fontWeight: 600, textDecoration: 'none' }}>Şablonlar</a>
          </nav>

          {/* Direct CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a href="tel:0106011201" style={{ color: '#60A5FA', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
              📞 010 601 12 01
            </a>
            <a href="#calculator" className="btn-electric" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              Layihə Başlat ➔
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
