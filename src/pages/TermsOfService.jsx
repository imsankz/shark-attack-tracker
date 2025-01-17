export default function TermsOfService() {
  return (
    <div className="page-container">
      <h1>Terms of Service</h1>
      <p>Effective date: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using Shark Attack Tracker, you accept and agree to be bound
          by these Terms of Service.
        </p>
      </section>

      <section>
        <h2>User Responsibilities</h2>
        <p>As a user of our service, you agree to:</p>
        <ul>
          <li>Use the service only for lawful purposes</li>
          <li>Not attempt to disrupt or interfere with the service</li>
          <li>Respect intellectual property rights</li>
        </ul>
      </section>

      <section>
        <h2>Limitations of Liability</h2>
        <p>
          Shark Attack Tracker shall not be liable for any indirect, incidental,
          or consequential damages arising from the use of our service.
        </p>
      </section>

      <section>
        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Your continued use
          of the service constitutes acceptance of any changes.
        </p>
      </section>
    </div>
  )
}
