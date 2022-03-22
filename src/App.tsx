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
import Box from "./components/Box";
import LoggedIn from "./components/LoggedIn";
import Counter from "./components/Counter";
import { ThemeContextProvider } from "./context/ThemeContext";
import BoxContext from "./context/Box";
import { UserContextProvider } from "./context/userContext/UserContext";
import User from "./context/userContext/User";
import DomRef from "./ref/DomRef";
import MutableRef from "./ref/MutableRef";
import Private from "./auth/Private";
import Profile from "./auth/Profile";

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
      <Box
        styles={{
          border: "1px solid black",
          width: "150px",
          height: "50px",
          margin: "0 auto",
        }}
      />
      <LoggedIn />
      <Counter />

      {/* theme context */}
      <ThemeContextProvider>
        <BoxContext />
      </ThemeContextProvider>

      {/* user Context */}
      <UserContextProvider>
        <User />
      </UserContextProvider>

      <DomRef />
      <MutableRef />
      <Private isLoggedIn={false} component={Profile} />
    </div>
  );
}

export default App;
