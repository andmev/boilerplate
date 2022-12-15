import React from "react";
import { Outlet, useMatch } from "react-router-dom";

import Day from "../Day";
import Navigation from "../../components/Navigation";
import Loading from "../../components/Loading";

export default () => {
  const isHome = useMatch("/");
  return (
    <>
      <Navigation />
      <React.Suspense fallback={<Loading />}>
        {isHome ? <Day /> : <Outlet />}
      </React.Suspense>
    </>
  );
};
