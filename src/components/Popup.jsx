import React, { useState } from "react";

const NewFeaturesPopup = ({ onClose }) => {
  const [inputText, setInputText] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    if (inputText.length > 0) {
      onClose();
    }
  };

  return (
    <div className="popup">
      {/* Popup content */}
      <input type="text" value={inputText} onChange={handleInputChange} />
      <span
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        ℹ️
      </span>
      {showTooltip && <div className="tooltip">Tooltip text</div>}
      <button onClick={onClose}>Cancel</button>
      <button onClick={handleSend} disabled={inputText.length === 0}>
        Send
      </button>
    </div>
  );
};

export default NewFeaturesPopup;
