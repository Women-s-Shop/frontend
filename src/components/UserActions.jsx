import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";

export const UserActions = () => {
  return (
    <div className="user-actions flex gap-4">
      <button className="icon-btn"><Search size={20} /></button>
      <button className="icon-btn"><User size={20} /></button>
      <button className="icon-btn"><ShoppingCart size={20} /></button>
    </div>
  );
};
