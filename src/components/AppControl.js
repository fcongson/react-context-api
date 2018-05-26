import React, { Component } from 'react';
import { AppContext } from './AppContextProvider';
import '../App.css';

class AppControl extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div class="div-center">
              <h1>coffee</h1>
              <p>{context.state.hello}</p>
              <button onClick={context.helloWorld}>hi</button>
            </div>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default AppControl;
