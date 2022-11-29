import React from 'react';
import {Route, Switch } from "react-router-dom";
import LandingPage from '../src/components/LandingPage';
import TemplateData from '../src/components/TemplateData';
import Home from "./pages/Home";
function App() {
  return (
    <Switch>
    <React.Fragment>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/templates' component={TemplateData} />
        <Route exact path="/employee" component={Home} />
    </React.Fragment>
    </Switch>
  );
}

export default App;
