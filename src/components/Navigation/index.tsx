import React from "react";
import { NavLink } from "react-router-dom";

// Navigation Component
export default () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "products" },
    { name: "Inventory", path: "inventory" },
    { name: "Crew", path: "crew" },
  ];
  return (
    <nav className="navbar navbar-expand-lg justify-content-center">
      <ul className="navbar-nav">
        {navItems.map(({ name, path }) => (
          <li key={name} className="nav-item">
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
