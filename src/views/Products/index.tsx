import React from "react";
import styles from "./styles.modules.css";
export default () => {
  return (
    <main className="container-fluid p-4">
      <h1 className={styles.redTitle}>Products</h1>
      <form>
        <div className="form-group">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </main>
  );
};
