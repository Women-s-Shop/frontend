import React, { useEffect, useState } from 'react';
import '../styles/account.css';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Временные данные вместо API
  const fakeUserData = {
    name: "Beibarys Abdinazar",
    email: "beibarys790@gmail.com",
    phone: "+7 771 795 0059",
    gender: "Male"
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setUser(fakeUserData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  const renderProfile = () => {
    if (!user) return null;

    return (
      <div className="profile-section">
        <div className="section-header">
          <h2>Profile Information</h2>
          {!isEditing && <button className="edit-button" onClick={() => {
            setEditedUser(user);
            setIsEditing(true);
          }}>Edit</button>}
        </div>
        {isEditing ? (
          <div className="profile-info">
            <div className="info-item">
              <label>Full Name</label>
              <input value={editedUser.name} onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })} />
            </div>
            <div className="info-item">
              <label>Email</label>
              <input value={editedUser.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} />
            </div>
            <div className="info-item">
              <label>Phone</label>
              <input value={editedUser.phone} onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })} />
            </div>
            <div className="info-item">
              <label>Gender</label>
              <select value={editedUser.gender} onChange={(e) => setEditedUser({ ...editedUser, gender: e.target.value })}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="button-group">
              <button className="save-button" onClick={handleSave}>Save</button>
              <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="profile-info">
            <div className="info-item">
              <label>Full Name</label>
              <span>{user.name}</span>
            </div>
            <div className="info-item">
              <label>Email</label>
              <span>{user.email}</span>
            </div>
            <div className="info-item">
              <label>Phone</label>
              <span>{user.phone}</span>
            </div>
            <div className="info-item">
              <label>Gender</label>
              <span>{user.gender}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderOrders = () => (
    <div className="orders-section">
      <h2>Your Orders</h2>
      <p>No orders yet.</p>
    </div>
  );

  const renderAddresses = () => (
    <div className="addresses-section">
      <h2>Your Addresses</h2>
      <p>No addresses saved.</p>
    </div>
  );

  const renderReviews = () => (
    <div className="reviews-section">
      <h2>Your Reviews</h2>
      <p>No reviews submitted.</p>
    </div>
  );

  const renderContent = () => {
    if (isLoading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    switch (activeTab) {
      case 'profile': return renderProfile();
      case 'orders': return renderOrders();
      case 'addresses': return renderAddresses();
      case 'reviews': return renderReviews();
      default: return null;
    }
  };

  return (
    <div className="account-page">
      <div className="sidebar">
        <ul>
          <li onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'active' : ''}>Profile</li>
          <li onClick={() => setActiveTab('orders')} className={activeTab === 'orders' ? 'active' : ''}>Orders</li>
          <li onClick={() => setActiveTab('addresses')} className={activeTab === 'addresses' ? 'active' : ''}>Addresses</li>
          <li onClick={() => setActiveTab('reviews')} className={activeTab === 'reviews' ? 'active' : ''}>Reviews</li>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AccountPage;
