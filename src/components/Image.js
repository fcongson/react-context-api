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
              <img src="https://source.unsplash.com/400x400/?coffee" />
            </div>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Image;