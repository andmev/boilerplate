import React from "react";
import { useParams, Link } from "react-router-dom";

export default () => {
  const { username } = useParams();

  return (
    <>
      <h1>
        App <code>{username}</code>
      </h1>
      <Link to={`/${username}/forrest_gump`}>Product</Link>
    </>
  );
};
