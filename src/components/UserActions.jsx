"use client"

const UserActions = ({ cartCount, onNavigateToAccount, onNavigateHome, onNavigateToCart, currentPage }) => {
  const isAccountPage = currentPage === "account"

  return (
    <div className="user-actions">
      <button
        className={`user-action-btn ${isAccountPage ? "active" : ""}`}
        aria-label="My Account"
        onClick={onNavigateToAccount}
      >
        👤 Account
      </button>

      {isAccountPage ? (
        <button
          className="user-action-btn"
          aria-label="Go Back to Home"
          onClick={onNavigateHome}
        >
          🔙 Back
        </button>
      ) : (
        <button
          className="user-action-btn"
          aria-label={`Shopping cart with ${cartCount} items`}
          onClick={onNavigateToCart}
        >
          🛒 Cart ({cartCount})
        </button>
      )}
    </div>
  )
}

export default UserActions
