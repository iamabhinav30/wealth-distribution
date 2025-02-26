import React from "react";
import { useTranslation } from "react-i18next";

const SiblingList = ({ siblings }) => {
  const { t } = useTranslation();
  if (siblings.length === 0) return null;

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header">
          <h5 className="mb-0">{t("Siblings List")}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {siblings.map((sibling, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                {sibling.name} ({sibling.age})
              </span>
              {sibling.healthIssue && <span className="badge bg-danger">{t("Health Issue?")}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SiblingList;
