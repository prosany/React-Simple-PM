import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import baseRoute from './Routes';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {baseRoute.map((route, idx) => (
            <Route exact path={route.route} component={route.component} key={idx} />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}
