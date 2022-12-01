import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Crew = React.lazy(() => import("./views/Crew"));
const Root = React.lazy(() => import("./views/Root"));
const Inventory = React.lazy(() => import("./views/Inventory"));
const Products = React.lazy(() => import("./views/Products"));

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root />,
    children: [
      {
        id: "crew",
        path: "crew",
        element: <Crew />,
      },
      {
        id: "inventory",
        path: "inventory",
        element: <Inventory />,
      },
      {
        id: "products",
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

// App Component
const container = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
  </React.StrictMode>
);
