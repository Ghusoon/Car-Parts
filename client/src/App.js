import React, { Component } from 'react';
import Form from './Components/form';
import AppNavbar from './Components/Navbar';

import './App.css';

class App extends Component {
 
  render() {
    
    return (
      <div>
      <AppNavbar />
      <Form />
     
      </div>
    )
  }
}

export default App;
