import React, { Component } from 'react';
import './App.css';
import AppControl from './components/AppControl';
import AppContextProvider from './components/AppContextProvider';
import ImageContainer from './components/ImageContainer';

class App extends Component {
  render() {
    return (
      <AppContextProvider >
        <div class="App">
          <AppControl />
          <ImageContainer />
        </div>
      </AppContextProvider>
    );
  }
}

export default App;
