export default function PrivacyPolicy() {
  return (
    <div className="page-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <section>
        <h2>Introduction</h2>
        <p>
          Shark Attack Tracker ("we", "our", "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your information
          when you visit our website.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal identification information (Name, email address, etc.)</li>
          <li>Usage data and analytics</li>
          <li>Cookies and tracking technologies</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect for various purposes:</p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To improve user experience</li>
          <li>To analyze website usage</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at
          privacy@sharkattacktracker.com.
        </p>
      </section>
    </div>
  )
}
