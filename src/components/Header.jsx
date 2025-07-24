"use client"

import "../styles/header.css"
import Logo from "./Logo"
import NavLinks from "./NavLinks"
import SearchBar from "./SearchBar"
import UserActions from "./UserActions"

const Header = ({
  cartCount,
  onSearch,
  searchResults,
  onNavigateToAccount,
  onNavigateHome,
  onNavigateToAbout,
  onNavigateToContact,
  onNavigateToSupport,
}) => {
  return (
    <header className="header" role="banner">
      <div className="header-container">
        <div className="header-content">
          <div onClick={onNavigateHome} style={{ cursor: "pointer" }}>
            <Logo />
          </div>
          <NavLinks
            onNavigateToAbout={onNavigateToAbout}
            onNavigateToContact={onNavigateToContact}
            onNavigateToSupport={onNavigateToSupport}
          />
          <SearchBar onSearch={onSearch} searchResults={searchResults} />
          <UserActions cartCount={cartCount} onNavigateToAccount={onNavigateToAccount} />
        </div>
      </div>
    </header>
  )
}

export default Header
