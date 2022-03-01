import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { personList } from "./utils/data";
import Heading from "./components/Heading";
import TopNavigation from "./layout/TopNavigation";

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
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
