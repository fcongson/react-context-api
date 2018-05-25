import React, { Component } from 'react';
import './App.css';
import AppControl from './components/AppControl';
import AppContextProvider from './components/AppContextProvider';

class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <AppControl />
      </AppContextProvider>
    );
  }
}

export default App;
