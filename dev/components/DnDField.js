import React, { Component } from 'react';
import { render } from 'react-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dropzone from './Dropzone';
import ElementsBar from './ElementsBar';

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
							<ElementsBar geometry="none" />						
						</div>
						<div className="col-md-8">
							<Dropzone geometry="none" />
						</div>
					</div>);
  };
}

export default DragDropContext(HTML5Backend)(DnDField);