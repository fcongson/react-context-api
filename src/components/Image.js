import React, { Component } from 'react';
import { AppContext } from './AppContextProvider';
import '../App.css';

class Image extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div class="div-center">
              <img src={context.getImage()} alt="Coffee"/>
            </div>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Image;
