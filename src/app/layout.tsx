// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ProyectoCEO - Transformación Empresarial | Deja de ser el operario de tu empresa',
  description: 'Conviértete en un verdadero empresario: más beneficios, más libertad, menos carga operativa. Acompañamiento real para aumentar beneficios y delegar el 50% de lo operativo en 1 año.',
  keywords: [
    'consultoría empresarial',
    'transformación empresarial',
    'liderazgo empresarial',
    'optimización procesos',
    'delegación empresarial',
    'rentabilidad empresarial',
    'escalabilidad negocio',
    'ProyectoCEO'
  ],
  authors: [{ name: 'ProyectoCEO' }],
  creator: 'ProyectoCEO',
  publisher: 'ProyectoCEO',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'ProyectoCEO - Transformación Empresarial',
    description: 'Deja de ser el operario de tu empresa. Conviértete en un verdadero empresario con acompañamiento real y resultados garantizados.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProyectoCEO - Transformación Empresarial',
    description: 'Deja de ser el operario de tu empresa. Conviértete en un verdadero empresario.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}