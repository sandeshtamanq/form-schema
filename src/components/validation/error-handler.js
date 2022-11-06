const INVALID_INPUT = "Invalid Input";

const errorHandler = (property, value) => {
  if (property === "fname") {
    if (value.length < 5) return INVALID_INPUT;
  }

  if (property === "lname") {
    if (value.length < 5) return INVALID_INPUT;
  }

  if (property === "age") {
    if (value < 18) return INVALID_INPUT;
  }

  if (property === "dogname") {
    if (value.length < 5) return INVALID_INPUT;
  }

  if (property === "breed") {
    if (value.length < 5) return INVALID_INPUT;
  }
};

export default errorHandler;
