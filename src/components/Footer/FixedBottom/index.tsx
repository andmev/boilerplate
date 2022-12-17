import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();

  return (
    <div className="row text-center fixed-bottom pb-4">
      <div className="col-12">
        <Link to="/languages" className="text-decoration-none">
          {t("change_language")}
        </Link>
      </div>
    </div>
  );
};
