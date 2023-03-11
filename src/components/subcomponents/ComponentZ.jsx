import React, { useContext } from "react";
import { CounterContext } from "../GlobalStateManagement";

const ComponentZ = () => {
  const counter = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => counter?.dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => counter?.dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => counter?.dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
};

export default ComponentZ;
