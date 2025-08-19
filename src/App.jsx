"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import AccountPage from "./pages/AccountPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SupportPage from "./pages/SupportPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useProducts } from "./hooks/useProducts";

function App() {
  const [cart, setCart] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { products, loading, error, refetch } = useProducts();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // 🔥 FIXED: Search logic filters actual product list
  const handleSearch = (query) => {
    const q = (query || "").trim().toLowerCase();

    if (!q) {
      setSearchResults([]); // empty search clears
      return;
    }

    const results = (products || []).filter((p) => {
      const name = (p.name || "").toLowerCase();
      const desc = (p.description || "").toLowerCase();
      return name.includes(q) || desc.includes(q);
    });

    setSearchResults(results);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentPage("home");
    window.location.reload();
  };

  const navigateTo = (page) => setCurrentPage(page);

  const headerProps = {
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    onSearch: handleSearch,
    searchResults: searchResults,
    products: products,
    onNavigateHome: () => navigateTo("home"),
    onNavigateToAccount: () => navigateTo("account"),
    onNavigateToAbout: () => navigateTo("about"),
    onNavigateToContact: () => navigateTo("contact"),
    onNavigateToSupport: () => navigateTo("support"),
    onNavigateToCart: () => navigateTo("cart"),
    onNavigateToLogin: () => navigateTo("login"),
    onNavigateToRegister: () => navigateTo("register"),
  };

  const pages = {
    account: <AccountPage />,
    about: <AboutPage />,
    contact: <ContactPage />,
    support: <SupportPage />,
    admin: <AdminPage />,
    cart: (
      <CartPage
        cartItems={cart}
        onRemove={(id) => setCart(cart.filter((item) => item.id !== id))}
      />
    ),
    login: <LoginPage onNavigateHome={() => navigateTo("home")} />,
    register: <RegisterPage onNavigateHome={() => navigateTo("home")} />,
  };

  if (pages[currentPage]) {
    return (
      <div className="App">
        <Header {...headerProps} />
        {pages[currentPage]}
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Header {...headerProps} />
      <main className="main-content">
        <div className="container">
          <section className="hero-section">
            <h1 className="hero-title">Welcome to MA RÊVE</h1>
            <p className="hero-subtitle">
              Discover beautiful, accessible fashion designed for everyone.
            </p>
            <button
              className="cta-button"
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Collection
            </button>

            <button
              className="admin-button"
              onClick={() => navigateTo("admin")}
              style={{ marginLeft: "1rem" }}
            >
              Admin Dashboard
            </button>

            {!isLoggedIn ? (
              <>
                <button
                  className="login-button"
                  onClick={() => navigateTo("login")}
                  style={{ marginLeft: "1rem" }}
                >
                  Кіру
                </button>
                <button
                  className="register-button"
                  onClick={() => navigateTo("register")}
                  style={{ marginLeft: "1rem" }}
                >
                  Тіркелу
                </button>
              </>
            ) : (
              <button
                className="logout-button"
                onClick={handleLogout}
                style={{ marginLeft: "1rem" }}
              >
                Шығу
              </button>
            )}
          </section>

          {/* 🔥 SAFE rendering */}
          {Array.isArray(searchResults) && searchResults.length > 0 ? (
            <ProductList
              products={searchResults}
              loading={false}
              error={null}
              onAddToCart={addToCart}
            />
          ) : (
            <ProductList
              products={products}
              loading={loading}
              error={error}
              onAddToCart={addToCart}
            />
          )}

          {error && (
            <div className="error-section">
              <button onClick={refetch} className="retry-button">
                Retry Loading Products
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
