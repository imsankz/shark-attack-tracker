import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3>About Shark Attack Tracker</h3>
            <p>
              Comprehensive shark attack data and analysis from around the world.
              Providing accurate information to promote marine safety and awareness.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/statistics">Statistics</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="/shark-safety">Shark Safety Tips</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p>Email: info@sharkattacktracker.com</p>
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
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Shark Attack Tracker. All rights reserved.
            <span className="footer-links">
              <a href="/privacy-policy">Privacy Policy</a> | 
              <a href="/terms-of-service">Terms of Service</a> | 
              <a href="/cookie-policy">Cookie Policy</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
