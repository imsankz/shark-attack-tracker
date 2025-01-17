import { useState, useEffect } from 'react'
    import axios from 'axios'
    import { useNavigate } from 'react-router-dom'

    export default function Home() {
      const [searchTerm, setSearchTerm] = useState('')
      const [countries, setCountries] = useState([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
      const navigate = useNavigate()

      useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get(
              'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records',
              {
                params: {
                  group_by: 'country',
                  limit: 100
                }
              }
            )
            const validCountries = response.data.results.filter(
              country => country?.country
            )
            setCountries(validCountries)
          } catch (err) {
            setError('Failed to fetch data. Please try again.')
            console.error(err)
          } finally {
            setLoading(false)
          }
        }

        fetchCountries()
      }, [])

      const filteredCountries = searchTerm
        ? countries.filter(country => {
            const countryName = country?.country || ''
            return countryName.toLowerCase().includes(searchTerm.toLowerCase())
          })
        : countries

      const handleCountryClick = (countryName) => {
        if (countryName) {
          navigate(`/country/${encodeURIComponent(countryName)}`)
        }
      }

      return (
        <div className="home-page">
          <div className="hero-section">
            <div className="container">
              <h1>Global Shark Attack Tracker</h1>
              <p className="subtitle">
                Explore and analyze shark incidents worldwide. Search by country to view detailed statistics and historical data.
              </p>
              <form className="search-form">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by country (e.g., Greece, Australia)"
                  aria-label="Search shark attacks by country"
                />
                <button type="submit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="results-section">
            <div className="container">
              {error && <div className="error-message">{error}</div>}

              <div className="results-header">
                <h2>Countries with Shark Attacks</h2>
                <p className="results-count">
                  {filteredCountries.length} countries found
                </p>
              </div>

              {loading ? (
                <div className="loading-state">
                  <div className="spinner"></div>
                  <p>Loading countries...</p>
                </div>
              ) : filteredCountries.length > 0 ? (
                <div className="countries-grid">
                  {filteredCountries.map((country, index) => (
                    <div 
                      className="country-card" 
                      key={index}
                      onClick={() => handleCountryClick(country.country)}
                    >
                      <h3>{country.country || 'Unknown Country'}</h3>
                      <p className="incident-count">{country.count} incidents</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <p>No matching countries found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
