"use client"

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product)
  }

  // Handle different possible field names from your backend
  const productName = product.Name || product.name || "Unknown Product"
  const productDescription = product.Description || product.description || "No description available"
  const productPrice = product.Price || product.price || 0
  const productImage = product.ImageUrl || product.imageUrl || product.image_url

  return (
    <article className="product-card">
      <div className="product-image" role="img" aria-label={`${productName} product image`}>
        {productImage ? (
          <img src={productImage || "/placeholder.svg"} alt={productName} />
        ) : (
          <div className="placeholder-image">{productName}</div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-title">{productName}</h3>
        <p className="product-description">{productDescription}</p>
        <p className="product-price" aria-label={`Price: $${productPrice}`}>
          ${productPrice}
        </p>
        <button className="add-to-cart" onClick={handleAddToCart} aria-label={`Add ${productName} to cart`}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
