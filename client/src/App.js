import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from  './pages/Home';
import About from  './pages/About';
import Contact from  './pages/Contact';

import './App.css';

class App extends Component {
 
  render() {
    
    return (
      <Router>
      <div>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
