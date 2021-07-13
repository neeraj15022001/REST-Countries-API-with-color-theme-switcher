import React from "react";
import "./App.scss";
import Navbar from "./Components/Common/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Details from "./Components/Details/Details";
import { DarkModeProvider } from "./Components/Context/DarkModeContext.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
          </Switch>
        </Router>
      </DarkModeProvider>
    </>
  );
}

export default App;
