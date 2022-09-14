import React from "react";
import "./Button.css";

export default function Button({
  name,
  label,
  type,
  champButton,
  classButton,
  onClick,
}) {
  return (
    <div className="button-container">
      <label className="" id={name} htmlFor={name}>
        {label}
      </label>
      <button type={type} className={classButton} id={name} onClick={onClick}>
        {champButton}
      </button>
    </div>
  );
}
