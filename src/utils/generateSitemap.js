import fs from 'fs'
import path from 'path'
import axios from 'axios'
import { sitemapRoutes } from './sitemapRoutes'

const BASE_URL = 'https://sharkattacktracker.com'

async function fetchCountries() {
  try {
    const response = await axios.get(
      'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records',
      {
        params: {
          group_by: 'country',
          limit: 300
        }
      }
    )
    return response.data.results
      .filter(country => country?.country)
      .map(country => ({
        path: `/country/${encodeURIComponent(country.country.toLowerCase().replace(/ /g, '-'))}`,
        changefreq: 'weekly',
        priority: 0.7
      }))
  } catch (error) {
    console.error('Error fetching countries:', error)
    return []
  }
}

export async function generateSitemap() {
  try {
    // Get static routes
    const staticRoutes = sitemapRoutes
    
    // Get dynamic country routes
    const countryRoutes = await fetchCountries()
    
    // Combine all routes
    const allRoutes = [...staticRoutes, ...countryRoutes]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
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
    
    console.log('Sitemap generated successfully with', countryRoutes.length, 'country pages!')
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
}
