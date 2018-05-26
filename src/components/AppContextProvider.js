import React, { Component } from 'react';

export const AppContext = React.createContext();

class AppContextProvider extends Component {
  // imageCollection = 'https://unsplash.com/collections/1215/coffee';

  state = {
    hello: 'hello',
    helloTranslations: ['hola', 'bonjour', 'hallo', 'ciao', 'hej', 'namaste', 'aloha', 'kia ora'],
    images: [
      'https://source.unsplash.com/PM4Vu1B0gxk/400x400',
      'https://source.unsplash.com/lhGqKUnLvzw/400x400',
      'https://source.unsplash.com/tJXHXX4npwk/400x400',
      'https://source.unsplash.com/u3ajSXhZM_U/400x400',
      'https://source.unsplash.com/IuLgi9PWETU/400x400',
      'https://source.unsplash.com/54hUU5pNSvo/400x400',
      'https://source.unsplash.com/w17rvzEglgY/400x400',
      'https://source.unsplash.com/j1bpuXNvHhs/400x400',
      'https://source.unsplash.com/MbVn7iA9Z08/400x400',
      'https://source.unsplash.com/VD0k9ZcxJOU/400x400',
      'https://source.unsplash.com/m0l5J8Lqnzo/400x400'
    ]
  }

  render() {
    return (
      <AppContext.Provider value={
        {
          state: this.state,
          helloWorld: () => this.setState({ hello: this.state.helloTranslations[Math.floor(Math.random() * this.state.helloTranslations.length)] })
        }
      }>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppContextProvider;
