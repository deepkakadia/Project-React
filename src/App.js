import React from "react";
import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Water from "./components/Water";
=======
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
>>>>>>> parent of a18bff8... navigation
=======
>>>>>>> parent of a18bff8... navigation
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
import Water from "./Components/Water";
import FoodMain from "./Components/food/foodMain";
import HomePage from "./Components/home/homePage";
import ErrorNotFound from "./Components/error/pageNotFound";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
import Water from "./components/Water";
>>>>>>> parent of 2e8df93... Merge pull request #5 from deepkakadia/master
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 2e8df93... Merge pull request #5 from deepkakadia/master
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
<<<<<<< HEAD
=======
import Water from "./Components/Water";
import FoodMain from "./Components/food/foodMain";
import HomePage from "./Components/home/homePage";
import ErrorNotFound from "./Components/error/pageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignIn from "./Components/SignIn";
import { AuthProvider } from './firebase/Auth';
=======
import Water from "./components/water/Water";
import FoodMain from "./components/food/foodMain";
import HomePage from "./components/home/homePage";
import ErrorNotFound from "./components/error/pageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import { AuthProvider } from "./Firebase/Auth";
>>>>>>> parent of 93eafa4... commit
=======
import "bootstrap/dist/css/bootstrap.min.css";
=======
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> parent of a18bff8... navigation
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignIn from "./Components/SignIn";
import { AuthProvider } from './firebase/Auth';
<<<<<<< HEAD
>>>>>>> parent of a18bff8... navigation
=======
>>>>>>> parent of a18bff8... navigation

function App() {
  return (
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>This is a desperate attempt to code the 554 project</p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"

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
            <Link className='App-Button' to='/signup'>
              Sign Up
            </Link>


            <Switch>
              <Route path='/signup' exact component={SignUp}></Route>
              <Route path='/signin' exact component={SignIn}></Route>
              <Route path='/' exact component={HomePage}></Route>
              <Route path="/water" exact component={Water} />
              <Route path='/foodMain' exact component={FoodMain} />
              <Route component={ErrorNotFound}></Route>

            </Switch>
          </div>


        </div>
      </Router>
    </AuthProvider>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of a18bff8... navigation
=======
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
=======

>>>>>>> parent of a18bff8... navigation
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
            <Link className='App-Button' to='/signup'>
              Sign Up
            </Link>


            <Switch>
              <Route path='/signup' exact component={SignUp}></Route>
              <Route path='/signin' exact component={SignIn}></Route>
              <Route path='/' exact component={HomePage}></Route>
              <Route path="/water" exact component={Water} />
              <Route path='/foodMain' exact component={FoodMain} />
              <Route component={ErrorNotFound}></Route>

            </Switch>
          </div>


        </div>
      </Router>
    </AuthProvider>
>>>>>>> parent of 93eafa4... commit
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
>>>>>>> parent of 2e8df93... Merge pull request #5 from deepkakadia/master
=======
import Water from "./components/Water";
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
import Water from "./components/Water";
>>>>>>> parent of 2e8df93... Merge pull request #5 from deepkakadia/master
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignIn from "./Components/SignIn";
import { AuthProvider } from './firebase/Auth';

function App() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 2e8df93... Merge pull request #5 from deepkakadia/master
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
<<<<<<< HEAD
>>>>>>> parent of 2e8df93... Merge pull request #5 from deepkakadia/master
=======
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>This is a desperate attempt to code the 554 project</p>
<<<<<<< HEAD
=======
>>>>>>> parent of a18bff8... navigation
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"

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
            <Link className='App-Button' to='/signup'>
              Sign Up
            </Link>


            <Switch>
              <Route path='/signup' exact component={SignUp}></Route>
              <Route path='/signin' exact component={SignIn}></Route>
              <Route path='/' exact component={HomePage}></Route>
              <Route path="/water" exact component={Water} />
              <Route path='/foodMain' exact component={FoodMain} />
              <Route component={ErrorNotFound}></Route>

            </Switch>
          </div>


        </div>
      </Router>
    </AuthProvider>
<<<<<<< HEAD
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
=======
>>>>>>> parent of 2e8df93... Merge pull request #5 from deepkakadia/master
=======
>>>>>>> parent of 9f86f23... Revert "Merge pull request #5 from deepkakadia/master"
  );
}

export default App;
