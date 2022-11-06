import React, { useState } from "react";
import Input from "./Input";

const Form = ({ schema, data, setData }) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <form onSubmit={submitHandler}>
      {schema.map((item, index) => (
        <Input
          {...item}
          key={index}
          changeHandler={changeHandler}
          value={data[item.name]}
        />
      ))}

      <div style={{ display: "flex", justifyContent: "center" }}></div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
