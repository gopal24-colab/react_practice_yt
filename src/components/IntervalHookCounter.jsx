import React, { useEffect, useState } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `stop watch time ${Math.floor(count / 60)} : ${
      count % 60
    }`;
  }, [count]);

  const tick = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    let interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Stop watch</h1>
      <h1>
        {Math.floor(count / 60)} : {count % 60}
      </h1>
    </div>
  );
};

export default IntervalHookCounter;
