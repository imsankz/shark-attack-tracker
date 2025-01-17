import { useState, useEffect } from 'react'
    import { useParams } from 'react-router-dom'
    import axios from 'axios'

    export default function CountryPage() {
      const { countryName } = useParams()
      const [attacks, setAttacks] = useState([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)

      useEffect(() => {
        const fetchAttacks = async () => {
          try {
            const response = await axios.get(
              'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records',
              {
                params: {
                  refine: `country:"${decodeURIComponent(countryName)}"`,
                  limit: 100
                }
              }
            )
            setAttacks(response.data.results)
          } catch (err) {
            setError('Failed to fetch attack data. Please try again.')
            console.error(err)
          } finally {
            setLoading(false)
          }
        }

        fetchAttacks()
      }, [countryName])

      return (
        <div className="country-page">
          <div className="container">
            <h1>Shark Attacks in {decodeURIComponent(countryName)}</h1>
            
            {loading ? (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading attack data...</p>
              </div>
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : attacks.length > 0 ? (
              <div className="attacks-table">
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
            ) : (
              <div className="no-results">
                <p>No attack data available for this country.</p>
              </div>
            )}
          </div>
        </div>
      )
    }
