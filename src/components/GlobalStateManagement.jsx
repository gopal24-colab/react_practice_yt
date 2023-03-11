import React, { useReducer } from "react";
import { ComponentX, ComponentY, ComponentZ } from "./subcomponents";

export const CounterContext = React.createContext();

const initalState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return state.count >= 1
        ? { count: state.count - 1 }
        : { count: state.count };
    case "reset":
      return initalState;
    default:
      return { count: state.count };
  }
};

const GlobalStateManagement = () => {
  const [counter, dispatch] = useReducer(reducer, initalState);

  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      <div>
        <h1>{counter.count}</h1>

        <ComponentX />
        <ComponentY />
        <ComponentZ />
      </div>
    </CounterContext.Provider>
  );
};

export default GlobalStateManagement;
