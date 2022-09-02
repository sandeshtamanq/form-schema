import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";

const personSchema = [
  {
    type: "text",
    name: "fname",
    placeholder: "First Name",
    label: "First Name",
  },
  {
    type: "text",
    name: "lname",
    placeholder: "Last Name",
    label: "Last Name",
  },
  {
    type: "number",
    name: "age",
    placeholder: "Enter Age",
    label: "Age",
  },
];

const dogSchema = [
  {
    type: "text",
    name: "dogname",
    placeholder: "Enter Dog Name",
    label: "Dog Name",
  },
  {
    type: "text",
    name: "breed",
    placeholder: "Enter Breed Name",
    label: "Breed",
  },
];
function App() {
  return (
    <div className="App">
      <Form schema={personSchema}></Form>
      <Form schema={dogSchema} />
    </div>
  );
}

export default App;
