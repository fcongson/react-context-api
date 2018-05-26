import React, { Component } from 'react';
import { AppContext } from './AppContextProvider';
import '../App.css';
import Image from './Image';

class ImageControl extends Component {
  state = {
    index: this.props.index
  }

  updateIndex(maxIndex) {
    this.setState({ index: Math.floor(Math.random() * maxIndex) })
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div onClick={() => this.updateIndex(context.state.images.length)}>
              <Image index={this.state.index} />
            </div>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ImageControl;
