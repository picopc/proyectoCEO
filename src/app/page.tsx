// src/app/page.tsx - Versión Profesional Ultra Premium
'use client';
import { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'

// Tipos Ultra Profesionales
interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

interface StatCardData {
  number: string;
  label: string;
  delay: number;
}

interface ServiceItemData {
  title: string;
  description: string;
  features?: string[];
}

interface ServiceCategoryData {
  title: string;
  description: string;
  items: ServiceItemData[];
}

interface TestimonialData {
  text: string;
  author: string;
  delay: number;
}

interface PremiumFeatureData {
  title: string;
  description: string;
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Manejo ultra optimizado del scroll
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrollY(currentScrollY)
  }, [])

  useEffect(() => {
    // Configuración de performance para scroll
    let ticking = false

    const handleScrollOptimized = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScrollOptimized, { passive: true })

    return () => window.removeEventListener('scroll', handleScrollOptimized)
  }, [handleScroll])

  // Manejo inteligente del menú móvil
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (mobileMenuOpen && !target.closest('.mobile-menu-premium') && !target.closest('.mobile-menu-toggle')) {
        setMobileMenuOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Componente WhatsApp Button Ultra Premium
  const WhatsAppButton = ({ children, className = "", 'aria-label': ariaLabel }: WhatsAppButtonProps) => (
    <a
      href="https://wa.me/613121466?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20ProyectoCEO%20y%20solicitar%20informaci%C3%B3n%20sobre%20el%20programa%20que%20mejor%20se%20adapte%20a%20mi%20empresa."
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp-premium ${className}`}
      aria-label={ariaLabel || "Contactar por WhatsApp para información y consulta"}
    >
      {children}
    </a>
  )

  // Datos estructurados ultra profesionales
  const statsData: StatCardData[] = useMemo(() => [
    { number: "50+", label: "Empresas Transformadas", delay: 0 },
    { number: "95%", label: "Tasa de Éxito", delay: 200 },
    { number: "50%", label: "Reducción Operativa Promedio", delay: 400 }
  ], [])

  const servicesData: ServiceCategoryData[] = useMemo(() => [
    {
      title: "Asesoramiento Personalizado",
      description: "Sesiones de trabajo estratégico diseñadas para sacarte del bucle operativo y convertirte en el verdadero CEO de tu empresa.",
      items: [
        {
          title: "Análisis Estratégico Empresarial",
          description: "Diagnóstico completo de la situación actual de tu empresa. Identificación de oportunidades ocultas y hoja de ruta personalizada.",
          features: ["Sesión individual de 1.5 horas", "Plan de acción inmediato", "Seguimiento durante 7 días"]
        },
        {
          title: "Experiencia Cliente 360°",
          description: "Sistema de experiencia del cliente que genere recomendaciones automáticas para destacar por algo más que tu servicio técnico.",
          features: ["Sesión individual de 2 horas", "Mapeo completo del customer journey", "Checklist de implementación"]
        },
        {
          title: "Mentalidad CEO Intensiva",
          description: "Intensivo de 5 días para desarrollar mentalidad estratégica y convertirte en verdadero líder empresarial.",
          features: ["5 días consecutivos (1 hora diaria)", "Test de mentalidad empresarial", "Plan personal de desarrollo"]
        },
        {
          title: "Pack Completo de Asesoramientos",
          description: "Todos los asesoramientos incluidos con el Análisis Estratégico GRATIS. Transformación integral completa.",
          features: ["Los 3 asesoramientos anteriores", "Análisis Estratégico gratuito", "Transformación integral"]
        }
      ]
    },
    {
      title: "Formaciones Especializadas",
      description: "Formaciones diseñadas para transformar a tu equipo en profesionales que piensan y actúan como dueños, no como empleados.",
      items: [
        {
          title: "Masterclass de Ventas y Ventas Adicionales",
          description: "Convierte a tu equipo en vendedores que aman lo que hacen. Técnicas de venta consultiva sin presión comercial.",
          features: ["Formación individual o grupal", "Modalidades desde 2 hasta 20+ personas", "Role-playing y casos prácticos", "Técnicas de venta consultiva"]
        },
        {
          title: "Sé el Verdadero Líder de tu Equipo",
          description: "De jefe que da órdenes a líder que inspira resultados. Desarrollo de liderazgo auténtico que genera respeto genuino.",
          features: ["Formación individual o grupal", "Modalidades desde 2 hasta 20+ personas", "Taller práctico de liderazgo", "Herramientas de motivación"]
        },
        {
          title: "Pack CEO de Impacto",
          description: "Liderazgo + Ventas Individual. Conviértete en el CEO que tu negocio necesita y genera el impacto que tu mercado está esperando.",
          features: ["Liderazgo individual completo", "Ventas individual completo", "Descuento especial aplicado", "Transformación integral"]
        }
      ]
    }
  ], [])

  const testimonialsData: TestimonialData[] = useMemo(() => [
    { text: "Ahora sé qué servicios me hacen perder dinero y cuáles potenciar.", author: "Empresario del sector servicios", delay: 0 },
    { text: "Por fin tengo tiempo para pensar como dueño y no como empleado.", author: "CEO transformado", delay: 200 },
    { text: "Mi equipo está más motivado y mis clientes más fieles.", author: "Líder empresarial", delay: 400 }
  ], [])

  const premiumFeatures: PremiumFeatureData[] = useMemo(() => [
    { title: "Acompañamiento personalizado", description: "Adaptado específicamente a las necesidades de TU negocio" },
    { title: "Formaciones semanales", description: "Con contenido exclusivo y aplicación inmediata" },
    { title: "Intensivos estratégicos", description: "Para abordar los puntos críticos de tu transformación" },
    { title: "Seguimiento diario", description: "Cuando lo necesites - No estarás solo en este proceso" },
    { title: "Revisión mensual", description: "De resultados y ajuste de estrategias según los datos reales" },
    { title: "Material exclusivo", description: "Y plantillas de trabajo probadas en cientos de negocios" }
  ], [])

  // Función para manejar navegación suave
  const handleSmoothScroll = useCallback((targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setMobileMenuOpen(false)
  }, [])

  return (
    <div className="main-container">
      {/* Navigation Ultra Premium */}
      <nav
        className={`navbar-premium ${scrollY > 50 ? 'navbar-scrolled' : ''}`}
        role="navigation"
        aria-label="Navegación principal ProyectoCEO"
      >
        <div className="container">
          <div className="logo-container">
            <div className="logo-image-container">
              <Image
                src="/logo-proyectoceo.png"
                alt="ProyectoCEO - Consultoría empresarial para transformación de PYMES"
                className="logo-image"
                width={56}
                height={56}
                priority
                sizes="56px"
                quality={95}
              />
            </div>
            <div className="logo-text-container">
              <h1 className="logo-text">ProyectoCEO</h1>
              <span className="logo-tagline">Transformación Empresarial</span>
            </div>
          </div>

          <ul className="nav-links-premium" role="menubar">
            <li role="none">
              <button
                onClick={() => handleSmoothScroll('servicios')}
                className="nav-link"
                role="menuitem"
                type="button"
              >
                Servicios
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => handleSmoothScroll('programa-premium')}
                className="nav-link"
                role="menuitem"
                type="button"
              >
                Programa Premium
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => handleSmoothScroll('testimonios')}
                className="nav-link"
                role="menuitem"
                type="button"
              >
                Testimonios
              </button>
            </li>
          </ul>

          <button
            className="mobile-menu-toggle"
            onClick={(e) => {
              e.stopPropagation()
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación móvil" : "Abrir menú de navegación móvil"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <WhatsAppButton
            className="whatsapp-desktop"
            aria-label="Contactar por WhatsApp - Versión escritorio"
          >
            <span>Contactar</span>
          </WhatsAppButton>

          <WhatsAppButton
            className="whatsapp-mobile"
            aria-label="Contactar por WhatsApp - Versión móvil"
          >
            <span>WhatsApp</span>
          </WhatsAppButton>
        </div>

        {/* Mobile Menu Ultra Premium */}
        {mobileMenuOpen && (
          <div
            className="mobile-menu-premium"
            id="mobile-menu"
            role="menu"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => handleSmoothScroll('servicios')}
              role="menuitem"
              type="button"
              className="nav-link"
            >
              Servicios
            </button>
            <button
              onClick={() => handleSmoothScroll('programa-premium')}
              role="menuitem"
              type="button"
              className="nav-link"
            >
              Programa Premium
            </button>
            <button
              onClick={() => handleSmoothScroll('testimonios')}
              role="menuitem"
              type="button"
              className="nav-link"
            >
              Testimonios
            </button>
            <WhatsAppButton aria-label="Contactar por WhatsApp desde menú móvil">
              Contactar Ahora
            </WhatsAppButton>
          </div>
        )}
      </nav>

      {/* Hero Section Ultra Premium */}
      <section className="hero-premium" role="banner">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge-premium">
              <span className="badge-text">Transformación Empresarial Garantizada</span>
            </div>

            <h2 className="hero-title-premium">
              <span className="title-line">De jefe operativo a</span>
              <br />
              <span className="title-highlight">
                <span className="highlight-text">líder estratégico</span>
              </span>
            </h2>

            <p className="hero-subtitle-premium">
              Reducimos tu carga operativa en un <span className="text-gold-premium">50%</span>, aumentamos tu facturación y
              creamos sistemas que funcionen sin ti. <span className="text-blue-premium">Asesoramiento personalizado, formaciones especializadas y programa premium</span> para empresarios comprometidos con la transformación.
            </p>

            <div className="hero-cta-premium">
              <WhatsAppButton
                className="btn-cta-main"
                aria-label="Solicitar información y consulta por WhatsApp"
              >
                <span>Solicitar Información</span>
              </WhatsAppButton>
            </div>

            <div className="hero-stats-premium">
              {statsData.map((stat, index) => (
                <article
                  key={`stat-${index}`}
                  className="stat-card"
                  style={{ animationDelay: `${stat.delay}ms` }}
                >
                  <div className="stat-number" aria-label={`${stat.number} ${stat.label}`}>
                    {stat.number}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Ultra Premium */}
      <section id="servicios" className="section-premium services-section">
        <div className="container">
          <div className="section-content">
            <div className="section-badge">
              <span>Nuestros Servicios</span>
            </div>

            <h3 className="section-title">
              Catálogo completo de <span className="text-gradient-premium">soluciones empresariales</span>
            </h3>

            <p className="section-subtitle">
              Desde asesoramiento personalizado hasta formaciones especializadas para tu equipo.
              Cada servicio está diseñado para atacar problemas específicos que mantienen a los empresarios
              atrapados en lo operativo.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((category, categoryIndex) => (
              <article key={`category-${categoryIndex}`} className="service-category">
                <h4>{category.title}</h4>
                <p>{category.description}</p>

                <div className="service-items">
                  {category.items.map((item, itemIndex) => (
                    <div key={`item-${categoryIndex}-${itemIndex}`} className="service-item">
                      <h5>{item.title}</h5>
                      <div className="description">{item.description}</div>
                      {item.features && (
                        <div className="service-features">
                          <ul>
                            {item.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-16)' }}>
            <WhatsAppButton
              className="btn-cta-main"
              aria-label="Consultar servicios por WhatsApp"
            >
              <span>Consultar Servicios</span>
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Premium Program Section Ultra Premium */}
      <section id="programa-premium" className="section-premium premium-program-section">
        <div className="container">
          <div className="section-content">
            <div className="section-badge section-badge-white">
              <span>Programa Premium</span>
            </div>

            <h3 className="section-title">
              <span className="text-gradient-gold">Objetivo Empresario</span>
              <br />
              Programa de Transformación Integral
            </h3>

            <p className="section-subtitle">
              Para empresarios comprometidos que están hartos de ser esclavos de su propio negocio.
              Conseguirás una transformación completa: reducir carga operativa en un 50%, aumentar facturación
              y crear sistemas que funcionen sin ti.
            </p>
          </div>

          <article className="premium-card">
            <div className="premium-price">Programa Premium</div>
            <h4 style={{ fontSize: '2rem', fontWeight: '700', color: 'white', marginBottom: 'var(--space-6)', fontFamily: "'Playfair Display', serif" }}>
              Transformación Completa en 12 Meses
            </h4>

            <div className="premium-features">
              {premiumFeatures.map((feature, index) => (
                <div key={`premium-${index}`} className="premium-feature">
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="premium-guarantee">
              <h5>Garantía Total + Primer Mes de Prueba</h5>
              <p>
                Si en 30 días no ves resultados tangibles, cancelas sin coste.
                Si no consigues los objetivos al año, te devolvemos el importe íntegro.
                Opciones de fraccionamiento disponibles.
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
              <WhatsAppButton
                className="btn-cta-final"
                aria-label="Solicitar información del programa premium por WhatsApp"
              >
                <span>Solicitar Información del Programa</span>
              </WhatsAppButton>
            </div>
          </article>
        </div>
      </section>

      {/* Testimonials Section Ultra Premium */}
      <section id="testimonios" className="section-premium testimonials-section">
        <div className="container">
          <div className="section-content">
            <div className="section-badge">
              <span>Casos de Éxito</span>
            </div>

            <h3 className="section-title">
              Lo que dicen <span className="text-gradient-premium">empresarios transformados</span>
            </h3>

            <p className="section-subtitle">
              Resultados reales de empresarios que han conseguido la transformación completa
              y ahora trabajan SOBRE su negocio, no EN su negocio.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonialsData.map((testimonial, index) => (
              <article
                key={`testimonial-${index}`}
                className="testimonial-card"
                style={{ animationDelay: `${testimonial.delay}ms` }}
              >
                <blockquote className="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                <div className="testimonial-author">
                  — {testimonial.author}
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-16)' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              background: 'var(--gradient-text-gold)',
              padding: 'var(--space-5) var(--space-10)',
              borderRadius: 'var(--radius-full)',
              fontWeight: '700',
              fontSize: '1.3rem',
              boxShadow: 'var(--shadow-gold)',
              fontFamily: "'Playfair Display', serif",
              color: 'white'
            }}>
              <span>Esto no es suerte. Es método.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section Ultra Premium */}
      <section className="section-premium final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h3 className="final-cta-title">
              Da el primer paso para dejar de ser empleado de tu empresa y
              <br />
              convertirte en el <span style={{ background: 'var(--gradient-text-gold)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>verdadero CEO</span>
            </h3>

            <p className="final-cta-subtitle">
              Estás a una conversación de descubrir exactamente qué está limitando el crecimiento de tu empresa.
              Te ayudamos a identificar las oportunidades que estás perdiendo y el camino específico para
              <span className="text-gold-premium"> transformar tu negocio completamente</span>.
            </p>

            <div style={{ textAlign: 'center' }}>
              <WhatsAppButton
                className="btn-cta-final"
                aria-label="Comenzar transformación empresarial por WhatsApp"
              >
                <span>Comenzar Mi Transformación</span>
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Ultra Premium */}
      <footer className="footer-premium" role="contentinfo">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="footer-logo-container">
                <Image
                  src="/logo-proyectoceo.png"
                  alt="ProyectoCEO - Transformación Empresarial Premium"
                  className="footer-logo-image"
                  width={56}
                  height={56}
                  sizes="56px"
                  quality={95}
                />
              </div>
              <div className="footer-logo-text">
                <h4>ProyectoCEO</h4>
                <span>Transformación Empresarial</span>
              </div>
            </div>

            <p className="footer-tagline">
              Consultoría real para empresarios reales
            </p>

            <div className="footer-social">
              <a
                href="mailto:info@proyectoceo.com"
                className="social-link"
                aria-label="Enviar email a ProyectoCEO"
              >
                <span>@</span>
              </a>
              <a
                href="tel:+34613121466"
                className="social-link"
                aria-label="Llamar a ProyectoCEO"
              >
                <span>Tel</span>
              </a>
              <a
                href="https://proyectoceo.com"
                className="social-link"
                aria-label="Visitar sitio web oficial de ProyectoCEO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Web</span>
              </a>
            </div>

            <div className="footer-copyright">
              <p>&copy; 2025 ProyectoCEO. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button Ultra Premium */}
      <WhatsAppButton
        className="whatsapp-float-premium"
        aria-label="Botón flotante de contacto WhatsApp"
      >
        <span className="float-icon">WA</span>
      </WhatsAppButton>
    </div>
  )
}