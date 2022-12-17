import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default () => {
  const { t } = useTranslation();

  return (
    <footer className="container py-4">
      <div className="row">
        <div className="col-md-4 col-12">
          <span>© Smina, 2022</span>
        </div>
        <div className="col-md-4 col-12">
          <Link to="/languages">{t("change_language")}</Link>
        </div>
      </div>
    </footer>
  );
};
