import React, { useReducer } from "react";

const initalState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state >= 1 ? state - 1 : state;
    case "reset":
      return initalState;
    default:
      return state;
  }
};

const MultipleUseReducer = () => {
  const [bagCount, dispatchBag] = useReducer(reducer, initalState);
  const [bottleCount, dispatchBottle] = useReducer(reducer, initalState);

  return (
    <>
      <div>
        <p>Bag Count {bagCount}</p>
        <button onClick={() => dispatchBag({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatchBag({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatchBag({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <p>Bottle Count {bottleCount}</p>
        <button onClick={() => dispatchBottle({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatchBottle({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatchBottle({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
};

export default MultipleUseReducer;
