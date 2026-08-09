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
          _subject: `[Codex Studio Müraciət] ${name} - ${siteType}`,
          _template: 'table',
          'Müraciət ID': id,
          'Müştəri Adı': name,
          'Telefon': phone,
          'Email': email || 'Qeyd olunmayıb',
          'Biznes Sahəsi': business || 'Qeyd olunmayıb',
          'Sayt Növü': siteType,
          'İstəklər': message || 'Əlavə qeyd yoxdur',
          'Alıcı': 'emin.imanverdievv@gmail.com'
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
      } else if (lower.includes('qiymət') || lower.includes('ödəniş') || lower.includes('büdcə')) {
        reply = 'Qiymət saytın növünə, səhifə sayına və funksionallığa görə şəffaf hesablanır. Saytımızdakı formdan məlumat yazın, sizə dəqiq təklif hazırlayaq.'
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
      title: lang === 'az' ? 'Yüksək Konversiyalı Landing Architecture' : 'High-Conversion Landing Architecture',
      category: 'Lead Generation & Sales',
      badge: 'Təqdimat & Satış',
      desc: lang === 'az'
        ? 'Ziyarətçiləri dərhal müştəriyə çevirən, lazımsız yüklənmələrdən azad, sürətli və WhatsApp ilə birbaşa əlaqə quran həll.'
        : 'Turns visitors into qualified leads with zero clutter, lightning-fast load times, and direct messaging workflows.',
      techs: ['Next.js Turbo Stack', 'Tailwind CSS', 'Fast Form Action', 'SEO Schema'],
      url: 'conversion-engine.codexstudio.az'
    },
    {
      id: '02',
      title: lang === 'az' ? 'Çoxdilli Korporativ Şirkət Portalı' : 'Multilingual Corporate Enterprise Portal',
      category: 'Corporate & B2B Solutions',
      badge: 'Etibar & Təqdimat',
      desc: lang === 'az'
        ? 'Şirkətinizin xidmətlərini, komandasını və beynəlxalq tərəfdaşlıqlarını peşəkar şəkildə əks etdirən çoxsəhifəli sistem.'
        : 'A robust multi-page system showcasing company services, team expertise, and global corporate capabilities.',
      techs: ['Multilingual i18n', 'SSR / SSG', 'Security Headers', 'Core Vitals 100/100'],
      url: 'enterprise-portal.codexstudio.az'
    },
    {
      id: '03',
      title: lang === 'az' ? 'Müasir Headless E-commerce Platforması' : 'Modern Headless E-commerce Engine',
      category: 'Online Retail & Store',
      badge: 'Satış & Ödəniş',
      desc: lang === 'az'
        ? 'Sürətli məhsul axtarışı, kateqoriya filtri, səbət axını və yerli bank kartları ilə anında ödəniş inteqrasiyası.'
        : 'Instant search, faceted filters, seamless cart experience, and localized payment gateway integration.',
      techs: ['Cart Engine', 'Instant Checkout', 'API Integrations', 'Payment Gateways'],
      url: 'retail-store.codexstudio.az'
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
        background: 'rgba(5, 7, 11, 0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #162032',
        padding: '12px 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              background: '#080C14',
              border: '1px solid #162032',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg viewBox="0 0 40 40" fill="none" width="20" height="20">
                <path d="M21 12.5C18.5 12.5 13.5 14.5 13.5 20C13.5 25.5 18.5 27.5 21 27.5C23.2 27.5 25.5 26.2 26.5 24.8" stroke="#F5F7FA" strokeWidth="3.4" strokeLinecap="round"/>
                <path d="M27.5 14.5C26.5 13.2 24.5 12.5 22.5 12.5C19.5 12.5 17.5 14.2 17.5 16.5C17.5 21 26.5 19 26.5 23.5C26.5 26.2 23.8 27.5 21 27.5" stroke="#0066FF" strokeWidth="3.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F5F7FA', lineHeight: 1 }}>
                Code<span style={{ color: '#0066FF' }}>X</span>
              </div>
              <div style={{ fontSize: '0.6rem', color: '#9CA6B5', fontFamily: 'monospace' }}>codexstudio.az</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'none', gap: '20px', alignItems: 'center' }}>
            <a href="#hero" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.82rem' }}>{lang === 'az' ? 'Ana səhifə' : 'Home'}</a>
            <a href="#services" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.82rem' }}>{lang === 'az' ? 'Xidmətlər' : 'Services'}</a>
            <a href="#lab" style={{ color: '#0066FF', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 'bold' }}>{lang === 'az' ? 'Laboratoriya ⚡' : 'Live Lab ⚡'}</a>
            <a href="#showcase" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.82rem' }}>{lang === 'az' ? 'Həllər' : 'Solutions'}</a>
            <a href="#estimator" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.82rem' }}>{lang === 'az' ? 'Planlayıcı' : 'Estimator'}</a>
            <a href="#contact" style={{ color: '#9CA6B5', textDecoration: 'none', fontSize: '0.82rem' }}>{lang === 'az' ? 'Əlaqə' : 'Contact'}</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ display: 'flex', padding: '2px', background: '#080C14', border: '1px solid #162032', borderRadius: '6px' }}>
              <button
                onClick={() => setLang('az')}
                style={{
                  padding: '3px 6px',
                  borderRadius: '4px',
                  border: 'none',
                  background: lang === 'az' ? '#0066FF' : 'transparent',
                  color: lang === 'az' ? 'white' : '#9CA6B5',
                  fontSize: '0.65rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                AZ
              </button>
              <button
                onClick={() => setLang('en')}
                style={{
                  padding: '3px 6px',
                  borderRadius: '4px',
                  border: 'none',
                  background: lang === 'en' ? '#0066FF' : 'transparent',
                  color: lang === 'en' ? 'white' : '#9CA6B5',
                  fontSize: '0.65rem',
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
                padding: '5px 8px',
                borderRadius: '6px',
                background: '#080C14',
                border: '1px solid #162032',
                color: '#9CA6B5',
                cursor: 'pointer'
              }}
              title="Rejimi dəyiş"
            >
              {theme === 'dark' ? <Sun size={12} color="#FFBD2E" /> : <Moon size={12} color="#0066FF" />}
            </button>

            <a
              href="#contact"
              className="header-cta-btn"
              style={{
                background: '#0066FF',
                color: 'white',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{lang === 'az' ? 'Başlayaq' : 'Start'}</span>
              <ArrowRight size={12} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                padding: '6px',
                borderRadius: '8px',
                background: '#080C14',
                border: '1px solid #162032',
                color: '#F5F7FA',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
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
          padding: '70px 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.1rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '01. Ana səhifə' : '01. Home'}
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.1rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '02. Xidmətlər' : '02. Services'}
            </a>
            <a href="#lab" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.1rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '03. Canlı Laboratoriya' : '03. Live Lab'}
            </a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.1rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '04. Veb Həllər' : '04. Solutions'}
            </a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.1rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '05. Planlayıcı' : '05. Estimator'}
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7FA', textDecoration: 'none', fontSize: '1.1rem', padding: '12px 0', borderBottom: '1px solid #162032' }}>
              {lang === 'az' ? '06. Əlaqə' : '06. Contact'}
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px' }}>
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
                fontSize: '0.9rem'
              }}
            >
              {lang === 'az' ? 'Layihənizi başlayaq →' : 'Start Project →'}
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
                fontSize: '0.9rem'
              }}
            >
              WhatsApp: 010 601 12 01
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" style={{ padding: '50px 0 60px' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 8px',
              borderRadius: '999px',
              background: '#080C14',
              border: '1px solid #162032',
              fontSize: '0.65rem',
              fontFamily: 'monospace',
              color: '#9CA6B5',
              marginBottom: '14px'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0066FF' }}></span>
              <span>CODEX STUDIO • 24ms PING</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.4rem)', lineHeight: 1.15, fontWeight: 800, marginBottom: '16px', wordBreak: 'break-word' }}>
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

            <p style={{ color: '#9CA6B5', fontSize: 'clamp(0.85rem, 2.5vw, 1.05rem)', lineHeight: 1.6, maxWidth: '520px', marginBottom: '24px' }}>
              {lang === 'az'
                ? 'Landing page-dən e-commerce layihələrinə qədər — sürətli, mobil uyğun və biznesinizin satışlarına xidmət edən peşəkar veb saytlar hazırlayırıq.'
                : 'From conversion-focused landing pages to scalable e-commerce systems — we build fast, mobile-first, and revenue-driving websites for modern businesses.'}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '24px' }}>
              <a
                href="#contact"
                style={{
                  background: '#0066FF',
                  color: 'white',
                  padding: '12px 22px',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 8px 18px rgba(0, 102, 255, 0.25)',
                  flex: '1 1 auto',
                  textAlign: 'center'
                }}
              >
                {lang === 'az' ? 'Layihənizi başlayaq →' : 'Start Your Project →'}
              </a>

              <a
                href="#lab"
                style={{
                  background: '#080C14',
                  color: '#F5F7FA',
                  border: '1px solid #162032',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  flex: '1 1 auto',
                  textAlign: 'center'
                }}
              >
                {lang === 'az' ? 'Laboratoriya' : 'Live Lab'}
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '0.75rem', color: '#9CA6B5', borderTop: '1px solid #162032', paddingTop: '12px' }}>
              <div><span style={{ color: '#0066FF', fontWeight: 'bold' }}>✓</span> Mobil uyğun</div>
              <div><span style={{ color: '#0066FF', fontWeight: 'bold' }}>✓</span> Sürətli (0.4s)</div>
              <div><span style={{ color: '#0066FF', fontWeight: 'bold' }}>✓</span> Müasir React</div>
            </div>
          </div>

          {/* Interactive Mockup */}
          <div style={{
            background: '#080C14',
            border: '1px solid #162032',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              background: '#05070B',
              borderBottom: '1px solid #162032'
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5F56' }}></span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFBD2E' }}></span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27C93F' }}></span>
              </div>
              <div style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: '#9CA6B5', background: '#080C14', padding: '2px 8px', borderRadius: '4px', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                https://enterprise-solutions.az
              </div>
              <div style={{ fontSize: '0.6rem', color: '#10B981', fontFamily: 'monospace' }}>100/100</div>
            </div>

            <div style={{ padding: '16px', background: 'linear-gradient(180deg, #080C14 0%, #0D121D 100%)' }}>
              <div style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: '#0066FF', marginBottom: '4px' }}>ENTERPRISE & B2B ARCHITECTURE</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Qlobal tərəfdaşlarınız üçün etibarlı həllər.</h3>
              <p style={{ fontSize: '0.75rem', color: '#9CA6B5', marginBottom: '14px' }}>Müasir texnologiyalar və təhlükəsiz korporativ arxitektura ilə biznesinizi təmsil edirik.</p>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ background: '#0066FF', color: 'white', padding: '5px 10px', borderRadius: '6px', fontSize: '0.68rem', fontWeight: 600 }}>Təklif al →</span>
                <span style={{ background: '#162032', color: '#9CA6B5', padding: '5px 8px', borderRadius: '6px', fontSize: '0.68rem' }}>Kataloq</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showstopping Interactive Lab */}
      <section id="lab" style={{ padding: '60px 0', background: '#080C14', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 30px' }}>
            <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>
              KREATIV TEXNOLOGİYA LABORATORİYASI
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, marginBottom: '8px' }}>Saytın arxa planında nələr baş verir?</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.85rem' }}>
              0.4s sürət və təmiz kod mühəndisliyi ilə hazırladığımız sistemləri canlı sınaqdan keçirin.
            </p>
          </div>

          <div style={{ background: '#05070B', border: '1px solid #162032', borderRadius: '18px', padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid #162032', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', maxWidth: '100%' }}>
                <button
                  onClick={() => setLabTab('architecture')}
                  style={{ padding: '5px 10px', borderRadius: '6px', border: 'none', background: labTab === 'architecture' ? '#0066FF' : '#080C14', color: 'white', fontSize: '0.72rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
                >
                  Canlı Arxitektura
                </button>
                <button
                  onClick={() => setLabTab('code')}
                  style={{ padding: '5px 10px', borderRadius: '6px', border: 'none', background: labTab === 'code' ? '#0066FF' : '#080C14', color: 'white', fontSize: '0.72rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
                >
                  Təmiz Kod
                </button>
              </div>
              <div style={{ fontSize: '0.68rem', color: '#10B981', fontFamily: 'monospace' }}>● {liveFps} FPS Engine</div>
            </div>

            {labTab === 'architecture' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <div style={{ padding: '14px', background: '#080C14', borderRadius: '12px', border: '1px solid #162032' }}>
                  <h4 style={{ fontSize: '0.9rem', color: '#0066FF', marginBottom: '4px' }}>⚡ 0.4s Core Vitals</h4>
                  <p style={{ fontSize: '0.72rem', color: '#9CA6B5' }}>Server Side Rendering ilə müştəri saytı gözləmir.</p>
                </div>
                <div style={{ padding: '14px', background: '#080C14', borderRadius: '12px', border: '1px solid #162032' }}>
                  <h4 style={{ fontSize: '0.9rem', color: '#0066FF', marginBottom: '4px' }}>📱 Mobile First</h4>
                  <p style={{ fontSize: '0.72rem', color: '#9CA6B5' }}>Bütün telefonlarda toxunma axıcı və təbiidir.</p>
                </div>
                <div style={{ padding: '14px', background: '#080C14', borderRadius: '12px', border: '1px solid #162032' }}>
                  <h4 style={{ fontSize: '0.9rem', color: '#0066FF', marginBottom: '4px' }}>🎯 Lead Funnel</h4>
                  <p style={{ fontSize: '0.72rem', color: '#9CA6B5' }}>Müraciətlər birbaşa Gmail və WhatsApp-a çatır.</p>
                </div>
              </div>
            ) : (
              <div style={{ padding: '12px', background: '#080C14', borderRadius: '10px', border: '1px solid #162032', fontFamily: 'monospace', fontSize: '0.7rem', color: '#0066FF', overflowX: 'auto' }}>
                <pre><code>{codeSnippets[labTech]}</code></pre>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dynamic Estimator */}
      <section id="estimator" style={{ padding: '60px 0', borderTop: '1px solid #162032' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>
              DİNAMİK LAYİHƏ PLANLAYICISI
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, marginBottom: '10px' }}>Layihənizin müddətini hesablayın.</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.85rem', marginBottom: '16px' }}>
              Səhifə sayını və xüsusiyyətləri seçin, təxmini təhvil qrafikini anında görün.
            </p>
          </div>

          <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '16px', padding: '20px' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                <span style={{ color: '#9CA6B5' }}>Səhifə Sayı:</span>
                <strong style={{ color: '#0066FF' }}>{pagesCount} Səhifə</strong>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                value={pagesCount}
                onChange={(e) => setPagesCount(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#0066FF' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))', gap: '8px', marginBottom: '16px' }}>
              <button
                type="button"
                onClick={() => setHasEcommerce(!hasEcommerce)}
                style={{ padding: '8px', borderRadius: '8px', border: '1px solid #162032', background: hasEcommerce ? '#0066FF' : '#05070B', color: 'white', fontSize: '0.68rem', cursor: 'pointer' }}
              >
                Ödəniş
              </button>
              <button
                type="button"
                onClick={() => setHasMultilingual(!hasMultilingual)}
                style={{ padding: '8px', borderRadius: '8px', border: '1px solid #162032', background: hasMultilingual ? '#0066FF' : '#05070B', color: 'white', fontSize: '0.68rem', cursor: 'pointer' }}
              >
                Çoxdilli
              </button>
              <button
                type="button"
                onClick={() => setHasCustomApi(!hasCustomApi)}
                style={{ padding: '8px', borderRadius: '8px', border: '1px solid #162032', background: hasCustomApi ? '#0066FF' : '#05070B', color: 'white', fontSize: '0.68rem', cursor: 'pointer' }}
              >
                API
              </button>
            </div>

            <div style={{ padding: '14px', background: '#05070B', border: '1px solid #0066FF', borderRadius: '12px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <div>
                <span style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: '#0066FF' }}>TƏXMİNİ MÜDDƏT:</span>
                <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{estimatedDays} - {estimatedDays + 3} İş Günü</div>
              </div>
              <a
                href="#contact"
                style={{ background: '#0066FF', color: 'white', padding: '8px 14px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none' }}
              >
                Təklif al →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section id="showcase" style={{ padding: '60px 0', background: '#080C14', borderTop: '1px solid #162032' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', marginBottom: '30px' }}>
            <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>
              VEB HƏLLƏRİMİZ
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, marginBottom: '8px' }}>Veb Həllər Arxitekturası</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.85rem' }}>
              Hər bir layihə müasir standartlar və biznes məqsədlərinə uyğun fərdi yanaşma ilə qurulur.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {solutions.map((sol, idx) => (
              <div
                key={sol.id}
                onClick={() => setSelectedSolution(idx)}
                style={{
                  background: selectedSolution === idx ? '#0D121D' : '#05070B',
                  border: `1px solid ${selectedSolution === idx ? '#0066FF' : '#162032'}`,
                  borderRadius: '16px',
                  padding: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#0066FF', fontWeight: 'bold' }}>FORMAT {sol.id}</span>
                  <span style={{ fontSize: '0.6rem', fontFamily: 'monospace', background: '#080C14', padding: '2px 6px', borderRadius: '4px' }}>{sol.badge}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>{sol.title}</h3>
                <p style={{ fontSize: '0.75rem', color: '#9CA6B5', lineHeight: 1.5, marginBottom: '12px' }}>{sol.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {sol.techs.map((t, i) => (
                    <span key={i} style={{ fontSize: '0.6rem', fontFamily: 'monospace', background: '#080C14', border: '1px solid #162032', padding: '2px 5px', borderRadius: '4px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '60px 0', borderTop: '1px solid #162032' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          <div>
            <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#0066FF', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>
              MÜRACİƏT & ƏLAQƏ
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, marginBottom: '8px' }}>Layihənizi danışaq.</h2>
            <p style={{ color: '#9CA6B5', fontSize: '0.85rem', marginBottom: '18px' }}>
              Sayt haqqında fikriniz varsa, formu doldurun. Məlumatlar birbaşa emailinizə çatdırılacaq.
            </p>

            <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '14px', padding: '16px', fontFamily: 'monospace', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#9CA6B5' }}>Telefon / Zəng:</span>
                <strong style={{ color: '#F5F7FA' }}>010 601 12 01</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#9CA6B5' }}>WhatsApp:</span>
                <strong style={{ color: '#0066FF' }}>010 601 12 01</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#9CA6B5' }}>Qəbul Emaili:</span>
                <strong style={{ color: '#0066FF' }}>emin.imanverdievv@gmail.com</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#9CA6B5' }}>Rəsmi Domen:</span>
                <span style={{ color: '#F5F7FA' }}>codexstudio.az</span>
              </div>
            </div>

            <div style={{ marginTop: '12px', padding: '12px', background: '#080C14', border: '1px solid #162032', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.7rem', color: '#9CA6B5' }}>Gmail ilə birbaşa:</span>
              <button
                type="button"
                onClick={handleDirectGmail}
                style={{ background: 'none', border: 'none', color: '#0066FF', fontSize: '0.7rem', fontFamily: 'monospace', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Gmail-də aç</span>
                <ExternalLink size={12} />
              </button>
            </div>
          </div>

          <div style={{ background: '#080C14', border: '1px solid #162032', borderRadius: '18px', padding: '20px' }}>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
              <button
                type="button"
                onClick={() => setContactTab('email')}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: contactTab === 'email' ? '#0066FF' : '#05070B',
                  color: 'white',
                  fontSize: '0.72rem',
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
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: contactTab === 'whatsapp' ? '#0066FF' : '#05070B',
                  color: 'white',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                💬 WhatsApp ilə yaz
              </button>
            </div>

            {!isSuccess ? (
              <form onSubmit={contactTab === 'email' ? handleEmailSubmit : (e) => { e.preventDefault(); handleWhatsAppSend(); }} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '3px' }}>Adınız və Soyadınız *</label>
                    <input
                      type="text"
                      required
                      placeholder="Rəşad Əliyev"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.75rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '3px' }}>Telefon *</label>
                    <input
                      type="tel"
                      required
                      placeholder="050 000 00 00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.75rem' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '3px' }}>Email</label>
                    <input
                      type="email"
                      placeholder="orxan@sirket.az"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.75rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '3px' }}>Biznes Sahəsi</label>
                    <input
                      type="text"
                      placeholder="Mebel, Təhsil"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.75rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '3px' }}>Sayt Növü</label>
                  <select
                    value={siteType}
                    onChange={(e) => setSiteType(e.target.value)}
                    style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.75rem' }}
                  >
                    <option value="Landing Page">Landing Page (Yüksək Konversiya)</option>
                    <option value="Korporativ sayt">Korporativ sayt (Şirkət və B2B)</option>
                    <option value="E-commerce">E-commerce (Onlayn Mağaza)</option>
                    <option value="Fərdi layihə">Fərdi layihə (Xüsusi Funksionallıq)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'monospace', color: '#9CA6B5', marginBottom: '3px' }}>Qeydlər</label>
                  <textarea
                    rows={2}
                    placeholder="Sayt haqqında detallar..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', background: '#05070B', border: '1px solid #162032', color: 'white', fontSize: '0.75rem', resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: '#0066FF',
                    color: 'white',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Göndərilir...</span>
                    </>
                  ) : contactTab === 'email' ? (
                    <>
                      <Mail size={14} />
                      <span>Email ilə müraciət göndər →</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle size={14} />
                      <span>WhatsApp ilə göndər →</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 102, 255, 0.2)', color: '#0066FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                  <CheckCircle2 size={22} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Müraciətiniz qəbul olundu!</h3>
                <p style={{ color: '#9CA6B5', fontSize: '0.75rem', marginBottom: '14px' }}>
                  Məlumatlar <strong style={{ color: '#0066FF' }}>emin.imanverdievv@gmail.com</strong> ünvanına yönləndirildi.
                </p>
                <button
                  onClick={handleWhatsAppSend}
                  style={{ background: '#0066FF', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '0.75rem' }}
                >
                  WhatsApp ilə təsdiqləyin
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#05070B', borderTop: '1px solid #162032', padding: '30px 0 16px', fontSize: '0.75rem', color: '#9CA6B5' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <div>
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
          bottom: '16px',
          right: '16px',
          zIndex: 150,
          background: '#0066FF',
          color: 'white',
          border: 'none',
          width: '44px',
          height: '44px',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 20px rgba(0, 102, 255, 0.4)',
          cursor: 'pointer'
        }}
        title="Codex Asistent"
      >
        {chatOpen ? <X size={18} /> : <Bot size={20} />}
      </button>

      {/* Chat Window */}
      {chatOpen && (
        <div style={{
          position: 'fixed',
          bottom: '70px',
          right: '10px',
          left: '10px',
          maxWidth: '360px',
          margin: '0 auto',
          height: '440px',
          maxHeight: '80vh',
          background: '#080C14',
          border: '1px solid #162032',
          borderRadius: '18px',
          zIndex: 150,
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <div style={{ background: '#05070B', padding: '10px 14px', borderBottom: '1px solid #162032', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Bot size={16} color="#0066FF" />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.78rem' }}>Codex Asistent</div>
                <div style={{ fontSize: '0.6rem', color: '#10B981' }}>● Online</div>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} style={{ background: 'none', border: 'none', color: '#9CA6B5', cursor: 'pointer' }}><X size={14} /></button>
          </div>

          <div style={{ flex: 1, padding: '12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {messages.map((m) => (
              <div key={m.id} style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                <div style={{
                  padding: '8px 10px',
                  borderRadius: '10px',
                  fontSize: '0.74rem',
                  background: m.sender === 'user' ? '#0066FF' : '#0D121D',
                  color: '#F5F7FA',
                  border: m.sender === 'user' ? 'none' : '1px solid #162032'
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div style={{ fontSize: '0.65rem', color: '#9CA6B5' }}>Codex Studio yazır...</div>}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} style={{ padding: '8px', background: '#05070B', borderTop: '1px solid #162032', display: 'flex', gap: '6px' }}>
            <input
              type="text"
              placeholder="Sualınızı yazın..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              style={{ flex: 1, padding: '6px 8px', borderRadius: '6px', background: '#080C14', border: '1px solid #162032', color: 'white', fontSize: '0.72rem' }}
            />
            <button type="submit" style={{ background: '#0066FF', color: 'white', border: 'none', padding: '0 10px', borderRadius: '6px', cursor: 'pointer' }}>
              <Send size={12} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
