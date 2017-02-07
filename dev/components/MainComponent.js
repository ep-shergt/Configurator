import React, { Component } from 'react';
import { render } from 'react-dom';
import Textbox from './Textbox';
import DnDField from './DnDField';

class MainComponent extends Component {

	constructor(props) {
	    super(props);

	    //getinitialState
	    this.state = {
	  		jsonData: 'default' 
	    };
    }

    render() {
    	return (
    		<div className="container-fluid">
		    	<div className="row">
					<div className="col-md-12">
						<div className="col-md-8">
							<DnDField />
						</div>
						<div className="row">
							<div className="col-md-4">
								<Textbox geometry="jsonbox"/>
							</div>
						</div>	
					</div>		
		    	</div>   			
    		</div>
		);
    }
}

export default MainComponent;