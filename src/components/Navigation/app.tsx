import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// Navigation Component
export default () => {
  const { pathname } = useLocation();

  const paths = pathname.split("/");
  paths.shift();

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.map((path) => (
          <li key={path} className="breadcrumb-item">
            <NavLink to={path}>{path}</NavLink>
          </li>
        ))}
      </ol>
    </nav>
  );
};
