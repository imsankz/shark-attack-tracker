import '../../styles/PageStyles.css'

export default function CookiePolicy() {
  return (
    <div className="legal-page">
      <h1>Cookie Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
        </p>
      </section>

      <section>
        <h2>2. How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off.</li>
          <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
          <li><strong>Preference Cookies:</strong> These enable the website to remember information that changes the way the site behaves or looks, like your preferred language.</li>
        </ul>
      </section>

      <section>
        <h2>3. Managing Cookies</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
        </p>
      </section>

      <section>
        <h2>4. Changes to This Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
        </p>
      </section>

      <section>
        <h2>5. Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at:
        </p>
        <p>
          Email: privacy@thesharksattacks.com<br />
          Address: 123 Ocean Drive, Marine City, CA 90210
        </p>
      </section>
    </div>
  )
}
