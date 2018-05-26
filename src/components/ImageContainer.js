import React, { Component } from 'react';
import { AppContext } from './AppContextProvider';
import '../App.css';
import ImageControl from './ImageControl';

class ImageContainer extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div class="div-center">
              <ImageControl />
            </div>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ImageContainer;
