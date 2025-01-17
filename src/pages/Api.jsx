export default function Api() {
      return (
        <div className="api-page">
          <h1>Global Shark Attack API</h1>
          <section>
            <h2>API Documentation</h2>
            <p>
              The Global Shark Attack File (GSAF) API offers access to a comprehensive dataset of human-shark interactions.
            </p>
            <a 
              href="https://public.opendatasoft.com/explore/dataset/global-shark-attack"
              target="_blank"
              rel="noopener noreferrer"
            >
              View API Documentation
            </a>
          </section>
          <section>
            <h2>Example Endpoint</h2>
            <pre>
              GET https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records?limit=20
            </pre>
          </section>
        </div>
      )
    }
