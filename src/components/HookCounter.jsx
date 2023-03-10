import React, { useState } from "react";

const ClassCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
      <p>{count}</p>
    </div>
  );
};

export default ClassCounter;
