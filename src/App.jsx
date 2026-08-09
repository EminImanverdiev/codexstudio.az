import React, { useState, useEffect } from 'react'
import {
  MessageCircle, Send, ArrowRight, Laptop, Globe, ShoppingBag,
  Zap, Smartphone, CheckCircle2, ChevronDown, X, Sun, Moon,
  Mail, ExternalLink, Loader2, ArrowUpRight, ShieldCheck, Menu,
  Code2, Palette, Headphones, Search, Phone
} from 'lucide-react'

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home')
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
  const [siteType, setSiteType] = useState('Korporativ saytların hazırlanması')
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

  // Scroll to top when changing route
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentRoute])

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
        type: 'E-commerce saytların hazırlanması',
        desc: 'Məhsulların təqdimatı, sifariş və onlayn satış üçün e-commerce saytların hazırlanması.',
        badge: 'Satış Yönümlü'
      }
    }
    if (quizPurpose === 0) {
      return {
        type: 'Landing Page hazırlanması',
        desc: 'Məhsul, xidmət və reklam kampaniyalarının təqdimatı üçün məqsədyönlü bir səhifəlik saytların hazırlanması.',
        badge: 'Təqdimat & Satış'
      }
    }
    if (quizPurpose === 3 || quizFeatures.includes(4) || quizFeatures.includes(5)) {
      return {
        type: 'Fərdi veb layihələrin hazırlanması',
        desc: 'Biznesinizin unikal tələblərinə uyğun xüsusi kalkulyatorlar, rezervasiya modulları və fərdi idarəetmə sistemi.',
        badge: 'Xüsusi Həll'
      }
    }
    return {
      type: 'Korporativ saytların hazırlanması',
      desc: 'Şirkətiniz, xidmətləriniz və fəaliyyətiniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi korporativ saytların hazırlanması.',
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

  const services = [
    {
      id: 'web-dev',
      num: '01',
      title: 'Veb saytların hazırlanması',
      desc: 'Biznesinizin fəaliyyətinə və ehtiyaclarına uyğun funksional veb saytların hazırlanması.',
      icon: <Code2 size={24} color="#0066FF" />
    },
    {
      id: 'landing',
      num: '02',
      title: 'Landing Page hazırlanması',
      desc: 'Məhsul, xidmət və reklam kampaniyalarının təqdimatı üçün məqsədyönlü bir səhifəlik saytların hazırlanması.',
      icon: <Globe size={24} color="#0066FF" />
    },
    {
      id: 'corporate',
      num: '03',
      title: 'Korporativ saytların hazırlanması',
      desc: 'Şirkətiniz, xidmətləriniz və fəaliyyətiniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi korporativ saytların hazırlanması.',
      icon: <Laptop size={24} color="#0066FF" />
    },
    {
      id: 'ecommerce',
      num: '04',
      title: 'E-commerce saytların hazırlanması',
      desc: 'Məhsulların təqdimatı, sifariş və onlayn satış üçün e-commerce saytların hazırlanması.',
      icon: <ShoppingBag size={24} color="#0066FF" />
    },
    {
      id: 'uiux',
      num: '05',
      title: 'Veb dizayn (UI/UX)',
      desc: 'Saytın istifadəsini rahatlaşdıran, mobil cihazlara uyğun və müasir interfeys dizaynının hazırlanması.',
      icon: <Palette size={24} color="#0066FF" />
    },
    {
      id: 'support',
      num: '06',
      title: 'Texniki dəstək',
      desc: 'Sayt istifadəyə verildikdən sonra texniki məsələlər, yenilənmələr və zəruri dəyişikliklər üzrə dəstək.',
      icon: <Headphones size={24} color="#0066FF" />
    },
    {
      id: 'seo',
      num: '07',
      title: 'SEO optimizasiyası',
      desc: 'Saytın axtarış sistemləri tərəfindən daha düzgün oxunması üçün texniki və struktur SEO optimizasiyası.',
      icon: <Search size={24} color="#0066FF" />
    }
  ]

  const works = [
    {
      id: '01',
      name: 'Sinaps Med — Tibbi Avadanlıq & Səhiyyə Şirkəti',
      type: 'Korporativ saytların hazırlanması',
      desc: 'Tibbi avadanlıqlar, klinik məhsul kataloqu, distribütorluq və səhiyyə müəssisələri üçün çoxdilli rəsmi korporativ platforma.',
      url: 'https://sinapsmed.com',
      displayUrl: 'sinapsmed.com',
      tags: ['Korporativ sayt', 'Məhsul kataloqu', 'Çoxdillilik', 'Partnyor əlaqələri']
    },
    {
      id: '02',
      name: 'Leyla Qasımova — Fizika və Elm Mərkəzi',
      type: 'Landing Page və Fərdi Sayt',
      desc: 'Təlim proqramları, video dərslər, tələbə nəticələri və birbaşa sınaq dərsinə qeydiyyat toplayan şəxsi brend platforması.',
      url: 'https://leylagasimova.az',
      displayUrl: 'leylagasimova.az',
      tags: ['Landing Page', 'Kurs qeydiyyatı', 'Video təqdimat', 'WhatsApp inteqrasiyası']
    },
    {
      id: '03',
      name: 'Vektor Logistics & Holding',
      type: 'Korporativ saytların hazırlanması',
      desc: 'Beynəlxalq yükdaşıma, anbar xidmətləri və tərəfdaş şirkətlər üçün çoxsəhifəli, etibarlı korporativ veb portal.',
      url: 'https://vektor-holding.codexstudio.az',
      displayUrl: 'vektor-holding.az',
      tags: ['Korporativ sayt', 'Xidmət kataloqu', 'Çoxdilli struktur', 'Sorğu sistemi']
    },
    {
      id: '04',
      name: 'Aura Home & Living',
      type: 'E-commerce saytların hazırlanması',
      desc: 'İnteryer mebeli və ev aksessuarları üçün müasir məhsul vitrini, kateqoriya filtri, səbət və bank kartı ilə ödəniş axını.',
      url: 'https://aurahome.codexstudio.az',
      displayUrl: 'aurahome.az',
      tags: ['E-commerce', 'Səbət sistemi', 'Kartla ödəniş', 'Mobil uyğun dizayn']
    }
  ]

  const currentWork = works[activeWork]

  const faqs = [
    {
      q: 'Saytın hazırlanması neçə gün çəkir?',
      a: 'Müddət layihənin növündən asılıdır: Tək səhifəlik Landing Page adətən bir neçə günə, korporativ saytlar və e-commerce layihələri isə orta hesabla 1-3 həftəyə tam hazır vəziyyətə gətirilir.'
    },
    {
      q: 'Qiymət necə müəyyən olunur?',
      a: 'Qiymət saytın növünə (Landing Page, Korporativ, E-commerce), səhifə sayına və tələb olunan funksionallığa (onlayn ödəniş, çoxdillilik və s.) görə şəffaf şəkildə hesablanır.'
    },
    {
      q: 'Domen və hosting qiymətə daxildirmi?',
      a: 'Bəli, istəyinizə uyğun olaraq .az və ya beynəlxalq domenlərin seçilməsi, sürətli serverin quraşdırılması və SSL təhlükəsizlik sertifikatının aktivləşdirilməsi tərəfimizdən təmin edilir.'
    },
    {
      q: 'Sayt mobil cihazlara uyğun olacaq?',
      a: 'Bəli, 100%. Hazırladığımız bütün saytlar mobil cihazlara uyğunlaşdırılır və smartfon, planşet və kompüter ekranlarında qüsursuz işləyir.'
    },
    {
      q: 'Sonradan saytda dəyişiklik etmək mümkündür?',
      a: 'Bəli. Saytın strukturu elə qurulur ki, gələcəkdə yeni səhifələr, məhsullar, xidmətlər və ya yeni funksiyalar asanlıqla əlavə oluna bilsin.'
    },
    {
      q: 'Onlayn ödəniş sistemi qoşmaq olar?',
      a: 'Bəli. E-commerce və sifariş saytlarınıza yerli bankların kartla ödəniş sistemlərini (Kapital Bank, Paşa Bank və s.) təhlükəsiz şəkildə inteqrasiya edirik.'
    },
    {
      q: 'Sayt hazır olduqdan sonra texniki dəstək verirsiniz?',
      a: 'Bəli. Sayt təhvil verildikdən sonra da serverin fasiləsiz işləməsi, domen və texniki suallarınız üzrə dəstəyimiz davam edir.'
    }
  ]

  const navigateTo = (route) => {
    setCurrentRoute(route)
    setMobileMenuOpen(false)
  }

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
          <button
            onClick={() => navigateTo('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}
          >
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
          </button>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <button
              onClick={() => navigateTo('home')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'home' ? '#F5F7FA' : '#9CA6B5', fontWeight: currentRoute === 'home' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Ana səhifə
            </button>
            <button
              onClick={() => navigateTo('services')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'services' ? '#F5F7FA' : '#9CA6B5', fontWeight: currentRoute === 'services' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Xidmətlər
            </button>
            <button
              onClick={() => navigateTo('works')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'works' ? '#F5F7FA' : '#9CA6B5', fontWeight: currentRoute === 'works' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              İşlərimiz
            </button>
            <button
              onClick={() => navigateTo('about')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'about' ? '#F5F7FA' : '#9CA6B5', fontWeight: currentRoute === 'about' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Haqqımızda
            </button>
            <button
              onClick={() => navigateTo('faq')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'faq' ? '#F5F7FA' : '#9CA6B5', fontWeight: currentRoute === 'faq' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Tez-tez verilən suallar
            </button>
            <button
              onClick={() => navigateTo('contact')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'contact' ? '#F5F7FA' : '#9CA6B5', fontWeight: currentRoute === 'contact' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Bizimlə əlaqə
            </button>
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

            <button
              onClick={() => navigateTo('contact')}
              style={{
                background: '#0066FF',
                color: 'white',
                padding: '9px 18px',
                borderRadius: '10px',
                fontSize: '0.84rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                boxShadow: '0 4px 14px rgba(0, 102, 255, 0.3)',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Təklif al</span>
              <ArrowRight size={14} />
            </button>

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
            <button onClick={() => navigateTo('home')} style={{ background: 'none', border: 'none', textAlign: 'left', color: '#F5F7FA', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>01. Ana səhifə</button>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', textAlign: 'left', color: '#F5F7FA', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>02. Xidmətlər</button>
            <button onClick={() => navigateTo('works')} style={{ background: 'none', border: 'none', textAlign: 'left', color: '#F5F7FA', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>03. İşlərimiz</button>
            <button onClick={() => navigateTo('about')} style={{ background: 'none', border: 'none', textAlign: 'left', color: '#F5F7FA', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>04. Haqqımızda</button>
            <button onClick={() => navigateTo('faq')} style={{ background: 'none', border: 'none', textAlign: 'left', color: '#F5F7FA', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>05. Tez-tez verilən suallar</button>
            <button onClick={() => navigateTo('contact')} style={{ background: 'none', border: 'none', textAlign: 'left', color: '#F5F7FA', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>06. Bizimlə əlaqə</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '24px' }}>
            <button
              onClick={() => navigateTo('contact')}
              style={{ background: '#0066FF', color: 'white', padding: '14px', borderRadius: '12px', textAlign: 'center', fontWeight: 600, border: 'none', fontSize: '0.95rem', cursor: 'pointer' }}
            >
              Sayt sifarişi verin →
            </button>
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

      {/* ======================================================== */}
      {/* PAGE: HOME */}
      {/* ======================================================== */}
      {currentRoute === 'home' && (
        <>
          {/* Hero Section */}
          <section id="hero" style={{ padding: '60px 0 70px' }}>
            <div className="container">
              <div className="hero-grid">
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
                    <span>VEB SAYTLARIN HAZIRLANMASI</span>
                  </div>

                  <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', lineHeight: 1.14, fontWeight: 800, marginBottom: '18px', letterSpacing: '-0.02em' }}>
                    Biznesiniz üçün peşəkar <br />
                    <span style={{ color: '#0066FF' }}>veb sayt hazırlayırıq.</span>
                  </h1>

                  <p style={{ color: '#9CA6B5', fontSize: 'clamp(0.92rem, 2vw, 1.1rem)', lineHeight: 1.6, maxWidth: '540px', marginBottom: '28px' }}>
                    Landing Page, korporativ sayt və e-commerce layihələrinin dizaynı və hazırlanması.
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '28px' }}>
                    <button
                      onClick={() => navigateTo('contact')}
                      style={{
                        background: '#0066FF',
                        color: 'white',
                        padding: '14px 28px',
                        borderRadius: '12px',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 8px 24px rgba(0, 102, 255, 0.35)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Sayt sifarişi</span>
                      <ArrowRight size={15} />
                    </button>

                    <button
                      onClick={() => navigateTo('works')}
                      style={{
                        background: '#080C14',
                        color: '#F5F7FA',
                        border: '1px solid #162032',
                        padding: '14px 24px',
                        borderRadius: '12px',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      <span>İşlərimizə bax</span>
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.82rem', color: '#9CA6B5', borderTop: '1px solid #162032', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="#0066FF" /><span style={{ color: '#F5F7FA' }}>Mobil uyğun</span></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="#0066FF" /><span style={{ color: '#F5F7FA' }}>SEO optimizasiyası</span></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="#0066FF" /><span style={{ color: '#F5F7FA' }}>Texniki dəstək</span></div>
                  </div>
                </div>

                {/* Right: Mockup */}
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', gap: '6px', padding: '4px', background: '#080C14', border: '1px solid #162032', borderRadius: '10px' }}>
                      <button
                        onClick={() => setHeroTab('landing')}
                        style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'landing' ? '#0066FF' : 'transparent', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        Landing Page
                      </button>
                      <button
                        onClick={() => setHeroTab('corporate')}
                        style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'corporate' ? '#0066FF' : 'transparent', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        Korporativ sayt
                      </button>
                      <button
                        onClick={() => setHeroTab('ecommerce')}
                        style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'ecommerce' ? '#0066FF' : 'transparent', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        E-commerce sayt
                      </button>
                    </div>

                    <div style={{ fontSize: '0.72rem', color: '#10B981', fontFamily: 'monospace', padding: '4px 10px', background: '#080C14', border: '1px solid #162032', borderRadius: '8px' }}>
                      ✓ Canlı önizləmə
                    </div>
                  </div>

                  <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: '#05070B', borderBottom: '1px solid #162032' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }}></span>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }}></span>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }}></span>
                      </div>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', background: '#080C14', padding: '3px 12px', borderRadius: '6px', border: '1px solid #162032' }}>
                        <span style={{ color: '#0066FF' }}>https://</span>
                        <span>
                          {heroTab === 'landing' && 'leylagasimova.az'}
                          {heroTab === 'corporate' && 'sinapsmed.com'}
                          {heroTab === 'ecommerce' && 'aurahome.az'}
                        </span>
                      </div>
                      <div style={{ width: '20px' }}></div>
                    </div>

                    <div style={{ padding: '24px', background: 'linear-gradient(180deg, #080C14 0%, #0D121D 100%)', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      {heroTab === 'landing' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '6px' }}>LANDİNG PAGE HAZIRLANMASI</div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Leyla Qasımova — Fizika və Elm Mərkəzi</h3>
                          <p style={{ fontSize: '0.85rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '18px' }}>
                            Məhsul, xidmət və kursların təqdimatı üçün məqsədyönlü bir səhifəlik sayt.
                          </p>
                          <a href="https://leylagasimova.az" target="_blank" rel="noopener noreferrer" style={{ background: '#0066FF', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>Sayta bax →</a>
                        </div>
                      )}

                      {heroTab === 'corporate' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '6px' }}>KORPORATİV SAYTLARIN HAZIRLANMASI</div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Sinaps Med — Tibbi Avadanlıq & Səhiyyə</h3>
                          <p style={{ fontSize: '0.85rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '18px' }}>
                            Şirkətiniz və xidmətləriniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi rəsmi sayt.
                          </p>
                          <a href="https://sinapsmed.com" target="_blank" rel="noopener noreferrer" style={{ background: '#0066FF', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>Sayta bax →</a>
                        </div>
                      )}

                      {heroTab === 'ecommerce' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '6px' }}>E-COMMERCE SAYTLARIN HAZIRLANMASI</div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Aura Home & Living — Mebel Mağazası</h3>
                          <p style={{ fontSize: '0.85rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '18px' }}>
                            Məhsulların təqdimatı, səbət və onlayn ödəniş sistemi ilə tam təchiz olunmuş onlayn mağaza.
                          </p>
                          <button onClick={() => navigateTo('contact')} style={{ background: '#0066FF', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Təklif al →</button>
                        </div>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #162032', paddingTop: '12px', marginTop: '16px', fontSize: '0.72rem', color: '#9CA6B5' }}>
                        <span>✓ 100% Mobil və Planşet Uyğun</span>
                        <span style={{ color: '#0066FF' }}>Codex Studio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Strip */}
          <section style={{ padding: '24px 0', background: '#080C14', borderTop: '1px solid #162032', borderBottom: '1px solid #162032' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                <div><span style={{ color: '#0066FF' }}>•</span> Veb saytların hazırlanması</div>
                <div><span style={{ color: '#0066FF' }}>•</span> Landing Page</div>
                <div><span style={{ color: '#0066FF' }}>•</span> Korporativ saytlar</div>
                <div><span style={{ color: '#0066FF' }}>•</span> E-commerce</div>
                <div><span style={{ color: '#0066FF' }}>•</span> Texniki dəstək</div>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#9CA6B5' }}>Kiçik və böyük bizneslər üçün veb xidmətlər.</div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" style={{ padding: '80px 0', borderTop: '1px solid #162032' }}>
            <div className="container">
              <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                  XİDMƏTLƏRİMİZ
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Xidmətlərimiz</h2>
                <p style={{ color: '#9CA6B5', fontSize: '0.92rem' }}>Biznesinizin ehtiyacına uyğun veb saytların dizaynı və hazırlanması.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {services.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => {
                      setSiteType(s.title)
                      navigateTo('contact')
                    }}
                    style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '18px', padding: '26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#05070B', border: '1px solid #162032', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {s.icon}
                        </div>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#9CA6B5' }}>{s.num}</span>
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>{s.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '20px' }}>{s.desc}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0066FF', fontSize: '0.82rem', fontWeight: 700 }}>
                      <span>Daha ətraflı</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Finder Quiz */}
          <section id="finder" style={{ padding: '80px 0', background: '#080C14', borderTop: '1px solid #162032' }}>
            <div className="container">
              <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                  SEÇİM KÖMƏKÇİSİ
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Hansı sayt sizə uyğundur?</h2>
                <p style={{ color: '#9CA6B5', fontSize: '0.92rem' }}>2 sadə suala cavab verin, biznesiniz üçün ən optimal formatı anında müəyyən edək.</p>
              </div>

              <div style={{ background: '#05070B', border: '1px solid #162032', borderRadius: '22px', padding: '28px', maxWidth: '840px', margin: '0 auto' }}>
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
                    <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF' }}>TÖVSİYƏ OLUNAN FORMAT:</span>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '4px 0' }}>Biznesiniz üçün <span style={{ color: '#0066FF' }}>{quizRec.type}</span> formatı daha uyğundur.</h4>
                    <p style={{ fontSize: '0.78rem', color: '#9CA6B5', maxWidth: '480px' }}>{quizRec.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSiteType(quizRec.type)
                      navigateTo('contact')
                    }}
                    style={{ background: '#0066FF', color: 'white', padding: '12px 20px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                  >
                    Təklif al →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" style={{ padding: '80px 0', borderTop: '1px solid #162032' }}>
            <div className="container">
              <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                  İŞ PROSESİ
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Saytın hazırlanması prosesi</h2>
                <p style={{ color: '#9CA6B5', fontSize: '0.92rem' }}>Layihənizin vaxtında və keyfiyyətlə təhvil verilməsi üçün mərhələli iş planı.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '14px' }}>
                {[
                  { num: '01', title: 'Tələblərin müəyyən edilməsi', desc: 'Layihənin məqsədi, saytın strukturu və tələb olunan funksiyalar müəyyən edilir.' },
                  { num: '02', title: 'Dizayn', desc: 'Saytın vizual görünüşü və istifadəçi interfeysi hazırlanır.' },
                  { num: '03', title: 'Proqramlaşdırma', desc: 'Təsdiqlənmiş dizayn əsasında saytın hazırlanmasına başlanılır.' },
                  { num: '04', title: 'Test', desc: 'Sayt müxtəlif ekran ölçülərində və cihazlarda yoxlanılır.' },
                  { num: '05', title: 'Təhvil', desc: 'Yekun yoxlamadan sonra sayt istifadəyə verilir.' },
                ].map((st) => (
                  <div key={st.num} style={{ background: '#080C14', border: '1px solid #162032', padding: '20px', borderRadius: '16px' }}>
                    <span style={{ fontSize: '1rem', fontFamily: 'monospace', color: '#0066FF', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>{st.num}</span>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>{st.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: '#9CA6B5', lineHeight: 1.5 }}>{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section style={{ padding: '60px 0', background: '#080C14', borderTop: '1px solid #162032' }}>
            <div className="container">
              <div style={{ background: 'linear-gradient(180deg, #05070B 0%, #0D121D 100%)', border: '1px solid rgba(0, 102, 255, 0.3)', borderRadius: '24px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>SAYT SİFARİŞİ</span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>Veb sayt sifariş etmək istəyirsiniz?</h3>
                  <p style={{ fontSize: '0.9rem', color: '#9CA6B5', lineHeight: 1.6 }}>Layihəniz haqqında qısa məlumat göndərin. Ehtiyacınıza uyğun həlli birlikdə müəyyən edək.</p>
                </div>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => navigateTo('contact')}
                    style={{ background: '#0066FF', color: 'white', padding: '14px 28px', borderRadius: '12px', fontSize: '0.92rem', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 6px 20px rgba(0, 102, 255, 0.35)' }}
                  >
                    <span>Təklif al</span>
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href={`https://wa.me/994106011201?text=${encodeURIComponent('Salam. Biznesim üçün sayt hazırlatmaq istəyirəm. Ətraflı məlumat ala bilərəm?')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#9CA6B5', fontSize: '0.82rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <MessageCircle size={14} color="#0066FF" />
                    <span>WhatsApp ilə əlaqə: 010 601 12 01</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ======================================================== */}
      {/* PAGE: XİDMƏTLƏR */}
      {/* ======================================================== */}
      {currentRoute === 'services' && (
        <section style={{ padding: '60px 0 80px' }}>
          <div className="container">
            <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                XİDMƏTLƏRİMİZ
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>Xidmətlərimiz</h1>
              <p style={{ color: '#9CA6B5', fontSize: '1rem', lineHeight: 1.6 }}>Biznesinizin ehtiyacına uyğun veb saytların dizaynı və hazırlanması.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {services.map((s) => (
                <div key={s.id} style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#05070B', border: '1px solid #162032', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {s.icon}
                      </div>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#0066FF', fontWeight: 'bold' }}>{s.num}</span>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '10px' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '24px' }}>{s.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSiteType(s.title)
                      navigateTo('contact')
                    }}
                    style={{ background: '#0066FF', color: 'white', padding: '12px', borderRadius: '10px', border: 'none', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <span>Təklif al</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* PAGE: İŞLƏRİMİZ */}
      {/* ======================================================== */}
      {currentRoute === 'works' && (
        <section style={{ padding: '60px 0 80px' }}>
          <div className="container">
            <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                İŞLƏRİMİZ
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>İşlərimiz</h1>
              <p style={{ color: '#9CA6B5', fontSize: '1rem', lineHeight: 1.6 }}>Müxtəlif fəaliyyət sahələrində olan şirkətlər və şəxslər üçün hazırladığımız veb layihələr.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {works.map((w) => (
                <div key={w.id} style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF' }}>{w.type}</span>
                      <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#10B981', background: '#05070B', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>{w.displayUrl}</span>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px' }}>{w.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '18px' }}>{w.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                      {w.tags.map((t, idx) => (
                        <span key={idx} style={{ fontSize: '0.72rem', background: '#05070B', border: '1px solid #162032', padding: '3px 8px', borderRadius: '6px' }}>
                          ✓ {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a href={w.url} target="_blank" rel="noopener noreferrer" style={{ background: '#0066FF', color: 'white', padding: '10px 16px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <span>Sayta bax</span>
                      <ExternalLink size={14} />
                    </a>
                    <button
                      onClick={() => {
                        setSiteType(`${w.name} (${w.type})`)
                        navigateTo('contact')
                      }}
                      style={{ background: '#05070B', border: '1px solid #162032', color: '#F5F7FA', padding: '10px 16px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                    >
                      Bənzər sayt sifariş et
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* PAGE: HAQQIMIZDA */}
      {/* ======================================================== */}
      {currentRoute === 'about' && (
        <section style={{ padding: '60px 0 80px' }}>
          <div className="container">
            <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                HAQQIMIZDA
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>Haqqımızda</h1>
              <p style={{ fontSize: '1.05rem', color: '#F5F7FA', lineHeight: 1.6, marginBottom: '24px' }}>
                Codex Studio bizneslər üçün veb saytların dizaynı və hazırlanması üzrə ixtisaslaşmış komandadır. Məqsədimiz şirkətinizin fəaliyyətini internetdə düzgün, peşəkar və etibarlı şəkildə təqdim edən veb saytlar hazırlamaqdır.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '40px' }}>
              <div style={{ background: '#080C14', border: '1px solid #162032', padding: '24px', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>Sadə və anlaşılan ünsiyyət</h4>
                <p style={{ fontSize: '0.82rem', color: '#9CA6B5', lineHeight: 1.6 }}>Texniki çətinliklər yaratmadan, layihəniz üçün nəyin lazım olduğunu aydın şəkildə müzakirə edirik.</p>
              </div>
              <div style={{ background: '#080C14', border: '1px solid #162032', padding: '24px', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>Dəqiq iş qrafiki</h4>
                <p style={{ fontSize: '0.82rem', color: '#9CA6B5', lineHeight: 1.6 }}>Hər bir mərhələ razılaşdırılmış vaxt çərçivəsində və planlı şəkildə icra olunur.</p>
              </div>
              <div style={{ background: '#080C14', border: '1px solid #162032', padding: '24px', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>Daimi texniki dəstək</h4>
                <p style={{ fontSize: '0.82rem', color: '#9CA6B5', lineHeight: 1.6 }}>Sayt təhvil verildikdən sonra da server, domen və texniki məsələlərdə dəstəyimizi davam etdiririk.</p>
              </div>
            </div>

            <div style={{ background: '#080C14', border: '1px solid #0066FF', borderRadius: '20px', padding: '28px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px' }}>Veb sayt sifariş etmək istəyirsiniz?</h3>
                <p style={{ fontSize: '0.85rem', color: '#9CA6B5' }}>Layihəniz haqqında qısa məlumat göndərin. Ehtiyacınıza uyğun həlli birlikdə müəyyən edək.</p>
              </div>
              <button
                onClick={() => navigateTo('contact')}
                style={{ background: '#0066FF', color: 'white', padding: '12px 24px', borderRadius: '10px', fontSize: '0.88rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}
              >
                Təklif al →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* PAGE: FAQ */}
      {/* ======================================================== */}
      {currentRoute === 'faq' && (
        <section style={{ padding: '60px 0 80px' }}>
          <div className="container">
            <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                SUAL-CAVAB
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>Tez-tez verilən suallar</h1>
              <p style={{ color: '#9CA6B5', fontSize: '1rem', lineHeight: 1.6 }}>Veb saytların hazırlanması və əməkdaşlıq prosesi ilə bağlı sualların cavabları.</p>
            </div>

            <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((f, idx) => (
                <div key={idx} style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '14px', overflow: 'hidden' }}>
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
      )}

      {/* ======================================================== */}
      {/* PAGE: CONTACT */}
      {/* ======================================================== */}
      {currentRoute === 'contact' && (
        <section style={{ padding: '60px 0 80px' }}>
          <div className="container">
            <div className="contact-grid">
              <div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                  BİZİMLƏ ƏLAQƏ
                </span>
                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>Bizimlə əlaqə</h1>
                <p style={{ color: '#9CA6B5', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                  Layihəniz haqqında qısa məlumat göndərin. Ehtiyacınıza uyğun həlli birlikdə müəyyən edək.
                </p>

                <a
                  href={`https://wa.me/994106011201?text=${encodeURIComponent('Salam. Biznesim üçün sayt hazırlatmaq istəyirəm. Ətraflı məlumat ala bilərəm?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: '#0066FF', color: 'white', padding: '14px 24px', borderRadius: '12px', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', boxShadow: '0 6px 20px rgba(0,102,255,0.3)' }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp ilə əlaqə</span>
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
                <p style={{ fontSize: '0.82rem', color: '#9CA6B5', marginBottom: '20px' }}>Məlumatlarınızı qeyd edin, ən qısa zamanda sizinlə əlaqə saxlayaq.</p>

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
                        <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Biznes sahəsi</label>
                        <input
                          type="text"
                          placeholder="Məsələn: Tibb, Təhsil, Mebel"
                          value={business}
                          onChange={(e) => setBusiness(e.target.value)}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.85rem' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Sayt növü</label>
                        <select
                          value={siteType}
                          onChange={(e) => setSiteType(e.target.value)}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.85rem' }}
                        >
                          <option value="Veb saytların hazırlanması">Veb saytların hazırlanması</option>
                          <option value="Landing Page hazırlanması">Landing Page hazırlanması</option>
                          <option value="Korporativ saytların hazırlanması">Korporativ saytların hazırlanması</option>
                          <option value="E-commerce saytların hazırlanması">E-commerce saytların hazırlanması</option>
                          <option value="Veb dizayn (UI/UX)">Veb dizayn (UI/UX)</option>
                          <option value="Texniki dəstək">Texniki dəstək</option>
                          <option value="SEO optimizasiyası">SEO optimizasiyası</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Sayt haqqında qısa məlumat / İstəkləriniz</label>
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
                          <span>Təklif al</span>
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
      )}

      {/* Footer */}
      <footer style={{ background: '#05070B', borderTop: '1px solid #162032', padding: '36px 0 20px', fontSize: '0.82rem', color: '#9CA6B5' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/logo.png" alt="CodeX Studio" style={{ width: '24px', height: '24px', borderRadius: '6px' }} />
            <strong style={{ color: '#F5F7FA' }}>Code<span style={{ color: '#0066FF' }}>X</span> Studio</strong>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.78rem' }}>
            <button onClick={() => navigateTo('home')} style={{ background: 'none', border: 'none', color: '#9CA6B5', cursor: 'pointer' }}>Ana səhifə</button>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: '#9CA6B5', cursor: 'pointer' }}>Xidmətlər</button>
            <button onClick={() => navigateTo('works')} style={{ background: 'none', border: 'none', color: '#9CA6B5', cursor: 'pointer' }}>İşlərimiz</button>
            <button onClick={() => navigateTo('about')} style={{ background: 'none', border: 'none', color: '#9CA6B5', cursor: 'pointer' }}>Haqqımızda</button>
            <button onClick={() => navigateTo('faq')} style={{ background: 'none', border: 'none', color: '#9CA6B5', cursor: 'pointer' }}>FAQ</button>
            <button onClick={() => navigateTo('contact')} style={{ background: 'none', border: 'none', color: '#9CA6B5', cursor: 'pointer' }}>Bizimlə əlaqə</button>
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
        <span className="hidden sm:inline">WhatsApp ilə əlaqə</span>
      </a>
    </div>
  )
}
