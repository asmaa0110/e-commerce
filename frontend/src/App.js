/* eslint-disable quote-props */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ 'fontFamily': 'sans-serif', textAlign: 'center' }}>
        <Routes />
      </div>
    );
  }
}

export default App;
