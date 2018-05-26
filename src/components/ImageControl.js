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
            <div class="div-center" onClick={context.helloWorld}>
              <Image />
            </div>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ImageControl;
