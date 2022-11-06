import React, { useState } from "react";
import Input from "./Input";
import errorHandler from "./validation/error-handler";

const Form = ({ schema, data, setData }) => {
  let errorObject = {};
  const validate = schema.map((item) => {
    errorObject[item.name] = "";
    return 0;
  });
  const [error, setError] = useState(errorObject);
  const changeHandler = (e, validate) => {
    const { name, value } = e.target;
    const formError = errorHandler(name, value, validate);

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });

    setError({
      ...error,
      [name]: formError,
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
              changeHandler={(e) => changeHandler(e, item.validate)}
              setData={setData}
              error={error}
            />
            {error[item.name] && (
              <div style={{ color: "red" }}>{error[item.name]}</div>
            )}
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
