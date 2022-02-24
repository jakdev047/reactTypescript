import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { personList } from "./utils/data";

function App() {
  const personName = {
    firstName: "Jubayer",
    lastName: "Khan",
  };
  return (
    <div className="App">
      <Greet name={"Jubayer"} />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
