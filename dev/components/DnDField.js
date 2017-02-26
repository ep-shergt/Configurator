import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropzone from './Dropzone';

class DnDField extends Component {

  constructor(props) {
    super(props);

    //getinitialState
    this.state = {
      jsonData: this.props.store.database.jsonData
    };
  }

  componentDidMount() {
  
  }

  render() {
    return (<div>
              <div className="padding10">Dropzone Areas</div>
              <div id="dndfield" className="row top-margin20 dnd-grid">
    						{this.state.jsonData.fields.map((field, i) => <Dropzone {...this.props} key={i} i={i} field={field}/>)}
  					  </div>
            </div>);
  };
}

export default DnDField;