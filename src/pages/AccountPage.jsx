"use client"

import { useState, useEffect } from "react"
import "../styles/account.css"

const AccountPage = () => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState("profile")
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({})

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/user/profile", {
        headers: {
          "x-user-id": "1", // In a real app, this would come from authentication
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch user data")
      }

      const data = await response.json()
      setUserData(data)
      setEditForm({
        first_name: data.user.first_name || "",
        last_name: data.user.last_name || "",
        phone: data.user.phone || "",
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": "1",
        },
        body: JSON.stringify(editForm),
      })

      if (!response.ok) {
        throw new Error("Failed to update profile")
      }

      const updatedUser = await response.json()
      setUserData((prev) => ({ ...prev, user: updatedUser }))
      setIsEditing(false)
    } catch (err) {
      setError(err.message)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusColor = (status) => {
    const colors = {
      pending: "#ffc107",
      processing: "#17a2b8",
      shipped: "#28a745",
      delivered: "#28a745",
      cancelled: "#dc3545",
    }
    return colors[status] || "#6c757d"
  }

  if (loading) {
    return (
      <div className="account-page">
        <div className="account-loading">
          <div className="loading-spinner">Loading your account...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="account-page">
        <div className="account-error">
          <h2>Error Loading Account</h2>
          <p>{error}</p>
          <button onClick={fetchUserData} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="account-page">
      <div className="account-container">
        <div className="account-header">
          <h1>My Account</h1>
          <p>Welcome back, {userData.user.first_name || "User"}!</p>
        </div>

        <div className="account-tabs">
          <button
            className={`tab-button ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`tab-button ${activeTab === "orders" ? "active" : ""}`}
            onClick={() => setActiveTab("orders")}
          >
            Orders ({userData.orders.length})
          </button>
          <button
            className={`tab-button ${activeTab === "addresses" ? "active" : ""}`}
            onClick={() => setActiveTab("addresses")}
          >
            Addresses
          </button>
          <button
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className="account-content">
          {activeTab === "profile" && (
            <div className="profile-section">
              <div className="section-header">
                <h2>Profile Information</h2>
                <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Cancel" : "Edit"}
                </button>
              </div>

              {isEditing ? (
                <form onSubmit={handleUpdateProfile} className="profile-form">
                  <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      id="first_name"
                      value={editForm.first_name}
                      onChange={(e) => setEditForm({ ...editForm, first_name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      type="text"
                      id="last_name"
                      value={editForm.last_name}
                      onChange={(e) => setEditForm({ ...editForm, last_name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="save-button">
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="profile-info">
                  <div className="info-item">
                    <label>Email</label>
                    <span>{userData.user.email}</span>
                  </div>
                  <div className="info-item">
                    <label>Name</label>
                    <span>
                      {userData.user.first_name} {userData.user.last_name}
                    </span>
                  </div>
                  <div className="info-item">
                    <label>Phone</label>
                    <span>{userData.user.phone || "Not provided"}</span>
                  </div>
                  <div className="info-item">
                    <label>Member Since</label>
                    <span>{formatDate(userData.user.created_at)}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "orders" && (
            <div className="orders-section">
              <h2>Order History</h2>
              {userData.orders.length === 0 ? (
                <div className="empty-state">
                  <p>You haven't placed any orders yet.</p>
                  <a href="/" className="shop-button">
                    Start Shopping
                  </a>
                </div>
              ) : (
                <div className="orders-list">
                  {userData.orders.map((order) => (
                    <div key={order.id} className="order-card">
                      <div className="order-header">
                        <div className="order-number">Order #{order.order_number}</div>
                        <div className="order-status" style={{ backgroundColor: getStatusColor(order.status) }}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </div>
                      </div>
                      <div className="order-details">
                        <div className="order-date">{formatDate(order.created_at)}</div>
                        <div className="order-total">${order.total_amount}</div>
                        <div className="order-items">{order.item_count} items</div>
                      </div>
                      {order.product_names && (
                        <div className="order-products">
                          <small>{order.product_names}</small>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "addresses" && (
            <div className="addresses-section">
              <h2>Saved Addresses</h2>
              {userData.addresses.length === 0 ? (
                <div className="empty-state">
                  <p>No saved addresses yet.</p>
                  <button className="add-address-button">Add Address</button>
                </div>
              ) : (
                <div className="addresses-list">
                  {userData.addresses.map((address) => (
                    <div key={address.id} className="address-card">
                      <div className="address-header">
                        <h3>{address.type.charAt(0).toUpperCase() + address.type.slice(1)} Address</h3>
                        {address.is_default && <span className="default-badge">Default</span>}
                      </div>
                      <div className="address-details">
                        <p>
                          {address.first_name} {address.last_name}
                        </p>
                        {address.company && <p>{address.company}</p>}
                        <p>{address.address_line_1}</p>
                        {address.address_line_2 && <p>{address.address_line_2}</p>}
                        <p>
                          {address.city}, {address.state} {address.postal_code}
                        </p>
                        <p>{address.country}</p>
                        {address.phone && <p>Phone: {address.phone}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="reviews-section">
              <h2>My Reviews</h2>
              {userData.reviews.length === 0 ? (
                <div className="empty-state">
                  <p>You haven't written any reviews yet.</p>
                </div>
              ) : (
                <div className="reviews-list">
                  {userData.reviews.map((review) => (
                    <div key={review.id} className="review-card">
                      <div className="review-header">
                        <h3>{review.product_name}</h3>
                        <div className="review-rating">
                          {"★".repeat(review.rating)}
                          {"☆".repeat(5 - review.rating)}
                        </div>
                      </div>
                      {review.title && <h4>{review.title}</h4>}
                      <p>{review.comment}</p>
                      <div className="review-date">{formatDate(review.created_at)}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountPage
