import { Link } from 'react-router-dom'

    export default function LocationCard({ name, count, lastIncident }) {
      return (
        <div className="location-card">
          <div className="card-header">
            <h3>{name || 'Unknown Location'}</h3>
            <div className="location-meta">
              <span className="incident-count">{count} incidents</span>
              {lastIncident && (
                <span className="last-incident">
                  Last incident: {new Date(lastIncident).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
          <div className="card-actions">
            <Link to={`/list?location=${encodeURIComponent(name)}`} className="view-details">
              View Details
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )
    }
