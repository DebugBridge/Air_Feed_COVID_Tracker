import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Component imports
import Nav from './components/nav';
import Helper from './components/Helper';
import Credits from './components/credits'
import Tools from './components/tools'

const App = () => {

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

  )
};

export default App;
