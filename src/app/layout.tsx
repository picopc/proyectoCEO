// src/app/layout.tsx - Layout Ultra Premium Profesional
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: 'ProyectoCEO - Transformación Empresarial Premium | De Jefe Operativo a Líder Estratégico',
    template: '%s | ProyectoCEO - Transformación Empresarial'
  },
  description: 'Transformación empresarial integral para PYMES del sector servicios. Reducimos tu carga operativa en un 50%, aumentamos facturación y creamos sistemas que funcionen sin ti. Asesoramiento personalizado, formaciones especializadas y programa premium. Diagnóstico gratuito valorado en 500€.',
  keywords: [
    'consultoría empresarial',
    'transformación empresarial',
    'liderazgo empresarial',
    'optimización procesos',
    'delegación empresarial',
    'rentabilidad empresarial',
    'escalabilidad negocio',
    'ProyectoCEO',
    'consultor PYMES',
    'estrategia empresarial',
    'automatización procesos',
    'crecimiento empresarial',
    'diagnóstico empresarial',
    'sector servicios',
    'aumento beneficios',
    'delegación operativa',
    'transformación digital',
    'consultoría premium',
    'asesoría empresarial',
    'coaching empresarial',
    'análisis estratégico',
    'experiencia cliente',
    'mentalidad CEO',
    'formación ventas',
    'liderazgo equipos',
    'objetivo empresario'
  ],
  authors: [{ name: 'ProyectoCEO', url: 'https://proyectoceo.com' }],
  creator: 'ProyectoCEO - Consultoría Empresarial Premium',
  publisher: 'ProyectoCEO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://proyectoceo.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'ProyectoCEO - Transformación Empresarial Premium',
    description: 'De jefe operativo a líder estratégico. Reducimos tu carga operativa en un 50%, aumentamos facturación y creamos sistemas que funcionen sin ti. Asesoramiento personalizado, formaciones especializadas y programa premium. Diagnóstico gratuito valorado en 500€.',
    url: 'https://proyectoceo.com',
    siteName: 'ProyectoCEO',
    images: [
      {
        url: '/og-image-proyectoceo.jpg',
        width: 1200,
        height: 630,
        alt: 'ProyectoCEO - Transformación Empresarial Premium para PYMES del sector servicios',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square-proyectoceo.jpg',
        width: 1200,
        height: 1200,
        alt: 'ProyectoCEO - Consultoría Empresarial Especializada en Transformación',
        type: 'image/jpeg',
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProyectoCEO - Transformación Empresarial Premium',
    description: 'De jefe operativo a líder estratégico. Reducimos tu carga operativa en un 50%, aumentamos facturación y creamos sistemas que funcionen sin ti. Diagnóstico gratuito valorado en 500€.',
    images: ['/twitter-image-proyectoceo.jpg'],
    creator: '@proyectoceo',
    site: '@proyectoceo',
  },
  verification: {
    google: 'google-site-verification-proyectoceo',
    yandex: 'yandex-verification-proyectoceo',
    yahoo: 'yahoo-site-verification-proyectoceo',
  },
  category: 'Business Consulting',
  classification: 'Business Transformation',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1426' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon.ico',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0c1426',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ProyectoCEO',
    startupImage: [
      {
        url: '/apple-splash-2048-2732.jpg',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        url: '/apple-splash-1668-2224.jpg',
        media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        url: '/apple-splash-1536-2048.jpg',
        media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        url: '/apple-splash-1125-2436.jpg',
        media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      },
      {
        url: '/apple-splash-1242-2208.jpg',
        media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      },
      {
        url: '/apple-splash-750-1334.jpg',
        media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
      {
        url: '/apple-splash-640-1136.jpg',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      },
    ],
  },
  applicationName: 'ProyectoCEO - Transformación Empresarial',
  generator: 'Next.js 14',
  abstract: 'Consultoría empresarial premium especializada en transformación integral de PYMES del sector servicios. Asesoramiento personalizado, formaciones especializadas y programa premium para empresarios que quieren dejar de ser operarios de su empresa.',
  archives: [],
  assets: [],
  bookmarks: [],
  other: {
    'msapplication-TileColor': '#0c1426',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#f8fafc',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'ProyectoCEO',
    'application-name': 'ProyectoCEO',
    'msapplication-tooltip': 'ProyectoCEO - Transformación Empresarial Premium',
    'msapplication-starturl': '/',
    'msapplication-tap-highlight': 'no',
    'format-detection': 'telephone=no',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Preconnections for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://web.whatsapp.com" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#f8fafc" />
        <meta name="msapplication-TileColor" content="#0c1426" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ProyectoCEO" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ProyectoCEO",
              "description": "Consultoría empresarial premium especializada en transformación integral de PYMES del sector servicios. Asesoramiento personalizado, formaciones especializadas y programa premium para reducir carga operativa en un 50% y aumentar facturación.",
              "url": "https://proyectoceo.com",
              "telephone": "+34613121466",
              "email": "info@proyectoceo.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ES"
              },
              "serviceType": "Business Consulting",
              "areaServed": {
                "@type": "Country",
                "name": "España"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Catálogo de Servicios de Transformación Empresarial",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Análisis Estratégico Empresarial",
                      "description": "Diagnóstico completo de la situación actual de tu empresa",
                      "price": "97",
                      "priceCurrency": "EUR"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Experiencia Cliente 360°",
                      "description": "Sistema de experiencia del cliente que genere recomendaciones automáticas",
                      "price": "163",
                      "priceCurrency": "EUR"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mentalidad CEO Intensiva",
                      "description": "Transformación de mentalidad operativa a mentalidad estratégica",
                      "price": "287",
                      "priceCurrency": "EUR"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Masterclass de Ventas y Ventas Adicionales",
                      "description": "Convierte a tu equipo en vendedores que aman lo que hacen",
                      "price": "267",
                      "priceCurrency": "EUR"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sé el Verdadero Líder de tu Equipo",
                      "description": "De jefe que da órdenes a líder que inspira resultados",
                      "price": "397",
                      "priceCurrency": "EUR"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Objetivo Empresario - Programa Premium",
                      "description": "Transformación completa: reducir carga operativa 50%, aumentar facturación, crear sistemas que funcionen sin ti",
                      "price": "5555",
                      "priceCurrency": "EUR"
                    }
                  }
                ]
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Cliente Empresario"
                },
                "reviewBody": "Ahora sé qué servicios me hacen perder dinero y cuáles potenciar. Por fin tengo tiempo para pensar como dueño y no como empleado."
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "50",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ProyectoCEO",
              "alternateName": "Proyecto CEO",
              "url": "https://proyectoceo.com",
              "logo": "https://proyectoceo.com/logo-proyectoceo.png",
              "description": "Consultoría empresarial premium para transformación integral de PYMES del sector servicios",
              "foundingDate": "2020",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34613121466",
                "contactType": "Customer Service",
                "availableLanguage": "Spanish"
              },
              "sameAs": [
                "https://wa.me/613121466"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* NoScript Fallback */}
        <noscript>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#f8fafc',
            color: '#0c1426',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            fontSize: '18px',
            textAlign: 'center',
            padding: '20px',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}>
            <div style={{ maxWidth: '600px', lineHeight: '1.6' }}>
              <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
                ProyectoCEO - Transformación Empresarial Premium
              </h1>
              <p style={{ marginBottom: '20px' }}>
                Para una mejor experiencia y acceso completo a nuestros servicios,
                por favor habilita JavaScript en tu navegador.
              </p>
              <p style={{ marginBottom: '30px' }}>
                Mientras tanto, puedes contactarnos directamente:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                <a
                  href="https://wa.me/613121466?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20ProyectoCEO"
                  style={{
                    color: '#059669',
                    textDecoration: 'underline',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}
                >
                  WhatsApp: +34 613 121 466
                </a>
                <a
                  href="mailto:info@proyectoceo.com"
                  style={{
                    color: '#059669',
                    textDecoration: 'underline',
                    fontSize: '16px'
                  }}
                >
                  Email: info@proyectoceo.com
                </a>
              </div>
              <p style={{ marginTop: '30px', fontSize: '14px', opacity: '0.8' }}>
                Consultoría empresarial premium - Transformación integral para PYMES
              </p>
            </div>
          </div>
        </noscript>

        {/* Skip Navigation Link for Accessibility */}
        <a
          href="#main-content"
          className="skip-nav-link"
          style={{
            position: 'absolute',
            left: '-9999px',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
            background: 'white',
            color: '#0c1426',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            zIndex: 50,
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          Saltar al contenido principal
        </a>

        {/* Main Content */}
        <main id="main-content">
          {children}
        </main>

        {/* Analytics and Performance Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = window.performance.timing;
                    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                    console.log('ProyectoCEO - Page Load Time:', pageLoadTime + 'ms');
                  }, 0);
                });
              }
              
              // Service Worker Registration for PWA
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('ProyectoCEO SW registered:', registration.scope);
                    })
                    .catch(function(registrationError) {
                      console.log('ProyectoCEO SW registration failed:', registrationError);
                    });
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
}