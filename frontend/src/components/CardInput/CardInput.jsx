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
  minLength,
  maxLength,
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
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
        onBlur={onBlur}
        required={required}
        min={min}
        max={max}
      />
    </div>
  );
}
