import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.count("re-rendered");
  }, [count]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click Me {count} times
      </button>
    </div>
  );
};

export default HookUseEffect;
