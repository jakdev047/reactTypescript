import React from "react";

type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.handleChange(e)}
    />
  );
}
