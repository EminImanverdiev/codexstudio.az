import React, { useState, useEffect } from 'react'
import {
  MessageCircle, Send, ArrowRight, Laptop, Globe, ShoppingBag,
  Zap, Smartphone, CheckCircle2, ChevronDown, X, Sun, Moon,
  Mail, ExternalLink, Loader2, ArrowUpRight, ShieldCheck, Menu
} from 'lucide-react'

export default function App() {
  const [lang, setLang] = useState('az')
  const [theme, setTheme] = useState('dark')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [heroTab, setHeroTab] = useState('landing')
  const [activeWork, setActiveWork] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  // Finder Quiz State
  const [quizPurpose, setQuizPurpose] = useState(1)
  const [quizFeatures, setQuizFeatures] = useState([0, 1])

  // Contact Form State
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [business, setBusiness] = useState('')
  const [siteType, setSiteType] = useState('Korporativ sayt')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light')
  }, [theme])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const toggleQuizFeature = (index) => {
    if (quizFeatures.includes(index)) {
      setQuizFeatures(quizFeatures.filter((i) => i !== index))
    } else {
      setQuizFeatures([...quizFeatures, index])
    }
  }

  const getQuizRecommendation = () => {
    if (quizPurpose === 2 || quizFeatures.includes(3) || quizFeatures.includes(2)) {
      return {
        type: 'E-commerce (Onlayn Mağaza)',
        desc: 'Məhsul kataloqu, səbət və bank kartı ilə onlayn ödəniş qəbul etmək üçün ən uyğun seçimdir.',
        badge: 'Satış Yönümlü'
      }
    }
    if (quizPurpose === 0) {
      return {
        type: 'Landing Page (Təqdimat Saytı)',
        desc: 'Bir xidmət və ya məhsulun təqdimatı üçün yüksək təsirli, dərhal müştəri müraciəti toplayan tək səhifəlik sayt.',
        badge: 'Təqdimat & Satış'
      }
    }
    if (quizPurpose === 3 || quizFeatures.includes(4) || quizFeatures.includes(5)) {
      return {
        type: 'Fərdi və Tibbi Veb Portal',
        desc: 'Biznesinizin unikal tələblərinə uyğun xüsusi kalkulyatorlar, rezervasiya modulları və fərdi idarəetmə sistemi.',
        badge: 'Xüsusi Həll'
      }
    }
    return {
      type: 'Korporativ Şirkət Saytı',
      desc: 'Şirkətinizi, xidmətlərinizi və etibarınızı çoxsəhifəli sistemdə peşəkar şəkildə təqdim edən rəsmi sayt.',
      badge: 'Şirkət Etibarı'
    }
  }

  const quizRec = getQuizRecommendation()

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const id = 'CODEX-' + Date.now().toString().slice(-6)

    try {
      await fetch('https://formsubmit.co/ajax/emin.imanverdievv@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Codex Studio Sayt Sifarişi] ${name} - ${siteType}`,
          _template: 'table',
          'Müraciət ID': id,
          'Müştəri Adı': name,
          'Telefon': phone,
          'Biznes Sahəsi': business || 'Qeyd olunmayıb',
          'Sayt Növü': siteType,
          'İstəklər': message || 'Əlavə qeyd yoxdur',
          'Qəbul Emaili': 'emin.imanverdievv@gmail.com'
        })
      })
      setIsSuccess(true)
    } catch (err) {
      console.error(err)
      setIsSuccess(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppSend = () => {
    const text = `Salam, Codex Studio! Sayt sifarişi üçün müraciət edirəm:\n\n` +
                 `👤 *Ad:* ${name || 'Qeyd olunmayıb'}\n` +
                 `📞 *Əlaqə:* ${phone || 'Qeyd olunmayıb'}\n` +
                 `🏢 *Biznes:* ${business || 'Qeyd olunmayıb'}\n` +
                 `🌐 *Sayt növü:* ${siteType}\n` +
                 `📝 *Qeyd:* ${message || 'Yoxdur'}\n\n` +
                 `Layihə haqqında ətraflı danışmaq istərdim.`;
    window.open(`https://wa.me/994106011201?text=${encodeURIComponent(text)}`, '_blank')
  }

  const works = [
    {
      id: '01',
      name: 'Sinaps Med — Tibbi Avadanlıq & Səhiyyə Şirkəti',
      type: 'Tibbi & Korporativ Veb Portal',
      desc: 'Tibbi cihazlar, klinik və ginekoloji məhsullar, beynəlxalq distribütorluq və xəstəxanalar üçün çoxdilli geniş korporativ sayt.',
      url: 'https://sinapsmed.com',
      displayUrl: 'sinapsmed.com',
      tags: ['Tibbi avadanlıq', 'Məhsul kataloqu', 'Korporativ arxitektura', 'Partnyor əlaqələri']
    },
    {
      id: '02',
      name: 'Leyla Qasımova — Fizika və Elm Mərkəzi',
      type: 'Müəllim / Təhsil üçün Şəxsi Brend Saytı',
      desc: 'Təlim proqramları, video dərslər, tələbə nəticələri və birbaşa sınaq dərsinə qeydiyyat toplayan şəxsi brend platforması.',
      url: 'https://leylagasimova.az',
      displayUrl: 'leylagasimova.az',
      tags: ['Şəxsi brend', 'Kurs qeydiyyatı', 'Video təqdimat', 'WhatsApp inteqrasiyası']
    },
    {
      id: '03',
      name: 'Vektor Logistics & Holding',
      type: 'Korporativ B2B Şirkət Portalı',
      desc: 'Beynəlxalq yükdaşıma, anbar xidmətləri və tərəfdaş şirkətlər üçün çoxsəhifəli, etibarlı korporativ veb portal.',
      url: 'https://vektor-holding.codexstudio.az',
      displayUrl: 'vektor-holding.az',
      tags: ['B2B korporativ', 'Xidmət kataloqu', 'Çoxdilli struktur', 'Sorğu sistemi']
    },
    {
      id: '04',
      name: 'Aura Home & Living',
      type: 'E-commerce Onlayn Mağaza',
      desc: 'İnteryer mebeli və ev aksessuarları üçün müasir məhsul vitrini, kateqoriya filtri, səbət və bank kartı ilə ödəniş axını.',
      url: 'https://aurahome.codexstudio.az',
      displayUrl: 'aurahome.az',
      tags: ['Onlayn mağaza', 'Səbət sistemi', 'Kartla ödəniş', 'Mobil optimizasiya']
    }
  ]

  const currentWork = works[activeWork]

  const faqs = [
    {
      q: 'Saytın hazırlanması neçə gün çəkir?',
      a: 'Müddət layihənin növündən asılıdır: Tək səhifəlik Landing page adətən bir neçə günə, korporativ şirkət saytları və onlayn mağazalar isə orta hesabla 1-3 həftəyə tam hazır vəziyyətə gətirilir.'
    },
    {
      q: 'Qiymət necə müəyyən olunur?',
      a: 'Qiymət saytın növünə (Landing page, Korporativ, E-commerce), səhifə sayına və tələb olunan funksionallığa (onlayn ödəniş, çoxdillilik və s.) görə şəffaf şəkildə hesablanır. Gizli xərc olmur.'
    },
    {
      q: 'Domen və hosting qiymətə daxildirmi?',
      a: 'Bəli, istəyinizə uyğun olaraq .az və ya beynəlxalq domenlərin seçilməsi, sürətli serverin quraşdırılması və SSL təhlükəsizlik sertifikatının aktivləşdirilməsi tərəfimizdən təmin edilir.'
    },
    {
      q: 'Sayt telefonda və planşetdə rahat açılacaq?',
      a: 'Bəli, 100%. Hazırladığımız bütün saytlar Mobile-First prinsipi ilə yığılır və bütün iPhone, Android smartfon və planşet ekranlarında qüsursuz və rahat açılır.'
    },
    {
      q: 'Sonradan saytda dəyişiklik və əlavələr etmək mümkündür?',
      a: 'Bəli. Saytın arxitekturası elə qurulur ki, gələcəkdə yeni səhifələr, məhsullar, xidmətlər və ya yeni funksiyalar asanlıqla əlavə oluna bilsin.'
    },
    {
      q: 'Onlayn bank kartı ilə ödəniş sistemi qoşmaq olar?',
      a: 'Bəli. E-commerce və ya sifariş saytlarınıza Azərbaycanın aparıcı banklarının kartla ödəniş sistemlərini (Kapital Bank, Paşa Bank və s.) təhlükəsiz şəkildə inteqrasiya edirik.'
    },
    {
      q: 'Sayt hazır olduqdan sonra texniki dəstək verirsiniz?',
      a: 'Bəli. Sayt təhvil verildikdən sonra da serverin fasiləsiz işləməsi, texniki suallarınız və istənilən yenilənmələrdə dəstəyimiz davam edir.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#05070B] text-[#F5F7FA] overflow-x-hidden">
      {/* Scroll Progress Line */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2px',
          backgroundColor: '#0066FF',
          width: `${scrollProgress}%`,
          zIndex: 999,
          transition: 'width 0.1s ease-out'
        }}
      />

      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(5, 7, 11, 0.94)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #162032',
        padding: '14px 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          
          {/* CS Logo + CodeX Studio */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid #162032',
              boxShadow: '0 4px 12px rgba(0, 102, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#080C14'
            }}>
              <img src="/logo.png" alt="CodeX Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '1.25rem', fontWeight: 800, color: '#F5F7FA', letterSpacing: '-0.02em' }}>
              <span>Code<span style={{ color: '#0066FF' }}>X</span></span>
              <span style={{ color: '#9CA6B5', fontWeight: 500, fontSize: '1.15rem' }}>Studio</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <a href="#hero" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500 }}>Ana səhifə</a>
            <a href="#services" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500 }}>Xidmətlər</a>
            <a href="#works" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500 }}>İşlərimiz</a>
            <a href="#process" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500 }}>İş prosesi</a>
            <a href="#about" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500 }}>Haqqımızda</a>
            <a href="#faq" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500 }}>Sual-Cavab</a>
            <a href="#contact" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500 }}>Əlaqə</a>
          </nav>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', padding: '3px', background: '#080C14', border: '1px solid #162032', borderRadius: '8px' }}>
              <button
                onClick={() => setLang('az')}
                style={{ padding: '4px 8px', borderRadius: '5px', border: 'none', background: lang === 'az' ? '#0066FF' : 'transparent', color: lang === 'az' ? 'white' : '#9CA6B5', fontSize: '0.72rem', fontWeight: 'bold', cursor: 'pointer' }}
              >
                AZ
              </button>
              <button
                onClick={() => setLang('en')}
                style={{ padding: '4px 8px', borderRadius: '5px', border: 'none', background: lang === 'en' ? '#0066FF' : 'transparent', color: lang === 'en' ? 'white' : '#9CA6B5', fontSize: '0.72rem', fontWeight: 'bold', cursor: 'pointer' }}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleTheme}
              style={{ padding: '7px 10px', borderRadius: '8px', background: '#080C14', border: '1px solid #162032', color: '#9CA6B5', cursor: 'pointer' }}
              title="Rejimi dəyiş"
            >
              {theme === 'dark' ? <Sun size={14} color="#FFBD2E" /> : <Moon size={14} color="#0066FF" />}
            </button>

            <a
              href="#contact"
              style={{
                background: '#0066FF',
                color: 'white',
                padding: '9px 18px',
                borderRadius: '10px',
                fontSize: '0.84rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                boxShadow: '0 4px 14px rgba(0, 102, 255, 0.3)',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Təklif al</span>
              <ArrowRight size={14} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{ padding: '7px', borderRadius: '8px', background: '#080C14', border: '1px solid #162032', color: '#F5F7FA', cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 90,
          background: 'rgba(5, 7, 11, 0.98)',
          backdropFilter: 'blur(20px)',
          padding: '80px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>01. Ana səhifə</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>02. Xidmətlər</a>
            <a href="#works" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>03. İşlərimiz</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>04. İş prosesi</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>05. Haqqımızda</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>06. Sual-Cavab</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>07. Əlaqə</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '24px' }}>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{ background: '#0066FF', color: 'white', padding: '14px', borderRadius: '12px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}
            >
              Sayt sifarişi verin →
            </a>
            <a
              href="https://wa.me/994106011201"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#080C14', border: '1px solid #162032', color: '#F5F7FA', padding: '14px', borderRadius: '12px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}
            >
              WhatsApp: 010 601 12 01
            </a>
          </div>
        </div>
      )}

      {/* 1. Hero Section */}
      <section id="hero" style={{ padding: '60px 0 70px' }}>
        <div className="container">
          <div className="hero-grid">
            
            {/* Left Column */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                borderRadius: '999px',
                background: '#080C14',
                border: '1px solid #162032',
                fontSize: '0.72rem',
                fontFamily: 'monospace',
                color: '#9CA6B5',
                marginBottom: '16px'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0066FF', boxShadow: '0 0 8px #0066FF' }}></span>
                <span>CODEX STUDIO • VEB SAYTLARIN HAZIRLANMASI</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', lineHeight: 1.14, fontWeight: 800, marginBottom: '18px', letterSpacing: '-0.02em' }}>
                Biznesiniz üçün işləyən və <br />
                <span style={{ color: '#0066FF' }}>müştəri qazandıran saytlar.</span>
              </h1>

              <p style={{ color: '#9CA6B5', fontSize: 'clamp(0.92rem, 2vw, 1.1rem)', lineHeight: 1.6, maxWidth: '540px', marginBottom: '28px' }}>
                Landing page, korporativ şirkət saytları və onlayn mağazalar — sürətli, mobil cihazlara tam uyğun və biznesinizi bazarda ən yaxşı şəkildə təqdim edən peşəkar veb həllər.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '28px' }}>
                <a
                  href="#contact"
                  style={{
                    background: '#0066FF',
                    color: 'white',
                    padding: '14px 28px',
                    borderRadius: '12px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 8px 24px rgba(0, 102, 255, 0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Sayt sifarişi ver</span>
                  <ArrowRight size={15} />
                </a>

                <a
                  href="#works"
                  style={{
                    background: '#080C14',
                    color: '#F5F7FA',
                    border: '1px solid #162032',
                    padding: '14px 24px',
                    borderRadius: '12px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span>Son işlərimizə bax</span>
                </a>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.82rem', color: '#9CA6B5', borderTop: '1px solid #162032', paddingTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="#0066FF" /><span style={{ color: '#F5F7FA' }}>100% Mobil uyğunluq</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="#0066FF" /><span style={{ color: '#F5F7FA' }}>Yüksək yüklənmə sürəti</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="#0066FF" /><span style={{ color: '#F5F7FA' }}>Google və SEO strukturu</span></div>
              </div>
            </div>

            {/* Right Column: Realistic Website Mockup */}
            <div style={{ width: '100%' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ display: 'flex', gap: '6px', padding: '4px', background: '#080C14', border: '1px solid #162032', borderRadius: '10px' }}>
                  <button
                    onClick={() => setHeroTab('landing')}
                    style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'landing' ? '#0066FF' : 'transparent', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Landing page
                  </button>
                  <button
                    onClick={() => setHeroTab('corporate')}
                    style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'corporate' ? '#0066FF' : 'transparent', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Korporativ
                  </button>
                  <button
                    onClick={() => setHeroTab('ecommerce')}
                    style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'ecommerce' ? '#0066FF' : 'transparent', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                  >
                    E-commerce
                  </button>
                </div>

                <div style={{ fontSize: '0.72rem', color: '#10B981', fontFamily: 'monospace', padding: '4px 10px', background: '#080C14', border: '1px solid #162032', borderRadius: '8px' }}>
                  ✓ Canlı önizləmə
                </div>
              </div>

              <div style={{
                background: '#080C14',
                border: '1px solid #162032',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 16px',
                  background: '#05070B',
                  borderBottom: '1px solid #162032'
                }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }}></span>
                  </div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', background: '#080C14', padding: '3px 12px', borderRadius: '6px', border: '1px solid #162032' }}>
                    <span style={{ color: '#0066FF' }}>https://</span>
                    <span>
                      {heroTab === 'landing' && 'sinapsmed.com'}
                      {heroTab === 'corporate' && 'vektor-holding.az'}
                      {heroTab === 'ecommerce' && 'aurahome.az'}
                    </span>
                  </div>
                  <div style={{ width: '20px' }}></div>
                </div>

                <div style={{ padding: '24px', background: 'linear-gradient(180deg, #080C14 0%, #0D121D 100%)', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {heroTab === 'landing' && (
                    <div>
                      <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '6px' }}>TİBBİ AVADANLIQ & SƏHİYYƏ</div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Sinaps Med — Tibbi Avadanlıq və Klinik Həllər.</h3>
                      <p style={{ fontSize: '0.85rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '18px' }}>
                        Beynəlxalq tibbi avadanlıqlar, distribütorluq və səhiyyə müəssisələri üçün korporativ veb portal.
                      </p>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <a href="https://sinapsmed.com" target="_blank" rel="noopener noreferrer" style={{ background: '#0066FF', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>Sayta baxın →</a>
                        <span style={{ background: '#162032', color: '#9CA6B5', padding: '8px 14px', borderRadius: '8px', fontSize: '0.78rem' }}>Məhsul kataloqu</span>
                      </div>
                    </div>
                  )}

                  {heroTab === 'corporate' && (
                    <div>
                      <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '6px' }}>B2B & LOGİSTİKA PORTALI</div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Qlobal tərəfdaşlarınız üçün etibarlı həllər.</h3>
                      <p style={{ fontSize: '0.85rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '18px' }}>
                        Müasir texnologiyalar və təhlükəsiz korporativ arxitektura ilə biznesinizi təmsil edirik.
                      </p>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <a href="#contact" style={{ background: '#0066FF', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>Təklif al →</a>
                        <span style={{ background: '#162032', color: '#9CA6B5', padding: '8px 14px', borderRadius: '8px', fontSize: '0.78rem' }}>Xidmətlər</span>
                      </div>
                    </div>
                  )}

                  {heroTab === 'ecommerce' && (
                    <div>
                      <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '6px' }}>MEBEL & İNTERYER MAĞAZASI</div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Müasir interyer məhsulları və onlayn ödəniş.</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', margin: '12px 0' }}>
                        <div style={{ background: '#05070B', border: '1px solid #162032', padding: '8px 12px', borderRadius: '8px' }}>
                          <span style={{ fontSize: '0.7rem', color: '#9CA6B5' }}>Skandinav Divan</span>
                          <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>680 ₼</div>
                        </div>
                        <div style={{ background: '#05070B', border: '1px solid #162032', padding: '8px 12px', borderRadius: '8px' }}>
                          <span style={{ fontSize: '0.7rem', color: '#9CA6B5' }}>Qəhvə Masası</span>
                          <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>240 ₼</div>
                        </div>
                      </div>
                      <a href="#contact" style={{ background: '#0066FF', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Sifariş et →</a>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #162032', paddingTop: '12px', marginTop: '16px', fontSize: '0.72rem', color: '#9CA6B5' }}>
                    <span>✓ 100% Mobil və Planşet Uyğun</span>
                    <span style={{ color: '#0066FF' }}>Codex Studio Standartı</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section style={{ padding: '24px 0', background: '#080C14', borderTop: '1px solid #162032', borderBottom: '1px solid #162032' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
            <div><span style={{ color: '#0066FF' }}>•</span> Korporativ saytlar</div>
            <div><span style={{ color: '#0066FF' }}>•</span> Landing Page</div>
            <div><span style={{ color: '#0066FF' }}>•</span> E-commerce mağazalar</div>
            <div><span style={{ color: '#0066FF' }}>•</span> Tibbi & Fərdi portallar</div>
            <div><span style={{ color: '#0066FF' }}>•</span> Texniki dəstək</div>
          </div>
          <div style={{ fontSize: '0.78rem', color: '#9CA6B5' }}>Azərbaycan və xarici bazarda fəaliyyət göstərən bizneslər üçün etibarlı tərəfdaş.</div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" style={{ padding: '80px 0', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              XİDMƏTLƏRİMİZ
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Biznesiniz üçün hansı veb sayt lazımdır?</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.92rem' }}>Fəaliyyət sahənizə və satış hədəflərinizə uyğun ən optimal sayt formatını birlikdə seçirik.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            
            <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '18px', padding: '24px' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '8px' }}>01 // ŞİRKƏT ETİBARI</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>Korporativ Şirkət Saytları</h3>
              <p style={{ fontSize: '0.85rem', color: '#F5F7FA', marginBottom: '8px' }}>Şirkətinizi, xidmətlərinizi və etibarınızı peşəkar səviyyədə təqdim etmək üçün.</p>
              <p style={{ fontSize: '0.78rem', color: '#9CA6B5', lineHeight: 1.5, marginBottom: '16px' }}>Şirkətinizin fəaliyyətini, xidmət kataloqunu, komandasını və tərəfdaşlarını əks etdirən rəsmi saytlar.</p>
              <a href="#contact" style={{ color: '#0066FF', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>Təklif al →</a>
            </div>

            <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '18px', padding: '24px' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '8px' }}>02 // TƏQDİMAT & SATIŞ</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>Landing Page (Təqdimat Saytı)</h3>
              <p style={{ fontSize: '0.85rem', color: '#F5F7FA', marginBottom: '8px' }}>Bir xidmət, məhsul və ya kampaniyadan birbaşa müştəri toplamaq üçün.</p>
              <p style={{ fontSize: '0.78rem', color: '#9CA6B5', lineHeight: 1.5, marginBottom: '16px' }}>Ziyarətçini yayındırmadan birbaşa hədəfə aparan, WhatsApp və müraciət formaları ilə dərhal sifariş toplayan saytlar.</p>
              <a href="#contact" style={{ color: '#0066FF', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>Təklif al →</a>
            </div>

            <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '18px', padding: '24px' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '8px' }}>03 // ONLAYN SATIŞ</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>E-commerce (Onlayn Mağaza)</h3>
              <p style={{ fontSize: '0.85rem', color: '#F5F7FA', marginBottom: '8px' }}>Məhsullarınızı internet üzərindən 24/7 təqdim etmək və onlayn satmaq üçün.</p>
              <p style={{ fontSize: '0.78rem', color: '#9CA6B5', lineHeight: 1.5, marginBottom: '16px' }}>Məhsul kataloqu, filtrlər, səbət sistemi və Azərbaycan banklarının kartları ilə təhlükəsiz onlayn ödəniş axını.</p>
              <a href="#contact" style={{ color: '#0066FF', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>Təklif al →</a>
            </div>

            <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '18px', padding: '24px' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '8px' }}>04 // XÜSUSİ HƏLL</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>Fərdi və Tibbi Veb Portallar</h3>
              <p style={{ fontSize: '0.85rem', color: '#F5F7FA', marginBottom: '8px' }}>Klinikalar, təhsil mərkəzləri, logistika və xüsusi funksionallıq tələb edən layihələr üçün.</p>
              <p style={{ fontSize: '0.78rem', color: '#9CA6B5', lineHeight: 1.5, marginBottom: '16px' }}>Biznesinizin unikal tələblərinə uyğunlaşdırılmış rezervasiya, kalkulyatorlar və fərdi idarəetmə sistemləri.</p>
              <a href="#contact" style={{ color: '#0066FF', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>Təklif al →</a>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Interactive Website Finder Quiz */}
      <section id="finder" style={{ padding: '80px 0', background: '#080C14', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              SEÇİM KÖMƏKÇİSİ
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Hansı sayt sizə uyğundur?</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.92rem' }}>2 sadə suala cavab verin, biznesiniz üçün ən optimal formatı anında müəyyən edək.</p>
          </div>

          <div style={{ background: '#05070B', border: '1px solid #162032', borderRadius: '22px', padding: '28px', maxWidth: '840px', margin: '0 auto', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '12px' }}>1. Saytı əsasən nə üçün istəyirsiniz?</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                {['Xidmətimi təqdim etmək', 'Şirkətimi təqdim etmək', 'Onlayn satış etmək', 'Xüsusi sistem hazırlatmaq'].map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setQuizPurpose(idx)}
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      border: `1px solid ${quizPurpose === idx ? '#0066FF' : '#162032'}`,
                      background: quizPurpose === idx ? '#0066FF' : '#080C14',
                      color: quizPurpose === idx ? 'white' : '#9CA6B5',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '12px' }}>2. Hansı funksiyalar sizə lazımdır?</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
                {['Əlaqə forması', 'WhatsApp düyməsi', 'Məhsul kataloqu', 'Onlayn kart ödənişi', 'Admin idarəetmə paneli', 'Rezervasiya / Qeydiyyat'].map((f, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleQuizFeature(idx)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: `1px solid ${quizFeatures.includes(idx) ? '#0066FF' : '#162032'}`,
                      background: quizFeatures.includes(idx) ? '#0D121D' : '#080C14',
                      color: quizFeatures.includes(idx) ? '#F5F7FA' : '#9CA6B5',
                      fontSize: '0.78rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{f}</span>
                    {quizFeatures.includes(idx) && <CheckCircle2 size={14} color="#0066FF" />}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ padding: '20px', background: '#080C14', border: '1px solid #0066FF', borderRadius: '16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF' }}>TÖVSİYƏ OLUNAN SEÇİM:</span>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '4px 0' }}>Biznesiniz üçün <span style={{ color: '#0066FF' }}>{quizRec.type}</span> formatı daha uyğundur.</h4>
                <p style={{ fontSize: '0.78rem', color: '#9CA6B5', maxWidth: '480px' }}>{quizRec.desc}</p>
              </div>
              <a
                href="#contact"
                style={{ background: '#0066FF', color: 'white', padding: '12px 20px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}
              >
                Bu layihə üçün təklif alın →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Works / Portfolio Section */}
      <section id="works" style={{ padding: '80px 0', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              İŞLƏRİMİZ & PORTFOLİO
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Son əl işlərimiz və layihələrimiz</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.92rem' }}>Fərqli sahələrdən olan şirkətlər, təhsil mərkəzləri və brendlər üçün hazırladığımız rəsmi veb layihələr.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '30px' }}>
            {works.map((w, idx) => (
              <button
                key={w.id}
                onClick={() => setActiveWork(idx)}
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  textAlign: 'left',
                  border: `1px solid ${activeWork === idx ? '#0066FF' : '#162032'}`,
                  background: activeWork === idx ? '#080C14' : '#05070B',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', fontWeight: 'bold' }}>0{idx + 1}</span>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', padding: '2px 8px', borderRadius: '4px', background: '#05070B', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                    {w.displayUrl}
                  </span>
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '4px' }}>{w.name}</h4>
                <p style={{ fontSize: '0.72rem', color: '#9CA6B5' }}>{w.type}</p>
              </button>
            ))}
          </div>

          {/* Active Work Large Showcase */}
          <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '24px', padding: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <div className="hero-grid">
              <div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', display: 'block', marginBottom: '6px' }}>{currentWork.type}</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>{currentWork.name}</h3>
                <p style={{ fontSize: '0.88rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '20px' }}>{currentWork.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {currentWork.tags.map((t, i) => (
                    <span key={i} style={{ fontSize: '0.72rem', background: '#05070B', border: '1px solid #162032', padding: '4px 10px', borderRadius: '6px' }}>
                      ✓ {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href={currentWork.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: '#0066FF', color: 'white', padding: '10px 20px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Sayta daxil olun</span>
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href="#contact"
                    style={{ background: '#05070B', border: '1px solid #162032', color: '#F5F7FA', padding: '10px 18px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Bənzər sayt sifariş et</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div style={{ background: '#05070B', border: '1px solid #162032', borderRadius: '16px', padding: '20px', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #162032', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{currentWork.name}</span>
                  <span style={{ fontSize: '0.68rem', color: '#0066FF', fontFamily: 'monospace' }}>{currentWork.displayUrl}</span>
                </div>
                <div style={{ margin: '20px 0' }}>
                  <h5 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>{currentWork.type}</h5>
                  <p style={{ fontSize: '0.8rem', color: '#9CA6B5' }}>{currentWork.desc}</p>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#10B981', fontFamily: 'monospace' }}>✓ 100% Mobil və Kompüter Uyğunluğu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Codex */}
      <section id="why" style={{ padding: '80px 0', background: '#080C14', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              BİZİM YANAŞMAMIZ
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Sayt yalnız gözəl görünməməli, biznesinizə real gəlir gətirməlidir.</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.92rem' }}>Biznes sahibi üçün əsas məsələ saytın rahat açılması, telefonlarda problemsiz işləməsi və ziyarətçini real müştəriyə çevirməsidir.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div style={{ background: '#05070B', border: '1px solid #162032', padding: '24px', borderRadius: '16px' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>Sürətli və Rahat Açılış</h4>
              <p style={{ fontSize: '0.82rem', color: '#9CA6B5', lineHeight: 1.5 }}>İstifadəçi saytın açılmasını gözləməməlidir. Yüngül və optimallaşdırılmış kod sayəsində səhifələr anında açılır.</p>
            </div>

            <div style={{ background: '#05070B', border: '1px solid #162032', padding: '24px', borderRadius: '16px' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>100% Mobil Uyğunluq</h4>
              <p style={{ fontSize: '0.82rem', color: '#9CA6B5', lineHeight: 1.5 }}>Sayt ziyarətçilərinin 80%-dən çoxu telefondan daxil olur. Bütün smartfon və planşetlərdə qüsursuz işləyir.</p>
            </div>

            <div style={{ background: '#05070B', border: '1px solid #162032', padding: '24px', borderRadius: '16px' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>Aydın və Rahat Struktur</h4>
              <p style={{ fontSize: '0.82rem', color: '#9CA6B5', lineHeight: 1.5 }}>Müştəri axtardığı xidməti, qiyməti və ya əlaqə nömrəsini bir neçə saniyəyə tapır, vaxt itirmir.</p>
            </div>

            <div style={{ background: '#05070B', border: '1px solid #162032', padding: '24px', borderRadius: '16px' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>Təhvildən Sonra Dəstək</h4>
              <p style={{ fontSize: '0.82rem', color: '#9CA6B5', lineHeight: 1.5 }}>Sayt təhvil verildikdən sonra da serverin fasiləsiz işləməsi, domen və texniki suallarınızda yanınızda oluruq.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Objection-Removal Section */}
      <section style={{ padding: '60px 0', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(180deg, #080C14 0%, #0D121D 100%)', border: '1px solid rgba(0, 102, 255, 0.3)', borderRadius: '24px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>RAHAT BAŞLANĞIC</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>Sayt sifariş etmək çətin proses deyil.</h3>
              <p style={{ fontSize: '0.9rem', color: '#9CA6B5', lineHeight: 1.6 }}>Nə istədiyinizi tam dəqiqləşdirməmisinizsə, narahat olmayın. Biznesiniz haqqında qısa məlumat verin, sizə ən uyğun sayt strukturunu birlikdə müəyyən edək.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <a
                href={`https://wa.me/994106011201?text=${encodeURIComponent('Salam. Biznesim üçün sayt hazırlatmaq istəyirəm. Ətraflı məlumat ala bilərəm?')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#0066FF', color: 'white', padding: '14px 28px', borderRadius: '12px', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 6px 20px rgba(0, 102, 255, 0.35)' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp-da danışaq</span>
              </a>
              <div style={{ fontSize: '0.72rem', color: '#9CA6B5', marginTop: '8px', fontFamily: 'monospace' }}>✓ 010 601 12 01 • Operativ cavab</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process Section */}
      <section id="process" style={{ padding: '80px 0', background: '#080C14', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              BİZİM İŞ PROSESİMİZ
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Sayt necə hazırlanır?</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.92rem' }}>Fəaliyyətimiz boyu gördüyümüz bütün işləri şəffaf və mərhələli prinsiplərlə icra edirik.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '14px' }}>
            {[
              { num: '01', title: 'Araşdırma və Məsləhət', desc: 'Biznesinizin hədəflərini, fəaliyyət sahənizi və auditoriyanızı öyrənirik.' },
              { num: '02', title: 'Planlama və Dizayn', desc: 'Saytın strukturunu, bölmələrini və müasir görünüşünü hazırlayırıq.' },
              { num: '03', title: 'Yığılma və Proqramlaşdırma', desc: 'Dizaynı funksional, sürətli və mobilə tam uyğun işləyən sayta çeviririk.' },
              { num: '04', title: 'Test və Yoxlama', desc: 'Bütün telefonlarda, kompüterlərdə düymələri və formaları yoxlayırıq.' },
              { num: '05', title: 'Təhvil və Canlıya Çıxarış', desc: 'Saytı domeninizə bağlayırıq, yayımlayırıq və hazır təhvil veririk.' },
            ].map((st) => (
              <div key={st.num} style={{ background: '#05070B', border: '1px solid #162032', padding: '20px', borderRadius: '16px' }}>
                <span style={{ fontSize: '1rem', fontFamily: 'monospace', color: '#0066FF', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>{st.num}</span>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>{st.title}</h4>
                <p style={{ fontSize: '0.75rem', color: '#9CA6B5', lineHeight: 1.5 }}>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. About Section */}
      <section id="about" style={{ padding: '80px 0', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              HAQQIMIZDA
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '16px' }}>Codex Studio haqqında</h2>
            <p style={{ fontSize: '1.05rem', color: '#F5F7FA', lineHeight: 1.6, marginBottom: '24px' }}>
              Codex Studio bizneslər üçün müasir, yüksək performanslı və satış yönümlü veb saytların hazırlanması ilə məşğul olan rəqəmsal studiyadır. Əsas məqsədimiz şirkətinizin bazarda rəqiblərindən fərqlənməsi və müştərilərinizdə güclü etibar yaratmasıdır.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            <div style={{ background: '#080C14', border: '1px solid #162032', padding: '20px', borderRadius: '14px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>Aydın və Səmimi Ünsiyyət</h4>
              <p style={{ fontSize: '0.8rem', color: '#9CA6B5' }}>Mürəkkəb texniki terminlərlə vaxt itirmədən, biznesiniz üçün həqiqətən nəyin faydalı olduğunu aydın izah edirik.</p>
            </div>
            <div style={{ background: '#080C14', border: '1px solid #162032', padding: '20px', borderRadius: '14px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>Şəffaf və Dəqiq Qrafik</h4>
              <p style={{ fontSize: '0.8rem', color: '#9CA6B5' }}>Layihənin ilk günündən təhvil tarixinə qədər bütün mərhələlər planlı və vaxtında həyata keçirilir.</p>
            </div>
            <div style={{ background: '#080C14', border: '1px solid #162032', padding: '20px', borderRadius: '14px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>Davamlı Texniki Tərəfdaşlıq</h4>
              <p style={{ fontSize: '0.8rem', color: '#9CA6B5' }}>Sayt təhvil verildikdən sonra da server, domen və gələcək yenilənmələrinizdə daimi dəstək göstəririk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section id="faq" style={{ padding: '80px 0', background: '#080C14', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              SUALLAR VƏ CAVABLAR
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Ən çox verilən suallar</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.92rem' }}>Sayt sifarişi prosesi ilə bağlı müştərilərimizin ən çox maraqlandığı məqamlar.</p>
          </div>

          <div style={{ maxWidth: '780px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((f, idx) => (
              <div key={idx} style={{ background: '#05070B', border: '1px solid #162032', borderRadius: '14px', overflow: 'hidden' }}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ width: '100%', padding: '18px 20px', textAlign: 'left', background: 'none', border: 'none', color: '#F5F7FA', fontSize: '0.95rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                >
                  <span>{f.q}</span>
                  <ChevronDown size={16} color="#0066FF" style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 20px 18px', fontSize: '0.85rem', color: '#9CA6B5', lineHeight: 1.6, borderTop: '1px solid #162032', paddingTop: '12px' }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Contact & Final CTA Section */}
      <section id="contact" style={{ padding: '80px 0', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div className="contact-grid">
            
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                ƏLAQƏ & SİFARİŞ
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '12px' }}>Biznesiniz üçün yeni sayt sifarişi.</h2>
              <p style={{ color: '#9CA6B5', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.6 }}>
                Bizə bir zəng və ya mesaj qədər yaxınsınız. Biznesiniz barədə qısa məlumat göndərin, sizə ən uyğun həlli təklif edək.
              </p>

              <a
                href={`https://wa.me/994106011201?text=${encodeURIComponent('Salam. Biznesim üçün sayt hazırlatmaq istəyirəm. Ətraflı məlumat ala bilərəm?')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#0066FF', color: 'white', padding: '14px 24px', borderRadius: '12px', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', boxShadow: '0 6px 20px rgba(0,102,255,0.3)' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp-dan birbaşa yazın</span>
              </a>

              <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '16px', padding: '20px', fontFamily: 'monospace', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #162032' }}>
                  <span style={{ color: '#9CA6B5' }}>Telefon / Zəng:</span>
                  <a href="tel:0106011201" style={{ color: '#F5F7FA', textDecoration: 'none', fontWeight: 'bold' }}>010 601 12 01</a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #162032' }}>
                  <span style={{ color: '#9CA6B5' }}>WhatsApp:</span>
                  <a href="https://wa.me/994106011201" target="_blank" rel="noopener noreferrer" style={{ color: '#0066FF', textDecoration: 'none', fontWeight: 'bold' }}>010 601 12 01</a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #162032' }}>
                  <span style={{ color: '#9CA6B5' }}>Qəbul Emaili:</span>
                  <a href="mailto:emin.imanverdievv@gmail.com" style={{ color: '#0066FF', textDecoration: 'none', fontWeight: 'bold' }}>emin.imanverdievv@gmail.com</a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#9CA6B5' }}>Rəsmi Ünvan:</span>
                  <span style={{ color: '#F5F7FA' }}>Bakı, Azərbaycan</span>
                </div>
              </div>
            </div>

            <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '22px', padding: '28px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px' }}>Sayt sifarişi üçün müraciət edin</h3>
              <p style={{ fontSize: '0.82rem', color: '#9CA6B5', marginBottom: '20px' }}>Məlumatlarınızı qeyd edin, sizə ən qısa zamanda təklif göndərək.</p>

              {!isSuccess ? (
                <form onSubmit={handleEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className="grid-two-col" style={{ gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Adınız və Soyadınız *</label>
                      <input
                        type="text"
                        required
                        placeholder="Rəşad Əliyev"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.85rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Telefon / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="050 000 00 00"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.85rem' }}
                      />
                    </div>
                  </div>

                  <div className="grid-two-col" style={{ gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Biznes / Fəaliyyət Sahəniz</label>
                      <input
                        type="text"
                        placeholder="Məsələn: Tibb, Təhsil, Mebel"
                        value={business}
                        onChange={(e) => setBusiness(e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.85rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Sayt Növü</label>
                      <select
                        value={siteType}
                        onChange={(e) => setSiteType(e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.85rem' }}
                      >
                        <option value="Korporativ sayt">Korporativ Şirkət Saytı</option>
                        <option value="Landing Page">Landing Page (Təqdimat Saytı)</option>
                        <option value="E-commerce">E-commerce (Onlayn Mağaza)</option>
                        <option value="Fərdi layihə">Fərdi və Tibbi Veb Portal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Sayt haqqında qısa istəkləriniz</label>
                    <textarea
                      rows={3}
                      placeholder="Saytınızda olmasını istədiyiniz əsas məqamlar..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.85rem', resize: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: '#0066FF',
                      color: 'white',
                      border: 'none',
                      padding: '14px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 6px 20px rgba(0, 102, 255, 0.35)'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Göndərilir...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Təklif üçün müraciət göndər</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0, 102, 255, 0.2)', color: '#0066FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '6px' }}>Müraciətiniz qəbul olundu!</h3>
                  <p style={{ color: '#9CA6B5', fontSize: '0.85rem', marginBottom: '18px' }}>
                    Məlumatlar <strong style={{ color: '#0066FF' }}>emin.imanverdievv@gmail.com</strong> poçtuna çatdırıldı.
                  </p>
                  <button
                    onClick={handleWhatsAppSend}
                    style={{ background: '#0066FF', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    WhatsApp ilə təsdiqləyin
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#05070B', borderTop: '1px solid #162032', padding: '36px 0 20px', fontSize: '0.82rem', color: '#9CA6B5' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/logo.png" alt="CodeX Studio" style={{ width: '24px', height: '24px', borderRadius: '6px' }} />
            <strong style={{ color: '#F5F7FA' }}>Code<span style={{ color: '#0066FF' }}>X</span> Studio</strong>
          </div>
          <div>© 2026 Codex Studio. Bütün hüquqlar qorunur.</div>
        </div>
      </footer>

      {/* Subtle Floating WhatsApp Button */}
      <a
        href={`https://wa.me/994106011201?text=${encodeURIComponent('Salam. Biznesim üçün sayt hazırlatmaq istəyirəm. Ətraflı məlumat ala bilərəm?')}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 150,
          background: '#0066FF',
          color: 'white',
          border: 'none',
          padding: '12px 18px',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 8px 24px rgba(0, 102, 255, 0.4)',
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontWeight: 600
        }}
        title="WhatsApp ilə əlaqə"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
