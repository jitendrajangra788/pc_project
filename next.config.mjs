/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: false },
      { source: "/blog/index.html", destination: "/blog", permanent: false },
      { source: "/services/index.html", destination: "/services", permanent: false },
      { source: "/blog/:slug.html", destination: "/blog/:slug", permanent: false },
      { source: "/admin/index.html", destination: "/admin", permanent: false }
    ];
  }
};

export default nextConfig;
