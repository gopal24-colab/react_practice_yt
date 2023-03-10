import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouseMovePosition = (e) => {
    console.count("Mouse move position");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.count("UseEffect called");
    window.addEventListener("mousemove", logMouseMovePosition);

    return () => {
      console.log("Unmount called");
      window.removeEventListener("mousemove", logMouseMovePosition);
    };
  }, []);

  return (
    <div>
      Your mouse position is X: {x} , Y: {y}
    </div>
  );
};

export default HookMouse;
