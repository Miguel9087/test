import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p>hecho por Miguel par hacer pruebas del ejercicio</p>
          <p>hecho por Miguel par hacer pruebas del ejercicio por segunda vez</p>
          <p>hecho por Miguel par hacer pruebas del ejercicio por segunda vez</p>
          <p>Lo que sea: Hecho por TonyM </p>
          <p>Lo que sea: Hecho por TonyM doble vez </p>
          <p>Lo que sea: Hecho por TonyM triple vez </p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
