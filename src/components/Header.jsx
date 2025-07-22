import React from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { UserActions } from "./UserActions";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container flex items-center justify-between py-4 px-6">
        <Logo />
        <NavLinks />
        <UserActions />
      </div>
    </header>
  );
};

export default Header;
