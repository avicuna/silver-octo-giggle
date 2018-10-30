import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from "./Contacts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Contacts/>
      </div>
    );
  }
}

export default App;
