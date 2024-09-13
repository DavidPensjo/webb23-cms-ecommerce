export default function Robots() {
    return {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow: '/private/',
        },
        sitemap: `https://webb23-cms-ecommerce.vercel.app/sitemap.xml`,
      }
}