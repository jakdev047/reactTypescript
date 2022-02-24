import React from "react";
// import { GreetProps } from "./../type/index";

type GreetProps = {
  name: string;
};

export default function Greet(props: GreetProps) {
  return (
    <>
      <h2>Hello {props?.name}</h2>
    </>
  );
}
