import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropzone from './Dropzone';

class DnDField extends Component {

  constructor(props) {
    super(props);

    //getinitialState
    this.state = {
  
    };
  }

  render() {
    return (<div id="dndfield" className="row top-margin20">
  						<div className="col-md-8">
  							<Dropzone geometry="none" />
  						</div>
					  </div>);
  };
}

export default DnDField;