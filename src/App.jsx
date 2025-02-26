import React, { useState } from "react";
import Header from "./components/Header";
import SiblingForm from "./components/SiblingForm";
import WealthDistribution from "./components/WealthDistribution";
import JusticeScore from "./components/JusticeScore";
import ShareButton from "./components/ShareButton";
import VisitorCounter from "./components/VisitorCounter";

import { useTranslation } from "react-i18next";
import { Routes, Route, Link } from "react-router-dom";
import Disclaimer from "./components/Disclaimer";

const Home = () => {
  const { t } = useTranslation();
  const [siblings, setSiblings] = useState([]);
  const [totalWealth, setTotalWealth] = useState("");
  const [fontSize, setFontSize] = useState(16);

  const addSibling = (sibling) => setSiblings([...siblings, sibling]);
  const changeFontSize = (amount) => setFontSize((prev) => Math.max(12, prev + amount));

  return (
    <div className="bg-light min-vh-100" style={{ fontSize: `${fontSize}px` }}>
      <Header changeFontSize={changeFontSize} />
      <div className="container-fluid">
        <div className="row flex justify-content-evenly">
          {/* Main Content */}
          <div className="col-lg-9 col-md-12 px-3">
            <div className="py-4">
              {/* Wealth Input Section */}
              <div className="card shadow-sm mb-4 mx-auto" style={{ maxWidth: "600px" }}>
                <div className="card-body">
                  <h4 className="card-title text-center">{t("Enter Total Wealth")}:</h4>
                  <input
                    type="number"
                    className="form-control text-center"
                    placeholder={t("Total Wealth")}
                    value={totalWealth}
                    onChange={(e) => setTotalWealth(e.target.value)}
                  />
                </div>
              </div>
              <SiblingForm addSibling={addSibling} />
              <WealthDistribution siblings={siblings} totalWealth={totalWealth} />
              <JusticeScore siblings={siblings} />
              <ShareButton />
              <VisitorCounter />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-secondary text-light text-center py-3 mt-4">
        <p className="mb-0">
          &copy; 2025 Made with Fun.{" "}
          <Link to="/disclaimer" className="text-warning">
            {t("Disclaimer")}
          </Link>
        </p>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
    </Routes>
  );
};

export default App;
