import React, { useState } from "react";
import useDockTitle from "../hooks/useDockTitle";

const CounterTwo = () => {
  const [count, setCount] = useState(0);

  useDockTitle(count);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count {count}
      </button>
    </div>
  );
};

export default CounterTwo;
