import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementBy10 = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div>
      <button onClick={() => setCount(initialCount)}>Reset {count}</button>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment {count}
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>
        Decrement {count}
      </button>
      <button onClick={incrementBy10}>Increment by 10 {count}</button>
    </div>
  );
};

export default HookCounterTwo;
