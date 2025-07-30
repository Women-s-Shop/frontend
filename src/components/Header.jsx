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
  onNavigateToCart, // ✅ исправлено название
  currentPage,
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
            onNavigateToAccount={onNavigateToAccount}
            onNavigateToCart={onNavigateToCart} // ✅ исправлено
          />
          <SearchBar onSearch={onSearch} searchResults={searchResults} />
          <UserActions
            cartCount={cartCount}
            onNavigateToAccount={onNavigateToAccount}
            onNavigateHome={onNavigateHome}
            onNavigateToCart={onNavigateToCart}
            currentPage={currentPage}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
