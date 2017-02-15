import React, { Component } from 'react';
import { render } from 'react-dom';
import MainConfig from './MainConfig';
import ConfigPanel from './ConfigPanel';

class Configurator extends Component {

  constructor(props) {
    super(props);

    //getinitialState
    this.state = {
      jsonData: this.props.store.jsonData.jsonData
    };
  }

  render() {
    return (<div className="row">
              <div className="col-md-8">
                <MainConfig {...this.props}/>
              </div>
              <div className="col-md-4">
                <ConfigPanel {...this.props}/>
              </div>
            </div>);
  };
}

export default Configurator;