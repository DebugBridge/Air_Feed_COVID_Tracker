import { BrowserRouter as Router, Switch } from "react-router-dom";

import {useState} from 'react';

import Home from './home';
import State from './state';
import Slider from './slider';

//enables the application to only display the slider on either home or state
const Helper = () =>{
  // enables us force a re-render. holds no data
  const [,setReRender] = useState();
  //re-render function to be passed to slider to enable this component to refresh
  let reRenderFunc = () => {
    setReRender({})
  }


  return (

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