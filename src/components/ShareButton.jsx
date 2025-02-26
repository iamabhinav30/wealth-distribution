import React from "react";
import { useTranslation } from "react-i18next";

const ShareButton = () => {
  const { t } = useTranslation();
  const shareUrl = window.location.href;
  const message = t("Check out this fun Wealth Distribution Calculator!");

  return (
    <div className="container my-4 text-center">
      <h5>{t("Share With Friends")}:</h5>
      <div>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary m-1"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info m-1"
        >
          Twitter
        </a>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(message + " " + shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success m-1"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ShareButton;
