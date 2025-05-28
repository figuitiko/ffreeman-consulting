"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations object
const translations = {
  en: {
    // Header
    services: "Services",
    about: "About",
    contact: "Contact",
    getQuote: "Get a Quote",

    // Hero Section
    heroTitle: "Secure Technology Solutions for Your Business",
    heroSubtitle:
      "Comprehensive IT services including web hosting, development, and video surveillance systems tailored to your needs.",
    ourServices: "Our Services",
    contactUs: "Contact Us",

    // Services Section
    servicesTitle: "Our Services",
    servicesSubtitle:
      "We provide comprehensive technology solutions to help your business thrive in the digital landscape.",
    webHosting: "Web Hosting",
    webHostingDesc:
      "Reliable and secure hosting solutions with 99.9% uptime guarantee, 24/7 support, and scalable resources.",
    highPerformance: "High-performance servers",
    dailyBackups: "Daily backups",
    ddosProtection: "DDoS protection",
    learnMore: "Learn More",

    webDevelopment: "Web Development",
    webDevelopmentDesc: "Custom website and application development with modern technologies and responsive design.",
    responsiveDesign: "Responsive design",
    ecommerceSolutions: "E-commerce solutions",
    cmsIntegration: "CMS integration",

    videoSurveillance: "Video Surveillance",
    videoSurveillanceDesc:
      "Advanced security camera systems with remote monitoring, motion detection, and cloud storage.",
    hdCameras: "HD & 4K cameras",
    remoteAccess: "Remote access",
    smartAlerts: "Smart alerts",

    // About Section
    whyChoose: "Why Choose Freeman Consulting?",
    experienceDesc:
      "With over 10 years of experience in the technology sector, we provide reliable, secure, and innovative solutions tailored to meet the unique needs of your business.",
    yearsExperience: "Years Experience",
    clientsServed: "Clients Served",
    supportAvailable: "Support Available",

    // CTA Section
    readyToSecure: "Ready to Secure Your Business?",
    ctaDesc:
      "Contact us today for a free consultation and discover how our services can help protect and grow your business.",
    getStarted: "Get Started",

    // Contact Section
    contactTitle: "Contact Us",
    contactSubtitle: "Have questions or ready to get started? Reach out to our team for expert assistance.",
    getInTouch: "Get in Touch",
    phone: "Phone",
    email: "Email",
    office: "Office",
    sendMessage: "Send a Message",
    name: "Name",
    subject: "Subject",
    message: "Message",
    send: "Send Message",

    // Footer
    company: "Company",
    aboutUs: "About Us",
    ourTeam: "Our Team",
    testimonials: "Testimonials",
    careers: "Careers",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    allRightsReserved: "All rights reserved.",
    itConsulting: "IT Consulting",
    providingTech: "Providing comprehensive technology solutions for businesses of all sizes.",

    // Language
    switchToSpanish: "Español",
    switchToEnglish: "English",

    // Web Hosting Page
    webHostingTitle: "Enterprise-Grade Web Hosting Solutions",
    webHostingSubtitle:
      "Reliable, secure, and scalable hosting services designed to keep your business online 24/7 with 99.9% uptime guarantee.",
    getStarted: "Get Started",
    backToHome: "Back to Home",
    hostingFeatures: "Our Hosting Features",
    hostingFeaturesDesc:
      "We provide comprehensive hosting solutions with cutting-edge technology and unmatched support.",
    ssdStorage: "SSD Storage",
    ssdStorageDesc: "All our hosting plans come with ultra-fast SSD storage for optimal performance and reliability.",
    cloudInfrastructure: "Cloud Infrastructure",
    cloudInfrastructureDesc:
      "Our cloud-based infrastructure ensures high availability and seamless scalability as your needs grow.",
    globalCDN: "Global CDN",
    globalCDNDesc:
      "Deliver content faster to your users with our integrated content delivery network spanning multiple continents.",
    advancedSecurity: "Advanced Security",
    advancedSecurityDesc:
      "Protect your website with free SSL certificates, DDoS protection, and regular security audits.",
    resourceOptimization: "Resource Optimization",
    resourceOptimizationDesc:
      "Our servers are optimized for performance with the latest hardware and software configurations.",
    support247: "24/7 Support",
    support247Desc:
      "Our expert support team is available around the clock to assist you with any hosting-related issues.",
    hostingPlans: "Hosting Plans",
    hostingPlansDesc:
      "Choose the perfect hosting plan for your business needs. All plans include 24/7 support and a 30-day money-back guarantee.",
    starter: "Starter",
    business: "Business",
    enterprise: "Enterprise",
    month: "/month",
    website: "Website",
    websites: "Websites",
    unlimited: "Unlimited",
    ssdStorage10: "10GB SSD Storage",
    ssdStorage50: "50GB SSD Storage",
    ssdStorage100: "100GB SSD Storage",
    unmeteredBandwidth: "Unmetered Bandwidth",
    freeSsl: "Free SSL Certificate",
    freeDomain: "Free Domain",
    prioritySupport: "Priority Support",
    selectPlan: "Select Plan",
    popular: "POPULAR",
    readyToGetStarted: "Ready to Get Started?",
    contactTeam:
      "Contact our team today to discuss your hosting needs and find the perfect solution for your business.",
    contactUs: "Contact Us",

    // Web Development Page
    webDevTitle: "Custom Web Development Solutions",
    webDevSubtitle:
      "From responsive websites to complex web applications, we create digital experiences that drive results for your business.",
    startYourProject: "Start Your Project",
    ourDevServices: "Our Development Services",
    devServicesDesc: "We offer a comprehensive range of web development services to help your business succeed online.",
    websiteDesign: "Website Design & Development",
    websiteDesignDesc:
      "Custom website design and development that reflects your brand identity and meets your business objectives.",
    responsiveDesign: "Responsive design for all devices",
    seoFriendly: "SEO-friendly architecture",
    cmsIntegration: "Content management systems",
    mobileAppDev: "Mobile App Development",
    mobileAppDevDesc:
      "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
    iosAndroid: "iOS and Android development",
    reactNative: "React Native & Flutter expertise",
    appStore: "App store optimization",
    ecommerce: "E-Commerce Solutions",
    ecommerceDesc:
      "Powerful online stores that drive sales and provide exceptional shopping experiences for your customers.",
    shopify: "Shopify, WooCommerce, Magento",
    paymentGateway: "Payment gateway integration",
    inventory: "Inventory management systems",
    customWebApps: "Custom Web Applications",
    customWebAppsDesc:
      "Tailored web applications that automate processes, improve efficiency, and solve complex business challenges.",
    saas: "SaaS application development",
    enterprise: "Enterprise solutions",
    apiDev: "API development & integration",
    techStack: "Our Technology Stack",
    techStackDesc:
      "We use the latest technologies and frameworks to build robust, scalable, and high-performance applications.",
    devProcess: "Our Development Process",
    devProcessDesc:
      "We follow a structured approach to ensure your project is delivered on time, within budget, and to your exact specifications.",
    discovery: "Discovery",
    discoveryDesc: "We start by understanding your business goals, target audience, and project requirements.",
    planning: "Planning",
    planningDesc: "We create a detailed project plan, including timelines, milestones, and resource allocation.",
    development: "Development",
    developmentDesc: "Our team of skilled developers brings your project to life using the latest technologies.",
    launchSupport: "Launch & Support",
    launchSupportDesc: "We deploy your project and provide ongoing maintenance and support to ensure its success.",
    readyToStartProject: "Ready to Start Your Project?",
    contactDevTeam: "Contact our team today to discuss your web development needs and get a free consultation.",
    getInTouch: "Get In Touch",

    // Video Surveillance Page
    videoSurvTitle: "Advanced Video Surveillance Systems",
    videoSurvSubtitle:
      "Protect your business, property, and assets with state-of-the-art security camera systems and remote monitoring solutions.",
    securityAssessment: "Get a Security Assessment",
    securitySolutions: "Comprehensive Security Solutions",
    securitySolutionsDesc:
      "Our video surveillance systems offer advanced features to keep your property secure and provide peace of mind.",
    hdCameras: "HD & 4K Cameras",
    hdCamerasDesc:
      "Crystal-clear video quality with high-definition and 4K resolution cameras for detailed monitoring and identification.",
    nightVision: "Night vision capabilities",
    wideAngle: "Wide-angle coverage",
    weatherResistant: "Weather-resistant options",
    remoteAccess: "Remote Access",
    remoteAccessDesc:
      "Monitor your property from anywhere using your smartphone, tablet, or computer with our secure remote access solutions.",
    mobileApp: "Mobile app integration",
    multiDevice: "Multi-device support",
    realTimeViewing: "Real-time viewing",
    smartAlerts: "Smart Alerts",
    smartAlertsDesc:
      "Receive instant notifications when motion is detected or unusual activity occurs on your property.",
    motionDetection: "Motion detection",
    customAlerts: "Customizable alerts",
    emailPush: "Email and push notifications",
    secureStorage: "Secure Storage",
    secureStorageDesc:
      "Store your footage securely with our cloud-based and local storage solutions for easy retrieval when needed.",
    cloudStorage: "Cloud storage options",
    encryptedData: "Encrypted data protection",
    retentionPeriods: "Flexible retention periods",
    professionalInstall: "Professional Installation",
    professionalInstallDesc:
      "Our team of experts will design and install a custom surveillance system tailored to your specific needs.",
    siteAssessment: "Site assessment",
    customDesign: "Custom system design",
    professionalMounting: "Professional mounting",
    ongoingSupport: "Ongoing Support",
    ongoingSupportDesc:
      "We provide maintenance, troubleshooting, and support services to ensure your system operates at peak performance.",
    techSupport: "24/7 technical support",
    regularMaintenance: "Regular maintenance",
    systemUpgrades: "System upgrades",
    industriesServe: "Industries We Serve",
    industriesServeDesc:
      "Our surveillance solutions are designed to meet the unique security needs of various industries.",
    retail: "Retail",
    retailDesc: "Prevent theft, monitor customer behavior, and ensure employee compliance.",
    commercial: "Commercial",
    commercialDesc: "Protect your business assets, monitor access points, and enhance overall security.",
    residential: "Residential",
    residentialDesc: "Keep your home and family safe with advanced security camera systems.",
    warehousing: "Warehousing",
    warehousingDesc: "Monitor inventory, prevent theft, and ensure safe operations in your facility.",
    healthcare: "Healthcare",
    healthcareDesc: "Enhance patient safety, secure restricted areas, and protect valuable equipment.",
    education: "Education",
    educationDesc: "Create a safe learning environment for students, staff, and visitors.",
    readyToSecure: "Ready to Secure Your Property?",
    securityConsultation:
      "Contact our team today for a free security assessment and discover how our surveillance solutions can protect your business or home.",
    scheduleConsultation: "Schedule a Consultation",

    // About Us Page
    aboutUsTitle: "About Freeman Consulting",
    aboutUsSubtitle: "Your Trusted Technology Partner Since 2010",
    ourStory: "Our Story",
    ourStoryContent:
      "Freeman Consulting was founded in 2010 with a simple mission: to provide businesses with reliable, innovative technology solutions that drive growth and success. What began as a small IT consulting firm has grown into a comprehensive technology services provider, offering web hosting, development, and security solutions to businesses of all sizes.",
    ourMission: "Our Mission",
    ourMissionContent:
      "Our mission is to empower businesses through technology. We believe that the right technology solutions can transform operations, enhance customer experiences, and drive business growth. We are committed to delivering high-quality services that meet the unique needs of each client.",
    ourValues: "Our Values",
    valueIntegrity: "Integrity",
    valueIntegrityDesc: "We conduct our business with the highest ethical standards and transparency.",
    valueExcellence: "Excellence",
    valueExcellenceDesc:
      "We strive for excellence in everything we do, from customer service to technical implementation.",
    valueInnovation: "Innovation",
    valueInnovationDesc: "We embrace new technologies and approaches to deliver cutting-edge solutions.",
    valueCollaboration: "Collaboration",
    valueCollaborationDesc:
      "We work closely with our clients to understand their needs and develop tailored solutions.",
    joinOurJourney: "Join Our Journey",
    joinOurJourneyContent:
      "We're constantly evolving and growing, and we invite you to be a part of our journey. Whether you're looking for technology solutions for your business or interested in joining our team, we'd love to connect with you.",

    // Testimonials Page
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Don't just take our word for it - hear from some of our satisfied clients",
    clientsSay: "Our Clients' Success Stories",
    readMore: "Read More",
    readLess: "Read Less",

    // Our Team Page
    teamTitle: "Meet Our Team",
    teamSubtitle: "The talented professionals behind Freeman Consulting",
    leadershipTeam: "Leadership Team",
    developmentTeam: "Development Team",
    supportTeam: "Support Team",
    ceo: "Chief Executive Officer",
    cto: "Chief Technology Officer",
    coo: "Chief Operations Officer",
    leadDev: "Lead Developer",
    seniorDev: "Senior Developer",
    frontendDev: "Frontend Developer",
    backendDev: "Backend Developer",
    supportManager: "Support Manager",
    supportSpecialist: "Support Specialist",
    technicalSupport: "Technical Support",
    joinTeam: "Join Our Team",
    joinTeamContent: "Interested in working with us? Check out our current openings on our Careers page.",
    viewOpenings: "View Openings",

    // Careers Page
    careersTitle: "Careers at Freeman Consulting",
    careersSubtitle: "Join our team of technology enthusiasts",
    whyWorkWithUs: "Why Work With Us",
    benefitsTitle: "Benefits & Perks",
    currentOpenings: "Current Openings",
    noOpenings: "No openings at the moment. Please check back later!",
    applyNow: "Apply Now",
    remoteWork: "Remote Work Options",
    remoteWorkDesc: "Flexible work arrangements including remote and hybrid options.",
    healthInsurance: "Health Insurance",
    healthInsuranceDesc: "Comprehensive health, dental, and vision coverage for you and your family.",
    paidTimeOff: "Paid Time Off",
    paidTimeOffDesc: "Generous vacation policy and paid holidays throughout the year.",
    professionalDev: "Professional Development",
    professionalDevDesc: "Opportunities for continued learning and career advancement.",
    teamEvents: "Team Events",
    teamEventsDesc: "Regular team-building activities and social events.",
    competitiveSalary: "Competitive Salary",
    competitiveSalaryDesc: "Compensation packages that recognize your skills and experience.",
    jobRequirements: "Requirements",
    jobResponsibilities: "Responsibilities",
    jobLocation: "Location",
    jobType: "Job Type",
    remote: "Remote",
    hybrid: "Hybrid",
    onsite: "Onsite",
    fullTime: "Full-time",
    partTime: "Part-time",
    contract: "Contract",
    applicationForm: "Application Form",
  },
  es: {
    // Header
    services: "Servicios",
    about: "Nosotros",
    contact: "Contacto",
    getQuote: "Solicitar Presupuesto",

    // Hero Section
    heroTitle: "Soluciones Tecnológicas Seguras para su Empresa",
    heroSubtitle:
      "Servicios integrales de TI que incluyen alojamiento web, desarrollo y sistemas de videovigilancia adaptados a sus necesidades.",
    ourServices: "Nuestros Servicios",
    contactUs: "Contáctenos",

    // Services Section
    servicesTitle: "Nuestros Servicios",
    servicesSubtitle:
      "Proporcionamos soluciones tecnológicas integrales para ayudar a su empresa a prosperar en el entorno digital.",
    webHosting: "Alojamiento Web",
    webHostingDesc:
      "Soluciones de alojamiento confiables y seguras con garantía de tiempo de actividad del 99.9%, soporte 24/7 y recursos escalables.",
    highPerformance: "Servidores de alto rendimiento",
    dailyBackups: "Copias de seguridad diarias",
    ddosProtection: "Protección DDoS",
    learnMore: "Más Información",

    webDevelopment: "Desarrollo Web",
    webDevelopmentDesc:
      "Desarrollo de sitios web y aplicaciones personalizadas con tecnologías modernas y diseño responsive.",
    responsiveDesign: "Diseño responsive",
    ecommerceSolutions: "Soluciones de comercio electrónico",
    cmsIntegration: "Integración de CMS",

    videoSurveillance: "Videovigilancia",
    videoSurveillanceDesc:
      "Sistemas avanzados de cámaras de seguridad con monitoreo remoto, detección de movimiento y almacenamiento en la nube.",
    hdCameras: "Cámaras HD y 4K",
    remoteAccess: "Acceso remoto",
    smartAlerts: "Alertas inteligentes",

    // About Section
    whyChoose: "¿Por qué elegir Freeman Consulting?",
    experienceDesc:
      "Con más de 10 años de experiencia en el sector tecnológico, ofrecemos soluciones confiables, seguras e innovadoras adaptadas para satisfacer las necesidades únicas de su empresa.",
    yearsExperience: "Años de Experiencia",
    clientsServed: "Clientes Atendidos",
    supportAvailable: "Soporte Disponible",

    // CTA Section
    readyToSecure: "¿Listo para Proteger su Empresa?",
    ctaDesc:
      "Contáctenos hoy para una consulta gratuita y descubra cómo nuestros servicios pueden ayudar a proteger y hacer crecer su negocio.",
    getStarted: "Comenzar",

    // Contact Section
    contactTitle: "Contáctenos",
    contactSubtitle:
      "¿Tiene preguntas o está listo para comenzar? Comuníquese con nuestro equipo para obtener asistencia experta.",
    getInTouch: "Póngase en Contacto",
    phone: "Teléfono",
    email: "Correo Electrónico",
    office: "Oficina",
    sendMessage: "Enviar un Mensaje",
    name: "Nombre",
    subject: "Asunto",
    message: "Mensaje",
    send: "Enviar Mensaje",

    // Footer
    company: "Empresa",
    aboutUs: "Sobre Nosotros",
    ourTeam: "Nuestro Equipo",
    testimonials: "Testimonios",
    careers: "Carreras",
    legal: "Legal",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    cookiePolicy: "Política de Cookies",
    allRightsReserved: "Todos los derechos reservados.",
    itConsulting: "Consultoría TI",
    providingTech: "Proporcionando soluciones tecnológicas integrales para empresas de todos los tamaños.",

    // Language
    switchToSpanish: "Español",
    switchToEnglish: "English",

    // Web Hosting Page
    webHostingTitle: "Soluciones de Alojamiento Web de Nivel Empresarial",
    webHostingSubtitle:
      "Servicios de alojamiento confiables, seguros y escalables diseñados para mantener su negocio en línea 24/7 con garantía de tiempo de actividad del 99.9%.",
    getStarted: "Comenzar",
    backToHome: "Volver al Inicio",
    hostingFeatures: "Nuestras Características de Alojamiento",
    hostingFeaturesDesc:
      "Proporcionamos soluciones de alojamiento integrales con tecnología de vanguardia y soporte inigualable.",
    ssdStorage: "Almacenamiento SSD",
    ssdStorageDesc:
      "Todos nuestros planes de alojamiento vienen con almacenamiento SSD ultrarrápido para un rendimiento y fiabilidad óptimos.",
    cloudInfrastructure: "Infraestructura en la Nube",
    cloudInfrastructureDesc:
      "Nuestra infraestructura basada en la nube garantiza alta disponibilidad y escalabilidad perfecta a medida que crecen sus necesidades.",
    globalCDN: "CDN Global",
    globalCDNDesc:
      "Entregue contenido más rápido a sus usuarios con nuestra red de distribución de contenido integrada que abarca múltiples continentes.",
    advancedSecurity: "Seguridad Avanzada",
    advancedSecurityDesc:
      'Proteja su sitio web con certificados SSL gratuitos, protección DDoS y auditorías "Proteja su sitio web con certificados SSL gratuitos, protección DDoS y auditorías de seguridad regulares.',
    resourceOptimization: "Optimización de Recursos",
    resourceOptimizationDesc:
      "Nuestros servidores están optimizados para el rendimiento con las últimas configuraciones de hardware y software.",
    support247: "Soporte 24/7",
    support247Desc:
      "Nuestro equipo de soporte experto está disponible las 24 horas para ayudarlo con cualquier problema relacionado con el alojamiento.",
    hostingPlans: "Planes de Alojamiento",
    hostingPlansDesc:
      "Elija el plan de alojamiento perfecto para las necesidades de su negocio. Todos los planes incluyen soporte 24/7 y garantía de devolución de dinero de 30 días.",
    starter: "Inicial",
    business: "Negocio",
    enterprise: "Empresarial",
    month: "/mes",
    website: "Sitio Web",
    websites: "Sitios Web",
    unlimited: "Ilimitados",
    ssdStorage10: "10GB Almacenamiento SSD",
    ssdStorage50: "50GB Almacenamiento SSD",
    ssdStorage100: "100GB Almacenamiento SSD",
    unmeteredBandwidth: "Ancho de Banda Sin Medición",
    freeSsl: "Certificado SSL Gratuito",
    freeDomain: "Dominio Gratuito",
    prioritySupport: "Soporte Prioritario",
    selectPlan: "Seleccionar Plan",
    popular: "POPULAR",
    readyToGetStarted: "¿Listo para Comenzar?",
    contactTeam:
      "Contacte a nuestro equipo hoy para discutir sus necesidades de alojamiento y encontrar la solución perfecta para su negocio.",
    contactUs: "Contáctenos",

    // Web Development Page
    webDevTitle: "Soluciones de Desarrollo Web Personalizadas",
    webDevSubtitle:
      "Desde sitios web responsivos hasta aplicaciones web complejas, creamos experiencias digitales que impulsan resultados para su negocio.",
    startYourProject: "Inicie su Proyecto",
    ourDevServices: "Nuestros Servicios de Desarrollo",
    devServicesDesc:
      "Ofrecemos una amplia gama de servicios de desarrollo web para ayudar a su negocio a tener éxito en línea.",
    websiteDesign: "Diseño y Desarrollo de Sitios Web",
    websiteDesignDesc:
      "Diseño y desarrollo de sitios web personalizados que reflejan la identidad de su marca y cumplen con los objetivos de su negocio.",
    responsiveDesign: "Diseño responsivo para todos los dispositivos",
    seoFriendly: "Arquitectura amigable para SEO",
    cmsIntegration: "Sistemas de gestión de contenido",
    mobileAppDev: "Desarrollo de Aplicaciones Móviles",
    mobileAppDevDesc:
      "Aplicaciones móviles nativas y multiplataforma que proporcionan experiencias de usuario perfectas en todos los dispositivos.",
    iosAndroid: "Desarrollo para iOS y Android",
    reactNative: "Experiencia en React Native y Flutter",
    appStore: "Optimización para tiendas de aplicaciones",
    ecommerce: "Soluciones de Comercio Electrónico",
    ecommerceDesc:
      "Tiendas en línea potentes que impulsan las ventas y proporcionan experiencias de compra excepcionales para sus clientes.",
    shopify: "Shopify, WooCommerce, Magento",
    paymentGateway: "Integración de pasarelas de pago",
    inventory: "Sistemas de gestión de inventario",
    customWebApps: "Aplicaciones Web Personalizadas",
    customWebAppsDesc:
      "Aplicaciones web a medida que automatizan procesos, mejoran la eficiencia y resuelven desafíos empresariales complejos.",
    saas: "Desarrollo de aplicaciones SaaS",
    enterprise: "Soluciones empresariales",
    apiDev: "Desarrollo e integración de API",
    techStack: "Nuestra Pila Tecnológica",
    techStackDesc:
      "Utilizamos las últimas tecnologías y frameworks para construir aplicaciones robustas, escalables y de alto rendimiento.",
    devProcess: "Nuestro Proceso de Desarrollo",
    devProcessDesc:
      "Seguimos un enfoque estructurado para garantizar que su proyecto se entregue a tiempo, dentro del presupuesto y según sus especificaciones exactas.",
    discovery: "Descubrimiento",
    discoveryDesc:
      "Comenzamos por comprender los objetivos de su negocio, el público objetivo y los requisitos del proyecto.",
    planning: "Planificación",
    planningDesc: "Creamos un plan de proyecto detallado, que incluye cronogramas, hitos y asignación de recursos.",
    development: "Desarrollo",
    developmentDesc:
      "Nuestro equipo de desarrolladores expertos da vida a su proyecto utilizando las últimas tecnologías.",
    launchSupport: "Lanzamiento y Soporte",
    launchSupportDesc:
      "Implementamos su proyecto y proporcionamos mantenimiento y soporte continuos para garantizar su éxito.",
    readyToStartProject: "¿Listo para Iniciar su Proyecto?",
    contactDevTeam:
      "Contacte a nuestro equipo hoy para discutir sus necesidades de desarrollo web y obtener una consulta gratuita.",
    getInTouch: "Póngase en Contacto",

    // Video Surveillance Page
    videoSurvTitle: "Sistemas Avanzados de Videovigilancia",
    videoSurvSubtitle:
      "Proteja su negocio, propiedad y activos con sistemas de cámaras de seguridad de última generación y soluciones de monitoreo remoto.",
    securityAssessment: "Obtener una Evaluación de Seguridad",
    securitySolutions: "Soluciones de Seguridad Integrales",
    securitySolutionsDesc:
      "Nuestros sistemas de videovigilancia ofrecen características avanzadas para mantener su propiedad segura y brindarle tranquilidad.",
    hdCameras: "Cámaras HD y 4K",
    hdCamerasDesc:
      "Calidad de video cristalina con cámaras de resolución alta definición y 4K para monitoreo e identificación detallados.",
    nightVision: "Capacidades de visión nocturna",
    wideAngle: "Cobertura de ángulo amplio",
    weatherResistant: "Opciones resistentes a la intemperie",
    remoteAccess: "Acceso Remoto",
    remoteAccessDesc:
      "Monitoree su propiedad desde cualquier lugar usando su smartphone, tablet o computadora con nuestras soluciones de acceso remoto seguro.",
    mobileApp: "Integración con aplicaciones móviles",
    multiDevice: "Soporte para múltiples dispositivos",
    realTimeViewing: "Visualización en tiempo real",
    smartAlerts: "Alertas Inteligentes",
    smartAlertsDesc:
      "Reciba notificaciones instantáneas cuando se detecte movimiento o ocurra actividad inusual en su propiedad.",
    motionDetection: "Detección de movimiento",
    customAlerts: "Alertas personalizables",
    emailPush: "Notificaciones por correo electrónico y push",
    secureStorage: "Almacenamiento Seguro",
    secureStorageDesc:
      "Almacene su metraje de forma segura con nuestras soluciones de almacenamiento local y en la nube para una fácil recuperación cuando sea necesario.",
    cloudStorage: "Opciones de almacenamiento en la nube",
    encryptedData: "Protección de datos encriptados",
    retentionPeriods: "Períodos de retención flexibles",
    professionalInstall: "Instalación Profesional",
    professionalInstallDesc:
      "Nuestro equipo de expertos diseñará e instalará un sistema de vigilancia personalizado adaptado a sus necesidades específicas.",
    siteAssessment: "Evaluación del sitio",
    customDesign: "Diseño de sistema personalizado",
    professionalMounting: "Montaje profesional",
    ongoingSupport: "Soporte Continuo",
    ongoingSupportDesc:
      "Proporcionamos servicios de mantenimiento, solución de problemas y soporte para garantizar que su sistema funcione con un rendimiento óptimo.",
    techSupport: "Soporte técnico 24/7",
    regularMaintenance: "Mantenimiento regular",
    systemUpgrades: "Actualizaciones del sistema",
    industriesServe: "Industrias que Atendemos",
    industriesServeDesc:
      "Nuestras soluciones de vigilancia están diseñadas para satisfacer las necesidades de seguridad únicas de varias industrias.",
    retail: "Comercio Minorista",
    retailDesc:
      "Prevenga robos, monitoree el comportamiento de los clientes y asegure el cumplimiento de los empleados.",
    commercial: "Comercial",
    commercialDesc: "Proteja los activos de su negocio, monitoree puntos de acceso y mejore la seguridad general.",
    residential: "Residencial",
    residentialDesc: "Mantenga su hogar y familia seguros con sistemas avanzados de cámaras de seguridad.",
    warehousing: "Almacenamiento",
    warehousingDesc: "Monitoree el inventario, prevenga robos y garantice operaciones seguras en su instalación.",
    healthcare: "Salud",
    healthcareDesc: "Mejore la seguridad del paciente, asegure áreas restringidas y proteja equipos valiosos.",
    education: "Educación",
    educationDesc: "Cree un entorno de aprendizaje seguro para estudiantes, personal y visitantes.",
    readyToSecure: "¿Listo para Asegurar su Propiedad?",
    securityConsultation:
      "Contacte a nuestro equipo hoy para una evaluación de seguridad gratuita y descubra cómo nuestras soluciones de vigilancia pueden proteger su negocio u hogar.",
    scheduleConsultation: "Programar una Consulta",

    // About Us Page
    aboutUsTitle: "Acerca de Freeman Consulting",
    aboutUsSubtitle: "Su Socio Tecnológico de Confianza Desde 2010",
    ourStory: "Nuestra Historia",
    ourStoryContent:
      "Freeman Consulting fue fundada en 2010 con una misión simple: proporcionar a las empresas soluciones tecnológicas confiables e innovadoras que impulsen el crecimiento y el éxito. Lo que comenzó como una pequeña firma de consultoría de TI se ha convertido en un proveedor integral de servicios tecnológicos, ofreciendo alojamiento web, desarrollo y soluciones de seguridad a empresas de todos los tamaños.",
    ourMission: "Nuestra Misión",
    ourMissionContent:
      "Nuestra misión es empoderar a las empresas a través de la tecnología. Creemos que las soluciones tecnológicas adecuadas pueden transformar las operaciones, mejorar las experiencias de los clientes e impulsar el crecimiento empresarial. Estamos comprometidos a ofrecer servicios de alta calidad que satisfagan las necesidades únicas de cada cliente.",
    ourValues: "Nuestros Valores",
    valueIntegrity: "Integridad",
    valueIntegrityDesc: "Conducimos nuestro negocio con los más altos estándares éticos y transparencia.",
    valueExcellence: "Excelencia",
    valueExcellenceDesc:
      "Nos esforzamos por la excelencia en todo lo que hacemos, desde el servicio al cliente hasta la implementación técnica.",
    valueInnovation: "Innovación",
    valueInnovationDesc: "Adoptamos nuevas tecnologías y enfoques para ofrecer soluciones de vanguardia.",
    valueCollaboration: "Colaboración",
    valueCollaborationDesc:
      "Trabajamos estrechamente con nuestros clientes para entender sus necesidades y desarrollar soluciones a medida.",
    joinOurJourney: "Únase a Nuestro Viaje",
    joinOurJourneyContent:
      "Estamos en constante evolución y crecimiento, y le invitamos a ser parte de nuestro viaje. Ya sea que esté buscando soluciones tecnológicas para su empresa o esté interesado en unirse a nuestro equipo, nos encantaría conectar con usted.",

    // Testimonials Page
    testimonialsTitle: "Lo Que Dicen Nuestros Clientes",
    testimonialsSubtitle: "No solo tome nuestra palabra - escuche a algunos de nuestros clientes satisfechos",
    clientsSay: "Historias de Éxito de Nuestros Clientes",
    readMore: "Leer Más",
    readLess: "Leer Menos",

    // Our Team Page
    teamTitle: "Conozca a Nuestro Equipo",
    teamSubtitle: "Los profesionales talentosos detrás de Freeman Consulting",
    leadershipTeam: "Equipo de Liderazgo",
    developmentTeam: "Equipo de Desarrollo",
    supportTeam: "Equipo de Soporte",
    ceo: "Director Ejecutivo",
    cto: "Director de Tecnología",
    coo: "Director de Operaciones",
    leadDev: "Desarrollador Líder",
    seniorDev: "Desarrollador Senior",
    frontendDev: "Desarrollador Frontend",
    backendDev: "Desarrollador Backend",
    supportManager: "Gerente de Soporte",
    supportSpecialist: "Especialista en Soporte",
    technicalSupport: "Soporte Técnico",
    joinTeam: "Únase a Nuestro Equipo",
    joinTeamContent:
      "¿Interesado en trabajar con nosotros? Consulte nuestras vacantes actuales en nuestra página de Carreras.",
    viewOpenings: "Ver Vacantes",

    // Careers Page
    careersTitle: "Carreras en Freeman Consulting",
    careersSubtitle: "Únase a nuestro equipo de entusiastas de la tecnología",
    whyWorkWithUs: "Por Qué Trabajar Con Nosotros",
    benefitsTitle: "Beneficios y Ventajas",
    currentOpenings: "Vacantes Actuales",
    noOpenings: "No hay vacantes en este momento. ¡Por favor, vuelva a consultar más tarde!",
    applyNow: "Aplicar Ahora",
    remoteWork: "Opciones de Trabajo Remoto",
    remoteWorkDesc: "Arreglos de trabajo flexibles, incluyendo opciones remotas e híbridas.",
    healthInsurance: "Seguro de Salud",
    healthInsuranceDesc: "Cobertura integral de salud, dental y visión para usted y su familia.",
    paidTimeOff: "Tiempo Libre Remunerado",
    paidTimeOffDesc: "Política generosa de vacaciones y días festivos pagados durante todo el año.",
    professionalDev: "Desarrollo Profesional",
    professionalDevDesc: "Oportunidades para el aprendizaje continuo y el avance profesional.",
    teamEvents: "Eventos de Equipo",
    teamEventsDesc: "Actividades regulares de formación de equipos y eventos sociales.",
    competitiveSalary: "Salario Competitivo",
    competitiveSalaryDesc: "Paquetes de compensación que reconocen sus habilidades y experiencia.",
    jobRequirements: "Requisitos",
    jobResponsibilities: "Responsabilidades",
    jobLocation: "Ubicación",
    jobType: "Tipo de Trabajo",
    remote: "Remoto",
    hybrid: "Híbrido",
    onsite: "Presencial",
    fullTime: "Tiempo Completo",
    partTime: "Medio Tiempo",
    contract: "Contrato",
    applicationForm: "Formulario de Solicitud",
  },
}
