import React, { useState } from "react";

const Input = ({
  type,
  name,
  placeholder,
  label,
  changeHandler,
  value,
  error,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={changeHandler}
          value={value}
        />
      </div>
      {/* {error && <div>{error}</div>} */}
    </div>
  );
};

export default Input;
