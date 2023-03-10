import React from "react";
import { useTheme } from "../utils/theme-context";

const ReactHooks = () => {
  const [theme, setTheme] = useTheme();

  const getStyle = () => {
    return theme === "black"
      ? { backgroundColor: "black", color: "white" }
      : { backgroundColor: "white", color: "black" };
  };

  return (
    <div style={getStyle()}>
      <h1>Welcome to UseContext Hook</h1>
      <button onClick={() => setTheme(theme === "white" ? "black" : "white")}>
        Toggole Color
      </button>
    </div>
  );
};

export default ReactHooks;
