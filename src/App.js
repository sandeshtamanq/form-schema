import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { personSchema, dogSchema } from "./schema";

const personDataObject = {
  fname: "raju",
  lname: "sharma",
  age: "20",
};

const dogDataObject = {
  dogname: "lucy",
  breed: "golden retriver",
};

function App() {
  const [personData, setPersonData] = useState(personDataObject);
  const [dogData, setDogData] = useState(dogDataObject);
  return (
    <div className="App">
      <div>
        <Form
          schema={personSchema}
          data={personData}
          setData={setPersonData}
        ></Form>
        <Form schema={dogSchema} data={dogData} setData={setDogData} />
      </div>
      <div>{personData.fname}</div>
      <div>{dogData.dogname}</div>
    </div>
  );
}

export default App;
