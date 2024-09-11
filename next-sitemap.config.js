/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://webb23-cms-ecommerce.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 50000, 
  transform: async (config, path) => {
    return {
      loc: path, 
    };
  },
};
