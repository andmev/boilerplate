import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./i18n";
import Loading from "./components/Loading";

const Crew = React.lazy(() => import("./views/Crew"));
const Layout = React.lazy(() => import("./views/Layout"));
const Home = React.lazy(() => import("./views/Home"));
const Login = React.lazy(() => import("./views/Login"));
const Languages = React.lazy(() => import("./views/Languages"));
const SignUp = React.lazy(() => import("./views/SignUp"));
const Inventory = React.lazy(() => import("./views/Inventory"));
const Products = React.lazy(() => import("./views/Products"));

const router = createBrowserRouter([
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
  {
    id: "languages",
    path: "languages",
    element: <Languages />,
  },
  {
    id: "login",
    path: "login",
    element: <Login />,
  },
  {
    id: "signup",
    path: "signup",
    element: <SignUp />,
  },
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
