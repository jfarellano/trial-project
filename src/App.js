import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Index from './pages/index'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}