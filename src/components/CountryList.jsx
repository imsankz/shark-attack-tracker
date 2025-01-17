export default function CountryList({ countries, onCountryClick }) {
      return (
        <div className="country-list">
          {countries.map((country, index) => {
            const countryName = country?.country || 'Unknown Country'
            return (
              <div 
                className="country-item" 
                key={index}
                onClick={() => onCountryClick(countryName)}
              >
                <h3>{countryName}</h3>
                <p className="incident-count">{country.count || 0} incidents</p>
              </div>
            )
          })}
        </div>
      )
    }
