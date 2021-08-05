import './App.css';

import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import TestTwo from './TestTwo.js';
// import Test from './Test.js';

// import ReactAnime from 'react-animejs'
// Component imports
import Nav from './components/nav';
import Home from './components/home';
import State from './components/state';
import Helper from './components/Helper';
import Credits from './components/credits'
import Tools from './components/tools'

function App() {

  return (

    <Router>
      <div id="App">
              <Nav/>
                <div id="page-wrap">
                  <span className="logo">Air Feed</span>
                </div>
              <Switch>
                <Route exact path="/tools">
                  <Tools/>
                </Route>
                <Route exact path="/credits">
                  <Credits/>
                </Route>
                <Route path="/">
                  <Helper/>
                </Route>
              </Switch>
          </div>
</Router>
  );
}

export default App;
