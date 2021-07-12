import React from "react";
import "./App.scss";
import Navbar from "./Components/Common/Navbar/Navbar";
import Main from "./Components/Main/Main"
import {DarkModeProvider} from "./Components/Context/DarkModeContext.js"

function App() {
  return (
    <>
      <DarkModeProvider>
        <Navbar />
        <Main /> 
      </DarkModeProvider>
    </>
  );
}

export default App;
