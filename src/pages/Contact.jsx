import '../styles/PageStyles.css'

export default function Contact() {
  return (
		    <div className="page-container">
    <div className="content-page">
      <h1>Contact Us</h1>
      
      <div className="contact-info">
        <div className="contact-card">
          <i className="fas fa-envelope"></i>
          <h3>General Inquiries</h3>
          <p>info@sharkattacktracker.com</p>
        </div>

        <div className="contact-card">
          <i className="fas fa-newspaper"></i>
          <h3>Press Inquiries</h3>
          <p>press@sharkattacktracker.com</p>
        </div>

        <div className="contact-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Mailing Address</h3>
          <address>
            123 Ocean View Drive<br />
            Marine City, CA 90210<br />
            United States
          </address>
        </div>
      </div>

      <section>
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>
    </div>
					 </div>
  )
}
