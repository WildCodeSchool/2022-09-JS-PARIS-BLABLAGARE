import React from "react";
import "./CardButton.css";

export default function Button({
  idButton,
  type,
  champButton,
  classButton,
  onClick,
  disabled,
}) {
  return (
    <div className="button-container">
      <button
        type={type}
        className={classButton}
        id={idButton}
        onClick={onClick}
        disabled={disabled}
      >
        {champButton}
      </button>
    </div>
  );
}
