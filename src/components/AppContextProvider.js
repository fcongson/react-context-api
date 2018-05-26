import React, { Component } from 'react';

export const AppContext = React.createContext();

class AppContextProvider extends Component {
  state = {
    hello: 'hello',
    helloTranslations: ['hola', 'bonjour', 'hallo', 'ciao', 'hej', 'namaste', 'aloha', 'kia ora']
  }
  render() {
    return (
      <AppContext.Provider value={
        {
          state: this.state,
          helloWorld: () => this.setState({ hello: this.state.helloTranslations[Math.floor(Math.random() * this.state.helloTranslations.length)] }),
          getImage: () => 'https://source.unsplash.com/collection/1215/400x400'
        }
      }>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppContextProvider;
