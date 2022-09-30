import React from "react";
import "./CardInput.css";

export default function Input({
  type,
  champ,
  forId,
  onChange,
  defaultValue,
  value,
  onClick,
  placeholder,
  minlength,
  maxlength,
  className,
  autoComplete,
  onBlur,
  required,
  min,
  max,
  name,
}) {
  return (
    <div className="input-container">
      <label className="label-text" htmlFor={forId}>
        {champ}
      </label>
      <input
        className={className}
        type={type}
        id={forId}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        onClick={onClick}
        placeholder={placeholder}
        minLength={minlength}
        maxLength={maxlength}
        autoComplete={autoComplete}
        onBlur={onBlur}
        required={required}
        min={min}
        max={max}
      />
    </div>
  );
}
