import React, { Component } from 'react';
import { AppContext } from './AppContextProvider';
import '../App.css';
import Image from './Image';

class ImageControl extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div class="div-center">
              <h3>image control</h3>
              <Image />
            </div>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ImageControl;
