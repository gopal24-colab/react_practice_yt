import { useState, useEffect } from "react";

const useCounter = (initialValue = 0, value = 1) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount >= 1 ? prevCount - value : prevCount));
  };

  const reset = () => {
    setCount(initialValue);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
