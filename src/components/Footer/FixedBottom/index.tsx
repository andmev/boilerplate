import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";

import { currentLanguage } from "../../../utils/languages";

export default () => {
  const { i18n } = useTranslation();

  const language = currentLanguage(i18n.language);

  return (
    <div className="row text-center fixed-bottom pb-4">
      <div className="col-12">
        <Link to="/languages" className="text-decoration-none">
          {language.flag}&nbsp;{language.nativeName}
        </Link>
      </div>
    </div>
  );
};
