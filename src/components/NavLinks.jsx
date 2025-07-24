"use client"

const NavLinks = ({ onNavigateToAbout, onNavigateToContact, onNavigateToSupport }) => {
  const navItems = [
    { action: () => (window.location.href = "#products"), label: "Products" },
    { action: onNavigateToAbout, label: "About" },
    { action: onNavigateToContact, label: "Contact" },
    { action: onNavigateToSupport, label: "Support" },
  ]

  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={index}>
            <button onClick={item.action} className="nav-button">
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
