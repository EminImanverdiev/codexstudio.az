import React, { useState, useEffect, useRef } from 'react'
import {
  MessageCircle, Send, ArrowRight, Laptop, Globe, ShoppingBag,
  Zap, Smartphone, CheckCircle2, ChevronDown, X, Sun, Moon,
  Mail, ExternalLink, Loader2, ArrowUpRight, ShieldCheck, Menu,
  Code2, Palette, Headphones, Search, Phone, ChevronLeft, ChevronRight,
  MapPin, Check, ArrowLeft
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
function RobotCaptcha({ isVerified, onVerify, lang }) {
  const [loading, setLoading] = useState(false)

  const handleCheck = () => {
    if (isVerified || loading) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onVerify(true)
    }, 500)
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
          {isVerified 
            ? (lang === 'az' ? 'Mən robot deyiləm ✓' : 'I am not a robot ✓') 
            : (lang === 'az' ? 'Mən robot deyiləm' : 'I am not a robot')}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', opacity: 0.7 }}>
        <ShieldCheck size={18} color="var(--accent-blue)" />
        <span style={{ fontSize: '9px', fontFamily: 'monospace', color: 'var(--text-sub)', marginTop: '2px' }}>reCAPTCHA</span>
      </div>
    </div>
  )
}

const detailedServicesData = {
  az: [
    {
      id: 'corporate',
      slug: 'korporativ-saytlarin-hazirlanmasi',
      num: '01',
      title: 'Korporativ şirkət saytları',
      shortDesc: 'Şirkətiniz, xidmətləriniz və fəaliyyətiniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi rəsmi saytlar.',
      fullDesc: 'Şirkətinizin brendini və etibarını gücləndirən, xidmətlər kataloqu, komanda, tərəfdaşlar və çoxdilli (AZ/EN/RU) struktura malik rəsmi korporativ saytlar. B2B müştərilər və partnyorlar qarşısında şirkətinizi ən yüksək səviyyədə təmsil edir.',
      whatWeOffer: [
        'Çoxsəhifəli zərif korporativ naviqasiya',
        'Xidmətlər və fəaliyyət sahələri kataloqu',
        'Çoxdilli dəstək (Azərbaycan, İngilis, Rus)',
        'Şirkət tarixi, komanda və tərəfdaşlar bölməsi',
        'Rəsmi korporativ email və sorğu sistemi'
      ],
      whoNeeds: [
        'Holdinqlər, logistika, tibb, hüquq və inşaat şirkətləri',
        'B2B və korporativ müştərilərlə çalışan müəssisələr',
        'Beynəlxalq tərəfdaşlarla işləyən təşkilatlar'
      ],
      tags: ['Korporativ sayt', 'Şirkət saytı', 'B2B portal', 'Çoxdilli sayt'],
      icon: 'laptop'
    },
    {
      id: 'landing',
      slug: 'landing-page-hazirlanmasi',
      num: '02',
      title: 'Bir səhifəlik saytlar (Təqdimat və satış)',
      shortDesc: 'Konkret məhsul, xidmət və ya reklam kampaniyaları üçün sürətli sifariş və zəng toplayan bir səhifəlik saytlar.',
      fullDesc: 'Ziyarətçiləri birbaşa WhatsApp sifarişinə, müraciət formasına və ya zəngə yönləndirən, reklam büdcənizin səmərəliliyini artıran tək səhifəlik təqdimat saytları. Bütün diqqət birbaşa sizin əsas təklifinizə yönəlir.',
      whatWeOffer: [
        'Satış və müraciət yönümlü aydın struktur (Sürətli əlaqə düymələri)',
        'Birbaşa WhatsApp və telefon zəngi inteqrasiyası',
        'Sürətli müraciət forması və email bildiriş sistemi',
        'Instagram, Google və TikTok reklamları üçün optimizasiya',
        'Mobil telefonlarda saniyələr içində ani açılış'
      ],
      whoNeeds: [
        'Konkret bir xidmət və ya məhsulunu reklam edən sahibkarlar',
        'Təlim, kurs, sınaq dərsi və ya konsaltinq təqdim edən mütəxəssislər',
        'Yeni layihəsini qısa müddətdə bazara çıxarmaq istəyənlər'
      ],
      tags: ['Bir səhifəlik sayt', 'Təqdimat saytı', 'Satış saytı', 'WhatsApp sifariş'],
      icon: 'globe'
    },
    {
      id: 'ecommerce',
      slug: 'e-commerce-saytlarin-hazirlanmasi',
      num: '03',
      title: 'Onlayn mağazalar (E-ticarət)',
      shortDesc: 'Məhsulların kataloqu, səbət sistemi və bank kartı ilə onlayn ödənişli satış saytları.',
      fullDesc: 'Məhsul çeşidləri, rahat axtarış və kateqoriya filtrləri, səbət sistemi və Azərbaycan banklarının kartları ilə təhlükəsiz onlayn ödəniş axını təmin edən elektron ticarət mağazaları.',
      whatWeOffer: [
        'Məhsul kataloqu, çeşidlər, ölçülər və dərhal axtarış filtrləri',
        'Səbət və 1 addımlı rahat sifariş rəsmiləşdirmə',
        'Azərbaycan bankları ilə kartla onlayn ödəniş (Kapital, Paşa və s.)',
        'Məhsulları və sifarişləri idarə etmək üçün rahat Admin panel',
        'Müştəriyə və mağaza sahibinə avtomatik sifariş bildirişləri'
      ],
      whoNeeds: [
        'Geyim, mebel, elektronika, kosmetika və aksesuar mağazaları',
        'Fiziki mağazasını internetə daşıyıb 24/7 satış etmək istəyənlər',
        'Öz məhsullarını birbaşa alıcıya çatdırmaq istəyən istehsalçılar'
      ],
      tags: ['Onlayn mağaza', 'E-ticarət', 'Kartla ödəniş', 'Səbət sistemi'],
      icon: 'shopping'
    },
    {
      id: 'custom-portal',
      slug: 'ferdi-veb-layiheler-ve-portallar',
      num: '04',
      title: 'Fərdi sistemlər və xüsusi portallar',
      shortDesc: 'Biznesinizin unikal tələblərinə uyğun rezervasiya, onlayn tədris, elan, xəbər və fərdi idarəetmə sistemləri.',
      fullDesc: 'Standart şablonlara sığmayan, xüsusi qiymət kalkulyatorları, müştəri kabineti, qeydiyyat/rezervasiya modulları, təlim/kurs idarəetməsi və ya xəbər portalları üçün fərdi proqramlaşdırma həlləri.',
      whatWeOffer: [
        'Biznesinizin iş prinsipinə uyğun xüsusi məntiq və proqramlaşdırma',
        'Şəxsi müştəri kabineti və fərdi idarəetmə modulları',
        'Onlayn rezervasiya, bronlaşdırma və ya tədris/kurs paneli',
        'Avtomatlaşdırılmış hesablama və təklif kalkulyatorları',
        'API və üçüncü tərəf sistemləri ilə inteqrasiyalar'
      ],
      whoNeeds: [
        'Klinikalar, otellər, avtoicarə və xidmət rezervasiyası edənlər',
        'Tədris mərkəzləri, kurslar və onlayn imtahan portalları',
        'Unikal funksionallıq tələb edən startap və şirkətlər'
      ],
      tags: ['Fərdi sistem', 'Veb portal', 'Rezervasiya', 'Xüsusi sayt'],
      icon: 'code'
    },
    {
      id: 'uiux',
      slug: 'veb-dizayn-ui-ux',
      num: '05',
      title: 'Veb dizayn (UI/UX)',
      shortDesc: 'Saytın istifadəsini rahatlaşdıran, mobil cihazlara uyğun və müasir interfeys dizaynı.',
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
      title: 'Texniki dəstək və idarəetmə',
      shortDesc: 'Sayt istifadəyə verildikdən sonra server nəzarəti, təhlükəsizlik və zəruri dəyişikliklər.',
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
      shortDesc: 'Saytın axtarış sistemləri (Google) tərəfindən düzgün oxunması və tanınması üçün texniki struktur.',
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
  ],
  en: [
    {
      id: 'corporate',
      slug: 'korporativ-saytlarin-hazirlanmasi',
      num: '01',
      title: 'Corporate Website Development',
      shortDesc: 'Development of corporate websites that professionally present your company, services, and operations.',
      fullDesc: 'Structured multi-page enterprise websites featuring service catalogs, team profiles, partner networks, and multilingual capabilities.',
      whatWeOffer: [
        'Multi-page structured architecture',
        'Service catalog & operations showcase',
        'Multilingual support (AZ, EN, RU)',
        'Company history, board & partners',
        'Corporate email & inquiry processing'
      ],
      whoNeeds: [
        'Enterprises, holdings, healthcare & logistics companies',
        'B2B firms and global contractors',
        'Organizations building international credibility'
      ],
      tags: ['Corporate website', 'Enterprise portal', 'B2B', 'Multilingual'],
      icon: 'laptop'
    },
    {
      id: 'landing',
      slug: 'landing-page-hazirlanmasi',
      num: '02',
      title: 'Single-Page Presentation Websites',
      shortDesc: 'Development of single-page targeted websites for presenting products, services, and campaigns.',
      fullDesc: 'High-conversion single-page websites designed to drive direct customer inquiries, phone calls, and WhatsApp sales without distractions.',
      whatWeOffer: [
        'Conversion-focused visual layout & CTAs',
        'Direct WhatsApp & phone call triggers',
        'Fast lead capture form',
        'Optimized for digital ad campaigns',
        'Instant mobile loading performance'
      ],
      whoNeeds: [
        'Businesses running targeted marketing campaigns',
        'Coaches, educators, and service professionals',
        'Brands launching a new product'
      ],
      tags: ['Landing page', 'Lead generation', 'Conversion rate', 'Ad campaigns'],
      icon: 'globe'
    },
    {
      id: 'ecommerce',
      slug: 'e-commerce-saytlarin-hazirlanmasi',
      num: '03',
      title: 'E-commerce Development',
      shortDesc: 'Development of e-commerce websites for product presentation, ordering, and online sales.',
      fullDesc: 'Faceted product filtering, shopping cart checkout flow, and secure online payment gateway integrations tailored for 24/7 commercial operations.',
      whatWeOffer: [
        'Product catalogs with filters & variations',
        'Frictionless cart & checkout flow',
        'Secure bank card payment gateways',
        'Admin dashboard for inventory & order tracking',
        'Automated order notification alerts'
      ],
      whoNeeds: [
        'Retailers, fashion, furniture & electronics brands',
        'Store owners expanding into online sales',
        'Manufacturers selling direct-to-consumer'
      ],
      tags: ['E-commerce', 'Online store', 'Card payments', 'Shopping cart'],
      icon: 'shopping'
    },
    {
      id: 'web-dev',
      slug: 'veb-saytlarin-hazirlanmasi',
      num: '04',
      title: 'Web Development',
      shortDesc: 'Development of functional websites tailored to your business operations and needs.',
      fullDesc: 'High-performance standards, clean code architecture, and mobile-friendly responsive designs that present your business authority online.',
      whatWeOffer: [
        'Mobile-first responsive architecture',
        'Optimized fast-loading pages',
        'Domain, hosting setup and SSL certificate',
        'Technical SEO foundation for search indexability',
        'High-security standards'
      ],
      whoNeeds: [
        'Enterprises looking to modernize digital presence',
        'Businesses needing seamless online presentations',
        'Brands requiring robust custom functionality'
      ],
      tags: ['Web development', 'Custom website', 'Responsive', 'Fast loading'],
      icon: 'code'
    },
    {
      id: 'uiux',
      slug: 'veb-dizayn-ui-ux',
      num: '05',
      title: 'UI/UX Web Design',
      shortDesc: 'Design of modern, mobile-compatible interfaces that make website navigation intuitive and smooth.',
      fullDesc: 'Clean visual layouts and typography that guide visitors straight to essential information without friction.',
      whatWeOffer: [
        'Ergonomic UX research & wireframing',
        'Modern aesthetic UI design systems',
        'Mobile & tablet responsive viewports',
        'Balanced typography and micro-interactions',
        'Interactive Figma prototypes'
      ],
      whoNeeds: [
        'Companies modernizing legacy websites',
        'Brands looking to boost user engagement',
        'Products needing intuitive interfaces'
      ],
      tags: ['UI/UX design', 'Web design', 'Figma prototype', 'Mobile UX'],
      icon: 'palette'
    },
    {
      id: 'support',
      slug: 'texniki-destek',
      num: '06',
      title: 'Technical Support',
      shortDesc: 'Ongoing support for technical matters, updates, and necessary changes after website launch.',
      fullDesc: 'Server uptime monitoring, domain/SSL management, security checks, and regular content adjustments without stress.',
      whatWeOffer: [
        '24/7 server & website uptime monitoring',
        'Domain renewal & SSL management',
        'Content, text & media updates',
        'Automated database backups',
        'Bug fixing & speed maintenance'
      ],
      whoNeeds: [
        'Businesses needing continuous uninterrupted uptime',
        'Companies frequently publishing updates',
        'Owners looking for reliable external technical team'
      ],
      tags: ['Technical support', 'Maintenance', 'Server monitoring', 'Security'],
      icon: 'headphones'
    },
    {
      id: 'seo',
      slug: 'seo-optimizasiyasi',
      num: '07',
      title: 'SEO Optimization',
      shortDesc: 'Technical and structural SEO optimization so search engines can accurately index and read your website.',
      fullDesc: 'Proper heading structure, meta tags, sitemap, and technical benchmarks for Google search visibility without exaggerated claims.',
      whatWeOffer: [
        'Meta Title, Description & H1-H6 heading hierarchy',
        'XML Sitemap & Robots.txt setup',
        'Image compression & ALT tag configuration',
        'Google Search Console & Analytics integration',
        'Mobile responsiveness & speed benchmarks'
      ],
      whoNeeds: [
        'Websites needing clean search indexability',
        'New platforms setting up technical foundations',
        'Businesses seeking organic discovery'
      ],
      tags: ['SEO optimization', 'Google indexing', 'Meta tags', 'Technical SEO'],
      icon: 'search'
    }
  ]
}

const translations = {
  az: {
    nav: {
      home: 'Ana səhifə',
      services: 'Xidmətlər',
      works: 'İşlərimiz',
      process: 'İş prosesi',
      about: 'Haqqımızda',
      faq: 'Tez-tez verilən suallar',
      contact: 'Bizimlə əlaqə',
      getQuote: 'Təklif al',
      back: '← Geri qayıt'
    },
    hero: {
      eyebrow: 'VEB SAYTLARIN HAZIRLANMASI',
      heading: 'Biznesiniz üçün peşəkar veb sayt hazırlayırıq.',
      desc: 'Bir səhifəlik təqdimat saytları, korporativ şirkət saytları, onlayn mağazalar və fərdi veb sistemlər.',
      primaryBtn: 'Sayt sifarişi',
      secondaryBtn: 'İşlərimizə bax',
      trust1: 'Mobil uyğun',
      trust2: 'SEO optimizasiyası',
      trust3: 'Texniki dəstək',
      tabLanding: 'Bir səhifəlik sayt',
      tabCorporate: 'Korporativ sayt',
      tabEcommerce: 'Onlayn mağaza',
      previewTag: '✓ Canlı önizləmə'
    },
    trustStrip: {
      items: [
        'Korporativ şirkət saytları',
        'Bir səhifəlik saytlar',
        'Onlayn mağazalar',
        'Fərdi sistemlər və portallar',
        'Texniki dəstək'
      ],
      tag: 'Hər növ biznes və fərdi tələblər üçün peşəkar veb xidmətlər.'
    },
    services: {
      badge: 'XİDMƏTLƏRİMİZ',
      title: 'Xidmətlərimiz',
      desc: 'Biznesinizin növünə və hədəfinə uyğun peşəkar veb saytların dizaynı və hazırlanması.',
      moreBtn: 'Daha ətraflı',
      quoteBtn: 'Təklif al',
      allServices: 'Bütün Xidmətlər',
      aboutService: 'haqqında',
      whatWeOffer: 'Xidmət nələri əhatə edir?',
      whoNeeds: 'Bu xidmət kimlər üçün uyğundur?',
      ctaTitle: 'Bu xidmət üzrə təklif almaq istəyirsiniz?',
      ctaDesc: 'Bizə yazın, layihənizi birlikdə müzakirə edək.',
      tags: 'Açar sözlər',
      quickContact: 'SÜRƏTLİ ƏLAQƏ',
      growBusiness: 'Biznesinizi bizimlə inkişaf etdirin',
      growDesc: 'Sayt sifarişi və suallarınız üçün bizimlə birbaşa əlaqə saxlayın.'
    },
    finder: {
      badge: 'SEÇİM KÖMƏKÇİSİ',
      title: 'Hansı növ sayt sizə lazımdır?',
      desc: '2 sadə suala cavab verin, biznesiniz üçün ən uyğun sayt formatını anında müəyyən edək.',
      q1: '1. Sayt əsasən nə məqsədlə hazırlanacaq?',
      q1Opts: ['Xidmətimi təqdim etmək (Bir səhifəlik sayt)', 'Şirkətimi təqdim etmək (Korporativ sayt)', 'Məhsul satışı etmək (Onlayn mağaza)', 'Xüsusi sistem / Portal hazırlatmaq'],
      q2: '2. Saytda hansı imkanlar olmalıdır?',
      q2Opts: ['Sürətli əlaqə forması', 'WhatsApp sifariş düyməsi', 'Məhsul kataloqu', 'Kartla onlayn ödəniş', 'Admin idarəetmə paneli', 'Rezervasiya / Qeydiyyat modulu'],
      recTag: 'TÖVSİYƏ OLUNAN SAYT NÖVÜ:',
      recTitlePrefix: 'Biznesiniz üçün',
      recTitleSuffix: 'ən optimal seçimdir.',
      btn: 'Təklif al →'
    },
    works: {
      badge: 'İŞLƏRİMİZ',
      title: 'İşlərimiz',
      desc: 'Müxtəlif fəaliyyət sahələrində olan şirkətlər və şəxslər üçün hazırladığımız real layihələr.',
      viewLive: 'Sayta bax',
      orderSimilar: 'Bənzər sayt sifariş et'
    },
    process: {
      badge: 'İŞ PROSESİ',
      title: 'Saytın hazırlanması prosesi',
      desc: 'Layihənizin vaxtında və keyfiyyətlə təhvil verilməsi üçün mərhələli iş planı.',
      steps: [
        { num: '01', title: 'Tələblərin müəyyən edilməsi', desc: 'Layihənin məqsədi, saytın strukturu və tələb olunan funksiyalar müəyyən edilir.' },
        { num: '02', title: 'Dizayn', desc: 'Saytın vizual görünüşü və istifadəçi interfeysi hazırlanır.' },
        { num: '03', title: 'Proqramlaşdırma', desc: 'Təsdiqlənmiş dizayn əsasında saytın hazırlanmasına başlanılır.' },
        { num: '04', title: 'Test və yoxlanış', desc: 'Sayt bütün telefon və kompüter ekranlarında yoxlanılır.' },
        { num: '05', title: 'Təhvil və dəstək', desc: 'Yekun yoxlamadan sonra sayt domendə istifadəyə verilir.' }
      ]
    },
    about: {
      badge: 'HAQQIMIZDA',
      title: 'Haqqımızda',
      desc: 'Codex Studio bizneslər üçün veb saytların dizaynı və hazırlanması üzrə ixtisaslaşmış komandadır. Məqsədimiz şirkətinizin fəaliyyətini internetdə düzgün, aydın və etibarlı şəkildə təqdim edən veb saytlar hazırlamaqdır.',
      values: [
        { title: 'Sadə və aydın ünsiyyət', desc: 'Artıq texniki terminlər olmadan, biznesinizə real nəyin lazım olduğunu rahat şəkildə müzakirə edirik.' },
        { title: 'Dəqiq iş qrafiki', desc: 'Hər bir mərhələ razılaşdırılmış vaxt çərçivəsində və planlı şəkildə icra olunur.' },
        { title: 'Daimi texniki dəstək', desc: 'Sayt təhvil verildikdən sonra da server, domen və texniki məsələlərdə dəstəyimizi davam etdiririk.' }
      ]
    },
    faq: {
      badge: 'SUAL-CAVAB',
      title: 'Tez-tez verilən suallar',
      desc: 'Veb saytların hazırlanması və əməkdaşlıq prosesi ilə bağlı ən çox verilən suallar.'
    },
    finalCta: {
      badge: 'SAYT SİFARİŞİ',
      title: 'Veb sayt sifariş etmək istəyirsiniz?',
      desc: 'Biznesiniz haqqında qısa məlumat göndərin. Ehtiyacınıza uyğun sayt həllini birlikdə müəyyən edək.',
      primaryBtn: 'Təklif al',
      whatsappBtn: 'WhatsApp ilə əlaqə'
    },
    contact: {
      badge: 'BİZİMLƏ ƏLAQƏ',
      title: 'Bizimlə əlaqə',
      desc: 'Layihəniz haqqında qısa məlumat göndərin. Ehtiyacınıza uyğun həlli birlikdə müəyyən edək.',
      phoneLabel: 'Telefon / Zəng:',
      whatsappLabel: 'WhatsApp:',
      emailLabel: 'Qəbul Emaili:',
      addressLabel: 'Rəsmi Ünvan:',
      formTitle: 'Sayt sifarişi üçün müraciət edin',
      formDesc: 'Məlumatlarınızı qeyd edin, ən qısa zamanda sizinlə əlaqə saxlayaq.',
      nameLabel: 'Adınız və Soyadınız *',
      phoneInputLabel: 'Telefon / WhatsApp *',
      businessLabel: 'Biznes sahəsi / Fəaliyyətiniz',
      siteTypeLabel: 'İstədiyiniz sayt növü',
      messageLabel: 'Sayt haqqında qısa məlumat / İstəkləriniz',
      submitBtn: 'Təklif al',
      submitting: 'Göndərilir...',
      successTitle: 'Müraciətiniz qəbul olundu!',
      successDesc: 'Məlumatlar email poçtuna çatdırıldı.',
      confirmWhatsApp: 'WhatsApp ilə təsdiqləyin',
      mapTitle: 'Xəritədə yerləşməmiz: Bakı, Azərbaycan',
      openMaps: 'Google Maps-də aç →',
      captchaError: 'Zəhmət olmasa "Mən robot deyiləm" xanasını təsdiqləyin.'
    },
    footer: {
      rights: '© 2026 Codex Studio. Bütün hüquqlar qorunur.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      works: 'Our Works',
      process: 'Process',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact Us',
      getQuote: 'Get a Quote',
      back: '← Go Back'
    },
    hero: {
      eyebrow: 'WEB DEVELOPMENT SERVICES',
      heading: 'We build professional websites for your business.',
      desc: 'Design and development of landing pages, corporate websites, and e-commerce projects.',
      primaryBtn: 'Request a website',
      secondaryBtn: 'View our works',
      trust1: 'Mobile responsive',
      trust2: 'SEO optimization',
      trust3: 'Technical support',
      tabLanding: 'Landing Page',
      tabCorporate: 'Corporate website',
      tabEcommerce: 'E-commerce website',
      previewTag: '✓ Live preview'
    },
    trustStrip: {
      items: [
        'Web development',
        'Landing Page',
        'Corporate websites',
        'E-commerce',
        'Technical support'
      ],
      tag: 'Web development solutions for growing businesses.'
    },
    services: {
      badge: 'SERVICES',
      title: 'Our Services',
      desc: 'Design and development of websites tailored to your business needs.',
      moreBtn: 'Learn more',
      quoteBtn: 'Get a quote',
      allServices: 'All Services',
      aboutService: 'Overview',
      whatWeOffer: 'What does this service include?',
      whoNeeds: 'Who is this service for?',
      ctaTitle: 'Ready to request this service?',
      ctaDesc: 'Send us your requirements, let’s discuss your project.',
      tags: 'Keywords',
      quickContact: 'QUICK CONTACT',
      growBusiness: 'Grow your business with us',
      growDesc: 'Get in touch directly for website requests and questions.'
    },
    finder: {
      badge: 'PROJECT ADVISOR',
      title: 'Which website fits your business?',
      desc: 'Answer 2 simple questions to immediately discover the optimal website format for your business.',
      q1: '1. What is the primary purpose of your website?',
      q1Opts: ['Present my services', 'Showcase my company', 'Sell products online', 'Build a custom system'],
      q2: '2. Which features do you need?',
      q2Opts: ['Contact form', 'WhatsApp button', 'Product catalog', 'Online card payments', 'Admin control panel', 'Booking / Registration'],
      recTag: 'RECOMMENDED FORMAT:',
      recTitlePrefix: 'A',
      recTitleSuffix: 'format is the best fit for your requirements.',
      btn: 'Get a quote →'
    },
    works: {
      badge: 'OUR WORKS',
      title: 'Our Works',
      desc: 'Web projects and client solutions we have developed across diverse business industries.',
      viewLive: 'View website',
      orderSimilar: 'Order similar website'
    },
    process: {
      badge: 'DEVELOPMENT PROCESS',
      title: 'Development Process',
      desc: 'A structured, predictable milestone roadmap for delivering your project on time and with quality.',
      steps: [
        { num: '01', title: 'Requirement definition', desc: 'Project goals, website structure, and required functions are defined.' },
        { num: '02', title: 'Design', desc: 'Visual look and user interface of the website are designed.' },
        { num: '03', title: 'Development', desc: 'Website coding begins based on the approved design.' },
        { num: '04', title: 'Testing', desc: 'The website is tested across various screen sizes and devices.' },
        { num: '05', title: 'Delivery', desc: 'After final review, the website is launched and delivered.' }
      ]
    },
    about: {
      badge: 'ABOUT US',
      title: 'About Us',
      desc: 'Codex Studio is a web studio specialized in the design and development of websites for businesses. Our mission is to build websites that present your company online with authority, clarity, and professionalism.',
      values: [
        { title: 'Clear communication', desc: 'We explain straightforwardly what your business needs without unnecessary technical jargon.' },
        { title: 'Structured schedule', desc: 'Every phase is executed on time and according to an agreed plan.' },
        { title: 'Ongoing support', desc: 'We continue assisting with hosting, domain, and technical updates after delivery.' }
      ]
    },
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      desc: 'Answers to common questions regarding website development and collaboration.'
    },
    finalCta: {
      badge: 'ORDER A WEBSITE',
      title: 'Do you want to order a website?',
      desc: 'Send us brief information about your project. Let’s determine the right solution together.',
      primaryBtn: 'Get a quote',
      whatsappBtn: 'Contact via WhatsApp'
    },
    contact: {
      badge: 'CONTACT US',
      title: 'Contact Us',
      desc: 'Send us brief information about your project. Let’s determine the right solution together.',
      phoneLabel: 'Phone / Direct call:',
      whatsappLabel: 'WhatsApp:',
      emailLabel: 'Inquiry Email:',
      addressLabel: 'Official Address:',
      formTitle: 'Request a website project',
      formDesc: 'Please fill in your details, and we will contact you shortly.',
      nameLabel: 'Full Name *',
      phoneInputLabel: 'Phone / WhatsApp *',
      businessLabel: 'Business / Industry',
      siteTypeLabel: 'Website Type',
      messageLabel: 'Brief project details / Requirements',
      submitBtn: 'Get a quote',
      submitting: 'Sending...',
      successTitle: 'Inquiry Received!',
      successDesc: 'Your details have been delivered to our inbox.',
      confirmWhatsApp: 'Confirm via WhatsApp',
      mapTitle: 'Location on map: Baku, Azerbaijan',
      openMaps: 'Open in Google Maps →',
      captchaError: 'Please check "I am not a robot" box.'
    },
    footer: {
      rights: '© 2026 Codex Studio. All rights reserved.'
    }
  }
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home')
  const [selectedServiceSlug, setSelectedServiceSlug] = useState('korporativ-saytlarin-hazirlanmasi')
  const [isPageLoading, setIsPageLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [initialProgress, setInitialProgress] = useState(0)
  const [lang, setLang] = useState(() => localStorage.getItem('codex_lang') || 'az')
  const [theme, setTheme] = useState(() => localStorage.getItem('codex_theme') || 'dark')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [heroTab, setHeroTab] = useState('landing')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

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

  const t = translations[lang] || translations.az
  const currentServicesList = detailedServicesData[lang] || detailedServicesData.az

  const heroSlides = [
    {
      badge: t.hero.eyebrow,
      heading: t.hero.heading,
      desc: t.hero.desc,
      btn1: t.hero.primaryBtn,
      btn2: t.hero.secondaryBtn,
      targetRoute: 'contact'
    },
    {
      badge: lang === 'az' ? 'KORPORATİV VƏ E-COMMERCE' : 'CORPORATE & E-COMMERCE',
      heading: lang === 'az' ? 'Siz sadəcə biznesinizi böyüdün, veb saytınızı bizə həvalə edin.' : 'Focus on growing your business, leave website development to us.',
      desc: lang === 'az' ? 'Şirkətinizin fəaliyyətini, xidmətlərini və məhsullarını peşəkar şəkildə təqdim edən müasir həllər.' : 'Modern solutions that professionally present your company, services, and online catalog.',
      btn1: lang === 'az' ? 'Təklif al' : 'Get a quote',
      btn2: lang === 'az' ? 'Xidmətlərimiz' : 'Our services',
      targetRoute: 'services'
    },
    {
      badge: lang === 'az' ? '100% MOBİL VƏ TEXNİKİ DƏSTƏK' : '100% RESPONSIVE & SUPPORT',
      heading: lang === 'az' ? 'Saytınız internetdə brendinizin ən güclü vizit kartıdır.' : 'Your website is the most powerful digital showcase for your brand.',
      desc: lang === 'az' ? 'Aydın naviqasiya, SEO optimizasiyası və sayt təhvil verildikdən sonra daimi texniki dəstək.' : 'Intuitive navigation, technical SEO structure, and ongoing maintenance after launch.',
      btn1: lang === 'az' ? 'WhatsApp ilə əlaqə' : 'Contact via WhatsApp',
      btn2: lang === 'az' ? 'İşlərimizə bax' : 'View our works',
      targetRoute: 'works'
    }
  ]

  // Browser Back/Forward History Support
  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state && e.state.route) {
        setCurrentRoute(e.state.route)
        if (e.state.serviceSlug) {
          setSelectedServiceSlug(e.state.serviceSlug)
        }
        window.scrollTo(0, 0)
      } else {
        setCurrentRoute('home')
        window.scrollTo(0, 0)
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Auto rotate hero slides every 7.5 seconds
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

  // Initial Page Refresh Preloader Counter (Calm pace)
  useEffect(() => {
    let current = 0
    const timer = setInterval(() => {
      current += 14
      if (current >= 100) {
        current = 100
        setInitialProgress(100)
        clearInterval(timer)
        setTimeout(() => {
          setInitialLoading(false)
        }, 280)
      } else {
        setInitialProgress(current)
      }
    }, 70)
    return () => clearInterval(timer)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const changeLanguage = (newLang) => {
    setLang(newLang)
  }

  // Smooth Navigation with Instant Top Scroll & History Push
  const navigateTo = (route, serviceSlug = null, pushHistory = true) => {
    if (serviceSlug) {
      setSelectedServiceSlug(serviceSlug)
    }
    setMobileMenuOpen(false)
    setInitialProgress(0)
    setInitialLoading(true)

    // Reset scroll position immediately
    window.scrollTo(0, 0)

    if (pushHistory) {
      window.history.pushState({ route, serviceSlug }, '', `#${route}${serviceSlug ? `/${serviceSlug}` : ''}`)
    }

    let current = 0
    const navTimer = setInterval(() => {
      current += 14
      if (current >= 100) {
        current = 100
        setInitialProgress(100)
        clearInterval(navTimer)
        
        setTimeout(() => {
          setCurrentRoute(route)
          window.scrollTo(0, 0)
          setTimeout(() => {
            setInitialLoading(false)
          }, 200)
        }, 120)
      } else {
        setInitialProgress(current)
      }
    }, 65)
  }

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      navigateTo('home')
    }
  }

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
        type: lang === 'az' ? 'Onlayn mağazalar (E-ticarət)' : 'Online store & E-commerce',
        desc: lang === 'az' ? 'Məhsulların kataloqu, səbət sistemi və bank kartı ilə onlayn ödənişli elektron ticarət mağazası.' : 'Development of e-commerce websites for product catalog, shopping cart, and card payments.'
      }
    }
    if (quizPurpose === 0) {
      return {
        type: lang === 'az' ? 'Bir səhifəlik sayt (Təqdimat və satış)' : 'Single-page presentation website',
        desc: lang === 'az' ? 'Xidmət və ya məhsulunuzu konkret təqdim edən və sürətli sifariş/zəng toplayan bir səhifəlik sayt.' : 'Targeted single-page website for presenting products, services, and capturing leads.'
      }
    }
    if (quizPurpose === 3 || quizFeatures.includes(4) || quizFeatures.includes(5)) {
      return {
        type: lang === 'az' ? 'Fərdi sistemlər və xüsusi portallar' : 'Custom web systems & portals',
        desc: lang === 'az' ? 'Biznesinizin unikal tələblərinə uyğun xüsusi kalkulyatorlar, rezervasiya, tədris və ya elan modulları.' : 'Custom booking calculators, management modules, e-learning and specialized systems.'
      }
    }
    return {
      type: lang === 'az' ? 'Korporativ şirkət saytı' : 'Corporate website development',
      desc: lang === 'az' ? 'Şirkətiniz, xidmətləriniz və fəaliyyətiniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi rəsmi sayt.' : 'Development of corporate websites that professionally present information about your company and operations.'
    }
  }

  const quizRec = getQuizRecommendation()

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
      name: 'Emin İmanverdiyev — Şəxsi Portfel & Mühəndis Saytı',
      type: lang === 'az' ? 'Fərdi portfel və təqdimat saytı' : 'Personal Portfolio & Presentation Site',
      desc: lang === 'az'
        ? 'Proqramlaşdırma layihələri, texnoloji stack, mühəndislik təcrübəsi və birbaşa əməkdaşlıq əlaqəsi üçün fərdi təqdimat platforması.'
        : 'Showcase of software engineering projects, tech stack, and direct collaboration contact.',
      url: 'https://eminimanverdiyev.site/',
      displayUrl: 'eminimanverdiyev.site',
      tags: ['Fərdi sayt', 'Portfel platforması', 'Texnoloji layihələr', 'CV təqdimatı']
    },
    {
      id: '02',
      name: 'Encode Soft — Biznes və Müəssisə İdarəetmə Sistemi',
      type: lang === 'az' ? 'Fərdi Veb Sistem & İdarəetmə Portalı' : 'Custom Enterprise & Business Management Portal',
      desc: lang === 'az'
        ? 'Müəssisələr üçün anbar, satış, maliyyə, əməkdaşlar və biznes proseslərinin idarə olunması üçün hazırlanmış fərdi idarəetmə və bulud sistemi.'
        : 'Cloud-based custom enterprise management platform covering warehouse, sales, finance, and operations.',
      url: 'https://app.encode-soft.com/',
      displayUrl: 'app.encode-soft.com',
      tags: ['İdarəetmə sistemi', 'Anbar və Satış', 'Fərdi sistem', 'Bulud platforması']
    },
    {
      id: '03',
      name: 'Sinaps Med — Tibbi Avadanlıq & Səhiyyə Şirkəti',
      type: lang === 'az' ? 'Korporativ şirkət saytı' : 'Corporate website development',
      desc: lang === 'az' 
        ? 'Tibbi avadanlıqlar, klinik məhsul kataloqu, distribütorluq və səhiyyə müəssisələri üçün çoxdilli rəsmi korporativ platforma.' 
        : 'Medical devices, clinical equipment catalog, distribution services, and enterprise healthcare platform.',
      url: 'https://sinapsmed.com',
      displayUrl: 'sinapsmed.com',
      tags: ['Korporativ sayt', 'Məhsul kataloqu', 'Çoxdillilik', 'Partnyor əlaqələri']
    },
    {
      id: '04',
      name: 'Aura Home & Living',
      type: lang === 'az' ? 'Onlayn mağaza (E-ticarət)' : 'Online store & E-commerce',
      desc: lang === 'az'
        ? 'İnteryer mebeli və ev aksessuarları üçün müasir məhsul vitrini, kateqoriya filtri, səbət və bank kartı ilə ödəniş axını.'
        : 'Designer furniture and home decor catalog with instant filters, cart checkout, and bank card payments.',
      url: 'https://aurahome.codexstudio.az',
      displayUrl: 'aurahome.az',
      tags: ['Onlayn mağaza', 'Səbət sistemi', 'Kartla ödəniş', 'Mobil uyğun dizayn']
    },
    {
      id: '05',
      name: 'Vektor Logistics & Holding',
      type: lang === 'az' ? 'Korporativ şirkət saytı və logistika portalı' : 'Corporate website and logistics portal',
      desc: lang === 'az'
        ? 'Beynəlxalq yükdaşıma, anbar xidmətləri və tərəfdaş şirkətlər üçün çoxsəhifəli, etibarlı korporativ veb portal.'
        : 'Global shipping routes, warehousing capabilities, and multi-page structured corporate presentation.',
      url: 'https://vektor-holding.codexstudio.az',
      displayUrl: 'vektor-holding.az',
      tags: ['Korporativ sayt', 'Xidmət kataloqu', 'Çoxdilli struktur', 'Sorğu sistemi']
    }
  ]

  const faqs = lang === 'az' ? [
    { q: 'Saytın hazırlanması neçə gün çəkir?', a: 'Müddət layihənin növündən asılıdır: Bir səhifəlik təqdimat saytları bir neçə günə, korporativ saytlar və onlayn mağazalar isə orta hesabla 1-3 həftəyə tam hazır vəziyyətə gətirilir.' },
    { q: 'Qiymət necə müəyyən olunur?', a: 'Qiymət saytın növünə (Bir səhifəlik, Korporativ, Onlayn mağaza və ya Fərdi sistemlər), səhifə sayına və tələb olunan funksionallığa (onlayn ödəniş, çoxdillilik və s.) görə şəffaf şəkildə hesablanır.' },
    { q: 'Domen və hosting qiymətə daxildirmi?', a: 'Bəli, istəyinizə uyğun olaraq .az və ya beynəlxalq domenlərin seçilməsi, sürətli serverin quraşdırılması və SSL təhlükəsizlik sertifikatının aktivləşdirilməsi tərəfimizdən təmin edilir.' },
    { q: 'Sayt mobil cihazlara uyğun olacaq?', a: 'Bəli, 100%. Hazırladığımız bütün saytlar mobil cihazlara uyğunlaşdırılır və smartfon, planşet və kompüter ekranlarında qüsursuz işləyir.' },
    { q: 'Sonradan saytda dəyişiklik etmək mümkündür?', a: 'Bəli. Saytın strukturu elə qurulur ki, gələcəkdə yeni səhifələr, məhsullar, xidmətlər və ya yeni funksiyalar asanlıqla əlavə oluna bilsin.' },
    { q: 'Onlayn ödəniş sistemi qoşmaq olar?', a: 'Bəli. Onlayn mağaza və sifariş saytlarınıza yerli bankların kartla ödəniş sistemlərini (Kapital Bank, Paşa Bank və s.) təhlükəsiz şəkildə inteqrasiya edirik.' },
    { q: 'Sayt hazır olduqdan sonra texniki dəstək verirsiniz?', a: 'Bəli. Sayt təhvil verildikdən sonra da serverin fasiləsiz işləməsi, domen və texniki suallarınız üzrə dəstəyimiz davam edir.' }
  ] : [
    { q: 'How long does it take to build a website?', a: 'It depends on the project: Single-page landing pages take a few days, while multi-page corporate and e-commerce projects take on average 1 to 3 weeks.' },
    { q: 'How is pricing determined?', a: 'Pricing is calculated transparently based on website type, page count, and required functionality.' },
    { q: 'Are domain and hosting included?', a: 'Yes. We assist with domain selection, high-speed hosting setup, and automated SSL security certificates.' },
    { q: 'Will the website work on mobile devices?', a: 'Yes, 100%. Every website is responsive across all smartphones, tablets, and computers.' },
    { q: 'Can changes be made later?', a: 'Yes. The structure allows new pages, products, services, and features to be easily added.' },
    { q: 'Can an online payment system be integrated?', a: 'Yes. We integrate secure bank card payment gateways for online stores and booking platforms.' },
    { q: 'Do you provide support after launch?', a: 'Yes. We remain available for server monitoring, domain management, and technical guidance.' }
  ]

  const curSlide = heroSlides[currentSlide]
  const currentServiceDetail = currentServicesList.find(s => s.slug === selectedServiceSlug) || currentServicesList[0]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-page)', color: 'var(--text-main)', overflowX: 'hidden' }}>
      
      {/* Full-Screen Initial Page Refresh & Route Transition Preloader */}
      {initialLoading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: '#05070B',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.35s ease',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '64px',
              height: '64px',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid #162032',
              boxShadow: '0 8px 30px rgba(0, 102, 255, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#080C14',
              marginBottom: '20px'
            }}
          >
            <img src="/logo.png" alt="CodeX Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F5F7FA', marginBottom: '16px' }}>
            <span>Code<span style={{ color: '#0066FF' }}>X</span></span>
            <span style={{ color: '#9CA6B5', fontWeight: 500 }}>Studio</span>
          </div>

          <div style={{ width: '200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ width: '100%', height: '4px', background: '#080C14', border: '1px solid #162032', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: '#0066FF', width: `${initialProgress}%`, boxShadow: '0 0 10px #0066FF', transition: 'width 0.1s ease' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', color: '#9CA6B5' }}>
              <span>{lang === 'az' ? 'YÜKLƏNİR...' : 'LOADING...'}</span>
              <span style={{ color: '#0066FF', fontWeight: 'bold' }}>{initialProgress}%</span>
            </div>
          </div>
        </div>
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
              {t.nav.home}
            </button>
            <button
              onClick={() => navigateTo('services')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'services' || currentRoute === 'service-detail' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'services' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => navigateTo('works')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'works' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'works' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              {t.nav.works}
            </button>
            <button
              onClick={() => navigateTo('about')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'about' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'about' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => navigateTo('faq')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'faq' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'faq' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => navigateTo('contact')}
              style={{ background: 'none', border: 'none', color: currentRoute === 'contact' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'contact' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', padding: '3px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  changeLanguage('az')
                }}
                className="lang-btn"
                style={{ background: lang === 'az' ? 'var(--accent-blue)' : 'transparent', color: lang === 'az' ? 'white' : 'var(--text-sub)' }}
              >
                AZ
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  changeLanguage('en')
                }}
                className="lang-btn"
                style={{ background: lang === 'en' ? 'var(--accent-blue)' : 'transparent', color: lang === 'en' ? 'white' : 'var(--text-sub)' }}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              style={{ padding: '8px 10px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-sub)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              title="Rejimi dəyiş"
            >
              {theme === 'dark' ? <Sun size={15} color="#FFBD2E" /> : <Moon size={15} color="var(--accent-blue)" />}
            </button>

            <button
              type="button"
              onClick={() => navigateTo('contact')}
              className="desktop-cta"
              style={{
                background: 'var(--accent-blue)',
                color: 'white',
                padding: '9px 18px',
                borderRadius: '10px',
                fontSize: '0.84rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                alignItems: 'center',
                gap: '5px',
                boxShadow: '0 4px 14px var(--accent-glow)',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{t.nav.getQuote}</span>
              <ArrowRight size={14} />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{ padding: '8px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-main)', cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer with Clean Modern Design */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 105,
          background: 'var(--bg-page)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}>
          <div>
            {/* Mobile Top Header row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="/logo.png" alt="CodeX Studio" style={{ width: '28px', height: '28px', borderRadius: '8px' }} />
                <span style={{ fontWeight: 800, fontSize: '1.08rem' }}>Code<span style={{ color: 'var(--accent-blue)' }}>X</span> Studio</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {/* Language Switcher */}
                <div style={{ display: 'flex', padding: '2px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                  <button
                    type="button"
                    onClick={() => changeLanguage('az')}
                    style={{ padding: '6px 10px', borderRadius: '6px', border: 'none', background: lang === 'az' ? 'var(--accent-blue)' : 'transparent', color: lang === 'az' ? 'white' : 'var(--text-sub)', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}
                  >
                    AZ
                  </button>
                  <button
                    type="button"
                    onClick={() => changeLanguage('en')}
                    style={{ padding: '6px 10px', borderRadius: '6px', border: 'none', background: lang === 'en' ? 'var(--accent-blue)' : 'transparent', color: lang === 'en' ? 'white' : 'var(--text-sub)', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}
                  >
                    EN
                  </button>
                </div>

                {/* Theme icon only */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  style={{ padding: '7px 9px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-sub)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  aria-label="Rejimi dəyiş"
                >
                  {theme === 'dark' ? <Sun size={16} color="#FFBD2E" /> : <Moon size={16} color="var(--accent-blue)" />}
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ padding: '7px 9px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  aria-label="Bağla"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Clean Mobile Menu Items (No 01, 02 numbers, modern cards) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '16px' }}>
              {[
                { route: 'home', label: t.nav.home },
                { route: 'services', label: t.nav.services },
                { route: 'works', label: t.nav.works },
                { route: 'about', label: t.nav.about },
                { route: 'faq', label: t.nav.faq },
                { route: 'contact', label: t.nav.contact }
              ].map((item) => {
                const isActive = currentRoute === item.route
                return (
                  <button
                    key={item.route}
                    type="button"
                    onClick={() => navigateTo(item.route)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '13px 14px',
                      borderRadius: '12px',
                      border: `1px solid ${isActive ? 'rgba(0, 102, 255, 0.35)' : 'transparent'}`,
                      background: isActive ? 'var(--bg-card)' : 'transparent',
                      color: isActive ? 'var(--accent-blue)' : 'var(--text-main)',
                      fontSize: '1.02rem',
                      fontWeight: isActive ? 700 : 600,
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={16} color={isActive ? 'var(--accent-blue)' : 'var(--text-muted)'} />
                  </button>
                )
              })}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px' }}>
            <button
              type="button"
              onClick={() => navigateTo('contact')}
              style={{ background: 'var(--accent-blue)', color: 'white', padding: '14px', borderRadius: '12px', textAlign: 'center', fontWeight: 700, border: 'none', fontSize: '0.92rem', cursor: 'pointer', boxShadow: '0 4px 14px var(--accent-glow)' }}
            >
              {t.hero.primaryBtn} →
            </button>
            <a
              href="https://wa.me/994106011201"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '13px', borderRadius: '12px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <MessageCircle size={16} color="var(--accent-blue)" />
              <span>WhatsApp: 010 601 12 01</span>
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

                {/* Right: Mockup with Sinaps Med first */}
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '4px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px' }}>
                      <button
                        onClick={() => setHeroTab('landing')}
                        style={{ padding: '6px 10px', borderRadius: '6px', border: 'none', background: heroTab === 'landing' ? 'var(--accent-blue)' : 'transparent', color: heroTab === 'landing' ? 'white' : 'var(--text-sub)', fontSize: '0.74rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        {lang === 'az' ? 'Fərdi sayt' : 'Personal site'}
                      </button>
                      <button
                        onClick={() => setHeroTab('erp')}
                        style={{ padding: '6px 10px', borderRadius: '6px', border: 'none', background: heroTab === 'erp' ? 'var(--accent-blue)' : 'transparent', color: heroTab === 'erp' ? 'white' : 'var(--text-sub)', fontSize: '0.74rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        {lang === 'az' ? 'İdarəetmə sistemi' : 'Business system'}
                      </button>
                      <button
                        onClick={() => setHeroTab('corporate')}
                        style={{ padding: '6px 10px', borderRadius: '6px', border: 'none', background: heroTab === 'corporate' ? 'var(--accent-blue)' : 'transparent', color: heroTab === 'corporate' ? 'white' : 'var(--text-sub)', fontSize: '0.74rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        {lang === 'az' ? 'Korporativ sayt' : 'Corporate'}
                      </button>
                      <button
                        onClick={() => setHeroTab('ecommerce')}
                        style={{ padding: '6px 10px', borderRadius: '6px', border: 'none', background: heroTab === 'ecommerce' ? 'var(--accent-blue)' : 'transparent', color: heroTab === 'ecommerce' ? 'white' : 'var(--text-sub)', fontSize: '0.74rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        {lang === 'az' ? 'Onlayn mağaza' : 'Online store'}
                      </button>
                    </div>

                    <div style={{ fontSize: '0.72rem', color: '#10B981', fontFamily: 'monospace', padding: '4px 10px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                      {t.hero.previewTag}
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
                          {heroTab === 'landing' && 'eminimanverdiyev.site'}
                          {heroTab === 'erp' && 'app.encode-soft.com'}
                          {heroTab === 'corporate' && 'sinapsmed.com'}
                          {heroTab === 'ecommerce' && 'aurahome.az'}
                        </span>
                      </div>
                      <div style={{ width: '20px' }}></div>
                    </div>

                    <div style={{ padding: '24px', background: 'var(--bg-card)', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      {heroTab === 'landing' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--accent-blue)', marginBottom: '6px' }}>
                            {lang === 'az' ? 'FƏRDİ PORTFEL & MÜHƏNDİS SAYTI' : 'PERSONAL PORTFOLIO & PLATFORM'}
                          </div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Emin İmanverdiyev — Şəxsi Sayt</h3>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '18px' }}>
                            {lang === 'az' ? 'Proqramlaşdırma layihələri, texnoloji həllər və əməkdaşlıq üçün fərdi platforma.' : 'Personal developer portfolio and tech projects showcase platform.'}
                          </p>
                          <a href="https://eminimanverdiyev.site/" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--accent-blue)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>{t.works.viewLive} →</a>
                        </div>
                      )}

                      {heroTab === 'erp' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--accent-blue)', marginBottom: '6px' }}>
                            {lang === 'az' ? 'BİZNES VƏ MÜƏSSİSƏ İDARƏETMƏ SİSTEMİ' : 'CUSTOM ENTERPRISE MANAGEMENT SYSTEM'}
                          </div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Encode Soft — İdarəetmə Portalı</h3>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '18px' }}>
                            {lang === 'az' ? 'Müəssisələr üçün anbar, satış, maliyyə, əməkdaşlar və proseslərin idarə olunması üçün fərdi bulud sistemi.' : 'Enterprise cloud management platform covering operations, sales, and analytics.'}
                          </p>
                          <a href="https://app.encode-soft.com/" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--accent-blue)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>{t.works.viewLive} →</a>
                        </div>
                      )}

                      {heroTab === 'corporate' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--accent-blue)', marginBottom: '6px' }}>
                            {lang === 'az' ? 'KORPORATİV ŞİRKƏT PORTALI' : 'ENTERPRISE HEALTHCARE PORTAL'}
                          </div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Sinaps Med — Tibbi Avadanlıq & Səhiyyə</h3>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '18px' }}>
                            {lang === 'az' ? 'Şirkətiniz və xidmətləriniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi rəsmi sayt.' : 'Official enterprise healthcare portal presenting equipment catalogs and distribution services.'}
                          </p>
                          <a href="https://sinapsmed.com" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--accent-blue)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>{t.works.viewLive} →</a>
                        </div>
                      )}

                      {heroTab === 'ecommerce' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--accent-blue)', marginBottom: '6px' }}>
                            {lang === 'az' ? 'ONLAYN MAĞAZA (E-TİCARƏT)' : 'E-COMMERCE STORE'}
                          </div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Aura Home & Living</h3>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '18px' }}>
                            {lang === 'az' ? 'Məhsulların təqdimatı, səbət və onlayn ödəniş sistemi ilə təchiz olunmuş onlayn mağaza.' : 'Online furniture and interior store with product filters, cart, and card payment gateway.'}
                          </p>
                          <button onClick={() => navigateTo('contact')} style={{ background: 'var(--accent-blue)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}>{t.nav.getQuote} →</button>
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
                {t.trustStrip.items.map((item, i) => (
                  <div key={i}><span style={{ color: 'var(--accent-blue)' }}>•</span> {item}</div>
                ))}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-sub)' }}>{t.trustStrip.tag}</div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" style={{ padding: '80px 0', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
              <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                  {t.services.badge}
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>{t.services.title}</h2>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem' }}>{t.services.desc}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {currentServicesList.map((s) => (
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
                      <span>{t.services.moreBtn}</span>
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
                  {t.finder.badge}
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>{t.finder.title}</h2>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem' }}>{t.finder.desc}</p>
              </div>

              <div style={{ background: 'var(--bg-page)', border: '1px solid var(--border-color)', borderRadius: '22px', padding: '28px', maxWidth: '840px', margin: '0 auto' }}>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '12px' }}>{t.finder.q1}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                    {t.finder.q1Opts.map((p, idx) => (
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
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '12px' }}>{t.finder.q2}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
                    {t.finder.q2Opts.map((f, idx) => (
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
                    <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--accent-blue)' }}>{t.finder.recTag}</span>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '4px 0' }}>{t.finder.recTitlePrefix} <span style={{ color: 'var(--accent-blue)' }}>{quizRec.type}</span> {t.finder.recTitleSuffix}</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-sub)', maxWidth: '480px' }}>{quizRec.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSiteType(quizRec.type)
                      navigateTo('contact')
                    }}
                    style={{ background: 'var(--accent-blue)', color: 'white', padding: '12px 20px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                  >
                    {t.finder.btn}
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
                  {t.process.badge}
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '10px' }}>{t.process.title}</h2>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem' }}>{t.process.desc}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '14px' }}>
                {t.process.steps.map((st) => (
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
                  <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>{t.finalCta.badge}</span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>{t.finalCta.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>{t.finalCta.desc}</p>
                </div>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => navigateTo('contact')}
                    style={{ background: 'var(--accent-blue)', color: 'white', padding: '14px 28px', borderRadius: '12px', fontSize: '0.92rem', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 6px 20px var(--accent-glow)' }}
                  >
                    <span>{t.finalCta.primaryBtn}</span>
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href={`https://wa.me/994106011201?text=${encodeURIComponent('Salam. Biznesim üçün sayt hazırlatmaq istəyirəm. Ətraflı məlumat ala bilərəm?')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-sub)', fontSize: '0.82rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <MessageCircle size={14} color="var(--accent-blue)" />
                    <span>{t.finalCta.whatsappBtn}: 010 601 12 01</span>
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
          <div style={{ position: 'relative', padding: '60px 0 45px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.82rem' }}>
                <button
                  type="button"
                  onClick={() => navigateTo('home')}
                  style={{ background: 'none', border: 'none', padding: 0, color: 'var(--accent-blue)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <ArrowLeft size={14} />
                  <span>{t.nav.home}</span>
                </button>
                <span style={{ color: 'var(--text-muted)' }}>/</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{t.nav.services}</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                {t.services.badge}
              </span>
              <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '12px' }}>{t.services.title}</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '680px' }}>{t.services.desc}</p>
            </div>
          </div>

          <section style={{ padding: '60px 0 80px' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {currentServicesList.map((s) => (
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
                        <span>{t.services.moreBtn}</span>
                        <ArrowRight size={14} color="var(--accent-blue)" />
                      </button>
                      <button
                        onClick={() => {
                          setSiteType(s.title)
                          navigateTo('contact')
                        }}
                        style={{ background: 'var(--accent-blue)', color: 'white', padding: '12px 18px', borderRadius: '10px', border: 'none', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
                      >
                        {t.services.quoteBtn}
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
          <div style={{ position: 'relative', padding: '60px 0 45px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.82rem' }}>
                <button
                  type="button"
                  onClick={() => navigateTo('services')}
                  style={{ background: 'none', border: 'none', padding: 0, color: 'var(--accent-blue)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <ArrowLeft size={14} />
                  <span>{t.nav.services}</span>
                </button>
                <span style={{ color: 'var(--text-muted)' }}>/</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{currentServiceDetail.title}</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                {t.services.badge}
              </span>
              <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '12px' }}>{currentServiceDetail.title}</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '680px' }}>{currentServiceDetail.shortDesc}</p>
            </div>
          </div>

          <section style={{ padding: '60px 0 80px' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'start' }}>
                
                {/* Main Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '32px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>{currentServiceDetail.title} {t.services.aboutService}</h2>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: 1.7 }}>{currentServiceDetail.fullDesc}</p>
                  </div>

                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '32px' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={20} color="var(--accent-blue)" />
                      <span>{t.services.whatWeOffer}</span>
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
                      <span>{t.services.whoNeeds}</span>
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
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px' }}>{t.services.ctaTitle}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>{t.services.ctaDesc}</p>
                    </div>
                    <button
                      onClick={() => {
                        setSiteType(currentServiceDetail.title)
                        navigateTo('contact')
                      }}
                      style={{ background: 'var(--accent-blue)', color: 'white', padding: '14px 26px', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>{t.services.quoteBtn}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '100px' }}>
                  
                  {/* Other Services */}
                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '24px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '14px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                      {t.services.allServices}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {currentServicesList.map((srv) => (
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
                      {t.services.tags}
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
                      <span>{t.services.quickContact}</span>
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{t.services.growBusiness}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>{t.services.growDesc}</p>
                    
                    <a href="tel:0106011201" style={{ padding: '10px', borderRadius: '10px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', color: 'var(--text-main)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                      <Phone size={14} color="var(--accent-blue)" />
                      <span>010 601 12 01</span>
                    </a>

                    <a href="https://wa.me/994106011201" target="_blank" rel="noopener noreferrer" style={{ padding: '10px', borderRadius: '10px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', color: 'var(--accent-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                      <MessageCircle size={14} />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setSiteType(currentServiceDetail.title)
                        navigateTo('contact')
                      }}
                      style={{ background: 'var(--accent-blue)', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
                    >
                      {t.services.quoteBtn}
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
          <div style={{ position: 'relative', padding: '60px 0 45px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.82rem' }}>
                <button
                  type="button"
                  onClick={() => navigateTo('home')}
                  style={{ background: 'none', border: 'none', padding: 0, color: 'var(--accent-blue)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <ArrowLeft size={14} />
                  <span>{t.nav.home}</span>
                </button>
                <span style={{ color: 'var(--text-muted)' }}>/</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{t.nav.works}</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                {t.works.badge}
              </span>
              <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '12px' }}>{t.works.title}</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '680px' }}>{t.works.desc}</p>
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
                        <span>{t.works.viewLive}</span>
                        <ExternalLink size={14} />
                      </a>
                      <button
                        onClick={() => {
                          setSiteType(`${w.name} (${w.type})`)
                          navigateTo('contact')
                        }}
                        style={{ background: 'var(--bg-page)', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '10px 16px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        {t.works.orderSimilar}
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
          <div style={{ position: 'relative', padding: '60px 0 45px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.82rem' }}>
                <button
                  type="button"
                  onClick={() => navigateTo('home')}
                  style={{ background: 'none', border: 'none', padding: 0, color: 'var(--accent-blue)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <ArrowLeft size={14} />
                  <span>{t.nav.home}</span>
                </button>
                <span style={{ color: 'var(--text-muted)' }}>/</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{t.nav.about}</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                {t.about.badge}
              </span>
              <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>{t.about.title}</h1>
              <p style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: 1.6, maxWidth: '680px' }}>
                {t.about.desc}
              </p>
            </div>
          </div>

          <section style={{ padding: '60px 0 80px' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '40px' }}>
                {t.about.values.map((val, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '24px', borderRadius: '16px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>{val.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>{val.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--accent-blue)', borderRadius: '20px', padding: '28px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px' }}>{t.finalCta.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>{t.finalCta.desc}</p>
                </div>
                <button
                  onClick={() => navigateTo('contact')}
                  style={{ background: 'var(--accent-blue)', color: 'white', padding: '12px 24px', borderRadius: '10px', fontSize: '0.88rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                >
                  {t.finalCta.primaryBtn} →
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
          <div style={{ position: 'relative', padding: '60px 0 45px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.82rem' }}>
                <button
                  type="button"
                  onClick={() => navigateTo('home')}
                  style={{ background: 'none', border: 'none', padding: 0, color: 'var(--accent-blue)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <ArrowLeft size={14} />
                  <span>{t.nav.home}</span>
                </button>
                <span style={{ color: 'var(--text-muted)' }}>/</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{t.nav.faq}</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                {t.faq.badge}
              </span>
              <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '12px' }}>{t.faq.title}</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '680px' }}>{t.faq.desc}</p>
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
          <div style={{ position: 'relative', padding: '60px 0 45px', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
            <TechCanvas />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.82rem' }}>
                <button
                  type="button"
                  onClick={() => navigateTo('home')}
                  style={{ background: 'none', border: 'none', padding: 0, color: 'var(--accent-blue)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <ArrowLeft size={14} />
                  <span>{t.nav.home}</span>
                </button>
                <span style={{ color: 'var(--text-muted)' }}>/</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{t.nav.contact}</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                {t.contact.badge}
              </span>
              <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '12px' }}>{t.contact.title}</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', maxWidth: '680px', lineHeight: 1.6 }}>
                {t.contact.desc}
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
                    <span>{t.finalCta.whatsappBtn}</span>
                  </a>

                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '20px', fontFamily: 'monospace', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)' }}>
                      <span style={{ color: 'var(--text-sub)' }}>{t.contact.phoneLabel}</span>
                      <a href="tel:0106011201" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 'bold' }}>010 601 12 01</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)' }}>
                      <span style={{ color: 'var(--text-sub)' }}>{t.contact.whatsappLabel}</span>
                      <a href="https://wa.me/994106011201" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 'bold' }}>010 601 12 01</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)' }}>
                      <span style={{ color: 'var(--text-sub)' }}>{t.contact.emailLabel}</span>
                      <a href="mailto:emin.imanverdievv@gmail.com" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 'bold' }}>emin.imanverdievv@gmail.com</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-sub)' }}>{t.contact.addressLabel}</span>
                      <span style={{ color: 'var(--text-main)' }}>Bakı, Azərbaycan</span>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '22px', padding: '28px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px' }}>{t.contact.formTitle}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginBottom: '20px' }}>{t.contact.formDesc}</p>

                  {!isSuccess ? (
                    <form onSubmit={handleEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <div className="grid-two-col">
                        <div>
                          <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', marginBottom: '4px' }}>{t.contact.nameLabel}</label>
                          <input
                            type="text"
                            required
                            placeholder={lang === 'az' ? 'Rəşad Əliyev' : 'John Doe'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.85rem' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', marginBottom: '4px' }}>{t.contact.phoneInputLabel}</label>
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
                          <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', marginBottom: '4px' }}>{t.contact.businessLabel}</label>
                          <input
                            type="text"
                            placeholder={lang === 'az' ? 'Məsələn: Tibb, Təhsil, Mebel' : 'e.g. Medical, Education, Furniture'}
                            value={business}
                            onChange={(e) => setBusiness(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.85rem' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', marginBottom: '4px' }}>{t.contact.siteTypeLabel}</label>
                          <select
                            value={siteType}
                            onChange={(e) => setSiteType(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.85rem' }}
                          >
                            {currentServicesList.map((srv) => (
                              <option key={srv.id} value={srv.title}>{srv.title}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', marginBottom: '4px' }}>{t.contact.messageLabel}</label>
                        <textarea
                          rows={3}
                          placeholder={lang === 'az' ? 'Saytınızda olmasını istədiyiniz əsas məqamlar...' : 'Key requirements for your website...'}
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
                          lang={lang}
                        />
                        {captchaError && (
                          <p style={{ color: '#FF5F56', fontSize: '0.75rem', marginTop: '6px' }}>
                            {t.contact.captchaError}
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
                            <span>{t.contact.submitting}</span>
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>{t.contact.submitBtn}</span>
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-glow)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                        <CheckCircle2 size={28} />
                      </div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '6px' }}>{t.contact.successTitle}</h3>
                      <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem', marginBottom: '18px' }}>
                        {t.contact.successDesc}
                      </p>
                      <button
                        onClick={handleWhatsAppSend}
                        style={{ background: 'var(--accent-blue)', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}
                      >
                        {t.contact.confirmWhatsApp}
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
                    <span>{t.contact.mapTitle}</span>
                  </div>
                  <a href="https://maps.google.com/?q=Baku,+Azerbaijan" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 600 }}>{t.contact.openMaps}</a>
                </div>
                <div style={{ width: '100%', height: '380px', background: 'var(--bg-card)' }}>
                  <iframe
                    title="Google Maps Baku Location"
                    src="https://maps.google.com/maps?q=Baku%20city%20center%20Azerbaijan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
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
            <button onClick={() => navigateTo('home')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>{t.nav.home}</button>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>{t.nav.services}</button>
            <button onClick={() => navigateTo('works')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>{t.nav.works}</button>
            <button onClick={() => navigateTo('about')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>{t.nav.about}</button>
            <button onClick={() => navigateTo('faq')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>{t.nav.faq}</button>
            <button onClick={() => navigateTo('contact')} style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer' }}>{t.nav.contact}</button>
          </div>
          <div>{t.footer.rights}</div>
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
        title="WhatsApp"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
