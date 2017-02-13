import React, { Component } from 'react';
import { render } from 'react-dom';

class Dropzone extends Component {

  constructor(props) {
    super(props);

    this.duplicateElement = this.duplicateElement.bind(this);

    this.state = {
  
    };
  }

  duplicateElement(event) {
    console.log('dupliziere');
  }

  componentDidMount() {
    $('.dropdown-toggle').dropdown();
  }

  render() {
    return (
      <div>
        <div className="padding10 margin-bottom-30">Dropzone Areas</div>
        <div id="dropZoneTableNode">
          <div id="a1" className="btn-group align-with-tag">
            <button className="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Steuerelement <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">Inputtext</a></li>
              <li><a href="#">Textbox</a></li>
              <li><a href="#">Radiobutton</a></li>
              <li><a href="#">Checkbox</a></li>
              <li><a href="#">Code</a></li>
            </ul>
          </div>
          <div className="drop-node-wrapper">
            <span className="drop-node">Steuerelement einfügen</span>
            <ul className="button-list">
              <li><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></li>
              <li>
                <span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true" 
                      onClick={(e) => this.duplicateElement(e)}>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}

export default Dropzone;
