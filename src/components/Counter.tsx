import React, { useReducer } from "react";
import { CounterAction, CounterState } from "../type";

const initialState = {
  count: 0,
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Count: {state?.count}</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment", payload: 10 });
          }}
        >
          Increment 10
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement", payload: 10 });
          }}
        >
          Decrement 10
        </button>
      </div>
    </>
  );
}
