export default function Robots() {
    return {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow: '/private/',
        },
        sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
      }
}