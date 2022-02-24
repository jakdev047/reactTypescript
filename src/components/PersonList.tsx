import React from "react";
import { PersonListProps } from "../type";
import Person from "./Person";

export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props?.names?.map((name, index) => {
        return <Person key={index} name={name} />;
      })}
    </div>
  );
}
