import React from "react";
import { NavLink, useParams } from "react-router-dom";

export default () => {
  const { username, product } = useParams();

  return (
    <>
      <h1>Product Item</h1>
      <ul>
        <li>
          Username <code>{username}</code>
        </li>
        <li>
          Product <code>{product}</code>
        </li>
      </ul>
      <NavLink to={`/${username}/${product}/inventory`}>Inventory</NavLink>
      <br />
      <NavLink to={`/${username}/${product}/john_lennon`}>
        John Lennon Event
      </NavLink>
    </>
  );
};
