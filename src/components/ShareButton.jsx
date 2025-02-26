import React from "react";
import { useTranslation } from "react-i18next";

const ShareButton = () => {
  const { t } = useTranslation();
  // Use the deployed app URL directly, or you could use window.location.href
  const shareUrl = "https://wealth-distribution.vercel.app/";
  const message =
    "Hey, check out our amazing Wealth Distribution Among Siblings Calculator – it's fun and insightful! Try it now: " +
    shareUrl;

  return (
    <div className="container my-4 text-center">
      <h5>{t("Share With Friends")}:</h5>
      <div>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}&quote=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary m-1"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl
          )}&text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info m-1"
        >
          Twitter
        </a>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(message)}`}
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
