import '../styles/PageStyles.css'

export default function Faq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate is the shark attack data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our data is rigorously verified using multiple sources including government reports, scientific research, and verified media accounts to ensure maximum accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "How often is the data updated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We update our database weekly with new verified incidents and continuously improve existing records as new information becomes available."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use your data for research purposes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our data is available for academic and research purposes. Please contact us for more information about data access and usage policies."
        }
      }
    ]
  }

  return (
    <div className="page-container">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <h1>Frequently Asked Questions</h1>

      <section>
        <h2>General Questions</h2>
        <div className="faq-item">
          <h3>How accurate is the shark attack data?</h3>
          <p>
            Our data is rigorously verified using multiple sources including government reports, scientific research, and verified media accounts to ensure maximum accuracy.
          </p>
        </div>

        <div className="faq-item">
          <h3>How often is the data updated?</h3>
          <p>
            We update our database weekly with new verified incidents and continuously improve existing records as new information becomes available.
          </p>
        </div>
      </section>

      <section>
        <h2>Technical Questions</h2>
        <div className="faq-item">
          <h3>Can I use your data for research purposes?</h3>
          <p>
            Yes, our data is available for academic and research purposes. Please contact us for more information about data access and usage policies.
          </p>
        </div>
      </section>

      <section>
        <h2>Safety Questions</h2>
        <div className="faq-item">
          <h3>What should I do if I see a shark?</h3>
          <p>
            Stay calm, maintain eye contact, and slowly back away. Avoid sudden movements and exit the water as quickly and calmly as possible.
          </p>
        </div>
      </section>
    </div>
  )
}
