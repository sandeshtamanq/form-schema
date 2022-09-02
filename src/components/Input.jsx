import React from "react";

const Input = ({ type, name, placeholder, label, changeHandler, value }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value.name}
      />
    </>
  );
};

export default Input;
