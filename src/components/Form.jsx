import React, { useState } from "react";
import Input from "./Input";

const Form = ({ schema, data }) => {
  const [inputInfo, setInputInfo] = useState(data);
  const [tableData, setTableData] = useState(data);
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
    setTableData(inputInfo);
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        {schema.map((item, index) => (
          <div style={{ margin: "6px" }} key={index}>
            {tableData[item.name]}
          </div>
        ))}
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
