export default function TermsOfService() {
  return (
    <div className="legal-page">
      <h1>Terms of Service</h1>
      <p>Effective date: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By using Shark Attack Tracker, you agree to these terms.</p>
      </section>

      <section>
        <h2>2. User Responsibilities</h2>
        <p>Users must not misuse our services or attempt to access them using a method other than the interface we provide.</p>
      </section>
    </div>
  )
}
