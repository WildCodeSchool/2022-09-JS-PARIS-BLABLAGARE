import React from "react";
import "./Button.css";

export default function Button({
  idButton,
  type,
  champButton,
  classButton,
  onClick,
}) {
  return (
    <div className="button-container">
      <button
        type={type}
        className={classButton}
        id={idButton}
        onClick={onClick}
      >
        {champButton}
      </button>
    </div>
  );
}
