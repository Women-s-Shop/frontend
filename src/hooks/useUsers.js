"use client"

import { useState, useEffect } from "react"
import ApiService from "../services/api"

export const useUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await ApiService.getUsers()
      // Handle case where backend returns null or undefined
      setUsers(data || [])
    } catch (err) {
      setError(err.message)
      console.error("Failed to fetch users:", err)
      setUsers([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const createUser = async (userData) => {
    try {
      const newUser = await ApiService.createUser(userData)
      if (newUser) {
        setUsers((prev) => [...prev, newUser])
        return newUser
      }
      // If backend doesn't return the created user, refetch all users
      await fetchUsers()
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const updateUser = async (id, userData) => {
    try {
      const updatedUser = await ApiService.updateUser(id, userData)
      if (updatedUser) {
        setUsers((prev) => prev.map((u) => (u.Id === id ? updatedUser : u)))
        return updatedUser
      }
      // If backend doesn't return the updated user, refetch all users
      await fetchUsers()
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const deleteUser = async (id) => {
    try {
      await ApiService.deleteUser(id)
      setUsers((prev) => prev.filter((u) => u.Id !== id))
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  return {
    users,
    loading,
    error,
    refetch: fetchUsers,
    createUser,
    updateUser,
    deleteUser,
  }
}

export const useUser = (id) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return

      try {
        setLoading(true)
        setError(null)
        const data = await ApiService.getUserById(id)
        setUser(data)
      } catch (err) {
        setError(err.message)
        console.error("Failed to fetch user:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])

  return { user, loading, error }
}
