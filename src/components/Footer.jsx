import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: '#020409', borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '60px 0 30px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg style={{ width: '38px', height: '38px' }} viewBox="0 0 48 48" fill="none">
              <path d="M24 10H15C9.47715 10 5 14.4772 5 20V28C5 33.5228 9.47715 38 15 38H24" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
              <path d="M38 14C38 11.7909 35.5 10 32 10C27 10 24 14 24 18C24 24 38 22 38 29C38 34 33 38 27 38C22 38 20 35 20 32" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: '1.3rem', fontWeight: 900, fontFamily: 'Outfit, sans-serif' }}>
              CODEX <span style={{ color: '#3B82F6' }}>STUDIO</span>
            </span>
          </div>

          <div style={{ display: 'flex', gap: '24px', fontSize: '0.95rem' }}>
            <a href="#hero" style={{ color: '#94A3B8', textDecoration: 'none' }}>Ana Səhifə</a>
            <a href="#process" style={{ color: '#94A3B8', textDecoration: 'none' }}>İş Prosesi</a>
            <a href="#calculator" style={{ color: '#94A3B8', textDecoration: 'none' }}>Qiymətlər</a>
            <a href="#templates" style={{ color: '#94A3B8', textDecoration: 'none' }}>Şablonlar</a>
          </div>

          <div style={{ color: '#60A5FA', fontWeight: 700 }}>
            📞 010 601 12 01 | 🌐 codexstudio.az
          </div>

        </div>

        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '24px', color: '#64748B', fontSize: '0.85rem' }}>
          © 2026 CodeX Studio. Bütün hüquqlar qorunur. Yaradırıq, Dəyər Qatırıq.
        </div>
      </div>
    </footer>
  );
}
