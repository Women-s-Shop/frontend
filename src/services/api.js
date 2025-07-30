// API service to handle all backend communications
const API_BASE_URL = "http://localhost:8888" // Your Go backend URL

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      // Handle empty responses (like DELETE)
      const contentType = response.headers.get("content-type")
      if (contentType && contentType.includes("application/json")) {
        return await response.json()
      }
      return null
    } catch (error) {
      console.error("API request failed:", error)
      throw error
    }
  }

  // Product API methods - matching your exact endpoints
  async getProducts() {
    return this.request("/products")
  }

  async getProductById(id) {
    return this.request(`/products/${id}`)
  }

  async createProduct(productData) {
    return this.request("/products", {
      method: "POST",
      body: JSON.stringify(productData),
    })
  }

  async updateProduct(id, productData) {
    return this.request(`/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(productData),
    })
  }

  async deleteProduct(id) {
    return this.request(`/products/${id}`, {
      method: "DELETE",
    })
  }

  // User API methods - matching your exact endpoints
  async getUsers() {
    return this.request("/users")
  }

  async getUserById(id) {
    return this.request(`/users/${id}`)
  }

  async createUser(userData) {
    return this.request("/users", {
      method: "POST",
      body: JSON.stringify(userData),
    })
  }

  async updateUser(id, userData) {
    return this.request(`/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(userData),
    })
  }

  async deleteUser(id) {
    return this.request(`/users/${id}`, {
      method: "DELETE",
    })
  }
}

export default new ApiService()
