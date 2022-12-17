import React, { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FixedBottomFooter from "../../components/Footer/FixedBottom";

export default () => {
  const { t } = useTranslation("auth");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback(
    () => (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      };
      console.log(data);
    },
    []
  );
  return (
    <main className="container vh-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6 col-12">
          <form onSubmit={onSubmit()}>
            <div className="form-group">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  ref={emailRef}
                  className="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingEmail">{t("email")}</label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-floating">
                <input
                  type="password"
                  ref={passwordRef}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">{t("password")}</label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block w-100 mt-4"
            >
              {t("login")}
            </button>
          </form>
          <ul className="mt-4 list-group list-group-flush text-center">
            <li className="border-bottom-0 list-group-item">
              <Link to="/forgot" className="text-decoration-none">
                {t("forgot.password")}
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/signup" className="text-decoration-none">
                {t("signup")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <FixedBottomFooter />
    </main>
  );
};
