import React, { Component } from 'react';
import { render } from 'react-dom';
import Accordion from './Accordion';

class Configurator extends Component {

	constructor(props) {
	    super(props);

	    //getinitialState
	    this.state = {
	  		jsonData: this.props.store.database.jsonData
	    };
    }

    componentDidMount() {
    	$('#inputMainTitle').val(this.state.jsonData.title);
  	}

    render() {
    	return (
    		<div id="configuratorWrapper">
				<div className="col-md-8">
					<Accordion {...this.props}/>
				</div>
				<div className="col-md-4 editor-panel">
					<h2>Panel</h2>
					<form>
					  <div className="input-group">
					    <span className="input-group-addon">Titel</span>
					    <input id="inputMainTitle" type="text" className="form-control" name="inputMainTitle" placeholder="Titel der Fallpauschale" />
					  </div>
					</form>
				</div>
			</div>
		);
    }
}

export default Configurator;