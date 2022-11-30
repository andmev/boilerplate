import React from "react";
import { useNavigate } from "react-router-dom";

// Panel Component
export default () => {
    const navigate = useNavigate();
    return (
        <div className="col">
            <div className="p-3 border bg-light">
                <h2>I'm a Panel</h2>
                <p>And I'm lazy loaded</p>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => { navigate("/") }}
                >
                    Back
                </button>
            </div>
        </div>
    );
};
