import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Button from "./components/Button";
import Heading from "./components/Heading";
import { personList } from "./utils/data";
import TopNavigation from "./layout/TopNavigation";
import Input from "./components/Input";

function App() {
  const personName = {
    firstName: "Jubayer",
    lastName: "Khan",
  };
  return (
    <div className="App">
      <Heading>
        <TopNavigation>This is Navigation</TopNavigation>
      </Heading>
      <Greet name={"Jubayer"} />
      <Button
        handleClick={(e, id) => {
          console.log("event", e.target, id);
        }}
      />
      <Input
        value=""
        handleChange={(e) => {
          console.log("event", e.target.value);
        }}
      />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
