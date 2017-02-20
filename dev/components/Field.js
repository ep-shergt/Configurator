import React, { Component } from 'react';
import { render } from 'react-dom';

class Field extends Component {

  constructor(props) {
    super(props);

    this.state = {
      field: this.props.field
    };
  }

  render() {
    return (
      <div className="field-node field-li">
        <div>{this.state.field.title}</div>
      </div>
    )
  }
}

export default Field;
