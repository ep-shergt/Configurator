import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ImportExportBar extends Component {

  constructor(props) {
    super(props);

    //getinitialState
    this.state = {
  
    };
  }

  render() {
    return (<div>
    			<div className="col-md-2 col-md-offset-8">
    				<button type="button" className="btn btn-default">Import</button>
    			</div>
    			<div className="col-md-2">
    				<button type="button" className="btn btn-default">Export</button>
    			</div>
    	</div>
    );
    		
    	
  };
}