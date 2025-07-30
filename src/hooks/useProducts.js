"use client"

import { useState, useEffect } from "react"
import ApiService from "../services/api"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await ApiService.getProducts()
      // Handle case where backend returns null or undefined
      setProducts(data || [])
    } catch (err) {
      setError(err.message)
      console.error("Failed to fetch products:", err)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const createProduct = async (productData) => {
    try {
      const newProduct = await ApiService.createProduct(productData)
      if (newProduct) {
        setProducts((prev) => [...prev, newProduct])
        return newProduct
      }
      // If backend doesn't return the created product, refetch all products
      await fetchProducts()
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const updateProduct = async (id, productData) => {
    try {
      const updatedProduct = await ApiService.updateProduct(id, productData)
      if (updatedProduct) {
        setProducts((prev) => prev.map((p) => (p.Id === id ? updatedProduct : p)))
        return updatedProduct
      }
      // If backend doesn't return the updated product, refetch all products
      await fetchProducts()
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const deleteProduct = async (id) => {
    try {
      await ApiService.deleteProduct(id)
      setProducts((prev) => prev.filter((p) => p.Id !== id))
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  }
}

export const useProduct = (id) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return

      try {
        setLoading(true)
        setError(null)
        const data = await ApiService.getProductById(id)
        setProduct(data)
      } catch (err) {
        setError(err.message)
        console.error("Failed to fetch product:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  return { product, loading, error }
}
