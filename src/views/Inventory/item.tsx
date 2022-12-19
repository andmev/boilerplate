import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { username, product, event, action, item } = useParams();

  return (
    <>
      <h1>Inventory Item</h1>
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
          Item <code>{item}</code>
        </li>
      </ul>
    </>
  );
};
