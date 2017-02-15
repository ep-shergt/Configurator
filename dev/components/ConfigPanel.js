import React, { Component } from 'react';
import { render } from 'react-dom';

class ConfigPanel extends Component {

  constructor(props) {
    super(props);

    //getinitialState
    this.state = {
      jsonData: this.props.store.jsonData.jsonData
    };
  }

  render() {
    return (<div>
             blub
            </div>);
  };
}

export default ConfigPanel;