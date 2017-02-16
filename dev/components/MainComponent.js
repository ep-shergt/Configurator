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
	  			title: "PrimOne",
	  			content: [{
		  			title: "SubOne",
		  			content: 'Leo hbj hh ngh'
		  		}, {
		  			title:"SubTwo",
		  			content: 'Leohvz zgzz hgz'
		  		}, {
		  			title: "SubThree",
		  			content: 'buz hgb hbg'
		  		}]
	  		}, {
	  			title:"PrimTwo",
	  			content: [{
		  			title: "SubOne2",
		  			content: 'Leo hbj hh ngh'
		  		}, {
		  			title:"SubTwo2",
		  			content: 'Leohvz zgzz hgz'
		  		}, {
		  			title: "SubThree2",
		  			content: 'buz hgb hbg'
		  		}]
	  		}, {
	  			title: "PrimThree",
	  			content: [{
		  			title: "SubOne3",
		  			content: 'Leo hbj hh ngh'
		  		}, {
		  			title:"SubTwo3",
		  			content: 'Leohvz zgzz hgz'
		  		}, {
		  			title: "SubThree3",
		  			content: 'buz hgb hbg'
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
									<Accordion data={this.state.accData} {...this.props}/>
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