import React, { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation("auth");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback(
    () => (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        passwordConfirm: confirmPasswordRef.current?.value,
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
                  type="text"
                  ref={nameRef}
                  className="form-control"
                  id="floatingName"
                  placeholder="John Doe"
                />
                <label htmlFor="floatingName">{t("name")}</label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  ref={emailRef}
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">{t("email")}</label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-floating mb-3">
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
            <div className="form-group">
              <div className="form-floating">
                <input
                  type="password"
                  ref={confirmPasswordRef}
                  className="form-control"
                  id="floatingConfirmPassword"
                  placeholder="Confirm Password"
                />
                <label htmlFor="floatingConfirmPassword">
                  {t("password_confirmation")}
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block w-100 mt-4"
            >
              {t("signup")}
            </button>
          </form>
          <ul className="mt-4 list-group list-group-flush text-center">
            <li className="list-group-item">
              <Link to="/login">{t("login")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
