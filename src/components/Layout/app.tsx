import React from "react";
import { Outlet } from "react-router-dom";

import Loading from "../Loading";
import Navigation from "../Navigation/app";

export default () => (
  <>
    <Navigation />
    <React.Suspense fallback={<Loading />}>
      <Outlet />
    </React.Suspense>
  </>
);
