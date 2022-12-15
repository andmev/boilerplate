import React from "react";
import { Outlet } from "react-router-dom";

import Loading from "../../components/Loading";

export default () => (
  <React.Suspense fallback={<Loading />}>
    <Outlet />
  </React.Suspense>
);
