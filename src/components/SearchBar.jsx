import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring focus:border-gray-500"
      />
      <button
        type="submit"
        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 text-sm"
      >
        Search
      </button>
    </form>
  );
}
