import React, { useState } from "react";

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
    <div className="banner">
      <button onClick={handleClose}>X</button>
      <button onClick={handleViewNewFeatures}>View New Features</button>
    </div>
  );
};

export default BannerComponent;
