/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: false },
      { source: "/blog/index.html", destination: "/blog", permanent: false },
      { source: "/services/index.html", destination: "/services", permanent: false },
      { source: "/book/index.html", destination: "/book", permanent: false },
      { source: "/about/index.html", destination: "/about", permanent: false },
      { source: "/amc/index.html", destination: "/amc", permanent: false },
      { source: "/contact/index.html", destination: "/contact", permanent: false },
      { source: "/blog/:slug.html", destination: "/blog/:slug", permanent: false },
      { source: "/admin/index.html", destination: "/admin", permanent: false }
    ];
  }
};

export default nextConfig;
