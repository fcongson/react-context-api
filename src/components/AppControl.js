import React, { Component } from 'react';
import { AppContext } from './AppContextProvider';

class AppControl extends Component {
  render() {
    return (
      <div>
        <AppContext.Consumer>
          {(context) => (
            <React.Fragment>
              <h1>app control</h1>
              <p>{context.state.hello}</p>
              <button onClick={context.helloWorld}>hi</button>
            </React.Fragment>
          )}
        </AppContext.Consumer>
      </div>
    );
  }
}

export default AppControl;
