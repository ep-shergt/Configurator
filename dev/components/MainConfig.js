import React, { Component } from 'react';
import { render } from 'react-dom';
import GroupBlockLevelOne from './BuildingBlocks/GroupBlockLevelOne';
import EditBar from './BuildingBlocks/EditBar';

class MainConfig extends Component {

  constructor(props) {
    super(props);

    //getinitialState
    this.state = {
      jsonData: this.props.store.jsonData.jsonData,
      groupLevelOneElements: 1
    };
  }

  render() {
    return (<div>
             <GroupBlockLevelOne inline="inline-block" {...this.props}/>
             <EditBar inline="inline-block" {...this.props}/>
            </div>);
  };
}

export default MainConfig;