import React, { useState } from "react";
import "../assets/css/banner.css";

const BannerComponent = ({ onClose, onViewNewFeatures }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const handleViewNewFeatures = () => {
    setIsVisible(false);
    onViewNewFeatures();
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="banner-rectangle" />
      <div className="banner-container">
        <div className="banner-image" />
        <div className="banner-content">
          <p className="banner-title">New features available!</p>
          <p className="banner-subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button
            onClick={handleViewNewFeatures}
            className="view-new-feature-btn"
          >
            View New Features
          </button>
          <button onClick={handleClose} className="banner-close-btn">
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default BannerComponent;
