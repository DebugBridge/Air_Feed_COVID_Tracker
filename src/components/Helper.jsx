import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useState} from 'react';

import Home from './home';
import State from './state';
import Slider from './slider';

let Helper = () =>{

  const [,setReRender] = useState();

  let reRenderFunc = () => {
    setReRender({})
  }

  return (
//random commit
    <div>
        <Switch>  
        <Router exact path="/">
            <Home/>
        </Router>
        <Router path="/">
            <State/>
        </Router>
        </Switch>
        <Slider reRender={reRenderFunc}/>
    </div>
  )
}

export default Helper