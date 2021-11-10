import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Basket from "./modules/basket";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/basket" component={Basket} />
      </Router>
    </div>
  );
}

export default App;
