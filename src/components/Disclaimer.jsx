import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Disclaimer = () => {
  const { t } = useTranslation();
  return (
    <div className="container my-5">
      <div className="card shadow-sm p-4">
        <h2 className="text-center">Disclaimer</h2>
        <p className="mt-3">
          {t("This website is for fun and informational purposes only. It does not constitute professional advice.")}
        </p>
        <div className="text-center mt-4">
          <Link to="/" className="btn btn-primary">
            {t("Back to Home")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
