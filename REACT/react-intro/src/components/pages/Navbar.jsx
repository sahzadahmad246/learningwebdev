import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="nav-ul">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navitem ${isActive ? "active-link" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `navitem ${isActive ? "active-link" : ""}`
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `navitem ${isActive ? "active-link" : ""}`
            }
          >
            {" "}
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
