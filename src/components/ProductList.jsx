import ProductCard from "./ProductCard"
import LoadingSpinner from "./LoadingSpinner"
import ErrorMessage from "./ErrorMessage"

const ProductList = ({ products, loading, error, onAddToCart }) => {
  if (loading) {
    return <LoadingSpinner message="Loading products..." />
  }

  if (error) {
    return <ErrorMessage message={`Failed to load products: ${error}`} />
  }

  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <h3>No products available</h3>
        <p>Check back later for new arrivals!</p>
      </div>
    )
  }

  return (
    <section id="products" aria-label="Product Collection">
      <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2.5rem", color: "#333" }}>Our Collection</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.Id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
