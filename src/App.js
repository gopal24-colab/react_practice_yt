import React from "react";
import DataFetchingWithUseReducer from "./components/DataFetchingWithUseReducer";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const App = () => {
  return (
    <div>
      <DataFetchingWithUseReducer />
    </div>
  );
};

export default App;
