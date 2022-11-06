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

const personData = {
  fname: "raju",
  lname: "sharma",
  age: "20",
};

const dogData = {
  dogname: "lucy",
  breed: "golden retriver",
};

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
      <div>
        <Form schema={personSchema} data={personData}></Form>
        <Form schema={dogSchema} data={dogData} />
      </div>
    </div>
  );
}

export default App;
