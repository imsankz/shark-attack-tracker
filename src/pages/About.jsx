import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'

export default function About() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records',
          {
            params: {
              select: 'count(*)',
              group_by: 'year'
            }
          }
        )
        setStats(response.data.results)
      } catch (err) {
        setError('Failed to fetch statistics. Please try again.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="about-page">
      <div className="container">
        <h1>About Global Shark Attack Tracker</h1>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            The Global Shark Attack Tracker is dedicated to providing accurate, comprehensive data about shark-human interactions worldwide. Our mission is to:
          </p>
          <ul>
            <li>Educate the public about shark behavior and conservation</li>
            <li>Provide reliable data for researchers and policymakers</li>
            <li>Promote shark conservation efforts</li>
            <li>Help reduce negative human-shark interactions</li>
          </ul>
        </section>

        <section className="classification-section">
          <h2>Understanding Shark Incidents</h2>
          
          <div className="classification-card">
            <h3 className="unprovoked">Unprovoked vs. Provoked Incidents</h3>
            <p>
              GSAF defines a provoked incident as one in which the shark was speared, hooked, captured or in which a human drew "first blood". Although such incidents are of little interest to shark behaviorists, when the species of shark involved is known and pre-op photos of the wounds are available, the bite patterns are of value in determining species of shark involved in other cases when the species could not be identified by the patient or witnesses.
            </p>
            <p>
              We know that a live human is rarely perceived as prey by a shark. Many incidents are motivated by curiosity, others may result when a shark perceives a human as a threat or competitor for a food source, and could be classed as "provoked" when examined from the shark's perspective.
            </p>
          </div>

          <div className="classification-card">
            <h3 className="boat">Incidents Involving Boats</h3>
            <p>
              Incidents in which a boat was bitten or rammed by a shark are classified separately. However, in cases in which the shark was hooked, netted or gaffed, the entry is considered a provoked incident. These interactions help us understand how sharks react to human-made objects in their environment.
            </p>
          </div>

          <div className="classification-card">
            <h3 className="disaster">Casualties of War & Air/Sea Disasters</h3>
            <p>
              Sharks maintain the health of the marine ecosystem by removing dead or injured animals. Many incidents result because, like other animals that don't rely on instinct alone, sharks explore their environment. Lacking hands, they may investigate an unfamiliar object with their mouths.
            </p>
            <p>
              Unlike humans, there is no malice in sharks; they simply do what nature designed them to do. Air/Sea Disasters are accidents that place people into the day-to-day business of sharks. The wartime losses due to sharks result from man's cruelty to man.
            </p>
          </div>

          <div className="classification-card">
            <h3 className="questionable">Questionable Incidents</h3>
            <p>
              These are incidents in which there are insufficient data to determine if the injury was caused by a shark or the person drowned and the body was later scavenged by sharks. In a few cases, despite media reports to the contrary, evidence indicated there was no shark involvement whatsoever.
            </p>
          </div>
        </section>

        <section className="data-section">
          <h2>Our Data Sources</h2>
          <p>
            All of the data on this site comes from the Global Shark Attack File (GSAF), a comprehensive database of human/shark interactions, compiled by the Shark Research Institute. It is hoped that this site makes it apparent that shark attacks are extremely rare occurrences, while providing an easily accessible resource for those wishing to know more about the subject.
          </p>
          <p>
            The GSAF data is meticulously maintained and includes:
          </p>
          <ul>
            <li>Verified incident reports from around the world</li>
            <li>Scientific research data</li>
            <li>Government agency reports</li>
            <li>Media reports cross-verified by experts</li>
          </ul>
        </section>

        <section className="stats-section">
          <h2>Key Statistics</h2>
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading statistics...</p>
            </div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : stats ? (
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Incidents Recorded</h3>
                <p>{stats.length}</p>
              </div>
              <div className="stat-card">
                <h3>Years of Data</h3>
                <p>{new Date().getFullYear() - stats[0].year}</p>
              </div>
              <div className="stat-card">
                <h3>Countries Covered</h3>
                <p>100+</p>
              </div>
            </div>
          ) : (
            <div className="no-results">
              <p>No statistics available at this time.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
