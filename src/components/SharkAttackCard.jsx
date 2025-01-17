export default function SharkAttackCard({ attack }) {
      return (
        <div className="attack-card">
          <div className="card-header">
            <h3>{attack.location || 'Unknown Location'}</h3>
            <p className="date">{attack.date || 'Unknown Date'}</p>
          </div>
          <div className="card-body">
            <div className="info-row">
              <span>Type:</span>
              <p>{attack.type || 'Unknown'}</p>
            </div>
            <div className="info-row">
              <span>Species:</span>
              <p>{attack.species || 'Unknown'}</p>
            </div>
            <div className="info-row">
              <span>Details:</span>
              <p>{attack.details || 'No additional details available'}</p>
            </div>
          </div>
        </div>
      )
    }
