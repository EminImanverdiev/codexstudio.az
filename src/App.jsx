import React, { useState, useEffect } from 'react'
import {
  MessageCircle, Send, ArrowRight, Laptop, Globe, ShoppingBag,
  Zap, Smartphone, CheckCircle2, ChevronDown, X, Sun, Moon,
  Mail, ExternalLink, Loader2, ArrowUpRight, ShieldCheck, Menu,
  Code2, Palette, Headphones, Search, Phone
} from 'lucide-react'

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
      getQuote: 'Təklif al'
    },
    hero: {
      eyebrow: 'VEB SAYTLARIN HAZIRLANMASI',
      heading: 'Biznesiniz üçün peşəkar veb sayt hazırlayırıq.',
      desc: 'Landing Page, korporativ sayt və e-commerce layihələrinin dizaynı və hazırlanması.',
      primaryBtn: 'Sayt sifarişi',
      secondaryBtn: 'İşlərimizə bax',
      trust1: 'Mobil uyğun',
      trust2: 'SEO optimizasiyası',
      trust3: 'Texniki dəstək',
      tabLanding: 'Landing Page',
      tabCorporate: 'Korporativ sayt',
      tabEcommerce: 'E-commerce sayt',
      previewTag: '✓ Canlı önizləmə'
    },
    trustStrip: {
      items: [
        'Veb saytların hazırlanması',
        'Landing Page hazırlanması',
        'Korporativ saytların hazırlanması',
        'E-commerce saytların hazırlanması',
        'Veb dizayn (UI/UX)',
        'Texniki dəstək',
        'SEO optimizasiyası'
      ],
      tag: 'Kiçik və böyük bizneslər üçün veb xidmətlər.'
    },
    services: {
      badge: 'XİDMƏTLƏRİMİZ',
      title: 'Xidmətlərimiz',
      desc: 'Biznesinizin ehtiyacına uyğun veb saytların dizaynı və hazırlanması.',
      moreBtn: 'Daha ətraflı',
      quoteBtn: 'Təklif al',
      items: [
        {
          id: 'web-dev',
          num: '01',
          title: 'Veb saytların hazırlanması',
          desc: 'Biznesinizin fəaliyyətinə və ehtiyaclarına uyğun funksional veb saytların hazırlanması.',
          icon: 'code'
        },
        {
          id: 'landing',
          num: '02',
          title: 'Landing Page hazırlanması',
          desc: 'Məhsul, xidmət və reklam kampaniyalarının təqdimatı üçün məqsədyönlü bir səhifəlik saytların hazırlanması.',
          icon: 'globe'
        },
        {
          id: 'corporate',
          num: '03',
          title: 'Korporativ saytların hazırlanması',
          desc: 'Şirkətiniz, xidmətləriniz və fəaliyyətiniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi korporativ saytların hazırlanması.',
          icon: 'laptop'
        },
        {
          id: 'ecommerce',
          num: '04',
          title: 'E-commerce saytların hazırlanması',
          desc: 'Məhsulların təqdimatı, sifariş və onlayn satış üçün e-commerce saytların hazırlanması.',
          icon: 'shopping'
        },
        {
          id: 'uiux',
          num: '05',
          title: 'Veb dizayn (UI/UX)',
          desc: 'Saytın istifadəsini rahatlaşdıran, mobil cihazlara uyğun və müasir interfeys dizaynının hazırlanması.',
          icon: 'palette'
        },
        {
          id: 'support',
          num: '06',
          title: 'Texniki dəstək',
          desc: 'Sayt istifadəyə verildikdən sonra texniki məsələlər, yenilənmələr və zəruri dəyişikliklər üzrə dəstək.',
          icon: 'headphones'
        },
        {
          id: 'seo',
          num: '07',
          title: 'SEO optimizasiyası',
          desc: 'Saytın axtarış sistemləri tərəfindən daha düzgün oxunması üçün texniki və struktur SEO optimizasiyası.',
          icon: 'search'
        }
      ]
    },
    finder: {
      badge: 'SEÇİM KÖMƏKÇİSİ',
      title: 'Hansı sayt sizə uyğundur?',
      desc: '2 sadə suala cavab verin, biznesiniz üçün ən optimal formatı anında müəyyən edək.',
      q1: '1. Saytı əsasən nə üçün istəyirsiniz?',
      q1Opts: ['Xidmətimi təqdim etmək', 'Şirkətimi təqdim etmək', 'Onlayn satış etmək', 'Xüsusi sistem hazırlatmaq'],
      q2: '2. Hansı funksiyalar sizə lazımdır?',
      q2Opts: ['Əlaqə forması', 'WhatsApp düyməsi', 'Məhsul kataloqu', 'Onlayn kart ödənişi', 'Admin idarəetmə paneli', 'Rezervasiya / Qeydiyyat'],
      recTag: 'TÖVSİYƏ OLUNAN FORMAT:',
      recTitlePrefix: 'Biznesiniz üçün',
      recTitleSuffix: 'formatı daha uyğundur.',
      btn: 'Təklif al →'
    },
    works: {
      badge: 'İŞLƏRİMİZ',
      title: 'İşlərimiz',
      desc: 'Müxtəlif fəaliyyət sahələrində olan şirkətlər və şəxslər üçün hazırladığımız veb layihələr.',
      viewLive: 'Sayta bax',
      orderSimilar: 'Bənzər sayt sifariş et',
      items: [
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
    },
    process: {
      badge: 'İŞ PROSESİ',
      title: 'Saytın hazırlanması prosesi',
      desc: 'Layihənizin vaxtında və keyfiyyətlə təhvil verilməsi üçün mərhələli iş planı.',
      steps: [
        { num: '01', title: 'Tələblərin müəyyən edilməsi', desc: 'Layihənin məqsədi, saytın strukturu və tələb olunan funksiyalar müəyyən edilir.' },
        { num: '02', title: 'Dizayn', desc: 'Saytın vizual görünüşü və istifadəçi interfeysi hazırlanır.' },
        { num: '03', title: 'Proqramlaşdırma', desc: 'Təsdiqlənmiş dizayn əsasında saytın hazırlanmasına başlanılır.' },
        { num: '04', title: 'Test', desc: 'Sayt müxtəlif ekran ölçülərində və cihazlarda yoxlanılır.' },
        { num: '05', title: 'Təhvil', desc: 'Yekun yoxlamadan sonra sayt istifadəyə verilir.' }
      ]
    },
    about: {
      badge: 'HAQQIMIZDA',
      title: 'Haqqımızda',
      desc: 'Codex Studio bizneslər üçün veb saytların dizaynı və hazırlanması üzrə ixtisaslaşmış komandadır. Məqsədimiz şirkətinizin fəaliyyətini internetdə düzgün, peşəkar və etibarlı şəkildə təqdim edən veb saytlar hazırlamaqdır.',
      values: [
        { title: 'Sadə və anlaşılan ünsiyyət', desc: 'Texniki çətinliklər yaratmadan, layihəniz üçün nəyin lazım olduğunu aydın şəkildə müzakirə edirik.' },
        { title: 'Dəqiq iş qrafiki', desc: 'Hər bir mərhələ razılaşdırılmış vaxt çərçivəsində və planlı şəkildə icra olunur.' },
        { title: 'Daimi texniki dəstək', desc: 'Sayt təhvil verildikdən sonra da server, domen və texniki məsələlərdə dəstəyimizi davam etdiririk.' }
      ]
    },
    faq: {
      badge: 'SUAL-CAVAB',
      title: 'Tez-tez verilən suallar',
      desc: 'Veb saytların hazırlanması və əməkdaşlıq prosesi ilə bağlı sualların cavabları.',
      items: [
        { q: 'Saytın hazırlanması neçə gün çəkir?', a: 'Müddət layihənin növündən asılıdır: Tək səhifəlik Landing Page adətən bir neçə günə, korporativ saytlar və e-commerce layihələri isə orta hesabla 1-3 həftəyə tam hazır vəziyyətə gətirilir.' },
        { q: 'Qiymət necə müəyyən olunur?', a: 'Qiymət saytın növünə (Landing Page, Korporativ, E-commerce), səhifə sayına və tələb olunan funksionallığa (onlayn ödəniş, çoxdillilik və s.) görə şəffaf şəkildə hesablanır.' },
        { q: 'Domen və hosting qiymətə daxildirmi?', a: 'Bəli, istəyinizə uyğun olaraq .az və ya beynəlxalq domenlərin seçilməsi, sürətli serverin quraşdırılması və SSL təhlükəsizlik sertifikatının aktivləşdirilməsi tərəfimizdən təmin edilir.' },
        { q: 'Sayt mobil cihazlara uyğun olacaq?', a: 'Bəli, 100%. Hazırladığımız bütün saytlar mobil cihazlara uyğunlaşdırılır və smartfon, planşet və kompüter ekranlarında qüsursuz işləyir.' },
        { q: 'Sonradan saytda dəyişiklik etmək mümkündür?', a: 'Bəli. Saytın strukturu elə qurulur ki, gələcəkdə yeni səhifələr, məhsullar, xidmətlər və ya yeni funksiyalar asanlıqla əlavə oluna bilsin.' },
        { q: 'Onlayn ödəniş sistemi qoşmaq olar?', a: 'Bəli. E-commerce və sifariş saytlarınıza yerli bankların kartla ödəniş sistemlərini (Kapital Bank, Paşa Bank və s.) təhlükəsiz şəkildə inteqrasiya edirik.' },
        { q: 'Sayt hazır olduqdan sonra texniki dəstək verirsiniz?', a: 'Bəli. Sayt təhvil verildikdən sonra da serverin fasiləsiz işləməsi, domen və texniki suallarınız üzrə dəstəyimiz davam edir.' }
      ]
    },
    finalCta: {
      badge: 'SAYT SİFARİŞİ',
      title: 'Veb sayt sifariş etmək istəyirsiniz?',
      desc: 'Layihəniz haqqında qısa məlumat göndərin. Ehtiyacınıza uyğun həlli birlikdə müəyyən edək.',
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
      businessLabel: 'Biznes sahəsi',
      siteTypeLabel: 'Sayt növü',
      messageLabel: 'Sayt haqqında qısa məlumat / İstəkləriniz',
      submitBtn: 'Təklif al',
      submitting: 'Göndərilir...',
      successTitle: 'Müraciətiniz qəbul olundu!',
      successDesc: 'Məlumatlar email poçtuna çatdırıldı.',
      confirmWhatsApp: 'WhatsApp ilə təsdiqləyin'
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
      getQuote: 'Get a Quote'
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
        'Landing Page development',
        'Corporate website development',
        'E-commerce development',
        'UI/UX Web design',
        'Technical support',
        'SEO optimization'
      ],
      tag: 'Web development solutions for growing businesses.'
    },
    services: {
      badge: 'SERVICES',
      title: 'Our Services',
      desc: 'Design and development of websites tailored to your business needs.',
      moreBtn: 'Learn more',
      quoteBtn: 'Get a quote',
      items: [
        {
          id: 'web-dev',
          num: '01',
          title: 'Web development',
          desc: 'Development of functional websites tailored to your business operations and needs.',
          icon: 'code'
        },
        {
          id: 'landing',
          num: '02',
          title: 'Landing Page development',
          desc: 'Development of single-page targeted websites for presenting products, services, and promotional campaigns.',
          icon: 'globe'
        },
        {
          id: 'corporate',
          num: '03',
          title: 'Corporate website development',
          desc: 'Development of corporate websites that professionally present information about your company, services, and operations.',
          icon: 'laptop'
        },
        {
          id: 'ecommerce',
          num: '04',
          title: 'E-commerce development',
          desc: 'Development of e-commerce websites for product presentation, ordering, and online sales.',
          icon: 'shopping'
        },
        {
          id: 'uiux',
          num: '05',
          title: 'UI/UX Web design',
          desc: 'Design of modern, mobile-compatible interfaces that make website navigation intuitive and smooth.',
          icon: 'palette'
        },
        {
          id: 'support',
          num: '06',
          title: 'Technical support',
          desc: 'Ongoing support for technical matters, updates, and necessary changes after website launch.',
          icon: 'headphones'
        },
        {
          id: 'seo',
          num: '07',
          title: 'SEO optimization',
          desc: 'Technical and structural SEO optimization so search engines can accurately index and read your website.',
          icon: 'search'
        }
      ]
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
      orderSimilar: 'Order a similar website',
      items: [
        {
          id: '01',
          name: 'Sinaps Med — Medical Equipment & Healthcare Platform',
          type: 'Corporate website development',
          desc: 'Medical devices, clinical gynecology equipment catalog, international distribution services, and enterprise healthcare platform.',
          url: 'https://sinapsmed.com',
          displayUrl: 'sinapsmed.com',
          tags: ['Corporate website', 'Product catalog', 'Multilingual', 'Partner network']
        },
        {
          id: '02',
          name: 'Leyla Gasimova — Physics & Science Academy',
          type: 'Landing Page & Personal Website',
          desc: 'Course programs, video presentations, student testimonials, and direct trial lesson registrations.',
          url: 'https://leylagasimova.az',
          displayUrl: 'leylagasimova.az',
          tags: ['Landing Page', 'Course signups', 'Video showcase', 'WhatsApp integration']
        },
        {
          id: '03',
          name: 'Vektor Logistics & Holding',
          type: 'Corporate website development',
          desc: 'Global shipping routes, warehousing capabilities, and multi-page structured corporate presentation.',
          url: 'https://vektor-holding.codexstudio.az',
          displayUrl: 'vektor-holding.az',
          tags: ['Corporate website', 'Service catalog', 'Multilingual', 'Inquiry pipeline']
        },
        {
          id: '04',
          name: 'Aura Home & Living',
          type: 'E-commerce development',
          desc: 'Designer furniture and home decor catalog with instant filters, cart checkout, and bank card payments.',
          url: 'https://aurahome.codexstudio.az',
          displayUrl: 'aurahome.az',
          tags: ['E-commerce', 'Cart system', 'Card payment', 'Mobile responsive']
        }
      ]
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
      desc: 'Answers to common questions regarding website development and collaboration.',
      items: [
        { q: 'How long does it take to build a website?', a: 'It depends on the project: Single-page landing pages take a few days, while multi-page corporate and e-commerce projects take on average 1 to 3 weeks.' },
        { q: 'How is pricing determined?', a: 'Pricing is calculated transparently based on website type, page count, and required functionality.' },
        { q: 'Are domain and hosting included?', a: 'Yes. We assist with domain selection, high-speed hosting setup, and automated SSL security certificates.' },
        { q: 'Will the website work on mobile devices?', a: 'Yes, 100%. Every website is responsive across all smartphones, tablets, and computers.' },
        { q: 'Can changes be made later?', a: 'Yes. The structure allows new pages, products, services, and features to be easily added.' },
        { q: 'Can an online payment system be integrated?', a: 'Yes. We integrate secure bank card payment gateways for online stores and booking platforms.' },
        { q: 'Do you provide support after launch?', a: 'Yes. We remain available for server monitoring, domain management, and technical guidance.' }
      ]
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
      confirmWhatsApp: 'Confirm via WhatsApp'
    },
    footer: {
      rights: '© 2026 Codex Studio. All rights reserved.'
    }
  }
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home')
  const [lang, setLang] = useState(() => localStorage.getItem('codex_lang') || 'az')
  const [theme, setTheme] = useState(() => localStorage.getItem('codex_theme') || 'dark')
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

  const t = translations[lang] || translations.az

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
        type: lang === 'az' ? 'E-commerce saytların hazırlanması' : 'E-commerce development',
        desc: lang === 'az' ? 'Məhsulların təqdimatı, sifariş və onlayn satış üçün e-commerce saytların hazırlanması.' : 'Development of e-commerce websites for product presentation, ordering, and online sales.'
      }
    }
    if (quizPurpose === 0) {
      return {
        type: lang === 'az' ? 'Landing Page hazırlanması' : 'Landing Page development',
        desc: lang === 'az' ? 'Məhsul, xidmət və reklam kampaniyalarının təqdimatı üçün məqsədyönlü bir səhifəlik saytların hazırlanması.' : 'Development of single-page targeted websites for presenting products, services, and promotional campaigns.'
      }
    }
    if (quizPurpose === 3 || quizFeatures.includes(4) || quizFeatures.includes(5)) {
      return {
        type: lang === 'az' ? 'Fərdi veb layihələrin hazırlanması' : 'Custom web portal development',
        desc: lang === 'az' ? 'Biznesinizin unikal tələblərinə uyğun xüsusi kalkulyatorlar, rezervasiya modulları və fərdi idarəetmə sistemi.' : 'Custom booking calculators, management modules and specialized systems.'
      }
    }
    return {
      type: lang === 'az' ? 'Korporativ saytların hazırlanması' : 'Corporate website development',
      desc: lang === 'az' ? 'Şirkətiniz, xidmətləriniz və fəaliyyətiniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi korporativ saytların hazırlanması.' : 'Development of corporate websites that professionally present information about your company, services, and operations.'
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

  const navigateTo = (route) => {
    setCurrentRoute(route)
    setMobileMenuOpen(false)
  }

  const currentWork = t.works.items[activeWork] || t.works.items[0]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-page)', color: 'var(--text-main)', overflowX: 'hidden' }}>
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
              style={{ background: 'none', border: 'none', color: currentRoute === 'services' ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: currentRoute === 'services' ? 700 : 500, fontSize: '0.88rem', cursor: 'pointer' }}
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
              <span>{t.nav.getQuote}</span>
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
            <button onClick={() => navigateTo('home')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>01. {t.nav.home}</button>
            <button onClick={() => navigateTo('services')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>02. {t.nav.services}</button>
            <button onClick={() => navigateTo('works')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>03. {t.nav.works}</button>
            <button onClick={() => navigateTo('about')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>04. {t.nav.about}</button>
            <button onClick={() => navigateTo('faq')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>05. {t.nav.faq}</button>
            <button onClick={() => navigateTo('contact')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--text-main)', fontSize: '1.2rem', padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>06. {t.nav.contact}</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '24px' }}>
            <button
              onClick={() => navigateTo('contact')}
              style={{ background: 'var(--accent-blue)', color: 'white', padding: '14px', borderRadius: '12px', textAlign: 'center', fontWeight: 600, border: 'none', fontSize: '0.95rem', cursor: 'pointer' }}
            >
              {t.hero.primaryBtn} →
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
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.72rem',
                    fontFamily: 'monospace',
                    color: 'var(--text-sub)',
                    marginBottom: '16px'
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)', boxShadow: '0 0 8px var(--accent-blue)' }}></span>
                    <span>{t.hero.eyebrow}</span>
                  </div>

                  <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', lineHeight: 1.14, fontWeight: 800, marginBottom: '18px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
                    {t.hero.heading}
                  </h1>

                  <p style={{ color: 'var(--text-sub)', fontSize: 'clamp(0.92rem, 2vw, 1.1rem)', lineHeight: 1.6, maxWidth: '540px', marginBottom: '28px' }}>
                    {t.hero.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '28px' }}>
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
                      <span>{t.hero.primaryBtn}</span>
                      <ArrowRight size={15} />
                    </button>

                    <button
                      onClick={() => navigateTo('works')}
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
                      <span>{t.hero.secondaryBtn}</span>
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.82rem', color: 'var(--text-sub)', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="var(--accent-blue)" /><span style={{ color: 'var(--text-main)' }}>{t.hero.trust1}</span></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="var(--accent-blue)" /><span style={{ color: 'var(--text-main)' }}>{t.hero.trust2}</span></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={15} color="var(--accent-blue)" /><span style={{ color: 'var(--text-main)' }}>{t.hero.trust3}</span></div>
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
                        {t.hero.tabLanding}
                      </button>
                      <button
                        onClick={() => setHeroTab('corporate')}
                        style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'corporate' ? 'var(--accent-blue)' : 'transparent', color: heroTab === 'corporate' ? 'white' : 'var(--text-sub)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        {t.hero.tabCorporate}
                      </button>
                      <button
                        onClick={() => setHeroTab('ecommerce')}
                        style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: heroTab === 'ecommerce' ? 'var(--accent-blue)' : 'transparent', color: heroTab === 'ecommerce' ? 'white' : 'var(--text-sub)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        {t.hero.tabEcommerce}
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
                            {lang === 'az' ? 'Məhsul, xidmət və kursların təqdimatı üçün məqsədyönlü bir səhifəlik sayt.' : 'Targeted single-page platform for presenting courses and student registrations.'}
                          </p>
                          <a href="https://leylagasimova.az" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--accent-blue)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>{t.works.viewLive} →</a>
                        </div>
                      )}

                      {heroTab === 'corporate' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--accent-blue)', marginBottom: '6px' }}>CORPORATE PORTAL</div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.25 }}>Sinaps Med — Tibbi Avadanlıq & Səhiyyə</h3>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '18px' }}>
                            {lang === 'az' ? 'Şirkətiniz və xidmətləriniz haqqında məlumatların peşəkar şəkildə təqdim edildiyi rəsmi sayt.' : 'Official enterprise healthcare portal presenting equipment catalogs and distribution services.'}
                          </p>
                          <a href="https://sinapsmed.com" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--accent-blue)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>{t.works.viewLive} →</a>
                        </div>
                      )}

                      {heroTab === 'ecommerce' && (
                        <div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: 'var(--accent-blue)', marginBottom: '6px' }}>E-COMMERCE STORE</div>
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
                {t.trustStrip.items.slice(0, 5).map((item, i) => (
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
                {t.services.items.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => {
                      setSiteType(s.title)
                      navigateTo('contact')
                    }}
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
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '20px' }}>{s.desc}</p>
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
      {/* PAGE: XİDMƏTLƏR */}
      {/* ======================================================== */}
      {currentRoute === 'services' && (
        <section style={{ padding: '60px 0 80px' }}>
          <div className="container">
            <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                {t.services.badge}
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>{t.services.title}</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '1rem', lineHeight: 1.6 }}>{t.services.desc}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {t.services.items.map((s) => (
                <div key={s.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {renderIcon(s.icon)}
                      </div>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--accent-blue)', fontWeight: 'bold' }}>{s.num}</span>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '10px' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: '24px' }}>{s.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSiteType(s.title)
                      navigateTo('contact')
                    }}
                    style={{ background: 'var(--accent-blue)', color: 'white', padding: '12px', borderRadius: '10px', border: 'none', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <span>{t.services.quoteBtn}</span>
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
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                {t.works.badge}
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>{t.works.title}</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '1rem', lineHeight: 1.6 }}>{t.works.desc}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {t.works.items.map((w) => (
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
      )}

      {/* ======================================================== */}
      {/* PAGE: HAQQIMIZDA */}
      {/* ======================================================== */}
      {currentRoute === 'about' && (
        <section style={{ padding: '60px 0 80px' }}>
          <div className="container">
            <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                {t.about.badge}
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>{t.about.title}</h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '24px' }}>
                {t.about.desc}
              </p>
            </div>

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
      )}

      {/* ======================================================== */}
      {/* PAGE: FAQ */}
      {/* ======================================================== */}
      {currentRoute === 'faq' && (
        <section style={{ padding: '60px 0 80px' }}>
          <div className="container">
            <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                {t.faq.badge}
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>{t.faq.title}</h1>
              <p style={{ color: 'var(--text-sub)', fontSize: '1rem', lineHeight: 1.6 }}>{t.faq.desc}</p>
            </div>

            <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {t.faq.items.map((f, idx) => (
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
      )}

      {/* ======================================================== */}
      {/* PAGE: CONTACT */}
      {/* ======================================================== */}
      {currentRoute === 'contact' && (
        <section style={{ padding: '60px 0 80px' }}>
          <div className="container">
            <div className="contact-grid">
              <div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                  {t.contact.badge}
                </span>
                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '12px' }}>{t.contact.title}</h1>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                  {t.contact.desc}
                </p>

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
                          placeholder="Rəşad Əliyev"
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
                          placeholder="Məsələn: Tibb, Təhsil, Mebel"
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
                          {t.services.items.map((srv) => (
                            <option key={srv.id} value={srv.title}>{srv.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--text-sub)', marginBottom: '4px' }}>{t.contact.messageLabel}</label>
                      <textarea
                        rows={3}
                        placeholder="Saytınızda olmasını istədiyiniz əsas məqamlar..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'var(--bg-input)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.85rem', resize: 'none' }}
                      />
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
          </div>
        </section>
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
        title="WhatsApp ilə əlaqə"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
