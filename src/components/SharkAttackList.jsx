export default function SharkAttackList({ data }) {
      if (data.length === 0) {
        return <p>No results found. Try a different search term.</p>
      }

      return (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Type</th>
              <th>Species</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((attack, index) => (
              <tr key={index}>
                <td>{attack.date || 'Unknown'}</td>
                <td>{attack.location || 'Unknown'}</td>
                <td>{attack.type || 'Unknown'}</td>
                <td>{attack.species || 'Unknown'}</td>
                <td>{attack.details || 'No additional details'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    }
