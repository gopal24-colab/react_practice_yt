import React from "react";
import FormHandelUsingCustomHook from "./components/custom hooks/FormHandelUsingCustomHook";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const App = () => {
  return (
    <div>
      <FormHandelUsingCustomHook />
    </div>
  );
};

export default App;
