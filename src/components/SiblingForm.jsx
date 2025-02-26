import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SiblingForm = ({ addSibling }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [healthIssue, setHealthIssue] = useState(false);
  const [studying, setStudying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      addSibling({ name, age: parseInt(age), healthIssue, studying });
      setName("");
      setAge("");
      setHealthIssue(false);
      setStudying(false);
    }
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm p-3">
        <h4 className="card-title text-center">{t("Add a Sibling")}</h4>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder={t("Sibling Name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="number"
                className="form-control"
                placeholder={t("Age")}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row g-3 mt-2">
            <div className="col-12 col-md-6 d-flex align-items-center">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={healthIssue}
                  onChange={() => setHealthIssue(!healthIssue)}
                />
                <label className="form-check-label">{t("Health Issue?")}</label>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={studying}
                  onChange={() => setStudying(!studying)}
                />
                <label className="form-check-label">{t("Studying?")}</label>
              </div>
            </div>
          </div>
          <div className="row g-3 mt-3">
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                {t("Add")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SiblingForm;
