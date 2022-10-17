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
    <button
      type={type}
      className={classButton}
      id={idButton}
      onClick={onClick}
      disabled={disabled}
    >
      {champButton}
    </button>
  );
}
