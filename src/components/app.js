import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from '../containers/homeContainer';
import About from './about';
import CountryFullInfo from '../containers/countryFullInfoContainer';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route path="/:countryCode" component={CountryFullInfo}/>
  </Switch>
);

export default App;