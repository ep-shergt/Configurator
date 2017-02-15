import React, { Component } from 'react';
import { render } from 'react-dom';

class EditBar extends Component {

  constructor(props) {
    super(props);

    //getinitialState
    this.state = {
      jsonData: this.props.store.jsonData.jsonData
    };
  }

  render() {
    return (<div className={this.props.inline}>
             EditBar
            </div>);
  };
}

export default EditBar;