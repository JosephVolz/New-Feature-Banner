import React, { useState } from "react";
import Tooltip from "./Tooltip";
import "../assets/css/popup.css";

const NewFeaturesPopup = ({ onClose }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    if (inputText.length > 0) {
      onClose();
    }
  };

  return (
    <>
      <div className="overlay" />
      <div className="popup">
        <p className="popup-title">New Features Available</p>
        <p className="popup-description">
          The name of your workspace will be visible to your customers. For us,
          it is "SAAS First". You will NOT be able to change this later.
        </p>
        <div className="fieldset">
          <strong className="fieldset-description">New UI/UX Designer</strong>
          <Tooltip />
        </div>
        <div className="fieldset">
          <strong className="fieldset-description">New FE Developer</strong>

          <Tooltip />
        </div>
        <div className="fieldset request-fieldset">
          <strong className="fieldset-description">Request New Features</strong>

          <Tooltip />
        </div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="new-feature-input"
          placeholder="e.g. mobile app developer"
        />
        <button onClick={onClose} className="cancel-btn">
          Cancel
        </button>
        <button
          onClick={handleSend}
          disabled={inputText.length === 0}
          className="send-btn"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default NewFeaturesPopup;
