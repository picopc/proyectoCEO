/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Configuración para Vercel
  output: 'standalone',

  // Configuración de ESLint
  eslint: {
    dirs: ['src'],
    // Ignorar algunos errores durante build si es necesario
    ignoreDuringBuilds: false,
  },

  // Configuración de TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;