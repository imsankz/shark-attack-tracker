import { useEffect, useState } from 'react'
    import axios from 'axios'
    import SharkAttackList from '../components/SharkAttackList'

    export default function List() {
      const [data, setData] = useState([])
      const [loading, setLoading] = useState(true)

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records?limit=100'
            )
            setData(response.data.results)
          } catch (error) {
            console.error('Error fetching data:', error)
          } finally {
            setLoading(false)
          }
        }

        fetchData()
      }, [])

      return (
        <div className="list">
          <h1>Global Shark Attack Incidents</h1>
          {loading ? (
            <p>Loading shark attack data...</p>
          ) : (
            <>
              <p className="meta-description">
                Explore our comprehensive database of verified shark attack incidents worldwide.
                Filter by location, date, and shark species to gain insights into shark behavior patterns.
              </p>
              <SharkAttackList data={data} />
            </>
          )}
        </div>
      )
    }
