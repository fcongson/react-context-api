import React, { Component } from 'react';
import './App.css';
import AppControl from './components/AppControl';
import AppContextProvider from './components/AppContextProvider';
import ImageContainer from './components/ImageContainer';

class App extends Component {
  render() {
    return (
      <AppContextProvider >
        <div className='App'>
          <AppControl />
          <ImageContainer index='0' />
          <ImageContainer index='1' />
          <ImageContainer index='2' />
          <ImageContainer index='3' />
          <ImageContainer index='4' />
          <ImageContainer index='5' />
          <ImageContainer index='6' />
          <ImageContainer index='7' />
          <ImageContainer index='8' />
          <ImageContainer index='9' />
          <ImageContainer index='10' />
        </div>
      </AppContextProvider>
    );
  }
}

export default App;
