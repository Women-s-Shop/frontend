import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>MA RÊVE</h3>
            <p>Making dreams come true through beautiful, accessible fashion for everyone.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Customer Care</h3>
            <ul className="footer-links">
              <li>
                <a href="#shipping">Shipping Info</a>
              </li>
              <li>
                <a href="#returns">Returns</a>
              </li>
              <li>
                <a href="#size-guide">Size Guide</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <ul className="footer-links">
              <li>
                <a href="#newsletter">Newsletter</a>
              </li>
              <li>
                <a href="#social">Social Media</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">&copy; 2024 MA RÊVE. All rights reserved. Made with ❤️ for everyone.</div>
      </div>
    </footer>
  )
}

export default Footer
