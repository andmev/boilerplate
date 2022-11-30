import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";

const Panel = React.lazy(() => import("./Panel"));

const App = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Hello, ESBUILD!</h1>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => { navigate("/panel") }}
            >
                Primary
            </button>
            <div className="container px-4 text-center">
                <div className="row gx-5">
                    <Panel/>
                    <Panel/>
                </div>
            </div>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/panel",
        element: <Panel />,
    }
]);

// App Component
const container = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)
