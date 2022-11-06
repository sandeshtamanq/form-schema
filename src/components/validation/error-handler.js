const INVALID_INPUT = "Invalid Input";

const errorHandler = (property, value, validate) => {
  if (property === "fname") {
    if (value.length < validate.min_length && typeof value === validate.type)
      return INVALID_INPUT;
  }

  if (property === "lname") {
    if (value.length < validate.min_length && typeof value === validate.type)
      return INVALID_INPUT;
  }

  if (property === "age") {
    if (value < validate.min_age) return INVALID_INPUT;
  }

  if (property === "dogname") {
    if (value.length < validate.min_length && typeof value === validate.type)
      return INVALID_INPUT;
  }

  if (property === "breed") {
    if (value.length < validate.min_length && typeof value === validate.type)
      return INVALID_INPUT;
  }
};

export default errorHandler;
