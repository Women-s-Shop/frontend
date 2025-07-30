"use client"

import { useState, useRef, useEffect } from "react"

const SearchBar = ({ onSearch, searchResults }) => {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
    setIsOpen(value.length > 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleResultClick = (result) => {
    setQuery(result.name)
    setIsOpen(false)
    // In a real app, you might navigate to the product page
    console.log("Selected product:", result)
  }

  return (
    <div className="search-container" ref={searchRef}>
      <form onSubmit={handleSubmit} role="search">
        <label htmlFor="search-input" className="sr-only">
        </label>
        <input
          id="search-input"
          type="search"
          className="search-input"
          placeholder="Search for products..."
          value={query}
          onChange={handleInputChange}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-describedby="search-results"
        />
        <button type="submit" className="search-button" aria-label="Search">
          🔍
        </button>
      </form>

      {isOpen && searchResults.length > 0 && (
        <div className="search-results" id="search-results" role="listbox" aria-label="Search results">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="search-result-item"
              role="option"
              tabIndex={0}
              onClick={() => handleResultClick(result)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleResultClick(result)
                }
              }}
            >
              <strong>{result.name}</strong> - ${result.price}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
