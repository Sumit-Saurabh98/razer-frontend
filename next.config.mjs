/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets3.razerzone.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.razer.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
