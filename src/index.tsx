import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";

const Panel = React.lazy(() => import("./components/Panel"));

const App = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Hello, ESBUILD!</h1>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => { navigate("/panel") }}
            >
                Primary
            </button>
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/panel",
        element:  (
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <Panel />
            </React.Suspense>
        ),
    }
]);

// App Component
const container = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)
