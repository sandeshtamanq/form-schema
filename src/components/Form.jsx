import React, { useState } from "react";
import Input from "./Input";
import errorHandler from "./validation/error-handler";

const Form = ({ schema, data, setData }) => {
  const setValue = (name, value) => {
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(data);
  };
  return (
    <form
      onSubmit={submitHandler}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {schema.map((item, index) => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input
              {...item}
              key={index}
              value={data[item.name]}
              setValue={setValue}
            />
          </div>
        );
      })}

      <button type="submit" value="Submit">
        submit
      </button>
    </form>
  );
};

export default Form;
