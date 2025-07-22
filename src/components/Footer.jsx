import "../styles/footer.css";
import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Classic Women Shop</h3>
          <p>Timeless elegance for the modern woman.</p>
        </div>
        <div className="footer-section">
          <h3>Shop</h3>
          <Link to="/dresses" className="footer-link">Dresses</Link>
          <Link to="/tops" className="footer-link">Tops</Link>
          <Link to="/bottoms" className="footer-link">Bottoms</Link>
          <Link to="/accessories" className="footer-link">Accessories</Link>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <Link to="#" className="footer-link">Facebook</Link>
          <Link to="#" className="footer-link">Instagram</Link>
          <Link to="#" className="footer-link">Twitter</Link>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Classic Threads. All rights reserved.
      </div>
    </footer>
  );
}
