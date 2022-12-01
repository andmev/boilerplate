import React from "react";
import { Outlet, useMatch } from "react-router-dom";

import Navigation from "../components/Navigation";

import styles from "./styles.modules.css";

export default () => {
  const isHome = useMatch("/");
  return (
    <>
      <Navigation />
      {isHome && <h1 className={styles.redTitle}>Day</h1>}
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </React.Suspense>
    </>
  );
};
