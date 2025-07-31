import React from 'react'
import '../styles/productdetailpage.css'

const ProductDetailPage = ({ product, onBack }) => {
  if (!product) return <div className="product-detail-page">Product not found.</div>

  return (
    <div className="product-detail-page">
      <h1 className="product-detail-title">{product.name}</h1>
      <div className="product-detail-image">{product.name} Image</div>
      <div className="product-detail-info">
        <p>{product.description}</p>
        <p className="product-detail-price">${product.price}</p>
      </div>
      <button className="back-button" onClick={onBack}>
        ⬅ Back
      </button>
    </div>
  )
}

export default ProductDetailPage
