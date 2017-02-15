import React, { Component } from 'react';

// This function takes a component...
const buildingBlock = (WrappedComponent) => {
  return class buildingBlock extends Component {
  	render() {
  		return (<WrappedComponent {...this.props} />);
  	}
  }
}

export default buildingBlock;

