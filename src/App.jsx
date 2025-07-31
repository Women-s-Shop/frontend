"use client"

import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AccountPage from "./pages/AccountPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import SupportPage from "./pages/SupportPage"
import CartPage from "./pages/CartPage"
import ProductDetailPage from "./pages/ProductDetailPage" // ⬅ обязательно создать этот файл

const sampleProducts = [
  { id: 1, name: "Elegant Dress", price: 89.99, category: "clothing", description: "Elegant evening dress for any occasion." },
  { id: 2, name: "Comfortable Shoes", price: 129.99, category: "footwear", description: "Stylish and supportive footwear." },
  { id: 3, name: "Beautiful Handbag", price: 159.99, category: "accessories", description: "Spacious and elegant handbag." },
  { id: 4, name: "Stylish Jacket", price: 199.99, category: "clothing", description: "Modern look, warm and comfy." },
  { id: 5, name: "Cozy Sweater", price: 79.99, category: "clothing", description: "Soft and warm for cold days." },
  { id: 6, name: "Classic Watch", price: 249.99, category: "accessories", description: "Timeless design and precision." },
]

function App() {
  const [cart, setCart] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedProduct, setSelectedProduct] = useState(null) // ⬅ хранит выбранный товар

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setSearchResults([])
      return
    }
    const filtered = sampleProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(filtered)
  }

  // Навигация
  const navigateToAccount = () => setCurrentPage("account")
  const navigateToAbout = () => setCurrentPage("about")
  const navigateToContact = () => setCurrentPage("contact")
  const navigateToSupport = () => setCurrentPage("support")
  const navigateToHome = () => setCurrentPage("home")
  const navigateToCart = () => setCurrentPage("cart")
  const navigateToProduct = (product) => {
    setSelectedProduct(product)
    setCurrentPage("product")
  }

  const headerProps = {
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    onSearch: handleSearch,
    searchResults,
    onNavigateHome: navigateToHome,
    onNavigateToAccount: navigateToAccount,
    onNavigateToAbout: navigateToAbout,
    onNavigateToContact: navigateToContact,
    onNavigateToSupport: navigateToSupport,
    onNavigateToCart: navigateToCart,
    currentPage,
  }

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

  if (currentPage === "cart") {
    return (
      <div className="App">
        <Header {...headerProps} />
        <CartPage cartItems={cart} onRemove={handleRemoveFromCart} />
        <Footer />
      </div>
    )
  }

  if (currentPage === "product") {
    return (
      <div className="App">
        <Header {...headerProps} />
        <ProductDetailPage product={selectedProduct} onBack={navigateToHome} onAddToCart={addToCart} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="App">
      <Header {...headerProps} />
      <main className="main-content">
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
              {(searchResults.length > 0 ? searchResults : sampleProducts).map((product) => (
                <article key={product.id} className="product-card">
                  <div
                    className="product-image"
                    onClick={() => navigateToProduct(product)}
                    style={{ cursor: "pointer" }}
                  >
                    {product.name}
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-price">${product.price}</p>
                    <button className="add-to-cart" onClick={() => addToCart(product)}>
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
