import React from "react";
import ComponentC from "./ComponentC";
import UseContextFinal from "./UseContextFinal";

const ComponentB = () => {
  return (
    <div>
      ComponentB
      <ComponentC />
      <UseContextFinal />
    </div>
  );
};

export default ComponentB;
