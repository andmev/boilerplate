import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./i18n";
import Loading from "./components/Loading";
import loadLanguages from "./views/Languages/loader";

// Home Views
const Home = React.lazy(() => import("./views/Home"));

// Languages Views
const Languages = React.lazy(() => import("./views/Languages"));

// Layout Views
const Layout = React.lazy(() => import("./components/Layout"));

const router = createBrowserRouter([
  {
    id: "languages",
    path: "languages",
    element: <Languages />,
    loader: loadLanguages,
  },
  {
    id: "root",
    path: "/",
    element: <Layout />,
    children: [
      {
        id: "home",
        index: true,
        element: <Home />,
      },
    ],
  },
]);

// App Component
const container = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </React.Suspense>
  </React.StrictMode>
);
