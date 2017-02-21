import React, { Component } from 'react';
import { render } from 'react-dom';

class Field extends Component {

  constructor(props) {
    super(props);

    this.updateField = this.updateField.bind(this);

    this.state = {
      field: this.props.field
    };
  }

  componentWillReceiveProps(nextProps) {
    let newField = nextProps.field;
    this.updateField(newField);
  }

  updateField(newField) {
    let field = {...this.state.field};
    field = newField;
    this.setState({ field });
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
