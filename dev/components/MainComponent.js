import React, { Component } from 'react';
import { render } from 'react-dom';
import Textbox from './Textbox';
import DnDField from './DnDField';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; 
import Configurator from './Configurator';

class MainComponent extends Component {

	constructor(props) {
	    super(props);

	    //getinitialState
	    this.state = {
	  		jsonData: this.props.store.database.jsonData
	    };
    }

    render() {
    	return (
    		<div className="container-fluid">
		    	<div className="row">
					<div className="col-md-12">
						<Tabs onSelect={this.handleSelect}>
							<TabList>
								<Tab>Konfigurator</Tab>
								<Tab>Vorschauansicht</Tab>
								<Tab>JSON editieren</Tab>
							</TabList>
							<TabPanel>
								<Configurator {...this.props}/>
							</TabPanel>
							<TabPanel>
								<DnDField {...this.props}/>
							</TabPanel>
							<TabPanel>
								<Textbox {...this.props}/>
							</TabPanel>
						</Tabs>

					</div>		
		    	</div>   			
    		</div>
		);
    }
}

export default MainComponent;