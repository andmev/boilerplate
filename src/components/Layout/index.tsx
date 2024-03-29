import React from "react";
import { Outlet } from "react-router-dom";

import Loading from "../Loading";

export default () => (
  <React.Suspense fallback={<Loading />}>
    <Outlet />
  </React.Suspense>
);
