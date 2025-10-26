import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row gap-4 mx-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pastes">Pastes</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
