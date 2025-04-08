import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{t("notFoundTitle")}</h1>
      <p>{t("notFoundMessage")}</p>
      <Link to="/">{t("goBackHome")}</Link>
    </div>
  );
}

export default NotFoundPage;
