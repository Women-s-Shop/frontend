import React from "react";

export const NavLinks = () => {
  return (
    <nav className="nav-links hidden md:flex gap-6 text-sm font-medium text-gray-700">
      <a href="#" className="hover:text-black">Shop</a>
      <a href="#" className="hover:text-black">New Arrivals</a>
      <a href="#" className="hover:text-black">Sale</a>
      <a href="#" className="hover:text-black">About</a>
      <a href="#" className="hover:text-black">Contact</a>
    </nav>
  );
};
