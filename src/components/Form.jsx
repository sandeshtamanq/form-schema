import React, { useState } from "react";
import Input from "./Input";

const Form = ({ schema, data }) => {
  // let inputData = {};
  // const initialState = schema.map((item) => {
  //   inputData[item.name] = "";
  //   return 0;
  // });
  const [inputInfo, setInputInfo] = useState(data);
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setInputInfo((inputInfo) => {
      return {
        ...inputInfo,
        [name]: value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(inputInfo);
  };
  return (
    <form onSubmit={submitHandler}>
      {schema.map((item, index) => (
        <Input
          {...item}
          key={index}
          changeHandler={changeHandler}
          value={inputInfo[item.name]}
        />
      ))}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
