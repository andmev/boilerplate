import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { username, product } = useParams();

  return (
    <>
      <h1>Product List</h1>
      <ul>
        <li>
          Username <code>{username}</code>
        </li>
        <li>
          Product <code>{product}</code>
        </li>
      </ul>
    </>
  );
};
