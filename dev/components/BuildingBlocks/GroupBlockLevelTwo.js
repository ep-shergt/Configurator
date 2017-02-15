import React, { Component } from 'react';
import { render } from 'react-dom';
import FieldBlock from './FieldBlock';
import EditBar from './EditBar';

class GroupBlockLevelTwo extends Component {

  constructor(props) {
    super(props);

    //getinitialState
    this.state = {
      jsonData: this.props.store.jsonData.jsonData,
      fields: 1
    };
  }

  render() {
    return (<div className={this.props.inline}>
              <div>Level1</div>
              <FieldBlock inline={this.props.inline} {...this.props}></FieldBlock>
              <EditBar inline="inline-block" {...this.props}/>
            </div>);
  };
}

export default GroupBlockLevelTwo;