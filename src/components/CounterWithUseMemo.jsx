import React, { useMemo, useState } from "react";

const CounterWithUseMemo = () => {
  const [bagCount, setBagCount] = useState(0);
  const [notebookCount, setNotebookCount] = useState(0);

  const incrementCounter = () => {
    setBagCount((prev) => prev + 1);
  };
  const incrementCounter2 = () => {
    setNotebookCount((prev) => prev + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000_000_000) i++;
    return bagCount % 2 === 0;
  }, [bagCount]);
  return (
    <div>
      <button onClick={incrementCounter}>Bag {bagCount}</button>
      {isEven ? <p>Even</p> : <p> Odd </p>}
      <button onClick={incrementCounter2}>Notebook {notebookCount}</button>
    </div>
  );
};

export default CounterWithUseMemo;
