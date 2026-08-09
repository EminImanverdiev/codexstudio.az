import React, { useState, useEffect, useRef } from 'react'
import {
  MessageCircle, Send, ArrowRight, Laptop, Globe, ShoppingBag,
  Zap, Smartphone, CheckCircle2, ChevronDown, X, Sun, Moon,
  Mail, ExternalLink, Loader2, ArrowUpRight, ShieldCheck, Menu,
  Code2, Palette, Headphones, Search, Phone, ChevronLeft, ChevronRight,
  MapPin, Check
} from 'lucide-react'

// Animated Interactive Tech Canvas
function TechCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 300)

    const handleResize = () => {
      if (!canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth
      height = canvas.height = canvas.parentElement.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    const nodeCount = Math.floor(width / 38)
    const nodes = []

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.25
            ctx.strokeStyle = `rgba(0, 102, 255, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        ctx.fillStyle = 'rgba(0, 102, 255, 0.6)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.65,
        zIndex: 0
      }}
    />
  )
}

// Security Robot Captcha
function RobotCaptcha({ isVerified, onVerify }) {
  const [loading, setLoading] = useState(false)

  const handleCheck = () => {
    if (isVerified || loading) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onVerify(true)
    }, 600)
  }

  return (
    <div
      onClick={handleCheck}
      style={{
        padding: '12px 16px',
        borderRadius: '12px',
        background: 'var(--bg-input)',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        userSelect: 'none',
        maxWidth: '320px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            border: isVerified ? '1px solid #10B981' : '1px solid var(--border-color)',
            background: isVerified ? '#10B981' : 'var(--bg-card)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          {loading ? (
            <Loader2 size={14} className="animate-spin" color="var(--accent-blue)" />
          ) : isVerified ? (
            <Check size={16} strokeWidth={3} />
          ) : null}
        </div>
        <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-main)' }}>
          {isVerified ? 'Mən robot deyiləm ✓' : 'Mən robot deyiləm'}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', opacity: 0.7 }}>
        <ShieldCheck size={18} color="var(--accent-blue)" />
        <span style={{ fontSize: '9px', fontFamily: 'monospace', color: 'var(--text-sub)', marginTop: '2px' }}>reCAPTCHA</span>
      </div>
    </div>
  )
}

const detailedServices = [
  {
    id: 'web-dev',
    slug: 'veb-saytlarin-hazirlanmasi',
    num: '01',
    title: 'Veb saytların hazırlanması',
    shortDesc: 'Biznesinizin fəaliyyətinə və ehtiyaclarına uyğun funksional veb saytların hazırlanması.',
    fullDesc: 'Müasir kodlaşdırma standartları, sürətli server arxitekturası, mobil və kompüter ekranlarına tam uyğunluq ilə istənilən mürəkkəblikdə saytların yığılması.',
    whatWeOffer: [
      'Mobile-first və adaptiv dizayn strukturu',
      'Sürətli və optimallaşdırılmış kod arxitekturası',
      'Domen və hosting quraşdırılması, SSL sertifikatı',
      'Axtarış sistemləri (Google) üçün texniki SEO uyğunluğu',
      'Təhlükəsizlik və məlumatların qorunması'
    ],
    whoNeeds: [
      'Yeni fəaliyyətə başlayan və ya mövcud biznesini yeniləmək istəyən şirkətlər',
      'Müştərilərinə 24/7 xidmət və məhsul təqdim etmək istəyən brendlər',
      'İnternetdə etibarlı və peşəkar imic formalaşdırmaq istəyən sahibkarlar'
    ],
    tags: ['Veb sayt', 'Sayt sifarişi', 'Responsive dizayn', 'Sürətli sayt'],
    icon: 'code'
  },
  {
    id: 'landing',
    slug: 'landing-page-hazirlanmasi',
    num: '02',
    title: 'Landing Page hazırlanması',
    shortDesc: 'Məhsul, xidmət və reklam kampaniyalarının təqdimatı üçün məqsədyönlü bir səhifəlik saytların hazırlanması.',
    fullDesc: 'Ziyarətçiləri birbaşa əlaqəyə, WhatsApp sifarişinə və ya zəngə yönləndirən, reklam büdcənizin səmərəliliyini artıran tək səhifəlik saytlar.',
    whatWeOffer: [
      'Satış yönümlü və güclü Call-to-Action (CTA) strukturu',
      'Birbaşa WhatsApp və zəng inteqrasiyası',
      'Sürətli müraciət forması və bildiriş sistemi',
      'Instagram, Google və TikTok reklamları üçün optimizasiya',
      'Mobil telefonlarda ani açılış sürəti'
    ],
    whoNeeds: [
      'Konkret bir xidmət və ya məhsulu reklam edənlər',
      'Təlim, kurs və ya konsaltinq təqdimatı edən mütəxəssislər',
      'Qısa zamanda yeni layihəni bazara çıxarmaq istəyənlər'
    ],
    tags: ['Landing page', 'Tək səhifəlik sayt', 'Satış saytı', 'WhatsApp sifariş'],
    icon: 'globe'
  },
  {
    id: 'corporate',
    slug: 'korporativ-saytlarin-hazirlanmasi',
    num: '03',
    title: 'Korporativ saytların hazırlanması',
    shortDesc: 'Şirkətiniz, xidmətləriniz və fəaliyyətiniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi korporativ saytların hazırlanması.',
    fullDesc: 'Şirkətinizin brendini və etibarını gücləndirən, xidmətlər kataloqu, komanda, tərəfdaşlar və çoxdilli (AZ/EN/RU) struktura malik rəsmi korporativ saytlar.',
    whatWeOffer: [
      'Çoxsəhifəli zərif korporativ naviqasiya',
      'Xidmətlər və fəaliyyət sahələri kataloqu',
      'Çoxdilli dəstək (Azərbaycan, İngilis, Rus)',
      'Şirkət tarixi, komanda və tərəfdaşlar bölməsi',
      'Rəsmi korporativ email və sorğu sistemi'
    ],
    whoNeeds: [
      'Holdinqlər, logistika, tibb və inşaat şirkətləri',
      'B2B və dövlət layihələri ilə çalışan qurumlar',
      'Beynəlxalq tərəfdaşlarla işləyən təşkilatlar'
    ],
    tags: ['Korporativ sayt', 'Şirkət saytı', 'B2B portal', 'Çoxdilli sayt'],
    icon: 'laptop'
  },
  {
    id: 'ecommerce',
    slug: 'e-commerce-saytlarin-hazirlanmasi',
    num: '04',
    title: 'E-commerce saytların hazırlanması',
    shortDesc: 'Məhsulların təqdimatı, sifariş və onlayn satış üçün e-commerce saytların hazırlanması.',
    fullDesc: 'Məhsul kataloqu, dəqiq axtarış və kateqoriya filtrləri, səbət sistemi və Azərbaycan banklarının kartları ilə təhlükəsiz onlayn ödəniş axını.',
    whatWeOffer: [
      'Məhsul kataloqu, çeşidlər, ölçülər və filtrlər',
      'Səbət və 1 addımlı rahat sifariş sistemi',
      'Azərbaycan bankları ilə kartla onlayn ödəniş (Kapital, Paşa və s.)',
      'Məhsulları və sifarişləri asanlıqla idarə etmək üçün Admin panel',
      'Müştəriyə və mağaza sahibinə avtomatik sifariş bildirişləri'
    ],
    whoNeeds: [
      'Geyim, mebel, elektronika və aksesuar mağazaları',
      'Fiziki mağazasını internetə daşımaq istəyənlər',
      'Öz brend məhsullarını onlayn satmaq istəyən istehsalçılar'
    ],
    tags: ['E-commerce', 'Onlayn mağaza', 'Kartla ödəniş', 'Səbət sistemi'],
    icon: 'shopping'
  },
  {
    id: 'uiux',
    slug: 'veb-dizayn-ui-ux',
    num: '05',
    title: 'Veb dizayn (UI/UX)',
    shortDesc: 'Saytın istifadəsini rahatlaşdıran, mobil cihazlara uyğun və müasir interfeys dizaynının hazırlanması.',
    fullDesc: 'Müştərilərin saytda axtardıqları məlumatı asanlıqla tapmasını təmin edən, oxunaqlı, zövqlü və konversiya yönümlü vizual interfeys arxitekturası.',
    whatWeOffer: [
      'İstifadəçi vərdişlərinə uyğun erqonomik UX tədqiqatı',
      'Müasir, estetik və korporativ UI vizual dizayn',
      'Bütün telefon və planşet ölçüləri üçün adaptiv maketlər',
      'Tipoqrafika, rəng balansı və mikro-interaksiyalar',
      'Figma prototipləri və dizayn sistemi'
    ],
    whoNeeds: [
      'Köhnəlmiş saytının görünüşünü yeniləmək istəyən bizneslər',
      'Müştərilərin saytda qalma müddətini artırmaq istəyənlər',
      'Brendini müasir və premium təqdim etmək istəyənlər'
    ],
    tags: ['UI/UX dizayn', 'Veb dizayn', 'Figma', 'Mobil interfeys'],
    icon: 'palette'
  },
  {
    id: 'support',
    slug: 'texniki-destek',
    num: '06',
    title: 'Texniki dəstək',
    shortDesc: 'Sayt istifadəyə verildikdən sonra texniki məsələlər, yenilənmələr və zəruri dəyişikliklər üzrə dəstək.',
    fullDesc: 'Saytın serverdə fasiləsiz işləməsi, təhlükəsizlik yenilənmələri, domen/SSL nəzarəti və biznesinizin tələbinə uyğun yeni məlumatların əlavə edilməsi.',
    whatWeOffer: [
      'Serverin və saytın fasiləsiz 24/7 işləməsinə nəzarət',
      'SSL təhlükəsizlik sertifikatının və domenin vaxtında yenilənməsi',
      'Mətn, şəkil və yeni xidmətlərin sayta əlavə edilməsi',
      'Ehtiyat nüsxələmə (Backup) və məlumatların bərpası',
      'Sürət və texniki xətaların aradan qaldırılması'
    ],
    whoNeeds: [
      'Saytının təhlükəsiz və fasiləsiz işləməsini istəyən bizneslər',
      'Daim yeni məlumatlar və xidmətlər yerləşdirən şirkətlər',
      'Daxili IT mütəxəssisi saxlamaq istəməyən sahibkarlar'
    ],
    tags: ['Texniki dəstək', 'Server nəzarəti', 'SSL təhlükəsizlik'],
    icon: 'headphones'
  },
  {
    id: 'seo',
    slug: 'seo-optimizasiyasi',
    num: '07',
    title: 'SEO optimizasiyası',
    shortDesc: 'Saytın axtarış sistemləri tərəfindən daha düzgün oxunması üçün texniki və struktur SEO optimizasiyası.',
    fullDesc: 'Google axtarış sisteminin saytınızın səhifələrini, başlıqlarını və mətnlərini düzgün indeksləməsi üçün texniki struktur, meta teqlər və sitemap tənzimləmələri.',
    whatWeOffer: [
      'Meta başlıqlar (Title), təsvirlər (Description) və H1-H6 hero iyerarxiyası',
      'XML Sitemap və Robots.txt konfiqurasiyası',
      'Şəkillərin sıxılması və ALT teqlərinin qeyd edilməsi',
      'Google Search Console və Analytics inteqrasiyası',
      'Saytın mobil uyğunluq və yüklənmə sürəti optimizasiyası'
    ],
    whoNeeds: [
      'Axtarış sistemlərində daha səliqəli və düzgün görünmək istəyən saytlar',
      'Yeni istifadəyə verilmiş və ya indekslənmə problemi olan layihələr',
      'Orqanik axtarışdan hədəf müştərilər cəlb etmək istəyənlər'
    ],
    tags: ['SEO xidməti', 'Google axtarış', 'Meta teqlər', 'Texniki SEO'],
    icon: 'search'
  }
]

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home')
  const [selectedServiceSlug, setSelectedServiceSlug] = useState('veb-saytlarin-hazirlanmasi')
  const [isPageLoading, setIsPageLoading] = useState(false)
  const [lang, setLang] = useState(() => localStorage.getItem('codex_lang') || 'az')
  const [theme, setTheme] = useState(() => localStorage.getItem('codex_theme') || 'dark')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [heroTab, setHeroTab] = useState('landing')
  const [currentSlide, setCurrentSlide] = useState(0)
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
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)
  const [captchaError, setCaptchaError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const heroSlides = [
    {
      badge: 'VEB SAYTLARIN HAZIRLANMASI',
      heading: 'Biznesiniz üçün peşəkar veb sayt hazırlayırıq.',
      desc: 'Landing Page, korporativ sayt və e-commerce layihələrinin dizaynı və hazırlanması.',
      btn1: 'Sayt sifarişi',
      btn2: 'İşlərimizə bax',
      targetRoute: 'contact'
    },
    {
      badge: 'KORPORATİV VƏ E-COMMERCE',
      heading: 'Siz sadəcə biznesinizi böyüdün, veb saytınızı bizə həvalə edin.',
      desc: 'Şirkətinizin fəaliyyətini, xidmətlərini və məhsullarını peşəkar şəkildə təqdim edən müasir həllər.',
      btn1: 'Təklif al',
      btn2: 'Xidmətlərimiz',
      targetRoute: 'services'
    },
    {
      badge: '100% MOBİL VƏ TEXNİKİ DƏSTƏK',
      heading: 'Saytınız internetdə brendinizin ən güclü vizit kartıdır.',
      desc: 'Aydın naviqasiya, SEO optimizasiyası və sayt təhvil verildikdən sonra daimi texniki dəstək.',
      btn1: 'WhatsApp ilə əlaqə',
      btn2: 'İşlərimizə bax',
      targetRoute: 'works'
    }
  ]

  // Auto rotate hero slides every 7.5 seconds (slower & calmer)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 7500)
    return () => clearInterval(timer)
  }, [heroSlides.length])

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
    localStorage.setItem('codex_theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('codex_lang', lang)
  }, [lang])

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
        type: 'E-commerce saytların hazırlanması',
        desc: 'Məhsulların təqdimatı, sifariş və onlayn satış üçün e-commerce saytların hazırlanması.'
      }
    }
    if (quizPurpose === 0) {
      return {
        type: 'Landing Page hazırlanması',
        desc: 'Məhsul, xidmət və reklam kampaniyalarının təqdimatı üçün məqsədyönlü bir səhifəlik saytların hazırlanması.'
      }
    }
    if (quizPurpose === 3 || quizFeatures.includes(4) || quizFeatures.includes(5)) {
      return {
        type: 'Fərdi veb layihələrin hazırlanması',
        desc: 'Biznesinizin unikal tələblərinə uyğun xüsusi kalkulyatorlar, rezervasiya modulları və fərdi idarəetmə sistemi.'
      }
    }
    return {
      type: 'Korporativ saytların hazırlanması',
      desc: 'Şirkətiniz, xidmətləriniz və fəaliyyətiniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi korporativ saytların hazırlanması.'
    }
  }

  const quizRec = getQuizRecommendation()

  const navigateTo = (route, serviceSlug = null) => {
    setIsPageLoading(true)
    setMobileMenuOpen(false)
    if (serviceSlug) {
      setSelectedServiceSlug(serviceSlug)
    }
    setTimeout(() => {
      setCurrentRoute(route)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setIsPageLoading(false)
    }, 280)
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    if (!isCaptchaVerified) {
      setCaptchaError(true)
      return
    }
    setCaptchaError(false)
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
          _subject: `[Codex Studio Sifariş] ${name} - ${siteType}`,
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

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'code': return <Code2 size={24} color="var(--accent-blue)" />
      case 'globe': return <Globe size={24} color="var(--accent-blue)" />
      case 'laptop': return <Laptop size={24} color="var(--accent-blue)" />
      case 'shopping': return <ShoppingBag size={24} color="var(--accent-blue)" />
      case 'palette': return <Palette size={24} color="var(--accent-blue)" />
      case 'headphones': return <Headphones size={24} color="var(--accent-blue)" />
      case 'search': return <Search size={24} color="var(--accent-blue)" />
      default: return <Code2 size={24} color="var(--accent-blue)" />
    }
  }

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

  const faqs = [
    { q: 'Saytın hazırlanması neçə gün çəkir?', a: 'Müddət layihənin növündən asılıdır: Tək səhifəlik Landing Page adətən bir neçə günə, korporativ saytlar və e-commerce layihələri isə orta hesabla 1-3 həftəyə tam hazır vəziyyətə gətirilir.' },
    { q: 'Qiymət necə müəyyən olunur?', a: 'Qiymət saytın növünə (Landing Page, Korporativ, E-commerce), səhifə sayına və tələb olunan funksionallığa (onlayn ödəniş, çoxdillilik və s.) görə şəffaf şəkildə hesablanır.' },
    { q: 'Domen və hosting qiymətə daxildirmi?', a: 'Bəli, istəyinizə uyğun olaraq .az və ya beynəlxalq domenlərin seçilməsi, sürətli serverin quraşdırılması və SSL təhlükəsizlik sertifikatının aktivləşdirilməsi tərəfimizdən təmin edilir.' },
    { q: 'Sayt mobil cihazlara uyğun olacaq?', a: 'Bəli, 100%. Hazırladığımız bütün saytlar mobil cihazlara uyğunlaşdırılır və smartfon, planşet və kompüter ekranlarında qüsursuz işləyir.' },
    { q: 'Sonradan saytda dəyişiklik etmək mümkündür?', a: 'Bəli. Saytın strukturu elə qurulur ki, gələcəkdə yeni səhifələr, məhsullar, xidmətlər və ya yeni funksiyalar asanlıqla əlavə oluna bilsin.' },
    { q: 'Onlayn ödəniş sistemi qoşmaq olar?', a: 'Bəli. E-commerce və sifariş saytlarınıza yerli bankların kartla ödəniş sistemlərini (Kapital Bank, Paşa Bank və s.) təhlükəsiz şəkildə inteqrasiya edirik.' },
    { q: 'Sayt hazır olduqdan sonra texniki dəstək verirsiniz?', a: 'Bəli. Sayt təhvil verildikdən sonra da serverin fasiləsiz işləməsi, domen və texniki suallarınız üzrə dəstəyimiz davam edir.' }
  ]

  const curSlide = heroSlides[currentSlide]
  const currentServiceDetail = detailedServices.find(s => s.slug === selectedServiceSlug) || detailedServices[0]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-page)', color: 'var(--text-main)', overflowX: 'hidden' }}>
      
      {/* Top Loading Progress & Spinner Indicator */}
      {isPageLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--accent-blue)',
          zIndex: 9999,
          boxShadow: '0 0 10px var(--accent-blue)',
          animation: 'marquee-scroll 0.5s ease infinite'
        }} />
      )}

      {/* Scroll Progress Line */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2px',
          backgroundColor: 'var(--accent-blue)',
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
        background: 'var(--bg-page)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        padding: '14px 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          
          {/* Logo */}
          <button
            onClick={() => navigateTo('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}
          >
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              boxShadow: '0 4px 12px var(--accent-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-card)'
            }}>
              <img src="/logo.png" alt="CodeX Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              <span>Code<span style={{ color: 'var(--accent-blue)' }}>X</span></span>
              <span style={{ color: 'var(--text-sub)', fontWeight: 500, fontSize: '1.15rem' }}>Studio</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <button
              onClick={() => navigateTo('home')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'home' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'home' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Ana səhifə
            </button>
            <button
              onClick={() => navigateTo('services')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'services' || currentRoute === 'service-detail' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'services' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Xidmətlər
            </button>
            <button
              onClick={() => navigateTo('works')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'works' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'works' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              İşlərimiz
            </button>
            <button
              onClick={() => navigateTo('about')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'about' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'about' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Haqqımızda
            </button>
            <button
              onClick={() => navigateTo('faq')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'faq' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'faq' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Tez-tez verilən suallar
            </button>
            <button
              onClick={() => navigateTo('contact')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'contact' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'contact' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Bizimlə əlaqə
            </button>
          </nav>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', padding: '3px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <button
                onClick={() => setLang('az')}
                style={{ padding: '4px 8px', borderRadius: '5px', border: 'none', background: lang === 'az' ? 'var(--accent-blue)' : 'transparent', color: lang === 'az' ? 'white' : 'var(--text-sub)', fontSize: '0.72rem', fontWeight: 'bold', cursor: 'pointer' }}
              >
                AZ
              </button>
              <button
                onClick={() => setLang('en')}
                style={{ padding: '4px 8px', borderRadius: '5px', border: 'none', background: lang === 'en' ? 'var(--accent-blue)' : 'transparent', color: lang === 'en' ? 'white' : 'var(--text-sub)', fontSize: '0.72rem', fontWeight: 'bold', cursor: 'pointer' }}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleTheme}
              style={{ padding: '7px 10px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-sub)', cursor: 'pointer' }}
              title="Rejimi dəyiş"
            >
              {theme === 'dark' ? <Sun size={14} color="#FFBD2E" /> : <Moon size={14} color="var(--accent-blue)" />}
            </button>

            <button
              onClick={() => navigateTo('contact')}
              style={{
                background: 'var(--accent-blue)',
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
                boxShadow: '0 4px 14px var(--accent-glow)',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Təklif al</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{ padding: '7px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-main)', cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }}
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
          background: 'var(--bg-page)',
          backdropFilter: 'blur(20px)',
          padding: '80px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button onClick={() => navigateTo('home')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>01. Ana səhifə</button>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>02. Xidmətlər</button>
            <button onClick={() => navigateTo('works')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>03. İşlərimiz</button>
            <button onClick={() => navigateTo('about')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>04. Haqqımızda</button>
            <button onClick={() => navigateTo('faq')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>05. Tez-tez verilən suallar</button>
            <button onClick={() => navigateTo('contact')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>06. Bizimlə əlaqə</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '24px' }}>
            <button
              onClick={() => navigateTo('contact')}
              style={{ background: 'var(--accent-blue)', color: 'white', padding: '14px', borderRadius: '12px', textAlign: 'center', fontWeight: 600, border: 'none', fontSize: '0.95rem', cursor: 'pointer' }}
            >
              Sayt sifarişi verin →
            </button>
            <a
              href="https://wa.me/994106011201"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '14px', borderRadius: '12px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}
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
          {/* Hero Section with Calmer Auto-Slider & Tech Canvas */}
          <section id="hero" style={{ position: 'relative', padding: '60px 0 70px', overflow: 'hidden', backgroundColor: 'var(--bg-page)' }}>
            <TechCanvas />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div className="hero-grid">
                
                {/* Left: Dynamic Carousel Slide */}
                <div style={{ minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.72rem',
                    fontFamily: 'monospace',
                    color: 'var(--text-sub)',
                    marginBottom: '16px',
                    width: 'fit-content'
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)', boxShadow: '0 0 8px var(--accent-blue)' }}></span>
                    <span>{curSlide.badge}</span>
                  </div>

                  <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', lineHeight: 1.14, fontWeight: 800, marginBottom: '18px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
                    {curSlide.heading}
                  </h1>

                  <p style={{ color: 'var(--text-sub)', fontSize: 'clamp(0.92rem, 2vw, 1.1rem)', lineHeight: 1.6, maxWidth: '540px', marginBottom: '28px' }}>
                    {curSlide.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
                    <button
                      onClick={() => navigateTo('contact')}
                      style={{
                        background: 'var(--accent-blue)',
                        color: 'white',
                        padding: '14px 28px',
                        borderRadius: '12px',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 8px 24px var(--accent-glow)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>{curSlide.btn1}</span>
                      <ArrowRight size={15} />
                    </button>

                    <button
                      onClick={() => navigateTo(curSlide.targetRoute)}
                      style={{
                        background: 'var(--bg-card)',
                        color: 'var(--text-main)',
                        border: '1px solid var(--border-color)',
                        padding: '14px 24px',
                        borderRadius: '12px',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      <span>{curSlide.btn2}</span>
                    </button>
                  </div>

                  {/* Carousel Indicators & Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {heroSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          style={{
                            height: '8px',
                            width: currentSlide === idx ? '32px' : '8px',
                            borderRadius: '4px',
                            background: currentSlide === idx ? 'var(--accent-blue)' : 'var(--border-color)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                        style={{ padding: '6px', borderRadius: '6px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-sub)', cursor: 'pointer' }}
                        aria-label="Previous slide"
                      >
                        <ChevronLeft size={14} />
                      </button>
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                        style={{ padding: '6px', borderRadius: '6px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-sub)', cursor: 'pointer' }}
                        aria-label="Next slide"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Right: Mockup */}
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', gap: '6px', padding: '4px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px' }}>
                      <button
                        onClick={() => setHeroTab('landing')}
                        style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'landing' ? 'var(--accent-blue)' : 'transparent', color: heroTab === 'landing' ? 'white' : 'var(--text-sub)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        Landing Page
                      </button>
                      <button
                        onClick={() => setHeroTab('corporate')}
                        style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'corporate' ? 'var(--accent-blue)' : 'transparent', color: heroTab === 'corporate' ? 'white' : 'var(--text-sub)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        Korporativ sayt
                      </button>
                      <button
                        onClick={() => setHeroTab('ecommerce')}
                        style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'ecommerce' ? 'var(--accent-blue)' : 'transparent', color: heroTab === 'ecommerce' ? 'white' : 'var(--text-sub)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        E-commerce sayt
                      </button>
                    </div>

                    <div style={{ fontSize: '0.72rem', color: '#10B981', fontFamily: 'monospace', padding: '4px 10px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                      ✓ Canlı önizləmə
                    </div>
                  </div>

                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }}></span>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }}></span>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }}></span>
                      </div>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', background: 'var(--bg-card)', padding: '3px 12px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                        <span style={{ color: 'var(--accent-blue)' }}>https://</span>
                        <span>
                          {heroTab === 'landing' && 'leylagasimova.az'}
                          {heroTab === 'corporate' && 'sinapsmed.com'}
                          {heroTab === 'ecommerce' && 'aurahome.az'}
                        </span>
                      </div>
                      <div style={{ width: '20px' }}></div>
                    </div>

                    <div style={{ padding: '24px', background: 'var(--bg-card)', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      {heroTab === 'landing' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--accent-blue)', marginBottom: '6px' }}>LANDING PAGE</div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Leyla Qasımova — Fizika Mərkəzi</h3>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '18px' }}>
                            Məhsul, xidmət və kursların təqdimatı üçün məqsədyönlü bir səhifəlik sayt.
                          </p>
                          <a href="https://leylagasimova.az" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--accent-blue)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>Sayta bax →</a>
                        </div>
                      )}

                      {heroTab === 'corporate' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--accent-blue)', marginBottom: '6px' }}>CORPORATE PORTAL</div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Sinaps Med — Tibbi Avadanlıq & Səhiyyə</h3>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '18px' }}>
                            Şirkətiniz və xidmətləriniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi rəsmi sayt.
                          </p>
                          <a href="https://sinapsmed.com" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--accent-blue)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>Sayta bax →</a>
                        </div>
                      )}

                      {heroTab === 'ecommerce' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--accent-blue)', marginBottom: '6px' }}>E-COMMERCE STORE</div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Aura Home & Living</h3>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '18px' }}>
                            Məhsulların təqdimatı, səbət və onlayn ödəniş sistemi ilə təchiz olunmuş onlayn mağaza.
                          </p>
                          <button onClick={() => navigateTo('contact')} style={{ background: 'var(--accent-blue)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Təklif al →</button>
                        </div>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '12px', marginTop: '16px', fontSize: '0.72rem', color: 'var(--text-sub)' }}>
                        <span>✓ 100% Mobil və Planşet Uyğun</span>
                        <span style={{ color: 'var(--accent-blue)' }}>Codex Studio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Strip */}
          <section style={{ padding: '24px 0', background: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                <div><span style={{ color: 'var(--accent-blue)' }}>•</span> Veb saytların hazırlanması</div>
                <div><span style={{ color: 'var(--accent-blue)' }}>•</span> Landing Page</div>
                <div><span style={{ color: 'var(--accent-blue)' }}>•</span> Korporativ saytlar</div>
                <div><span style={{ color: 'var(--accent-blue)' }}>•</span> E-commerce</div>
                <div><span style={{ color: 'var(--accent-blue)' }}>•</span> Texniki dəstək</div>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-sub)' }}>Kiçik və böyük bizneslər üçün veb xidmətlər.</div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" style={{ padding: '80px 0', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
              <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                  XİDMƏTLƏRİMİZ
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Xidmətlərimiz</h2>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem' }}>Biznesinizin ehtiyacına uyğun veb saytların dizaynı və hazırlanması.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {detailedServices.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => navigateTo('service-detail', s.slug)}
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', padding: '26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {renderIcon(s.icon)}
                        </div>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-sub)' }}>{s.num}</span>
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>{s.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '20px' }}>{s.shortDesc}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-blue)', fontSize: '0.82rem', fontWeight: 700 }}>
                      <span>Daha ətraflı</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Finder Quiz */}
          <section id="finder" style={{ padding: '80px 0', background: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
              <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                  SEÇİM KÖMƏKÇİSİ
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Hansı sayt sizə uyğundur?</h2>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem' }}>2 sadə suala cavab verin, biznesiniz üçün ən optimal formatı anında müəyyən edək.</p>
              </div>

              <div style={{ background: 'var(--bg-page)', border: '1px solid var(--border-color)', borderRadius: '22px', padding: '28px', maxWidth: '840px', margin: '0 auto' }}>
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
                          border: `1px solid ${quizPurpose === idx ? 'var(--accent-blue)' : 'var(--border-color)'}`,
                          background: quizPurpose === idx ? 'var(--accent-blue)' : 'var(--bg-card)',
                          color: quizPurpose === idx ? 'white' : 'var(--text-sub)',
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
                          border: `1px solid ${quizFeatures.includes(idx) ? 'var(--accent-blue)' : 'var(--border-color)'}`,
                          background: quizFeatures.includes(idx) ? 'var(--bg-surface)' : 'var(--bg-card)',
                          color: quizFeatures.includes(idx) ? 'var(--text-main)' : 'var(--text-sub)',
                          fontSize: '0.78rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <span>{f}</span>
                        {quizFeatures.includes(idx) && <CheckCircle2 size={14} color="var(--accent-blue)" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ padding: '20px', background: 'var(--bg-card)', border: '1px solid var(--accent-blue)', borderRadius: '16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <div>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--accent-blue)' }}>TÖVSİYƏ OLUNAN FORMAT:</span>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '4px 0' }}>Biznesiniz üçün <span style={{ color: 'var(--accent-blue)' }}>{quizRec.type}</span> formatı daha uyğundur.</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-sub)', maxWidth: '480px' }}>{quizRec.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSiteType(quizRec.type)
                      navigateTo('contact')
                    }}
                    style={{ background: 'var(--accent-blue)', color: 'white', padding: '12px 20px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                  >
                    Təklif al →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" style={{ padding: '80px 0', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
              <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                  İŞ PROSESİ
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>Saytın hazırlanması prosesi</h2>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem' }}>Layihənizin vaxtında və keyfiyyətlə təhvil verilməsi üçün mərhələli iş planı.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '14px' }}>
                {[
                  { num: '01', title: 'Tələblərin müəyyən edilməsi', desc: 'Layihənin məqsədi, saytın strukturu və tələb olunan funksiyalar müəyyən edilir.' },
                  { num: '02', title: 'Dizayn', desc: 'Saytın vizual görünüşü və istifadəçi interfeysi hazırlanır.' },
                  { num: '03', title: 'Proqramlaşdırma', desc: 'Təsdiqlənmiş dizayn əsasında saytın hazırlanmasına başlanılır.' },
                  { num: '04', title: 'Test', desc: 'Sayt müxtəlif ekran ölçülərində və cihazlarda yoxlanılır.' },
                  { num: '05', title: 'Təhvil', desc: 'Yekun yoxlamadan sonra sayt istifadəyə verilir.' },
                ].map((st) => (
                  <div key={st.num} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '16px' }}>
                    <span style={{ fontSize: '1rem', fontFamily: 'monospace', color: 'var(--accent-blue)', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>{st.num}</span>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>{st.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-sub)', lineHeight: 1.5 }}>{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section style={{ padding: '60px 0', background: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
              <div style={{ background: 'var(--bg-page)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>SAYT SİFARİŞİ</span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>Veb sayt sifariş etmək istəyirsiniz?</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>Layihəniz haqqında qısa məlumat göndərin. Ehtiyacınıza uyğun həlli birlikdə müəyyən edək.</p>
                </div>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => navigateTo('contact')}
                    style={{ background: 'var(--accent-blue)', color: 'white', padding: '14px 28px', borderRadius: '12px', fontSize: '0.92rem', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 6px 20px var(--accent-glow)' }}
                  >
                    <span>Təklif al</span>
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href={`https://wa.me/994106011201?text=${encodeURIComponent('Salam. Biznesim üçün sayt hazırlatmaq istəyirəm. Ətraflı məlumat ala bilərəm?')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-sub)', fontSize: '0.82rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <MessageCircle size={14} color="var(--accent-blue)" />
                    <span>WhatsApp ilə əlaqə: 010 601 12 01</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ======================================================== */}
      {/* PAGE: XİDMƏTLƏR (List View) */}
      {/* ======================================================== */}
      {currentRoute === 'services' && (
        <>
          <div style={{ position: 'relative', padding: '70px 0 50px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '6px', fontSize: '0.78rem', color: 'var(--text-sub)', marginBottom: '12px', fontFamily: 'monospace' }}>
                <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>Ana səhifə</span>
                <span style={{ color: 'var(--accent-blue)' }}>»</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Xidmətlər</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                XİDMƏTLƏRİMİZ
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>Xidmətlərimiz</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '680px' }}>Biznesinizin ehtiyacına uyğun veb saytların dizaynı və hazırlanması.</p>
            </div>
          </div>

          <section style={{ padding: '60px 0 80px' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {detailedServices.map((s) => (
                  <div key={s.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {renderIcon(s.icon)}
                        </div>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--accent-blue)', fontWeight: 'bold' }}>{s.num}</span>
                      </div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '10px' }}>{s.title}</h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '24px' }}>{s.shortDesc}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => navigateTo('service-detail', s.slug)}
                        style={{ flex: 1, background: 'var(--bg-surface)', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '12px', borderRadius: '10px', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                      >
                        <span>Daha ətraflı</span>
                        <ArrowRight size={14} color="var(--accent-blue)" />
                      </button>
                      <button
                        onClick={() => {
                          setSiteType(s.title)
                          navigateTo('contact')
                        }}
                        style={{ background: 'var(--accent-blue)', color: 'white', padding: '12px 18px', borderRadius: '10px', border: 'none', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
                      >
                        Təklif al
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ======================================================== */}
      {/* PAGE: SERVICE DETAIL (ERAsoft style dedicated page) */}
      {/* ======================================================== */}
      {currentRoute === 'service-detail' && (
        <>
          <div style={{ position: 'relative', padding: '70px 0 50px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '6px', fontSize: '0.78rem', color: 'var(--text-sub)', marginBottom: '12px', fontFamily: 'monospace' }}>
                <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>Ana səhifə</span>
                <span style={{ color: 'var(--accent-blue)' }}>»</span>
                <span onClick={() => navigateTo('services')} style={{ cursor: 'pointer' }}>Xidmətlər</span>
                <span style={{ color: 'var(--accent-blue)' }}>»</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{currentServiceDetail.title}</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                XİDMƏTLƏRİMİZ
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>{currentServiceDetail.title}</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '680px' }}>{currentServiceDetail.shortDesc}</p>
            </div>
          </div>

          <section style={{ padding: '60px 0 80px' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'start' }}>
                
                {/* Main Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '32px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>{currentServiceDetail.title} haqqında</h2>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: 1.7 }}>{currentServiceDetail.fullDesc}</p>
                  </div>

                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '32px' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={20} color="var(--accent-blue)" />
                      <span>Xidmət nələri əhatə edir?</span>
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {currentServiceDetail.whatWeOffer.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '32px' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Zap size={20} color="var(--accent-blue)" />
                      <span>Bu xidmət kimlər üçün uyğundur?</span>
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {currentServiceDetail.whoNeeds.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-sub)' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
                          <span style={{ color: 'var(--text-main)' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--accent-blue)', borderRadius: '20px', padding: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px' }}>Bu xidmət üzrə təklif almaq istəyirsiniz?</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>Bizə yazın, layihənizi birlikdə müzakirə edək.</p>
                    </div>
                    <button
                      onClick={() => {
                        setSiteType(currentServiceDetail.title)
                        navigateTo('contact')
                      }}
                      style={{ background: 'var(--accent-blue)', color: 'white', padding: '14px 26px', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>Təklif al</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '100px' }}>
                  
                  {/* Other Services */}
                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '24px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '14px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                      Bütün Xidmətlər
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {detailedServices.map((srv) => (
                        <button
                          key={srv.id}
                          onClick={() => navigateTo('service-detail', srv.slug)}
                          style={{
                            padding: '10px 14px',
                            borderRadius: '10px',
                            background: srv.slug === selectedServiceSlug ? 'var(--bg-surface)' : 'transparent',
                            border: `1px solid ${srv.slug === selectedServiceSlug ? 'var(--accent-blue)' : 'transparent'}`,
                            color: srv.slug === selectedServiceSlug ? 'var(--text-main)' : 'var(--text-sub)',
                            fontWeight: srv.slug === selectedServiceSlug ? 700 : 500,
                            textAlign: 'left',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            fontSize: '0.84rem'
                          }}
                        >
                          <span>{srv.title}</span>
                          <ChevronRight size={14} color="var(--accent-blue)" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '24px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '14px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                      Açar sözlər
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {currentServiceDetail.tags.map((tg, idx) => (
                        <span key={idx} style={{ fontSize: '0.75rem', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', padding: '4px 10px', borderRadius: '8px', color: 'var(--text-sub)' }}>
                          #{tg}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Card */}
                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--accent-blue)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)' }}>
                      <ShieldCheck size={14} />
                      <span>SÜRƏTLİ ƏLAQƏ</span>
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Biznesinizi bizimlə inkişaf etdirin</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>Sayt sifarişi və suallarınız üçün bizimlə birbaşa əlaqə saxlayın.</p>
                    
                    <a href="tel:0106011201" style={{ padding: '10px', borderRadius: '10px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', color: 'var(--text-main)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                      <Phone size={14} color="var(--accent-blue)" />
                      <span>010 601 12 01</span>
                    </a>

                    <a href="https://wa.me/994106011201" target="_blank" rel="noopener noreferrer" style={{ padding: '10px', borderRadius: '10px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', color: 'var(--accent-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                      <MessageCircle size={14} />
                      <span>WhatsApp ilə yazın</span>
                    </a>

                    <button
                      onClick={() => {
                        setSiteType(currentServiceDetail.title)
                        navigateTo('contact')
                      }}
                      style={{ background: 'var(--accent-blue)', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
                    >
                      Təklif al
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </section>
        </>
      )}

      {/* ======================================================== */}
      {/* PAGE: İŞLƏRİMİZ */}
      {/* ======================================================== */}
      {currentRoute === 'works' && (
        <>
          <div style={{ position: 'relative', padding: '70px 0 50px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '6px', fontSize: '0.78rem', color: 'var(--text-sub)', marginBottom: '12px', fontFamily: 'monospace' }}>
                <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>Ana səhifə</span>
                <span style={{ color: 'var(--accent-blue)' }}>»</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>İşlərimiz</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                İŞLƏRİMİZ
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>İşlərimiz</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '680px' }}>Müxtəlif fəaliyyət sahələrində olan şirkətlər və şəxslər üçün hazırladığımız veb layihələr.</p>
            </div>
          </div>

          <section style={{ padding: '60px 0 80px' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {works.map((w) => (
                  <div key={w.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)' }}>{w.type}</span>
                        <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#10B981', background: 'var(--bg-page)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>{w.displayUrl}</span>
                      </div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px' }}>{w.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '18px' }}>{w.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                        {w.tags.map((tg, idx) => (
                          <span key={idx} style={{ fontSize: '0.72rem', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', padding: '3px 8px', borderRadius: '6px' }}>
                            ✓ {tg}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <a href={w.url} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--accent-blue)', color: 'white', padding: '10px 16px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <span>Sayta bax</span>
                        <ExternalLink size={14} />
                      </a>
                      <button
                        onClick={() => {
                          setSiteType(`${w.name} (${w.type})`)
                          navigateTo('contact')
                        }}
                        style={{ background: 'var(--bg-page)', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '10px 16px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        Bənzər sayt sifariş et
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ======================================================== */}
      {/* PAGE: HAQQIMIZDA */}
      {/* ======================================================== */}
      {currentRoute === 'about' && (
        <>
          <div style={{ position: 'relative', padding: '70px 0 50px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '6px', fontSize: '0.78rem', color: 'var(--text-sub)', marginBottom: '12px', fontFamily: 'monospace' }}>
                <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>Ana səhifə</span>
                <span style={{ color: 'var(--accent-blue)' }}>»</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Haqqımızda</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                HAQQIMIZDA
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>Haqqımızda</h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.6, maxWidth: '680px' }}>
                Codex Studio bizneslər üçün veb saytların dizaynı və hazırlanması üzrə ixtisaslaşmış komandadır. Məqsədimiz şirkətinizin fəaliyyətini internetdə düzgün, peşəkar və etibarlı şəkildə təqdim edən veb saytlar hazırlamaqdır.
              </p>
            </div>
          </div>

          <section style={{ padding: '60px 0 80px' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '40px' }}>
                {[
                  { title: 'Sadə və anlaşılan ünsiyyət', desc: 'Texniki çətinliklər yaratmadan, layihəniz üçün nəyin lazım olduğunu aydın şəkildə müzakirə edirik.' },
                  { title: 'Dəqiq iş qrafiki', desc: 'Hər bir mərhələ razılaşdırılmış vaxt çərçivəsində və planlı şəkildə icra olunur.' },
                  { title: 'Daimi texniki dəstək', desc: 'Sayt təhvil verildikdən sonra da server, domen və texniki məsələlərdə dəstəyimizi davam etdiririk.' }
                ].map((val, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '24px', borderRadius: '16px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>{val.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>{val.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--accent-blue)', borderRadius: '20px', padding: '28px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px' }}>Veb sayt sifariş etmək istəyirsiniz?</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>Layihəniz haqqında qısa məlumat göndərin. Ehtiyacınıza uyğun həlli birlikdə müəyyən edək.</p>
                </div>
                <button
                  onClick={() => navigateTo('contact')}
                  style={{ background: 'var(--accent-blue)', color: 'white', padding: '12px 24px', borderRadius: '10px', fontSize: '0.88rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                >
                  Təklif al →
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ======================================================== */}
      {/* PAGE: FAQ */}
      {/* ======================================================== */}
      {currentRoute === 'faq' && (
        <>
          <div style={{ position: 'relative', padding: '70px 0 50px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '6px', fontSize: '0.78rem', color: 'var(--text-sub)', marginBottom: '12px', fontFamily: 'monospace' }}>
                <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>Ana səhifə</span>
                <span style={{ color: 'var(--accent-blue)' }}>»</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Tez-tez verilən suallar</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                SUAL-CAVAB
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>Tez-tez verilən suallar</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '680px' }}>Veb saytların hazırlanması və əməkdaşlıq prosesi ilə bağlı sualların cavabları.</p>
            </div>
          </div>

          <section style={{ padding: '60px 0 80px' }}>
            <div className="container">
              <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {faqs.map((f, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden' }}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      style={{ width: '100%', padding: '18px 20px', textAlign: 'left', background: 'none', border: 'none', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                    >
                      <span>{f.q}</span>
                      <ChevronDown size={16} color="var(--accent-blue)" style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>
                    {openFaq === idx && (
                      <div style={{ padding: '0 20px 18px', fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ======================================================== */}
      {/* PAGE: CONTACT */}
      {/* ======================================================== */}
      {currentRoute === 'contact' && (
        <>
          <div style={{ position: 'relative', padding: '70px 0 50px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '6px', fontSize: '0.78rem', color: 'var(--text-sub)', marginBottom: '12px', fontFamily: 'monospace' }}>
                <span onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>Ana səhifə</span>
                <span style={{ color: 'var(--accent-blue)' }}>»</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Bizimlə əlaqə</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                BİZİMLƏ ƏLAQƏ
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>Bizimlə əlaqə</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', maxWidth: '680px', lineHeight: 1.6 }}>
                Layihəniz haqqında qısa məlumat göndərin. Ehtiyacınıza uyğun həlli birlikdə müəyyən edək.
              </p>
            </div>
          </div>

          <section style={{ padding: '60px 0 80px' }}>
            <div className="container">
              <div className="contact-grid" style={{ marginBottom: '40px' }}>
                <div>
                  <a
                    href={`https://wa.me/994106011201?text=${encodeURIComponent('Salam. Biznesim üçün sayt hazırlatmaq istəyirəm. Ətraflı məlumat ala bilərəm?')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'var(--accent-blue)', color: 'white', padding: '14px 24px', borderRadius: '12px', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', boxShadow: '0 6px 20px var(--accent-glow)' }}
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp ilə əlaqə</span>
                  </a>

                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '20px', fontFamily: 'monospace', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)' }}>
                      <span style={{ color: 'var(--text-sub)' }}>Telefon / Zəng:</span>
                      <a href="tel:0106011201" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 'bold' }}>010 601 12 01</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)' }}>
                      <span style={{ color: 'var(--text-sub)' }}>WhatsApp:</span>
                      <a href="https://wa.me/994106011201" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 'bold' }}>010 601 12 01</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)' }}>
                      <span style={{ color: 'var(--text-sub)' }}>Qəbul Emaili:</span>
                      <a href="mailto:emin.imanverdievv@gmail.com" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 'bold' }}>emin.imanverdievv@gmail.com</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-sub)' }}>Rəsmi Ünvan:</span>
                      <span style={{ color: 'var(--text-main)' }}>Bakı, Azərbaycan</span>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '22px', padding: '28px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px' }}>Sayt sifarişi üçün müraciət edin</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginBottom: '20px' }}>Məlumatlarınızı qeyd edin, ən qısa zamanda sizinlə əlaqə saxlayaq.</p>

                  {!isSuccess ? (
                    <form onSubmit={handleEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <div className="grid-two-col">
                        <div>
                          <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', marginBottom: '4px' }}>Adınız və Soyadınız *</label>
                          <input
                            type="text"
                            required
                            placeholder="Rəşad Əliyev"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.85rem' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', marginBottom: '4px' }}>Telefon / WhatsApp *</label>
                          <input
                            type="tel"
                            required
                            placeholder="050 000 00 00"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.85rem' }}
                          />
                        </div>
                      </div>

                      <div className="grid-two-col">
                        <div>
                          <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', marginBottom: '4px' }}>Biznes sahəsi</label>
                          <input
                            type="text"
                            placeholder="Məsələn: Tibb, Təhsil, Mebel"
                            value={business}
                            onChange={(e) => setBusiness(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.85rem' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', marginBottom: '4px' }}>Sayt növü</label>
                          <select
                            value={siteType}
                            onChange={(e) => setSiteType(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.85rem' }}
                          >
                            {detailedServices.map((srv) => (
                              <option key={srv.id} value={srv.title}>{srv.title}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', marginBottom: '4px' }}>Sayt haqqında qısa məlumat / İstəkləriniz</label>
                        <textarea
                          rows={3}
                          placeholder="Saytınızda olmasını istədiyiniz əsas məqamlar..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.85rem', resize: 'none' }}
                        />
                      </div>

                      {/* Robot Captcha */}
                      <div>
                        <RobotCaptcha
                          isVerified={isCaptchaVerified}
                          onVerify={(val) => {
                            setIsCaptchaVerified(val)
                            if (val) setCaptchaError(false)
                          }}
                        />
                        {captchaError && (
                          <p style={{ color: '#FF5F56', fontSize: '0.75rem', marginTop: '6px' }}>
                            Zəhmət olmasa "Mən robot deyiləm" xanasını təsdiqləyin.
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          background: 'var(--accent-blue)',
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
                          boxShadow: '0 6px 20px var(--accent-glow)'
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
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-glow)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                        <CheckCircle2 size={28} />
                      </div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '6px' }}>Müraciətiniz qəbul olundu!</h3>
                      <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem', marginBottom: '18px' }}>
                        Məlumatlar <strong style={{ color: 'var(--accent-blue)' }}>emin.imanverdievv@gmail.com</strong> poçtuna çatdırıldı.
                      </p>
                      <button
                        onClick={handleWhatsAppSend}
                        style={{ background: 'var(--accent-blue)', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}
                      >
                        WhatsApp ilə təsdiqləyin
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Embedded Google Map */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                <div style={{ padding: '16px 20px', background: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    <MapPin size={16} color="var(--accent-blue)" />
                    <span>Xəritədə yerləşməmiz: Bakı, Azərbaycan</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-sub)' }}>010 601 12 01</span>
                </div>
                <div style={{ width: '100%', height: '340px' }}>
                  <iframe
                    title="Google Maps Baku Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.42999496733!2d49.69014902143493!3d40.39473700767137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2saz!4v1700000000000!5m2!1sen!2saz"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-color)', padding: '36px 0 20px', fontSize: '0.82rem', color: 'var(--text-sub)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/logo.png" alt="CodeX Studio" style={{ width: '24px', height: '24px', borderRadius: '6px' }} />
            <strong style={{ color: 'var(--text-main)' }}>Code<span style={{ color: 'var(--accent-blue)' }}>X</span> Studio</strong>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.78rem' }}>
            <button onClick={() => navigateTo('home')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>Ana səhifə</button>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>Xidmətlər</button>
            <button onClick={() => navigateTo('works')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>İşlərimiz</button>
            <button onClick={() => navigateTo('about')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>Haqqımızda</button>
            <button onClick={() => navigateTo('faq')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>FAQ</button>
            <button onClick={() => navigateTo('contact')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>Bizimlə əlaqə</button>
          </div>
          <div>© 2026 Codex Studio. Bütün hüquqlar qorunur.</div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/994106011201?text=${encodeURIComponent('Salam. Biznesim üçün sayt hazırlatmaq istəyirəm. Ətraflı məlumat ala bilərəm?')}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 150,
          background: 'var(--accent-blue)',
          color: 'white',
          border: 'none',
          padding: '12px 18px',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 8px 24px var(--accent-glow)',
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
