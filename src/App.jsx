"use client"

import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AccountPage from "./pages/AccountPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import SupportPage from "./pages/SupportPage"

const sampleProducts = [
  { id: 1, name: "Elegant Dress", price: 89.99, category: "clothing" },
  { id: 2, name: "Comfortable Shoes", price: 129.99, category: "footwear" },
  { id: 3, name: "Beautiful Handbag", price: 159.99, category: "accessories" },
  { id: 4, name: "Stylish Jacket", price: 199.99, category: "clothing" },
  { id: 5, name: "Cozy Sweater", price: 79.99, category: "clothing" },
  { id: 6, name: "Classic Watch", price: 249.99, category: "accessories" },
]

function App() {
  const [cart, setCart] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [currentPage, setCurrentPage] = useState("home") // home, account, about, contact, support

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setSearchResults([])
      return
    }

    const filtered = sampleProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()),
    )
    setSearchResults(filtered)
  }

  // Navigation functions
  const navigateToAccount = () => setCurrentPage("account")
  const navigateToAbout = () => setCurrentPage("about")
  const navigateToContact = () => setCurrentPage("contact")
  const navigateToSupport = () => setCurrentPage("support")
  const navigateToHome = () => setCurrentPage("home")

  // Common header props
  const headerProps = {
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    onSearch: handleSearch,
    searchResults: searchResults,
    onNavigateHome: navigateToHome,
    onNavigateToAccount: navigateToAccount,
    onNavigateToAbout: navigateToAbout,
    onNavigateToContact: navigateToContact,
    onNavigateToSupport: navigateToSupport,
  }

  // Render different pages based on currentPage state
  if (currentPage === "account") {
    return (
      <div className="App">
        <Header {...headerProps} />
        <AccountPage />
        <Footer />
      </div>
    )
  }

  if (currentPage === "about") {
    return (
      <div className="App">
        <Header {...headerProps} />
        <AboutPage />
        <Footer />
      </div>
    )
  }

  if (currentPage === "contact") {
    return (
      <div className="App">
        <Header {...headerProps} />
        <ContactPage />
        <Footer />
      </div>
    )
  }

  if (currentPage === "support") {
    return (
      <div className="App">
        <Header {...headerProps} />
        <SupportPage />
        <Footer />
      </div>
    )
  }

  // Render home page (default)
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header {...headerProps} />

      <main id="main-content" className="main-content">
        <div className="container">
          <section className="hero-section">
            <h1 className="hero-title">Welcome to MA RÊVE</h1>
            <p className="hero-subtitle">
              Discover beautiful, accessible fashion designed for everyone. Your dreams of perfect style come true here.
            </p>
            <a href="#products" className="cta-button">
              Explore Collection
            </a>
          </section>

          <section id="products" aria-label="Product Collection">
            <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2.5rem", color: "#333" }}>
              Our Collection
            </h2>
            <div className="products-grid">
              {sampleProducts.map((product) => (
                <article key={product.id} className="product-card">
                  <div className="product-image" role="img" aria-label={`${product.name} product image`}>
                    {product.name}
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-price" aria-label={`Price: $${product.price}`}>
                      ${product.price}
                    </p>
                    <button
                      className="add-to-cart"
                      onClick={() => addToCart(product)}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
