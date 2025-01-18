import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://sharkattacktracker.com'

export function generateSitemap(routes) {
  try {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(route => `
    <url>
      <loc>${BASE_URL}${route.path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${route.changefreq || 'weekly'}</changefreq>
      <priority>${route.priority || 0.8}</priority>
    </url>
  `).join('')}
</urlset>`

    // Create public directory if it doesn't exist
    const publicDir = path.join(process.cwd(), 'public')
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir)
    }

    // Write sitemap to public directory
    const sitemapPath = path.join(publicDir, 'sitemap.xml')
    fs.writeFileSync(sitemapPath, sitemap)
    
    console.log('Sitemap generated successfully!')
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
}
