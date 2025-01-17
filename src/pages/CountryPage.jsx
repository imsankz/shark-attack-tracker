import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function CountryPage() {
  const { countryName } = useParams()
  const [attacks, setAttacks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [countryStats, setCountryStats] = useState(null)
  const [chartData, setChartData] = useState(null)

  // Format country name for display
  const formattedCountryName = decodeURIComponent(countryName)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())

  // Generate SEO meta data
  const metaTitle = `Shark Attacks in ${formattedCountryName} | Global Shark Attack Tracker`
  const metaDescription = `Comprehensive shark attack statistics and incidents for ${formattedCountryName}. Explore historical data, attack patterns, and safety information.`

  // Update document head for SEO
  useEffect(() => {
    // Update title
    document.title = metaTitle

    // Update or create meta description
    let metaDescriptionTag = document.querySelector('meta[name="description"]')
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta')
      metaDescriptionTag.name = 'description'
      document.head.appendChild(metaDescriptionTag)
    }
    metaDescriptionTag.content = metaDescription

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = window.location.href

    // Cleanup on unmount
    return () => {
      document.title = 'Global Shark Attack Tracker'
      if (metaDescriptionTag) {
        metaDescriptionTag.remove()
      }
      if (canonicalLink) {
        canonicalLink.remove()
      }
    }
  }, [metaTitle, metaDescription])

  // Fetch data and prepare chart
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [attacksResponse, statsResponse, yearlyData] = await Promise.all([
          axios.get(
            'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records',
            {
              params: {
                refine: `country:"${formattedCountryName}"`,
                limit: 100
              }
            }
          ),
          axios.get(
            'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records',
            {
              params: {
                select: 'count(*)',
                refine: `country:"${formattedCountryName}"`
              }
            }
          ),
          axios.get(
            'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records',
            {
              params: {
                select: 'year, count(*) as count',
                group_by: 'year',
                refine: `country:"${formattedCountryName}"`,
                order_by: 'year asc'
              }
            }
          )
        ])

        setAttacks(attacksResponse.data.results)
        setCountryStats(statsResponse.data.results[0])

        // Prepare chart data
        const years = yearlyData.data.results.map(item => item.year)
        const counts = yearlyData.data.results.map(item => item.count)

        setChartData({
          labels: years,
          datasets: [
            {
              label: 'Shark Attacks',
              data: counts,
              backgroundColor: 'rgba(26, 115, 232, 0.8)',
              borderColor: 'rgba(26, 115, 232, 1)',
              borderWidth: 1
            }
          ]
        })
      } catch (err) {
        setError('Failed to fetch attack data. Please try again.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [formattedCountryName])

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Shark Attacks Over Time in ${formattedCountryName}`,
        font: {
          size: 16
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Attacks'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Year'
        }
      }
    }
  }

  return (
    <div className="country-page">
      <div className="container">
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": `Shark Attack Data for ${formattedCountryName}`,
            "description": metaDescription,
            "url": window.location.href,
            "keywords": [
              "shark attacks",
              formattedCountryName,
              "shark statistics",
              "marine safety"
            ],
            "creator": {
              "@type": "Organization",
              "name": "Global Shark Attack Tracker"
            },
            "datePublished": new Date().toISOString(),
            "includedInDataCatalog": {
              "@type": "DataCatalog",
              "name": "Global Shark Attack File"
            }
          })}
        </script>

        <h1>Shark Attacks in {formattedCountryName}</h1>
        
        {countryStats && (
          <div className="country-overview">
            <p>
              {formattedCountryName} has recorded {countryStats.count} shark attack incidents. 
              Explore the detailed statistics and historical data below.
            </p>
          </div>
        )}

        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading attack data...</p>
          </div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : attacks.length > 0 ? (
          <>
            {/* Chart Section */}
            {chartData && (
              <div className="chart-section">
                <div className="chart-container">
                  <Bar data={chartData} options={chartOptions} />
                </div>
                <p className="chart-description">
                  This chart shows the distribution of shark attacks over time in {formattedCountryName}.
                  The data helps identify trends and patterns in shark-human interactions.
                </p>
              </div>
            )}

            {/* Attacks Table */}
            <div className="attacks-table">
              <h2>Detailed Incident Reports</h2>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Type</th>
                    <th>Species</th>
                    <th>Activity</th>
                    <th>Injury</th>
                  </tr>
                </thead>
                <tbody>
                  {attacks.map((attack, index) => (
                    <tr key={index}>
                      <td>{attack.date || 'Unknown'}</td>
                      <td>{attack.location || 'Unknown'}</td>
                      <td>{attack.type || 'Unknown'}</td>
                      <td>{attack.species || 'Unknown'}</td>
                      <td>{attack.activity || 'Unknown'}</td>
                      <td>{attack.injury || 'Unknown'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="no-results">
            <p>No attack data available for {formattedCountryName}.</p>
          </div>
        )}
      </div>
    </div>
  )
}
