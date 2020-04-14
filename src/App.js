import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Water from "./components/Water";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is a desperate attempt to code the 554 project</p>
          <Link className="App-link" to="/water">
            Water
          </Link>
          <Link className="App-link" to="/">
            Home
          </Link>
        </header>
        <Route path="/water" exact component={Water} />
      </div>
    </Router>
  );
}

export default App;
