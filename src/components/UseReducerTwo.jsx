import React, { useReducer } from "react";

const initalState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initalState;
    default:
      return state;
  }
};

const UseReducerTwo = () => {
  const [counter, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <p>First Counter {counter.firstCounter}</p>
      <p>Second Counter {counter.secondCounter}</p>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 2 })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 2 })}>
        Decrement 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducerTwo;
