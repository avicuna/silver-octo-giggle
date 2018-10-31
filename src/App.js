import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from "./Components/Contacts/Contacts";

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Contacts/>
      </div>
    );
  }
}

export default App;
