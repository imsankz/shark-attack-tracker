import { useState, useEffect } from 'react'
import axios from 'axios'
import './Statistics.css'

export default function Statistics() {
  const [stats, setStats] = useState({
    yearly: [],
    countries: [],
    activities: []
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const [yearlyData, countryData, activityData] = await Promise.all([
          axios.get(
            'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records',
            {
              params: {
                select: 'year, count(*) as count',
                group_by: 'year',
                order_by: 'year desc',
                limit: 10
              }
            }
          ),
          axios.get(
            'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records',
            {
              params: {
                select: 'country, count(*) as count',
                group_by: 'country',
                order_by: 'count desc',
                limit: 10
              }
            }
          ),
          axios.get(
            'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records',
            {
              params: {
                select: 'activity, count(*) as count',
                group_by: 'activity',
                order_by: 'count desc',
                limit: 10
              }
            }
          )
        ])

        setStats({
          yearly: yearlyData.data.results.map(item => ({
            year: item.year,
            count: item.count
          })),
          countries: countryData.data.results.map(item => ({
            country: item.country,
            count: item.count
          })),
          activities: activityData.data.results.map(item => ({
            activity: item.activity,
            count: item.count
          }))
        })
      } catch (err) {
        setError('Failed to fetch statistics. Please try again.')
        console.error('Error fetching statistics:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchStatistics()
  }, [])

  return (
    <div className="statistics-page">
      <div className="container">
        <h1>Shark Attack Statistics</h1>
        
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading statistics...</p>
          </div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <>
            <section className="statistics-section">
              <h2>Recent Years Overview</h2>
              <div className="stats-grid">
                {stats.yearly.map((item, index) => (
                  <div className="stat-card" key={index}>
                    <h3>{item.year || 'Unknown Year'}</h3>
                    <p>{item.count} incidents</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="statistics-section">
              <h2>Top Countries</h2>
              <div className="stats-list">
                {stats.countries.map((item, index) => (
                  <div className="stat-item" key={index}>
                    <span className="country">{item.country || 'Unknown Country'}</span>
                    <span className="count">{item.count} incidents</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="statistics-section">
              <h2>Common Activities</h2>
              <div className="stats-list">
                {stats.activities.map((item, index) => (
                  <div className="stat-item" key={index}>
                    <span className="activity">{item.activity || 'Unknown Activity'}</span>
                    <span className="count">{item.count} incidents</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
