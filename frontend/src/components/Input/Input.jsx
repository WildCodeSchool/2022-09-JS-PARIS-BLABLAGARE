import React from "react";
import "./Input.css";

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
        name={champ}
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
      />
    </div>
  );
}
