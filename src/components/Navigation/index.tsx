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
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          {navItems.map(({ name, path }) => (
            <li key={name} className="nav-item active">
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
      </div>
    </header>
  );
};
