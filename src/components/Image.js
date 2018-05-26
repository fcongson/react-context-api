import React, { Component } from 'react';
import { AppContext } from './AppContextProvider';
import '../App.css';

class Image extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <React.Fragment>
            <img src={context.state.images[this.props.index]} alt='Coffee' />
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Image;
