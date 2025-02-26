import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header = ({ changeFontSize }) => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState("en");
    // Initial brand font size in pixels
    const [brandFontSize, setBrandFontSize] = useState(32);

    // Refs to the container and brand elements
    const containerRef = useRef(null);
    const brandRef = useRef(null);

    // Function to adjust the brand font size dynamically
    const adjustBrandFontSize = () => {
        if (containerRef.current && brandRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            const brandScrollWidth = brandRef.current.scrollWidth;
            // If brand text overflows, reduce the font size (min 16px)
            if (brandScrollWidth > containerWidth && brandFontSize > 16) {
                setBrandFontSize((prev) => Math.max(16, prev - 1));
            }
        }
    };

    // Call adjustment on mount and on window resize
    useEffect(() => {
        adjustBrandFontSize();
        window.addEventListener("resize", adjustBrandFontSize);
        return () => window.removeEventListener("resize", adjustBrandFontSize);
    }, [brandFontSize]);

    const toggleLanguage = () => {
        const newLang = lang === "en" ? "hi" : "en";
        i18n.changeLanguage(newLang);
        setLang(newLang);
    };

    return (
        <nav className="navbar navbar-light bg-light shadow-sm" ref={containerRef}>
            <div className="container">
                {/* First Line: Centered Brand */}
                <div className="w-100 text-center">
                    <a
                        className="navbar-brand fw-bold"
                        href="/"
                        ref={brandRef}
                        style={{ fontSize: `${brandFontSize}px` }}
                    >
                        💰 {t("Wealth Distribution Among Siblings")}
                    </a>
                </div>
                {/* Second Line: Centered Menu Options */}
                <div className="w-100">
                    <ul className="navbar-nav d-flex justify-content-center flex-nowrap overflow-auto flex-row">
                        <li className="nav-item me-3">
                            <a className="nav-link active" href="/">
                                {t("Home")}
                            </a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="#">
                                {t("About")}
                            </a>
                        </li>
                        <li className="nav-item me-3">
                            <button className="btn nav-link" onClick={() => changeFontSize(1)}>
                                {t("Increase Font")}
                            </button>
                        </li>
                        <li className="nav-item me-3">
                            <button className="btn nav-link" onClick={() => changeFontSize(-1)}>
                                {t("Decrease Font")}
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn nav-link" onClick={toggleLanguage}>
                                {t("Switch Language")}
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;
