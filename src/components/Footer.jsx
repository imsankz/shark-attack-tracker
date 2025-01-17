import './Footer.css'

    export default function Footer() {
      return (
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>About Shark Tracker</h3>
                <p>Comprehensive shark attack data and analysis from around the world.</p>
              </div>
              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/locations">Locations</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/sponsor">Sponsor</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Contact</h3>
                <p>Email: info@sharktracker.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} Shark Tracker. All rights reserved.
            </div>
          </div>
        </footer>
      )
    }
