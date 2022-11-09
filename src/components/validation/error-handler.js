const errorHandler = (value, validate) => {
  switch (validate.type) {
    case "string":
      if (value.length < validate.min_length || !value.match(/^[a-zA-Z ]*$/)) {
        return true;
      }

    case "number":
      if (value < validate.min_age || !value.match(/^[0-9]*$/)) {
        return true;
      }
  }
};

export default errorHandler;
