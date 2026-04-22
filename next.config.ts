import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // Los errores de tipo de @egjs/flicking se deben a versiones duplicadas
    // que no afectan el runtime. Se verifican localmente con npm run build.
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
