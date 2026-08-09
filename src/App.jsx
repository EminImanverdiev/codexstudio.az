import React, { useState, useEffect, useRef } from 'react'
import {
  MessageCircle, Send, ArrowRight, Laptop, Globe, ShoppingBag,
  Zap, Smartphone, CheckCircle2, ChevronDown, Bot, X, Sun, Moon,
  Mail, ExternalLink, Loader2, Code2, ShieldCheck, Activity,
  Calculator, Sparkles, Cpu, Clock, Layers, Menu
} from 'lucide-react'

export default function App() {
  const [lang, setLang] = useState('az')
  const [theme, setTheme] = useState('dark')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [heroTab, setHeroTab] = useState('corporate')
  const [selectedSolution, setSelectedSolution] = useState(0)
  
  // Interactive Lab State
  const [labTab, setLabTab] = useState('architecture')
  const [labTech, setLabTech] = useState('next')
  const [accentColor, setAccentColor] = useState('#0066FF')
  const [liveFps, setLiveFps] = useState(60)

  // Estimator State
  const [pagesCount, setPagesCount] = useState(3)
  const [hasEcommerce, setHasEcommerce] = useState(false)
  const [hasMultilingual, setHasMultilingual] = useState(false)
  const [hasCustomApi, setHasCustomApi] = useState(false)

  // Contact Form
  const [contactTab, setContactTab] = useState('email')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [business, setBusiness] = useState('')
  const [siteType, setSiteType] = useState('Korporativ sayt')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [inquiryId, setInquiryId] = useState('')

  // Chatbot
  const [chatOpen, setChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'bot',
      text: 'Salam! 👋 Mən Codex Studio-nun virtual köməkçisiyəm. Sizə sayt seçimi və ya email/WhatsApp müraciətində necə kömək edə bilərəm?',
      time: 'İndi'
    }
  ])
  const chatEndRef = useRef(null)

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

  const calculateDays = () => {
    let days = 3 + Math.floor(pagesCount * 0.8)
    if (hasEcommerce) days += 5
    if (hasMultilingual) days += 2
    if (hasCustomApi) days += 4
    return days
  }

  const estimatedDays = calculateDays()

  const codeSnippets = {
    next: `// codexstudio.az - High Performance Next.js Server Engine
export async function generateStaticParams() {
  return await db.enterpriseRoutes.findMany({
    cache: 'force-cache',
    revalidate: 3600 // 1 hour instant edge revalidation
  });
}

export default async function EnterprisePage({ params }) {
  const data = await getSecureData(params.slug);
  return (
    <CoreArchitecture
      speedGrade="100/100"
      compression="Brotli / WebP"
      edgeLatency="24ms"
      sslVerified={true}
    />
  );
}`,
    react: `// codexstudio.az - Modern Reactive UI Component
import { useMotion, useConversionTrack } from '@codex/core';

export function InteractiveLeadEngine() {
  const { conversionRate, trackLead } = useConversionTrack();
  return (
    <div className="codex-glass-card hover:scale-[1.02]">
      <LiveSpeedRadar ping="0.4s" vitals="Lighthouse 100" />
      <InstantWhatsAppTrigger onSend={trackLead} />
    </div>
  );
}`,
    tailwind: `/* codexstudio.az - Tailored Cyber Design System */
.codex-hero-glow {
  background: radial-gradient(circle at center, #0066FF1A 0%, transparent 70%);
  filter: blur(120px);
  animation: pulse 6s infinite ease-in-out;
}
.codex-border-gradient {
  border-image: linear-gradient(to right, #0066FF, #00F0FF) 1;
}`
  }

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
          'Email': email || 'Qeyd olunmayıb',
          'Biznes Sahəsi': business || 'Qeyd olunmayıb',
          'Sayt Növü': siteType,
          'İstəklər': message || 'Əlavə qeyd yoxdur',
          'Qəbul Emaili': 'emin.imanverdievv@gmail.com'
        })
      })
      setInquiryId(id)
      setIsSuccess(true)
    } catch (err) {
      console.error(err)
      setInquiryId(id)
      setIsSuccess(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppSend = () => {
    const text = `Salam, Codex Studio! Sayt sifarişi üçün müraciət edirəm:\n\n` +
                 `👤 *Ad:* ${name || 'Qeyd olunmayıb'}\n` +
                 `📞 *Əlaqə:* ${phone || 'Qeyd olunmayıb'}\n` +
                 `✉️ *Email:* ${email || 'Qeyd olunmayıb'}\n` +
                 `🏢 *Biznes:* ${business || 'Qeyd olunmayıb'}\n` +
                 `🌐 *Sayt növü:* ${siteType}\n` +
                 `📝 *Qeyd:* ${message || 'Yoxdur'}\n\n` +
                 `Layihə haqqında ətraflı danışmaq istərdim.`;
    window.open(`https://wa.me/994106011201?text=${encodeURIComponent(text)}`, '_blank')
  }

  const handleDirectGmail = () => {
    const subject = encodeURIComponent(`[Codex Studio Sayt Sifarişi] ${name || 'Yeni Müştəri'} - ${siteType}`)
    const body = encodeURIComponent(
      `Salam, Codex Studio!\n\n` +
      `👤 Ad və Soyad: ${name || 'Qeyd olunmayıb'}\n` +
      `📞 Telefon / WhatsApp: ${phone || 'Qeyd olunmayıb'}\n` +
      `✉️ Müştəri Emaili: ${email || 'Qeyd olunmayıb'}\n` +
      `🏢 Biznes Sahəsi: ${business || 'Qeyd olunmayıb'}\n` +
      `🌐 Sayt Növü: ${siteType}\n\n` +
      `📝 İstəklər və Detallar:\n${message || 'Qeyd olunmayıb'}`
    )
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=emin.imanverdievv@gmail.com&su=${subject}&body=${body}`, '_blank')
  }

  const handleSendMessage = (textToSend) => {
    const text = textToSend || chatInput
    if (!text.trim()) return

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages((prev) => [...prev, userMsg])
    setChatInput('')
    setIsTyping(true)

    setTimeout(() => {
      let reply = 'Məlumat üçün təşəkkür edirik! Layihənizin detallarını emin.imanverdievv@gmail.com və ya WhatsApp ilə dərhal dəqiqləşdirə bilərik: 010 601 12 01.'
      const lower = text.toLowerCase()
      if (lower.includes('vaxt') || lower.includes('müddət') || lower.includes('neçə gün')) {
        reply = 'Layihənin həcmindən asılı olaraq: Landing page adətən bir neçə günə, korporativ və e-commerce saytlar isə orta hesabla 1-3 həftəyə tam hazır olur.'
      } else if (lower.includes('qiymət') || lower.includes('ödəniş') || lower.includes('büdcə') || lower.includes('neçəyə')) {
        reply = 'Qiymət saytın növünə, səhifə sayına və funksionallığa görə şəffaf hesablanır. Formdan müraciət edin, dərhal dəqiq təklif hazırlayaq.'
      } else if (lower.includes('email') || lower.includes('mail')) {
        reply = 'Müraciətləriniz birbaşa emin.imanverdievv@gmail.com poçtuna çatdırılır!'
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ])
      setIsTyping(false)
    }, 600)
  }

  const solutions = [
    {
      id: '01',
      title: lang === 'az' ? 'Yüksək Konversiyalı Landing Page' : 'High-Conversion Landing Page',
      category: 'Lead Generation & Sales Funnel',
      badge: 'Təqdimat & Satış',
      desc: lang === 'az'
        ? 'Ziyarətçiləri dərhal müştəriyə çevirən, lazımsız yüklənmələrdən azad, 0.4s sürətli və WhatsApp ilə birbaşa əlaqə quran həll.'
        : 'Turns visitors into qualified leads with zero clutter, lightning-fast load times, and direct messaging workflows.',
      techs: ['Next.js Turbo Stack', 'Tailwind CSS', 'Fast Form Action', 'SEO Schema']
    },
    {
      id: '02',
      title: lang === 'az' ? 'Çoxdilli Korporativ Şirkət Portalı' : 'Multilingual Corporate Enterprise Portal',
      category: 'Corporate & B2B Solutions',
      badge: 'Etibar & Təqdimat',
      desc: lang === 'az'
        ? 'Şirkətinizin xidmətlərini, komandasını və beynəlxalq tərəfdaşlıqlarını peşəkar şəkildə əks etdirən çoxsəhifəli sistem.'
        : 'A robust multi-page system showcasing company services, team expertise, and global corporate capabilities.',
      techs: ['Multilingual i18n', 'SSR / SSG', 'Security Headers', 'Core Vitals 100/100']
    },
    {
      id: '03',
      title: lang === 'az' ? 'Müasir E-commerce Onlayn Mağaza' : 'Modern Headless E-commerce Engine',
      category: 'Online Retail & Store',
      badge: 'Satış & Ödəniş',
      desc: lang === 'az'
        ? 'Sürətli məhsul axtarışı, kateqoriya filtri, səbət axını və yerli bank kartları ilə anında ödəniş inteqrasiyası.'
        : 'Instant search, faceted filters, seamless cart experience, and localized payment gateway integration.',
      techs: ['Cart Engine', 'Instant Checkout', 'API Integrations', 'Payment Gateways']
    }
  ]

  return (
    <div className="min-h-screen bg-[#05070B] text-[#F5F7FA] overflow-x-hidden">
      {/* Scroll line */}
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
        background: 'rgba(5, 7, 11, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #162032',
        padding: '14px 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          
          {/* Official CS Logo + Clean Wordmark (No redundant domain subtitle) */}
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
              <img
                src="/logo.png"
                alt="CodeX Studio Logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '1.25rem', fontWeight: 800, color: '#F5F7FA', letterSpacing: '-0.02em' }}>
              <span>Code<span style={{ color: '#0066FF' }}>X</span></span>
              <span style={{ color: '#9CA6B5', fontWeight: 500, fontSize: '1.15rem' }}>Studio</span>
            </div>
          </a>

          {/* Desktop Top Navigation Bar (Visible on Desktop >= 1024px) */}
          <nav className="desktop-nav">
            <a href="#hero" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }}>
              {lang === 'az' ? 'Ana səhifə' : 'Home'}
            </a>
            <a href="#services" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }}>
              {lang === 'az' ? 'Xidmətlər' : 'Services'}
            </a>
            <a href="#lab" style={{ color: '#0066FF', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600, transition: 'color 0.2s' }}>
              {lang === 'az' ? 'Laboratoriya ⚡' : 'Live Lab ⚡'}
            </a>
            <a href="#showcase" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }}>
              {lang === 'az' ? 'Həllər' : 'Solutions'}
            </a>
            <a href="#estimator" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }}>
              {lang === 'az' ? 'Planlayıcı' : 'Estimator'}
            </a>
            <a href="#contact" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }}>
              {lang === 'az' ? 'Əlaqə' : 'Contact'}
            </a>
          </nav>

          {/* Controls & Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', padding: '3px', background: '#080C14', border: '1px solid #162032', borderRadius: '8px' }}>
              <button
                onClick={() => setLang('az')}
                style={{
                  padding: '4px 8px',
                  borderRadius: '5px',
                  border: 'none',
                  background: lang === 'az' ? '#0066FF' : 'transparent',
                  color: lang === 'az' ? 'white' : '#9CA6B5',
                  fontSize: '0.72rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                AZ
              </button>
              <button
                onClick={() => setLang('en')}
                style={{
                  padding: '4px 8px',
                  borderRadius: '5px',
                  border: 'none',
                  background: lang === 'en' ? '#0066FF' : 'transparent',
                  color: lang === 'en' ? 'white' : '#9CA6B5',
                  fontSize: '0.72rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleTheme}
              style={{
                padding: '7px 10px',
                borderRadius: '8px',
                background: '#080C14',
                border: '1px solid #162032',
                color: '#9CA6B5',
                cursor: 'pointer'
              }}
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
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                boxShadow: '0 4px 14px rgba(0, 102, 255, 0.3)',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{lang === 'az' ? 'Sayt sifarişi' : 'Start Project'}</span>
              <ArrowRight size={14} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                padding: '7px',
                borderRadius: '8px',
                background: '#080C14',
                border: '1px solid #162032',
                color: '#F5F7FA',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center'
              }}
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
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '01. Ana səhifə' : '01. Home'}
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '02. Xidmətlər' : '02. Services'}
            </a>
            <a href="#lab" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '03. Canlı Laboratoriya' : '03. Live Lab'}
            </a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '04. Veb Həllər' : '04. Solutions'}
            </a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '05. Planlayıcı' : '05. Estimator'}
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '06. Əlaqə' : '06. Contact'}
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '24px' }}>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: '#0066FF',
                color: 'white',
                padding: '14px',
                borderRadius: '12px',
                textAlign: 'center',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.95rem'
              }}
            >
              {lang === 'az' ? 'Sayt sifarişi edin →' : 'Start Project →'}
            </a>
            <a
              href="https://wa.me/994106011201"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#080C14',
                border: '1px solid #162032',
                color: '#F5F7FA',
                padding: '14px',
                borderRadius: '12px',
                textAlign: 'center',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.95rem'
              }}
            >
              WhatsApp: 010 601 12 01
            </a>
          </div>
        </div>
      )}

      {/* Hero Section (Balanced 2-Column Desktop Grid) */}
      <section id="hero" style={{ padding: '60px 0 80px' }}>
        <div className="container">
          <div className="hero-grid">
            
            {/* Left Column: Headline & Value Proposition */}
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
                <span>CODEX STUDIO • 0.4s SÜRƏT ZƏMANƏTİ</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', lineHeight: 1.14, fontWeight: 800, marginBottom: '18px', letterSpacing: '-0.02em' }}>
                {lang === 'az' ? (
                  <>
                    Biznesiniz üçün <br />
                    sadəcə sayt yox, <br />
                    <span style={{ color: '#0066FF' }}>işləyən veb həll.</span>
                  </>
                ) : (
                  <>
                    Not just a website, <br />
                    a high-performing <br />
                    <span style={{ color: '#0066FF' }}>web solution.</span>
                  </>
                )}
              </h1>

              <p style={{ color: '#9CA6B5', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', lineHeight: 1.6, maxWidth: '540px', marginBottom: '28px' }}>
                {lang === 'az'
                  ? 'Landing page-dən geniş e-commerce və korporativ portallara qədər — 0.4s sürətli, mobil uyğun və birbaşa satış gətirən peşəkar veb saytların hazırlanması.'
                  : 'From conversion-focused landing pages to scalable e-commerce systems — we build fast, mobile-first, and revenue-driving websites for modern businesses.'}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '28px' }}>
                <a
                  href="#contact"
                  style={{
                    background: '#0066FF',
                    color: 'white',
                    padding: '14px 26px',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 8px 24px rgba(0, 102, 255, 0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{lang === 'az' ? 'Sayt sifarişi verin' : 'Start Your Project'}</span>
                  <ArrowRight size={15} />
                </a>

                <a
                  href="#lab"
                  style={{
                    background: '#080C14',
                    color: '#F5F7FA',
                    border: '1px solid #162032',
                    padding: '14px 22px',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{lang === 'az' ? 'Canlı Laboratoriya ⚡' : 'Live Lab ⚡'}</span>
                </a>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.82rem', color: '#9CA6B5', borderTop: '1px solid #162032', paddingTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="#0066FF" /><span style={{ color: '#F5F7FA' }}>100% Mobil Uyğunluq</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="#0066FF" /><span style={{ color: '#F5F7FA' }}>0.4s Açılış Sürəti</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="#0066FF" /><span style={{ color: '#F5F7FA' }}>Google SEO Zəmanəti</span></div>
              </div>
            </div>

            {/* Right Column: Interactive Browser Frame */}
            <div style={{ width: '100%' }}>
              
              {/* Tab Selector */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ display: 'flex', gap: '6px', padding: '4px', background: '#080C14', border: '1px solid #162032', borderRadius: '10px' }}>
                  <button
                    onClick={() => setHeroTab('corporate')}
                    style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'corporate' ? '#0066FF' : 'transparent', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Korporativ
                  </button>
                  <button
                    onClick={() => setHeroTab('landing')}
                    style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'landing' ? '#0066FF' : 'transparent', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Landing
                  </button>
                  <button
                    onClick={() => setHeroTab('ecommerce')}
                    style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'ecommerce' ? '#0066FF' : 'transparent', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                  >
                    E-commerce
                  </button>
                </div>

                <div style={{ fontSize: '0.72rem', color: '#10B981', fontFamily: 'monospace', padding: '4px 10px', background: '#080C14', border: '1px solid #162032', borderRadius: '8px' }}>
                  ⚡ 100/100 Score
                </div>
              </div>

              {/* Browser Mockup Box */}
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
                      {heroTab === 'corporate' && 'enterprise-group.az'}
                      {heroTab === 'landing' && 'conversion-lead.az'}
                      {heroTab === 'ecommerce' && 'premium-store.az'}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#10B981', fontFamily: 'monospace' }}>● 0.4s</div>
                </div>

                <div style={{ padding: '24px', background: 'linear-gradient(180deg, #080C14 0%, #0D121D 100%)', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {heroTab === 'corporate' && (
                    <div>
                      <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '6px' }}>B2B & ENTERPRISE ARCHITECTURE</div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Qlobal tərəfdaşlarınız üçün etibarlı həllər.</h3>
                      <p style={{ fontSize: '0.85rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '18px' }}>
                        Müasir texnologiyalar və təhlükəsiz korporativ arxitektura ilə biznesinizi təmsil edirik.
                      </p>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <a href="#contact" style={{ background: '#0066FF', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>Təklif al →</a>
                        <span style={{ background: '#162032', color: '#9CA6B5', padding: '8px 14px', borderRadius: '8px', fontSize: '0.78rem' }}>Kataloq</span>
                      </div>
                    </div>
                  )}

                  {heroTab === 'landing' && (
                    <div>
                      <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '6px' }}>DIRECT SALES & LEAD FUNNEL</div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Reklam büdcənizi real satışa çevirin.</h3>
                      <p style={{ fontSize: '0.85rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '18px' }}>
                        Yayındırmayan, dərhal WhatsApp və forma inteqrasiyalı sürətli təqdimat sistemi.
                      </p>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <a href="#contact" style={{ background: '#0066FF', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>Müraciət et →</a>
                        <span style={{ background: '#162032', color: '#9CA6B5', padding: '8px 14px', borderRadius: '8px', fontSize: '0.78rem' }}>Detallar</span>
                      </div>
                    </div>
                  )}

                  {heroTab === 'ecommerce' && (
                    <div>
                      <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '6px' }}>HEADLESS E-COMMERCE ENGINE</div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Onlayn satış və ani kart ödənişi.</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', margin: '12px 0' }}>
                        <div style={{ background: '#05070B', border: '1px solid #162032', padding: '8px 12px', borderRadius: '8px' }}>
                          <span style={{ fontSize: '0.7rem', color: '#9CA6B5' }}>Məhsul</span>
                          <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>65 ₼</div>
                        </div>
                        <div style={{ background: '#05070B', border: '1px solid #162032', padding: '8px 12px', borderRadius: '8px' }}>
                          <span style={{ fontSize: '0.7rem', color: '#9CA6B5' }}>Aksessuar</span>
                          <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>140 ₼</div>
                        </div>
                      </div>
                      <a href="#contact" style={{ background: '#0066FF', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Ödəniş modulu →</a>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #162032', paddingTop: '12px', marginTop: '16px', fontSize: '0.68rem', color: '#9CA6B5', fontFamily: 'monospace' }}>
                    <span style={{ color: '#10B981' }}>✓ Google Lighthouse 100/100</span>
                    <span style={{ color: '#0066FF' }}>Next.js Turbo Stack</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Showstopping Interactive Lab */}
      <section id="lab" style={{ padding: '80px 0', background: '#080C14', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              KREATIV TEXNOLOGİYA LABORATORİYASI
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Saytın arxa planında nələr baş verir?</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.92rem' }}>
              0.4s sürət və təmiz kod mühəndisliyi ilə hazırladığımız sistemləri canlı sınaqdan keçirin.
            </p>
          </div>

          <div style={{ background: '#05070B', border: '1px solid #162032', borderRadius: '20px', padding: '24px', maxWidth: '960px', margin: '0 auto', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #162032', paddingBottom: '14px' }}>
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', maxWidth: '100%' }}>
                <button
                  onClick={() => setLabTab('architecture')}
                  style={{ padding: '6px 14px', borderRadius: '8px', border: 'none', background: labTab === 'architecture' ? '#0066FF' : '#080C14', color: 'white', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}
                >
                  Canlı Arxitektura
                </button>
                <button
                  onClick={() => setLabTab('code')}
                  style={{ padding: '6px 14px', borderRadius: '8px', border: 'none', background: labTab === 'code' ? '#0066FF' : '#080C14', color: 'white', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}
                >
                  Təmiz Kod
                </button>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#10B981', fontFamily: 'monospace' }}>● {liveFps} FPS Engine</div>
            </div>

            {labTab === 'architecture' ? (
              <div className="grid-three-col">
                <div style={{ padding: '18px', background: '#080C14', borderRadius: '14px', border: '1px solid #162032' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0066FF', marginBottom: '6px' }}>⚡ 0.4s Core Vitals</h4>
                  <p style={{ fontSize: '0.8rem', color: '#9CA6B5', lineHeight: 1.5 }}>Server Side Rendering (SSR) ilə müştəri saytı gözləmir, dərhal açılır.</p>
                </div>
                <div style={{ padding: '18px', background: '#080C14', borderRadius: '14px', border: '1px solid #162032' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0066FF', marginBottom: '6px' }}>📱 Mobile First</h4>
                  <p style={{ fontSize: '0.8rem', color: '#9CA6B5', lineHeight: 1.5 }}>Bütün iPhone və Android telefonlarında toxunma tam təbii və axıcıdır.</p>
                </div>
                <div style={{ padding: '18px', background: '#080C14', borderRadius: '14px', border: '1px solid #162032' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0066FF', marginBottom: '6px' }}>🎯 Lead Funnel</h4>
                  <p style={{ fontSize: '0.8rem', color: '#9CA6B5', lineHeight: 1.5 }}>Müraciətlər avtomatik olaraq Gmail poçtunuza və WhatsApp-a çatdırılır.</p>
                </div>
              </div>
            ) : (
              <div style={{ padding: '16px', background: '#080C14', borderRadius: '12px', border: '1px solid #162032', fontFamily: 'monospace', fontSize: '0.78rem', color: '#0066FF', overflowX: 'auto' }}>
                <pre><code>{codeSnippets[labTech]}</code></pre>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dynamic Estimator */}
      <section id="estimator" style={{ padding: '80px 0', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div className="grid-two-col" style={{ alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                DİNAMİK LAYİHƏ PLANLAYICISI
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '12px' }}>Layihənizin müddətini hesablayın.</h2>
              <p style={{ color: '#9CA6B5', fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>
                Səhifə sayını və xüsusiyyətləri seçin, saytın hazırlanma müddətini və texniki strukturunu anında görün.
              </p>
            </div>

            <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '20px', padding: '24px', boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)' }}>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem', fontFamily: 'monospace' }}>
                  <span style={{ color: '#9CA6B5' }}>Təxmini Səhifə Sayı:</span>
                  <strong style={{ color: '#0066FF', fontSize: '1rem' }}>{pagesCount} Səhifə</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={pagesCount}
                  onChange={(e) => setPagesCount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#0066FF', cursor: 'pointer' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
                <button
                  type="button"
                  onClick={() => setHasEcommerce(!hasEcommerce)}
                  style={{ padding: '10px', borderRadius: '10px', border: '1px solid #162032', background: hasEcommerce ? '#0066FF' : '#05070B', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Onlayn Ödəniş
                </button>
                <button
                  type="button"
                  onClick={() => setHasMultilingual(!hasMultilingual)}
                  style={{ padding: '10px', borderRadius: '10px', border: '1px solid #162032', background: hasMultilingual ? '#0066FF' : '#05070B', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Çoxdilli (AZ/EN)
                </button>
                <button
                  type="button"
                  onClick={() => setHasCustomApi(!hasCustomApi)}
                  style={{ padding: '10px', borderRadius: '10px', border: '1px solid #162032', background: hasCustomApi ? '#0066FF' : '#05070B', color: 'white', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Xüsusi API
                </button>
              </div>

              <div style={{ padding: '18px', background: '#05070B', border: '1px solid #0066FF', borderRadius: '14px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                <div>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#0066FF', display: 'block' }}>TƏXMİNİ HAZIRLANMA MÜDDƏTİ:</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F5F7FA' }}>{estimatedDays} - {estimatedDays + 3} İş Günü</div>
                </div>
                <a
                  href="#contact"
                  style={{ background: '#0066FF', color: 'white', padding: '10px 18px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}
                >
                  Təklif al →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section id="showcase" style={{ padding: '80px 0', background: '#080C14', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              VEB HƏLLƏRİMİZ
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Veb Həllər Arxitekturası</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.92rem' }}>
              Hər bir sayt sifarişi müasir standartlar və biznes məqsədlərinizə uyğun fərdi yanaşma ilə kodlaşdırılır.
            </p>
          </div>

          <div className="grid-three-col">
            {solutions.map((sol, idx) => (
              <div
                key={sol.id}
                onClick={() => setSelectedSolution(idx)}
                style={{
                  background: selectedSolution === idx ? '#0D121D' : '#05070B',
                  border: `1px solid ${selectedSolution === idx ? '#0066FF' : '#162032'}`,
                  borderRadius: '18px',
                  padding: '22px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: selectedSolution === idx ? '0 10px 30px rgba(0, 102, 255, 0.15)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#0066FF', fontWeight: 'bold' }}>FORMAT {sol.id}</span>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', background: '#080C14', padding: '3px 8px', borderRadius: '6px', border: '1px solid #162032' }}>{sol.badge}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>{sol.title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#9CA6B5', lineHeight: 1.6, marginBottom: '16px' }}>{sol.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {sol.techs.map((t, i) => (
                    <span key={i} style={{ fontSize: '0.68rem', fontFamily: 'monospace', background: '#080C14', border: '1px solid #162032', padding: '3px 8px', borderRadius: '6px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (2-Column Desktop Grid) */}
      <section id="contact" style={{ padding: '80px 0', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Info Column */}
            <div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                SAYT SİFARİŞİ & ƏLAQƏ
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '12px' }}>Layihənizi danışaq.</h2>
              <p style={{ color: '#9CA6B5', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.6 }}>
                Sayt sifarişi üçün formu doldurun. Məlumatlar birbaşa rəsmi emailə çatdırılacaq və sizinlə operativ əlaqə saxlanılacaq.
              </p>

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

              <div style={{ marginTop: '16px', padding: '14px', background: '#080C14', border: '1px solid #162032', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: '#9CA6B5' }}>Gmail ilə birbaşa müraciət:</span>
                <button
                  type="button"
                  onClick={handleDirectGmail}
                  style={{ background: 'none', border: 'none', color: '#0066FF', fontSize: '0.78rem', fontFamily: 'monospace', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <span>Gmail-də aç</span>
                  <ExternalLink size={13} />
                </button>
              </div>
            </div>

            {/* Right Form Column */}
            <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '22px', padding: '28px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                <button
                  type="button"
                  onClick={() => setContactTab('email')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    background: contactTab === 'email' ? '#0066FF' : '#05070B',
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  ✉️ Email ilə göndər
                </button>
                <button
                  type="button"
                  onClick={() => setContactTab('whatsapp')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    background: contactTab === 'whatsapp' ? '#0066FF' : '#05070B',
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  💬 WhatsApp ilə yaz
                </button>
              </div>

              {!isSuccess ? (
                <form onSubmit={contactTab === 'email' ? handleEmailSubmit : (e) => { e.preventDefault(); handleWhatsAppSend(); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
                      <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Telefon *</label>
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
                      <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Email</label>
                      <input
                        type="email"
                        placeholder="info@sirket.az"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.85rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Biznes Sahəsi</label>
                      <input
                        type="text"
                        placeholder="Məsələn: Təhsil, Mebel"
                        value={business}
                        onChange={(e) => setBusiness(e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.85rem' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Sayt Növü</label>
                    <select
                      value={siteType}
                      onChange={(e) => setSiteType(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.85rem' }}
                    >
                      <option value="Landing Page">Landing Page (Yüksək Konversiya)</option>
                      <option value="Korporativ sayt">Korporativ sayt (Şirkət və B2B)</option>
                      <option value="E-commerce">E-commerce (Onlayn Mağaza)</option>
                      <option value="Fərdi layihə">Fərdi layihə (Xüsusi Funksionallıq)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '4px' }}>Qeydlər və İstəklər</label>
                    <textarea
                      rows={3}
                      placeholder="Sayt haqqında istəkləriniz..."
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
                    ) : contactTab === 'email' ? (
                      <>
                        <Mail size={16} />
                        <span>Email ilə müraciət göndər →</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle size={16} />
                        <span>WhatsApp ilə göndər →</span>
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

      {/* Floating Chat Assistant Trigger */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 150,
          background: '#0066FF',
          color: 'white',
          border: 'none',
          width: '50px',
          height: '50px',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0, 102, 255, 0.4)',
          cursor: 'pointer'
        }}
        title="Codex Asistent"
      >
        {chatOpen ? <X size={20} /> : <Bot size={24} />}
      </button>

      {/* Chat Window */}
      {chatOpen && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          right: '16px',
          left: '16px',
          maxWidth: '380px',
          margin: '0 0 0 auto',
          height: '460px',
          maxHeight: '82vh',
          background: '#080C14',
          border: '1px solid #162032',
          borderRadius: '20px',
          zIndex: 150,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <div style={{ background: '#05070B', padding: '12px 16px', borderBottom: '1px solid #162032', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bot size={18} color="#0066FF" />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Codex Virtual Asistent</div>
                <div style={{ fontSize: '0.68rem', color: '#10B981' }}>● Online</div>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} style={{ background: 'none', border: 'none', color: '#9CA6B5', cursor: 'pointer' }}><X size={16} /></button>
          </div>

          <div style={{ flex: 1, padding: '14px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((m) => (
              <div key={m.id} style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                <div style={{
                  padding: '10px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  background: m.sender === 'user' ? '#0066FF' : '#0D121D',
                  color: '#F5F7FA',
                  border: m.sender === 'user' ? 'none' : '1px solid #162032',
                  lineHeight: 1.5
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div style={{ fontSize: '0.72rem', color: '#9CA6B5' }}>Codex Studio yazır...</div>}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} style={{ padding: '10px', background: '#05070B', borderTop: '1px solid #162032', display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder="Sualınızı yazın..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', background: '#080C14', border: '1px solid #162032', color: 'white', fontSize: '0.8rem' }}
            />
            <button type="submit" style={{ background: '#0066FF', color: 'white', border: 'none', padding: '0 12px', borderRadius: '8px', cursor: 'pointer' }}>
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
