"use client"

import { useState } from "react"

const UserActions = ({ cartCount }) => {
  const [showAccountPage, setShowAccountPage] = useState(false)

  const handleAccountClick = (e) => {
    e.preventDefault()
    setShowAccountPage(true)
  }

  if (showAccountPage) {
    // Dynamically import and render the AccountPage
    const AccountPage = require("../pages/AccountPage").default
    return <AccountPage />
  }

  return (
    <div className="user-actions">
      <a href="#account" className="user-action-btn" aria-label="My Account" onClick={handleAccountClick}>
        👤 Account
      </a>
      <a href="#cart" className="user-action-btn" aria-label={`Shopping cart with ${cartCount} items`}>
        🛒 Cart ({cartCount})
      </a>
    </div>
  )
}

export default UserActions
