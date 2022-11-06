import React, { useState } from "react";
import errorHandler from "./validation/error-handler";

const Input = ({ type, name, placeholder, label, setData, value }) => {
  const [error, setError] = useState("");
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });

    const error = errorHandler(name, value);
    setError(error);
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
          onChange={changeHandler}
          value={value}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
};

export default Input;
