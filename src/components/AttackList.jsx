export default function AttackList({ attacks }) {
      return (
        <div className="attack-list">
          {attacks.map((attack, index) => (
            <div className="attack-item" key={index}>
              <h3>{attack.location || 'Unknown Location'}</h3>
              <p className="date">{attack.date || 'Unknown Date'}</p>
              <p className="details">{attack.details || 'No additional details'}</p>
            </div>
          ))}
        </div>
      )
    }
