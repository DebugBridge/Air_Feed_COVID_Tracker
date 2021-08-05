import './App.css';
import Test from './Test.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TestTwo from './TestTwo.js';
import { useContext } from 'react'

function App() {
  return (
    <Router>
      <div>
          <Switch>
       <Route exact path="/">
            <Test />
       </Route>
       <Route path="/">
            <TestTwo />
       </Route>
     </Switch>
  </div>
</Router>
  );
}

export default App;
