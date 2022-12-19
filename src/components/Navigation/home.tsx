import React from "react";
import { NavLink } from "react-router-dom";

// Navigation Component
export default () => {
  const navItems = [
    { id: "", name: "Home", path: "/" },
    { id: "", name: "About", path: "/about" },
    { id: "", name: "Contacts", path: "/contacts" },
    { id: "", name: "Login", path: "/login" },
  ];
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          {navItems.map(({ name, path }) => (
            <li key={name} className="nav-item">
              <NavLink
                id={name}
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
