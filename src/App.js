import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Index from './pages/index'
import Pending from './pages/pending'
import Header from './components/header'
import './styles/main.scss'

export default function App() {
  return (
    <Router>
      <div>
        <div className='main-container'>
          <Switch >
            <Route path="/pending">
              <Pending />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </div>
        <Header />
      </div>
    </Router>
  );
}