import React from "react";
import { useParams, Link } from "react-router-dom";

export default () => {
  const { username, product, event, action } = useParams();

  return (
    <>
      <h1>Crew</h1>
      <ul>
        <li>
          Username <code>{username}</code>
        </li>
        <li>
          Product <code>{product}</code>
        </li>
        <li>
          Event <code>{event}</code>
        </li>
        <li>
          Action <code>{action}</code>
        </li>
        <li>
          <Link to={`/${username}`}>Crew</Link>
        </li>
      </ul>
    </>
  );
};
