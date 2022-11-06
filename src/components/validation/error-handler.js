const INVALID_INPUT = "Invalid Input";

const errorHandler = (value, validate) => {
  if (value.length < validate.min_length) return INVALID_INPUT;
  if (value < validate.min_age) return INVALID_INPUT;
};

export default errorHandler;
