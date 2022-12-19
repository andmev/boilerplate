import React, { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default () => {
  const { token } = useParams();
  const { t } = useTranslation("auth");
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback(
    () => (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = {
        token,
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
              {t("restore.password_button")}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
