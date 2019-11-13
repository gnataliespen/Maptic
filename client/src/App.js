import React, { useContext, useReducer } from "react";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Nav from "./components/Layout/Nav";
import Context from "./state/context";
import reducer from "./state/reducer";
import WithSocket from "./components/Layout/WithSocket";
import "./css/Style.css";

const options = {
  timeout: 5000
};

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Nav />
        <WithSocket />
      </AlertProvider>
    </Context.Provider>
  );
}

export default App;
