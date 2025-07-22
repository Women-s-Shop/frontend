import "../styles/header.css";
import { Link } from "react-router-dom";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">Classic Threads</Link>
        <nav className="nav-links">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/new" className="nav-link">New</Link>
          <Link to="/sale" className="nav-link">Sale</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
