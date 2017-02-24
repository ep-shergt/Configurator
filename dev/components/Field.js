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

  componentDidMount() {
    
  }

  render() {
    switch (this.state.field.type) {
      case 'code':
        return (
          <div className="field-node field-li">
            <ul className="field-inner-ul">
              <li className="field-inner-li"><div className="title-overflow">{this.state.field.title}</div></li>
              <li className="field-inner-li">
                <div className="field-icon">
                  <i className="fa fa-file-code-o fa-2x field-code" aria-hidden="true"></i>
                </div>
              </li>
            </ul>
          </div>
        );
        break;

      case 'radio':
        return (
          <div className="field-node field-li">
            <ul className="field-inner-ul">
              <li className="field-inner-li"><div className="title-overflow">{this.state.field.title}</div></li>
              <li className="field-inner-li">
                <div className="field-icon">
                  <i className="fa fa-dot-circle-o fa-2x field-radio" aria-hidden="true"></i>
                </div>
              </li>
            </ul>
          </div>
        );
        break;

      case 'check':
        return (
          <div className="field-node field-li">
            <ul className="field-inner-ul">
              <li className="field-inner-li"><div className="title-overflow">{this.state.field.title}</div></li>
              <li className="field-inner-li">
                <div className="field-icon">
                  <i className="fa fa-check-square-o fa-2x field-check" aria-hidden="true"></i>
                </div>
              </li>
            </ul>
          </div>
        );
        break;

      case 'select':
        return (
          <div className="field-node field-li">
            <ul className="field-inner-ul">
              <li className="field-inner-li"><div className="title-overflow">{this.state.field.title}</div></li>
              <li className="field-inner-li">
                <div className="field-icon">
                  <i className="fa fa-list-ol fa-2x field-select" aria-hidden="true"></i>
                </div>
              </li>
            </ul>
          </div>
        );
        break;

      case 'text':
        return (
          <div className="field-node field-li">
            <ul className="field-inner-ul">
              <li className="field-inner-li"><div className="title-overflow">{this.state.field.title}</div></li>
              <li className="field-inner-li">
                <div className="field-icon">
                  <i className="fa fa-commenting fa-2x field-text" aria-hidden="true"></i>
                </div>
              </li>
            </ul>
          </div>
        );
        break;

      case 'textarea':
        return (
          <div className="field-node field-li">
            <ul className="field-inner-ul">
              <li className="field-inner-li"><div className="title-overflow">{this.state.field.title}</div></li>
              <li className="field-inner-li">
                <div className="field-icon">
                  <i className="fa fa-file-text fa-2x field-textarea" aria-hidden="true"></i>
                </div>
              </li>
            </ul>
          </div>
        );
        break;

      default:
        return (
          <div className="field-node field-li">
            <ul className="field-inner-ul">
              <li className="field-inner-li"><div className="title-overflow">{this.state.field.title}</div></li>
              <li className="field-inner-li">
                <div className="field-icon">
                  <i className="fa fa-question-circle fa-2x" aria-hidden="true"></i>    
                </div>
              </li>
            </ul>
          </div>
        );
        break;
    }
  }
}

export default Field;
