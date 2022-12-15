import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { languages } from "../../utils/languages";

export default () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = useCallback(async (code: string) => {
    await i18n.changeLanguage(code);
    navigate(-1);
  }, []);

  return (
    <div className="container-fluid p-4">
      <div className="row align-items-center">
        <div className="col-10">
          <h1 className="fs-1 fw-bold mb-4">{t("page_languages_title")}</h1>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => navigate(-1)}
          ></button>
        </div>
      </div>
      <div className="row g-4">
        {languages.map((language) => (
          <div className="col-2" key={language.code}>
            <button
              onClick={() => changeLanguage(language.code)}
              className={`btn btn-${
                i18n.language === language.code ? "primary" : "light"
              } btn-sm rounded-pill px-3`}
            >
              {language.flag}&nbsp;{language.nativeName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
