import React, { useState, useEffect, useRef } from "react";

const StopCounter = () => {
  const [timer, setTimer] = useState(0);
  const intervalId = useRef();
  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 100);
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const handelTimer = () => {
    clearInterval(intervalId.current);

    intervalId.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId.current);
    };
  };

  return (
    <div>
      <h1>Timer {timer}</h1>
      <button onClick={() => clearInterval(intervalId.current)}> Stop </button>
      <button onClick={() => setInterval(handelTimer)}> Start </button>
    </div>
  );
};

export default StopCounter;
