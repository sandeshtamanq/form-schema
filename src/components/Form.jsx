import React from "react";
import Input from "./Input";

const Form = ({ schema, data, setData }) => {
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(data);
  };
  return (
    <form
      onSubmit={submitHandler}
      style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
    >
      {schema.map((item, index) => (
        <Input
          {...item}
          key={index}
          value={data[item.name]}
          setData={setData}
        />
      ))}

      <button type="submit" value="Submit">
        submit
      </button>
    </form>
  );
};

export default Form;
