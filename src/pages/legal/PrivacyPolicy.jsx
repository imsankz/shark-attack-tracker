import '../../styles/PageStyles.css'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
      
      <section>
        <h2>Information We Collect</h2>
        <p>We collect information to provide better services to all our users.</p>
        <ul>
          <li>Personal identification information</li>
          <li>Usage data and analytics</li>
          <li>Cookies and tracking technologies</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services.</p>
      </section>

      <section>
        <h2>Information We Share</h2>
        <p>We do not share personal information with companies, organizations, or individuals outside of Shark Attack Tracker.</p>
      </section>
    </div>
  )
}
