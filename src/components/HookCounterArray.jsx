import React, { useState } from "react";

const HookCounterArray = () => {
  const [items, setItems] = useState([]);
  const addNumber = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addNumber}>Add number</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default HookCounterArray;
