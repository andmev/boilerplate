import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { currentLanguage } from "../../utils/languages";

export default () => {
  const { i18n } = useTranslation();

  return (
    <footer className="container py-4">
      <div className="row">
        <div className="col-md-4 col-12">
          <span>© Smina, 2022</span>
        </div>
        <div className="col-md-4 col-12">
          <Link to="/languages">
            {currentLanguage(i18n.language)?.nativeName}
          </Link>
        </div>
      </div>
    </footer>
  );
};
