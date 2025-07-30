"use client"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductList from "./components/ProductList"
import AccountPage from "./pages/AccountPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import SupportPage from "./pages/SupportPage"
<<<<<<< HEAD
import CartPage from "./pages/CartPage"

const sampleProducts = [
  { id: 1, name: "Elegant Dress", price: 89.99, category: "clothing" },
  { id: 2, name: "Comfortable Shoes", price: 129.99, category: "footwear" },
  { id: 3, name: "Beautiful Handbag", price: 159.99, category: "accessories" },
  { id: 4, name: "Stylish Jacket", price: 199.99, category: "clothing" },
  { id: 5, name: "Cozy Sweater", price: 79.99, category: "clothing" },
  { id: 6, name: "Classic Watch", price: 249.99, category: "accessories" },
]
=======
import AdminPage from "./pages/AdminPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { useProducts } from "./hooks/useProducts"
>>>>>>> 4f5ead7c203c7aeaad6bc005c4469804d0a884c4

function App() {
  const [cart, setCart] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [currentPage, setCurrentPage] = useState("home")
<<<<<<< HEAD
=======
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { products, loading, error, refetch } = useProducts()

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])
>>>>>>> 4f5ead7c203c7aeaad6bc005c4469804d0a884c4

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.Id === product.Id)
      if (existingItem) {
        return prevCart.map((item) =>
<<<<<<< HEAD
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
=======
          item.Id === product.Id ? { ...item, quantity: item.quantity + 1 } : item
>>>>>>> 4f5ead7c203c7aeaad6bc005c4469804d0a884c4
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

<<<<<<< HEAD
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

=======
  const handleSearch = (results) => {
    setSearchResults(results)
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    setCurrentPage("home")
    window.location.reload()
  }

  const navigateTo = (page) => setCurrentPage(page)
>>>>>>> 4f5ead7c203c7aeaad6bc005c4469804d0a884c4

  const headerProps = {
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    onSearch: handleSearch,
<<<<<<< HEAD
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
=======
    searchResults: searchResults,
    products: products,
    onNavigateHome: () => navigateTo("home"),
    onNavigateToAccount: () => navigateTo("account"),
    onNavigateToAbout: () => navigateTo("about"),
    onNavigateToContact: () => navigateTo("contact"),
    onNavigateToSupport: () => navigateTo("support"),
    onNavigateToLogin: () => navigateTo("login"),
    onNavigateToRegister: () => navigateTo("register")
  }

  const pages = {
    account: <AccountPage />,
    about: <AboutPage />,
    contact: <ContactPage />,
    support: <SupportPage />,
    admin: <AdminPage />,
    login: <LoginPage onNavigateHome={() => navigateTo("home")} />,
    register: <RegisterPage onNavigateHome={() => navigateTo("home")} />
  }

  if (pages[currentPage]) {
>>>>>>> 4f5ead7c203c7aeaad6bc005c4469804d0a884c4
    return (
      <div className="App">
        <Header {...headerProps} />
        {pages[currentPage]}
        <Footer />
      </div>
    )
  }

<<<<<<< HEAD
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

  return (
    <div className="App">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header {...headerProps} />
      <main id="main-content" className="main-content">
=======
  return (
    <div className="App">
      <Header {...headerProps} />
      <main className="main-content">
>>>>>>> 4f5ead7c203c7aeaad6bc005c4469804d0a884c4
        <div className="container">
          <section className="hero-section">
            <h1 className="hero-title">Welcome to MA RÊVE</h1>
            <p className="hero-subtitle">
              Discover beautiful, accessible fashion designed for everyone.
            </p>
            <button
              className="cta-button"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Collection
            </button>

            <button className="admin-button" onClick={() => navigateTo("admin")} style={{ marginLeft: "1rem" }}>
              Admin Dashboard
            </button>

            {!isLoggedIn ? (
              <>
                <button className="login-button" onClick={() => navigateTo("login")} style={{ marginLeft: "1rem" }}>
                  Кіру
                </button>
                <button className="register-button" onClick={() => navigateTo("register")} style={{ marginLeft: "1rem" }}>
                  Тіркелу
                </button>
              </>
            ) : (
              <button className="logout-button" onClick={handleLogout} style={{ marginLeft: "1rem" }}>
                Шығу
              </button>
            )}
          </section>

<<<<<<< HEAD
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
                    <p className="product-price">${product.price}</p>
                    <button className="add-to-cart" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
=======
          {searchResults.length > 0 ? (
            <ProductList products={searchResults} loading={false} error={null} onAddToCart={addToCart} />
          ) : (
            <ProductList products={products} loading={loading} error={error} onAddToCart={addToCart} />
          )}

          {error && (
            <div className="error-section">
              <button onClick={refetch} className="retry-button">
                Retry Loading Products
              </button>
>>>>>>> 4f5ead7c203c7aeaad6bc005c4469804d0a884c4
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
