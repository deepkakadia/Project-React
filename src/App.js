import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Water from "./components/water/Water";
import FoodMain from "./components/food/foodMain";
import HomePage from "./components/home/homePage";
import ErrorNotFound from "./components/error/pageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import { AuthProvider } from "./Firebase/Auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>This is a desperate attempt to code the 554 project</p>
            <div className="App-body">
              <Link className="App-link" to="/">
                Home
              </Link>
              <Link className="App-link" to="/water">
                Water
              </Link>
              <Link className="App-link" to="/foodMain">
                Food Page
              </Link>
              <Link className="App-link" to="/signup">
                Sign Up
              </Link>
            </div>{" "}
          </header>

          <Switch>
            <Route path="/signup" exact component={SignUp}></Route>
            <Route path="/signin" exact component={SignIn}></Route>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/water" exact component={Water} />
            <Route path="/foodMain" exact component={FoodMain} />
            <Route component={ErrorNotFound}></Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
=======

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is a desperate attempt to code the 554 project</p>
          
        </header>

          <div className='App-body'>


            <Link className="App-link" to="/">
              Home
            </Link>
            <Link className="App-link" to="/water">
              Water
            </Link>
            <Link className='App-Button' to='/foodMain'>
                Food Page
            </Link>


            <Switch>

              <Route path='/' exact component={HomePage}></Route> 
              <Route path="/water" exact component={Water} /> 
              <Route path='/foodMain' exact component={FoodMain} />
              <Route component={ErrorNotFound}></Route>

            </Switch>
          </div>


      </div>
    </Router>
>>>>>>> parent of ac3d703... Merge pull request #4 from deepkakadia/Deep
  );
}

export default App;
