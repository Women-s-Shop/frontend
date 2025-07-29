"use client"
import { useState } from "react"
import { useProducts } from "../hooks/useProducts"
import { useUsers } from "../hooks/useUsers"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorMessage from "../components/ErrorMessage"
import "../styles/admin.css"

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("products")
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  const {
    products,
    loading: productsLoading,
    error: productsError,
    createProduct,
    updateProduct,
    deleteProduct,
    refetch: refetchProducts,
  } = useProducts()

  const {
    users,
    loading: usersLoading,
    error: usersError,
    createUser,
    updateUser,
    deleteUser,
    refetch: refetchUsers,
  } = useUsers()

  // Basic product form - adjust fields based on your backend structure
  const [productForm, setProductForm] = useState({
    Name: "",
    Description: "",
    Price: "",
    ImageUrl: "",
  })

  // Basic user form - adjust fields based on your backend structure
  const [userForm, setUserForm] = useState({
    Name: "",
    Email: "",
    Password: "",
    Phone: "",
    Address: "",
  })

  const handleProductSubmit = async (e) => {
    e.preventDefault()
    try {
      const productData = {
        ...productForm,
        Price: Number.parseFloat(productForm.Price) || 0,
      }

      if (editingItem) {
        await updateProduct(editingItem.Id || editingItem.id, productData)
      } else {
        await createProduct(productData)
      }

      setProductForm({ Name: "", Description: "", Price: "", ImageUrl: "" })
      setShowCreateForm(false)
      setEditingItem(null)
    } catch (error) {
      console.error("Failed to save product:", error)
      alert("Failed to save product. Please try again.")
    }
  }

  const handleUserSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingItem) {
        await updateUser(editingItem.Id || editingItem.id, userForm)
      } else {
        await createUser(userForm)
      }

      setUserForm({ Name: "", Email: "", Password: "", Phone: "", Address: "" })
      setShowCreateForm(false)
      setEditingItem(null)
    } catch (error) {
      console.error("Failed to save user:", error)
      alert("Failed to save user. Please try again.")
    }
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    if (activeTab === "products") {
      setProductForm({
        Name: item.Name || item.name || "",
        Description: item.Description || item.description || "",
        Price: (item.Price || item.price || 0).toString(),
        ImageUrl: item.ImageUrl || item.imageUrl || item.image_url || "",
      })
    } else {
      setUserForm({
        Name: item.Name || item.name || "",
        Email: item.Email || item.email || "",
        Password: "", // Don't populate password for security
        Phone: item.Phone || item.phone || "",
        Address: item.Address || item.address || "",
      })
    }
    setShowCreateForm(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        if (activeTab === "products") {
          await deleteProduct(id)
        } else {
          await deleteUser(id)
        }
      } catch (error) {
        console.error("Failed to delete item:", error)
        alert("Failed to delete item. Please try again.")
      }
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>Manage your products and users</p>
        </div>

        <div className="admin-tabs">
          <button
            className={`tab-button ${activeTab === "products" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("products")
              setShowCreateForm(false)
              setEditingItem(null)
            }}
          >
            Products ({products.length})
          </button>
          <button
            className={`tab-button ${activeTab === "users" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("users")
              setShowCreateForm(false)
              setEditingItem(null)
            }}
          >
            Users ({users.length})
          </button>
        </div>

        <div className="admin-content">
          <div className="admin-actions">
            <button
              className="create-button"
              onClick={() => {
                setShowCreateForm(!showCreateForm)
                setEditingItem(null)
                if (activeTab === "products") {
                  setProductForm({ Name: "", Description: "", Price: "", ImageUrl: "" })
                } else {
                  setUserForm({ Name: "", Email: "", Password: "", Phone: "", Address: "" })
                }
              }}
            >
              {showCreateForm ? "Cancel" : `Add New ${activeTab === "products" ? "Product" : "User"}`}
            </button>
          </div>

          {showCreateForm && (
            <div className="create-form-container">
              <h3>
                {editingItem ? "Edit" : "Create New"} {activeTab === "products" ? "Product" : "User"}
              </h3>
              {activeTab === "products" ? (
                <form onSubmit={handleProductSubmit} className="create-form">
                  <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                      type="text"
                      id="name"
                      value={productForm.Name}
                      onChange={(e) => setProductForm({ ...productForm, Name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      value={productForm.Description}
                      onChange={(e) => setProductForm({ ...productForm, Description: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      step="0.01"
                      id="price"
                      value={productForm.Price}
                      onChange={(e) => setProductForm({ ...productForm, Price: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input
                      type="url"
                      id="imageUrl"
                      value={productForm.ImageUrl}
                      onChange={(e) => setProductForm({ ...productForm, ImageUrl: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    {editingItem ? "Update" : "Create"} Product
                  </button>
                </form>
              ) : (
                <form onSubmit={handleUserSubmit} className="create-form">
                  <div className="form-group">
                    <label htmlFor="userName">Name</label>
                    <input
                      type="text"
                      id="userName"
                      value={userForm.Name}
                      onChange={(e) => setUserForm({ ...userForm, Name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={userForm.Email}
                      onChange={(e) => setUserForm({ ...userForm, Email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={userForm.Password}
                      onChange={(e) => setUserForm({ ...userForm, Password: e.target.value })}
                      required={!editingItem}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={userForm.Phone}
                      onChange={(e) => setUserForm({ ...userForm, Phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      value={userForm.Address}
                      onChange={(e) => setUserForm({ ...userForm, Address: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    {editingItem ? "Update" : "Create"} User
                  </button>
                </form>
              )}
            </div>
          )}

          {activeTab === "products" && (
            <div className="data-section">
              <h3>Products</h3>
              {productsLoading ? (
                <LoadingSpinner message="Loading products..." />
              ) : productsError ? (
                <ErrorMessage message={productsError} onRetry={refetchProducts} />
              ) : (
                <div className="data-table">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.Id || product.id}>
                          <td>{product.Id || product.id}</td>
                          <td>{product.Name || product.name}</td>
                          <td>{product.Description || product.description}</td>
                          <td>${product.Price || product.price}</td>
                          <td>
                            <button className="edit-btn" onClick={() => handleEdit(product)}>
                              Edit
                            </button>
                            <button className="delete-btn" onClick={() => handleDelete(product.Id || product.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === "users" && (
            <div className="data-section">
              <h3>Users</h3>
              {usersLoading ? (
                <LoadingSpinner message="Loading users..." />
              ) : usersError ? (
                <ErrorMessage message={usersError} onRetry={refetchUsers} />
              ) : (
                <div className="data-table">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.Id || user.id}>
                          <td>{user.Id || user.id}</td>
                          <td>{user.Name || user.name}</td>
                          <td>{user.Email || user.email}</td>
                          <td>{user.Phone || user.phone}</td>
                          <td>{user.Address || user.address}</td>
                          <td>
                            <button className="edit-btn" onClick={() => handleEdit(user)}>
                              Edit
                            </button>
                            <button className="delete-btn" onClick={() => handleDelete(user.Id || user.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPage
