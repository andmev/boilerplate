import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./i18n";
import Loading from "./components/Loading";
import loadLanguages from "./views/Languages/loader";

// App Views
const App = React.lazy(() => import("./views/App"));
const ProductList = React.lazy(() => import("./views/Product/list"));
const ProductItem = React.lazy(() => import("./views/Product/item"));
const Event = React.lazy(() => import("./views/Event"));
const Action = React.lazy(() => import("./views/Action"));
const Crew = React.lazy(() => import("./views/Crew"));

const InventoryList = React.lazy(() => import("./views/Inventory/list"));
const InventoryItem = React.lazy(() => import("./views/Inventory/item"));

// Home Views
const Home = React.lazy(() => import("./views/Home"));

// Auth Views
const Login = React.lazy(() => import("./views/Auth/login"));
const Forgot = React.lazy(() => import("./views/Auth/forgot"));
const Restore = React.lazy(() => import("./views/Auth/restore"));
const SignUp = React.lazy(() => import("./views/Auth/signup"));

// Languages Views
const Languages = React.lazy(() => import("./views/Languages"));

// Layout Views
const LayoutHome = React.lazy(() => import("./components/Layout/home"));
const LayoutApp = React.lazy(() => import("./components/Layout/app"));

const router = createBrowserRouter([
  {
    id: "languages",
    path: "languages",
    element: <Languages />,
    loader: loadLanguages,
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
    id: "forgot",
    path: "forgot",
    element: <Forgot />,
  },
  {
    id: "restore",
    path: "restore/:token",
    element: <Restore />,
  },
  {
    id: "root",
    path: "/",
    element: <LayoutHome />,
    children: [
      {
        id: "home",
        index: true,
        element: <Home />,
      },
      // @TODO Implement about page
    ],
  },
  {
    id: "smina",
    path: ":username",
    element: <LayoutApp />,
    children: [
      {
        id: "app",
        index: true,
        element: <App />,
      },
      {
        id: "inventories",
        path: "inventory",
        children: [
          {
            id: "inventory",
            index: true,
            element: <InventoryList />,
          },
          {
            id: "inventory-item",
            path: ":item",
            element: <InventoryItem />,
          },
        ],
      },
      {
        id: "products",
        path: "products",
        element: <ProductList />,
      },
      {
        id: "product",
        path: ":product",
        children: [
          {
            id: "product-item",
            index: true,
            element: <ProductItem />,
          },
          {
            id: "crew",
            path: "crew",
            element: <Crew />,
          },
          {
            id: "product-inventories",
            path: "inventory",
            children: [
              {
                id: "product-inventory",
                index: true,
                element: <InventoryList />,
              },
              {
                id: "product-inventory-item",
                path: ":item",
                element: <InventoryItem />,
              },
            ],
          },
          {
            id: "events",
            path: ":event",
            children: [
              {
                id: "event",
                index: true,
                element: <Event />,
              },
              {
                id: "event-crew",
                path: "crew",
                element: <Crew />,
              },
              {
                id: "event-inventories",
                path: "inventory",
                children: [
                  {
                    id: "event-inventory",
                    index: true,
                    element: <InventoryList />,
                  },
                  {
                    id: "event-inventory-item",
                    path: ":item",
                    element: <InventoryItem />,
                  },
                ],
              },
              {
                id: "actions",
                path: ":action",
                children: [
                  {
                    id: "action",
                    index: true,
                    element: <Action />,
                  },
                  {
                    id: "action-crew",
                    path: "crew",
                    element: <Crew />,
                  },
                  {
                    id: "action-inventories",
                    path: "inventory",
                    children: [
                      {
                        id: "action-inventory",
                        index: true,
                        element: <InventoryList />,
                      },
                      {
                        id: "action-inventory-item",
                        path: ":item",
                        element: <InventoryItem />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
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
