import React, { useState } from "react";
import errorHandler from "./validation/error-handler";

const Input = ({
  type,
  name,
  placeholder,
  label,
  value,
  setValue,
  validate,
}) => {
  const [error, setError] = useState("");
  const changeHandler = (e, validate) => {
    const { name, value } = e.target;
    setError(errorHandler(value, validate));
    setValue(name, value);
  };
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={(e) => changeHandler(e, validate)}
          value={value}
        />
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Input;
