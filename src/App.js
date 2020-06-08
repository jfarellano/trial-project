import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Index from './pages/index'
import Header from './components/header'
import './styles/main.scss'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='main-container'>
          <Switch >
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}