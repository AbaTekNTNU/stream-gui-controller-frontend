import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Basket from "./modules/basket";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/basket">
          <Basket />
        </Route>
      </Router>
    </div>
  );
}

export default App;
