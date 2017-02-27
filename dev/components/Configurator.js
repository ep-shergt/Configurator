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

  	handleMainTitleChange(event){
	    let newTitle = event.target.value;
	    console.log('newtitle: ', newTitle);
	    this.props.changeMainTitle(newTitle);
  	}

  	componentWillReceiveProps(nextProps) {
	    let newJsonData = nextProps.store.database.jsonData,
	        jsonData = {...this.state.jsonData};

	    jsonData = newJsonData;

	    this.setState({
	        jsonData
	    });

	    setTimeout(() => {
	        $('#inputMainTitle').val(this.state.jsonData.title);
	    }, 200);
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
					    <input id="inputMainTitle" onChange={this.handleMainTitleChange.bind(this)} type="text" className="form-control" name="inputMainTitle" placeholder="Titel der Fallpauschale" />
					  </div>
					</form>
				</div>
			</div>
		);
    }
}

export default Configurator;