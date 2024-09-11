/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://webb23-cms-ecommerce.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 50000, 
  changefreq: 'daily', 
  priority: 0.7, 
  generateIndexSitemap: true, 
  transform: async (config, path) => {
    return {
      loc: path, 
    };
  },
  additionalPaths: async (config) => [
   
    {
      loc: '/products/123', 
      changefreq: 'daily',
      priority: 0.7,
    },
  ],
};
