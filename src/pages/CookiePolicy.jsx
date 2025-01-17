export default function CookiePolicy() {
  return (
    <div className="page-container">
      <h1>Cookie Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit websites.
          They help improve your browsing experience.
        </p>
      </section>

      <section>
        <h2>How We Use Cookies</h2>
        <p>We use cookies for:</p>
        <ul>
          <li>Website functionality</li>
          <li>Analytics and performance</li>
          <li>Personalization</li>
        </ul>
      </section>

      <section>
        <h2>Managing Cookies</h2>
        <p>
          You can control and manage cookies through your browser settings. However,
          disabling cookies may affect your experience on our website.
        </p>
      </section>
    </div>
  )
}
