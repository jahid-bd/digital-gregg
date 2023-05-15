const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    service_id: "service_2zb60bk",
    template_id: "template_ccl9g6d",
    public_id: "nK-nPn7NrWsFx1mbV",
    SANITY_SECRET_TOKEN:
      "skxO4HavWbGkq3yNWynVuxPV4oQv6jXKn7883XCDlVyCB8zHWdDg67KY6qEklTkxbejqHsBMIatgHukXsG2BiE8lU7SaRkywVcg2paNt0uoofgzXCRxwJCPzqNw50JzcT23JKIFTwIE87GuBxSVtdVDvOamg7fB9SnY8taziIwP6kn8CngEJ",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' data: 'unsafe-inline' 'unsafe-eval' fonts.gstatic.com good-reviews.s3.amazonaws.com ssl.google-analytics.com connect.facebook.net www.facebook.com www.google-analytics.com www.pagespeed-mod.com *.googletagmanager.com vercel.live player.vimeo.com vimeo.com https://www.figma.com api.emailjs.com https://1vl93yuk.apicdn.sanity.io cdn.sanity.io calendly.com res.cloudinary.com stats.g.doubleclick.net https://*.hotjar.com https://*.hotjar.io wss://*.hotjar.com;",
          },
        ],
      },
    ];
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
