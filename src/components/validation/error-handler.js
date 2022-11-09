const errorHandler = (value, validate) => {
  switch (validate.type) {
    case "string":
      if (value.length < validate.min_length || !value.match(/^[a-zA-Z ]*$/)) {
        return true;
      } else {
        return false;
      }

    case "number":
      if (value < validate.min_value || !value.match(/^[0-9]*$/)) {
        return true;
      } else {
        return false;
      }
  }
};

export default errorHandler;
