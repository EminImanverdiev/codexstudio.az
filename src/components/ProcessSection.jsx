import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'EHTİYACINIZI ÖYRƏNİRİK',
      sub: 'Biznesinizin hədəflərini və tələblərini dəqiq araşdırırıq.',
      // Exact Map Pin / Location Discovery Token matching uploaded image 1
      token: (
        <div className="neon-circle-token">
          <svg width="46" height="46" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="32" cy="46" rx="20" ry="8" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeDasharray="3 3" />
            <circle cx="32" cy="46" r="6" stroke="#00F0FF" strokeWidth="3" />
            <path 
              d="M32 12C24.268 12 18 18.268 18 26C18 36 32 46 32 46C32 46 46 36 46 26C46 18.268 39.732 12 32 12Z" 
              stroke="#FFFFFF" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <circle cx="32" cy="26" r="4.5" stroke="#FFFFFF" strokeWidth="3" />
          </svg>
        </div>
      )
    },
    {
      num: '02',
      title: 'DİZAYNI HAZIRLAYIRIQ',
      sub: 'Müasir, zərif və yüksək satış gətirən UI/UX prototipini qururuq.',
      // UI/UX Design Wireframe & Pen Tool Token
      token: (
        <div className="neon-circle-token">
          <svg width="46" height="46" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="14" y="14" width="36" height="28" rx="5" stroke="#FFFFFF" strokeWidth="3.5" />
            <line x1="14" y1="24" x2="50" y2="24" stroke="#00F0FF" strokeWidth="2.5" />
            <circle cx="20" cy="19" r="1.5" fill="#FFFFFF" />
            <circle cx="25" cy="19" r="1.5" fill="#FFFFFF" />
            <circle cx="30" cy="19" r="1.5" fill="#FFFFFF" />
            <path d="M26 34L38 46L44 40L32 28L26 34Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="41" cy="43" r="2" fill="#00F0FF" />
          </svg>
        </div>
      )
    },
    {
      num: '03',
      title: 'SAYTI KODLAYIRIQ',
      sub: 'Ultra-sürətli kodlar, SEO optimizasiyası və təhlükəsizlik sazlaması.',
      // Code Brackets & Laptop Cyber Token
      token: (
        <div className="neon-circle-token">
          <svg width="46" height="46" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="22 24 12 32 22 40" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="42 24 52 32 42 40" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="36" y1="18" x2="28" y2="46" stroke="#00F0FF" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>
      )
    },
    {
      num: '04',
      title: 'TƏHVİL VERİRİK',
      sub: 'Domen, hostinq qoşulur və saytınız qüsursuz canlıya buraxılır.',
      // Exact Neon Paper Airplane / Rocket Launch Token matching uploaded image 2
      token: (
        <div className="neon-circle-token">
          <svg width="46" height="46" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M48 16L16 32L28 36L44 22L30 38L42 48L48 16Z" 
              stroke="#FFFFFF" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            {/* Speed Dash lines in electric blue */}
            <line x1="14" y1="42" x2="20" y2="48" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
            <line x1="20" y1="46" x2="26" y2="52" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="process-section" id="process">
      <div className="container">
        
        {/* Section Header */}
        <div className="process-header">
          <div className="badge-neon-pill">
            <span className="pulse-neon-dot"></span>
            3/5 İNSTAGRAM POST DİZAYNI
          </div>
          
          <h2 className="process-title-large">
            SAYTINIZ <br />
            <span className="text-cyan-glow">NECƏ</span> <br />
            HAZIRLANIR?
          </h2>

          <div style={{ marginTop: '16px', fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.2em', color: '#60A5FA' }}>
            4 SADƏ MƏRHƏLƏ
          </div>
        </div>

        {/* 4 Cyber Step Cards */}
        <div className="steps-grid-4">
          {steps.map((step, idx) => (
            <div className="step-card-cyber" key={step.num}>
              
              {/* Step Number Glow */}
              <div className="step-num-glow">{step.num}</div>

              {/* Exact Circular Neon Token */}
              {step.token}

              {/* Title & Description */}
              <h3 className="step-title-bold">{step.title}</h3>
              <p className="step-subtext">{step.sub}</p>

              {/* Arrow Connecting Line */}
              {idx < steps.length - 1 && (
                <div className="step-arrow-bubble">➔</div>
              )}

            </div>
          ))}
        </div>

        {/* Central Glowing CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '54px' }}>
          <a href="#calculator" className="btn-cyber-primary" style={{ fontSize: '1.2rem', padding: '18px 44px', borderRadius: '999px' }}>
            ✈ LAYİHƏNİZİ BAŞLAYAQ ➔
          </a>
        </div>

        {/* Official Instagram Footer Contact Bar */}
        <div className="insta-bottom-bar">
          <div className="insta-pill-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>codexstudio.az</span>
          </div>

          <a href="tel:0106011201" className="insta-pill-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>010 601 12 01</span>
          </a>

          <a href="https://wa.me/994106011201?text=Salam,%20CodeX%20Studio!%20Sayt%20sifari%C5%9Fi%20haqq%C4%B1nda%20dan%C4%B1%C5%9Fmaq%20ist%C9%99yir%C9%99m." target="_blank" rel="noreferrer" className="insta-pill-link" style={{ color: '#25D366' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.112.551 4.096 1.517 5.823l-1.611 5.889 6.046-1.585c1.664.908 3.568 1.425 5.594 1.425 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
            </svg>
            <span>DM / WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
}
