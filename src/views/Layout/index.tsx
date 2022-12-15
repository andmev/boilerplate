import React from "react";
import { Outlet } from "react-router-dom";

import Loading from "../../components/Loading";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default () => (
  <>
    <Navigation />
    <React.Suspense fallback={<Loading />}>
      <Outlet />
    </React.Suspense>
    <Footer />
  </>
);
