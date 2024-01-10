import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Popup from "./Popup";
import "../assets/css/dashboard.css";

const SHOW_SECOND = 10000;

function Dashboard() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, SHOW_SECOND);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const handleViewNewFeatures = () => {
    setShowBanner(false);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);

    setTimeout(() => {
      setShowBanner(true);
    }, SHOW_SECOND);
  };

  return (
    <div className="background">
      {showBanner && (
        <Banner
          onClose={handleCloseBanner}
          onViewNewFeatures={handleViewNewFeatures}
        />
      )}
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
}

export default Dashboard;
