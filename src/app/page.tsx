// src/app/page.tsx
'use client';
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    setIsLoaded(true)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  type WhatsAppButtonProps = {
    children: React.ReactNode;
    className?: string;
  };

  const WhatsAppButton = ({ children, className = "" }: WhatsAppButtonProps) => (
    <a
      href="https://wa.me/613121466"
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp-premium ${className}`}
    >
      {children}
    </a>
  )

  return (
    <div className="main-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`navbar-premium ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="logo-container">
            <div className="logo-image-container">
              <Image
                src="/logo-proyectoceo.png"
                alt="ProyectoCEO Logo"
                className="logo-image"
                width={60}
                height={60}
                priority
              />
            </div>
            <div className="logo-text-container">
              <h1 className="logo-text">ProyectoCEO</h1>
              <span className="logo-tagline">Transformación Empresarial</span>
            </div>
          </div>

          <ul className="nav-links-premium">
            <li><a href="#diagnostico" className="nav-link">Diagnóstico</a></li>
            <li><a href="#programa" className="nav-link">Programa</a></li>
            <li><a href="#testimonios" className="nav-link">Testimonios</a></li>
          </ul>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú móvil"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <WhatsAppButton className="whatsapp-desktop">
            <span className="whatsapp-icon">💬</span>
            <span>WhatsApp</span>
          </WhatsAppButton>

          <WhatsAppButton className="whatsapp-mobile">
            💬
          </WhatsAppButton>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu-premium">
            <a href="#diagnostico" onClick={() => setMobileMenuOpen(false)}>
              <span className="menu-icon">📊</span>
              Diagnóstico
            </a>
            <a href="#programa" onClick={() => setMobileMenuOpen(false)}>
              <span className="menu-icon">🎯</span>
              Programa
            </a>
            <a href="#testimonios" onClick={() => setMobileMenuOpen(false)}>
              <span className="menu-icon">⭐</span>
              Testimonios
            </a>
            <WhatsAppButton>
              <span className="whatsapp-icon">💬</span>
              Contactar por WhatsApp
            </WhatsAppButton>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-premium">
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="container">
          <div className={`hero-content ${isLoaded ? 'hero-loaded' : ''}`}>
            <div className="hero-badge-premium">
              <span className="badge-icon">🚀</span>
              <span className="badge-text">Transformación Empresarial Garantizada</span>
              <div className="badge-glow"></div>
            </div>

            <h2 className="hero-title-premium">
              <span className="title-line">Deja de ser el</span>
              <span className="title-highlight">
                <span className="highlight-text">operario</span>
                <div className="highlight-underline"></div>
              </span>
              <span className="title-line">de tu empresa</span>
            </h2>

            <p className="hero-subtitle-premium">
              Conviértete en un verdadero empresario: <span className="text-gold-premium">más beneficios, más libertad, menos carga operativa.</span>
              <br />
              Con acompañamiento real para aumentar tus beneficios y delegar el <span className="text-blue-premium">50% de lo operativo en 1 año.</span>
            </p>

            <div className="hero-cta-premium">
              <WhatsAppButton className="btn-cta-main">
                <span className="cta-icon">📞</span>
                <span className="cta-text">Agendar diagnóstico gratuito</span>
                <div className="cta-shine"></div>
              </WhatsAppButton>
            </div>

            <div className="hero-stats-premium">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Empresas Transformadas</div>
                <div className="stat-icon">🏢</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">95%</div>
                <div className="stat-label">Tasa de Éxito</div>
                <div className="stat-icon">📈</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50%</div>
                <div className="stat-label">Reducción Operativa</div>
                <div className="stat-icon">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-premium about-section">
        <div className="container">
          <div className="section-content">
            <div className="section-badge">
              <span className="badge-icon">🔹</span>
              <span>Conoce el equipo</span>
            </div>

            <h3 className="section-title">
              ¿Quién está detrás de <span className="text-gradient-premium">ProyectoCEO</span>?
            </h3>

            <div className="about-content">
              <p className="about-text">
                En ProyectoCEO ayudamos a dueños de pequeñas empresas del sector servicios que están atrapados en la rutina diaria.
                Te acompañamos en un proceso real para que dejes de operar y empieces a dirigir tu empresa con claridad, estrategia y resultados.
              </p>

              <div className="highlight-card">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Nuestro objetivo:</h4>
                  <p>que en 1 año puedas <span className="text-gold-premium">multiplicar tu rentabilidad y liberar el 50% de tus tareas operativas.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Section */}
      <section id="diagnostico" className="section-premium diagnostic-section">
        <div className="container">
          <div className="section-content">
            <div className="section-badge section-badge-white">
              <span className="badge-icon">📊</span>
              <span>Análisis Profesional</span>
            </div>

            <h3 className="section-title text-white">
              Diagnóstico completo de <span className="text-gradient-gold">rentabilidad</span>
            </h3>

            <p className="section-subtitle text-white">
              Antes de comenzar cualquier proceso, te ayudamos a analizar tu situación actual y descubrir cuánta rentabilidad estás dejando sobre la mesa.
            </p>

            <div className="free-badge">
              <span className="free-icon">🎁</span>
              <span className="free-text">Servicio valorado en 500 €, <strong>totalmente gratuito para ti</strong></span>
            </div>
          </div>

          <div className="diagnostic-grid">
            <div className="diagnostic-card">
              <div className="card-icon">🔍</div>
              <h5 className="card-title">Análisis de tu competencia</h5>
              <p className="card-description">Evaluamos tu posición en el mercado</p>
            </div>

            <div className="diagnostic-card">
              <div className="card-icon">💰</div>
              <h5 className="card-title">Fórmulas para calcular precios</h5>
              <p className="card-description">Metodología probada para pricing</p>
            </div>

            <div className="diagnostic-card">
              <div className="card-icon">📈</div>
              <h5 className="card-title">Calculadora de costes y márgenes</h5>
              <p className="card-description">Herramientas precisas de análisis</p>
            </div>

            <div className="diagnostic-card">
              <div className="card-icon">🎯</div>
              <h5 className="card-title">Matriz O.P.E.</h5>
              <p className="card-description">Qué Optimizar, Potenciar o Eliminar</p>
            </div>
          </div>

          <div className="diagnostic-cta">
            <div className="consultation-highlight">
              <div className="consultation-icon">⚡</div>
              <div className="consultation-text">
                <h4>No es una charla comercial, es una consultoría real</h4>
                <p>Una sola sesión y verás el negocio con otros ojos</p>
              </div>
            </div>

            <WhatsAppButton className="btn-cta-secondary">
              <span className="cta-icon">📲</span>
              <span className="cta-text">Agendar ahora mi diagnóstico</span>
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Main Program Section */}
      <section id="programa" className="section-premium program-section">
        <div className="container">
          <div className="section-content">
            <div className="section-badge">
              <span className="badge-icon">🏁</span>
              <span>Programa Principal</span>
            </div>

            <h3 className="section-title">
              <span className="text-gradient-premium">Objetivo Empresario:</span>
              <br />
              transforma tu <span className="text-blue-premium">empresa</span> en 14 semanas
            </h3>

            <p className="section-subtitle">
              Un proceso diseñado para jefes de PYMES que quieren dejar de operar y empezar a escalar su negocio.
            </p>
          </div>

          <div className="program-grid">
            <div className="benefits-column">
              <div className="benefit-card">
                <div className="benefit-icon">🧹</div>
                <div className="benefit-content">
                  <h5>Eliminar el caos operativo</h5>
                  <p>Sistemas claros y organizados</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">👥</div>
                <div className="benefit-content">
                  <h5>Crear procesos claros y delegar</h5>
                  <p>Equipo autónomo y eficiente</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">📊</div>
                <div className="benefit-content">
                  <h5>Aumentar la rentabilidad</h5>
                  <p>Márgenes optimizados y sostenibles</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <div className="benefit-content">
                  <h5>Formar al equipo en ventas</h5>
                  <p>Fidelización y crecimiento</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">🏆</div>
                <div className="benefit-content">
                  <h5>Construir una marca sólida</h5>
                  <p>Diferenciación en el mercado</p>
                </div>
              </div>

              <div className="highlight-text-premium">
                <span className="highlight-decoration">✨</span>
                <span className="highlight-message">ENTRE OTRAS COSAS!</span>
                <span className="highlight-decoration">✨</span>
              </div>
            </div>

            <div className="program-details">
              <div className="detail-card detail-card-blue">
                <div className="detail-icon">🎓</div>
                <h5>Duración inicial</h5>
                <p>14 semanas de formación práctica</p>
              </div>

              <div className="detail-card detail-card-gold">
                <div className="detail-icon">💼</div>
                <h5>Objetivo a 12 meses</h5>
                <p>Trabajar menos, ganar más y escalar tu negocio</p>
              </div>

              <div className="detail-card detail-card-emerald">
                <div className="detail-icon">💎</div>
                <h5>Inversión del programa</h5>
                <p className="price-premium">12.599 €</p>
              </div>
            </div>
          </div>

          <div className="program-cta">
            <WhatsAppButton className="btn-cta-main">
              <span className="cta-icon">📞</span>
              <span className="cta-text">Quiero más información del programa</span>
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-premium guarantee-section">
        <div className="container">
          <div className="section-content">
            <div className="section-badge">
              <span className="badge-icon">😬</span>
              <span>Eliminamos tus dudas</span>
            </div>

            <h3 className="section-title">
              &ldquo;Ya lo intenté antes... y no funcionó&rdquo;
            </h3>

            <p className="section-subtitle">
              Muchos empresarios llegan a nosotros frustrados por cursos o asesorías que no les sirvieron.
              Nosotros no damos teoría: <span className="text-emerald-premium">damos acompañamiento real</span> y resultados concretos.
            </p>
          </div>

          <div className="guarantee-card">
            <div className="guarantee-badge">
              <div className="lock-icon">🔒</div>
              <div className="lock-glow"></div>
            </div>

            <h4 className="guarantee-title">Garantía 100% Total</h4>
            <p className="guarantee-text">
              Si al terminar el proceso no has aumentado tus beneficios,
              <span className="text-emerald-premium"> te devolvemos el 100% de lo que hayas pagado.</span>
            </p>

            <div className="guarantee-features">
              <div className="guarantee-feature">
                <span className="feature-icon">✅</span>
                <span>Sin riesgo</span>
              </div>
              <div className="guarantee-feature">
                <span className="feature-icon">💰</span>
                <span>Reembolso total</span>
              </div>
              <div className="guarantee-feature">
                <span className="feature-icon">🎯</span>
                <span>Resultados garantizados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="section-premium testimonials-section">
        <div className="container">
          <div className="section-content">
            <div className="section-badge section-badge-white">
              <span className="badge-icon">✨</span>
              <span>Casos de éxito</span>
            </div>

            <h3 className="section-title text-white">
              Esto es lo que dicen <span className="text-gradient-gold">empresarios como tú</span>
            </h3>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <div className="testimonial-icon">💡</div>
              <p className="testimonial-text">Ahora sé qué servicios me hacen perder dinero y cuáles potenciar.</p>
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <div className="testimonial-icon">⏰</div>
              <p className="testimonial-text">Por fin tengo tiempo para pensar como dueño y no como empleado.</p>
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <div className="testimonial-icon">🎯</div>
              <p className="testimonial-text">Mi equipo está más motivado y mis clientes más fieles.</p>
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div className="testimonials-footer">
            <div className="method-badge">
              <span className="method-icon">🎯</span>
              <span className="method-text">Esto no es suerte. Es método.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-premium final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <div className="cta-badge">
              <span className="badge-icon">✅</span>
              <div className="badge-glow"></div>
            </div>

            <h3 className="final-cta-title">
              Da el primer paso para dejar de vender tu tiempo y
              <span className="text-gradient-gold"> escala tu negocio</span>
            </h3>

            <p className="final-cta-subtitle">
              Estás a una llamada de descubrir por qué tu empresa no está dando los resultados que esperas.
              Te propongo una sesión real de diagnóstico
              <span className="text-gold-premium">(valorada en 500 €)</span>
              totalmente gratuita.
            </p>

            <div className="final-cta-features">
              <div className="cta-feature">
                <div className="feature-icon">🚀</div>
                <span>Sin compromiso</span>
              </div>
              <div className="cta-feature">
                <div className="feature-icon">💡</div>
                <span>Resultados inmediatos</span>
              </div>
              <div className="cta-feature">
                <div className="feature-icon">⏱️</div>
                <span>Solo 90 minutos</span>
              </div>
            </div>

            <div className="final-cta-button">
              <WhatsAppButton className="btn-cta-final">
                <span className="cta-icon">📲</span>
                <span className="cta-text">Agendar diagnóstico por WhatsApp</span>
                <div className="cta-pulse"></div>
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-premium">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="footer-logo-container">
                <Image
                  src="/logo-proyectoceo.png"
                  alt="ProyectoCEO Logo"
                  className="footer-logo-image"
                  width={60}
                  height={60}
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
              <a href="#" className="social-link" aria-label="Email">
                <span>📧</span>
              </a>
              <a href="#" className="social-link" aria-label="Phone">
                <span>📱</span>
              </a>
              <a href="#" className="social-link" aria-label="Website">
                <span>🌐</span>
              </a>
            </div>

            <div className="footer-copyright">
              <p>&copy; 2025 ProyectoCEO. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/613121466"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-premium"
        aria-label="Contactar por WhatsApp"
      >
        <span className="float-icon">💬</span>
        <div className="float-pulse"></div>
      </a>
    </div>
  )
}