export const personSchema = [
  {
    type: "text",
    name: "fname",
    placeholder: "First Name",
    label: "First Name",
    validate: {
      type: "string",
      min_length: 4,
    },
  },
  {
    type: "text",
    name: "lname",
    placeholder: "Last Name",
    label: "Last Name",
    validate: {
      type: "string",
      min_length: 4,
    },
  },
  {
    type: "number",
    name: "age",
    placeholder: "Enter Age",
    label: "Age",
    validate: {
      type: "number",
      min_age: 18,
    },
  },
];

export const dogSchema = [
  {
    type: "text",
    name: "dogname",
    placeholder: "Enter Dog Name",
    label: "Dog Name",
    validate: {
      type: "string",
      min_length: 4,
    },
  },
  {
    type: "text",
    name: "breed",
    placeholder: "Enter Breed Name",
    label: "Breed",
    validate: {
      type: "string",
      min_length: 4,
    },
  },
];
