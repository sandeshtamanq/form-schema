const INVALID_INPUT = "Invalid Input";

const errorHandler = (value, validate) => {
  if (value.length < validate.min_length && typeof value === validate.type)
    return INVALID_INPUT;
  if (value < validate.min_age && !isNaN(value)) return INVALID_INPUT;
};

export default errorHandler;
