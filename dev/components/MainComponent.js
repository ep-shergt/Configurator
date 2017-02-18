import React, { Component } from 'react';
import { render } from 'react-dom';
import Textbox from './Textbox';
import DnDField from './DnDField';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Configurator from './Configurator'; 
import Accordion from './Accordion';

class MainComponent extends Component {

	constructor(props) {
	    super(props);

	    //getinitialState
	    this.state = {
	  		jsonData: this.props.store.jsonData,
	  		accData: [{
	  			title: "Gruppe Level 1.1",
	  			content: [{
		  			title: "Gruppe Level 1.2.1",
		  			content: 'Fields'
		  		}, {
		  			title:"Gruppe Level 1.2.2",
		  			content: 'Fields'
		  		}, {
		  			title: "Gruppe Level 1.2.3",
		  			content: 'Fields'
		  		}]
	  		}, {
	  			title:"Gruppe Level 1.2",
	  			content: [{
		  			title: "Gruppe Level 2.2.1",
		  			content: 'Fields'
		  		}, {
		  			title:"Gruppe Level 2.2.2",
		  			content: 'Fields'
		  		}, {
		  			title: "Gruppe Level 2.2.3",
		  			content: 'Fields'
		  		}]
	  		}, {
	  			title: "Gruppe Level 1.3",
	  			content: [{
		  			title: "Gruppe Level 3.2.1",
		  			content: 'Fields'
		  		}, {
		  			title:"Gruppe Level 3.2.2",
		  			content: 'Fields'
		  		}, {
		  			title: "Gruppe Level 3.2.3",
		  			content: 'Fields'
		  		}]
	  		}]
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
								<div className="col-md-8">
									<Accordion {...this.props}/>
								</div>
								<div className="col-md-4 editor-panel">
									<h2>Panel</h2>
								</div>
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