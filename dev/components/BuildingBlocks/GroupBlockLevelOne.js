import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import buildingBlock from './Functions';
import GroupBlockLevelTwo from './GroupBlockLevelTwo';
import EditBar from './EditBar';

class GroupLevelOneBlock extends Component {

  constructor(props) {
    super(props);

    //getinitialState
    this.state = {
      jsonData: this.props.store.jsonData.jsonData,
      groupLevelTwoElements: 1
    };
  }

  render() {
    return (<div className={this.props.inline}>
              <div>Level1</div>
              <GroupBlockLevelTwo inline={this.props.inline} {...this.props}></GroupBlockLevelTwo>
              <EditBar inline="inline-block" {...this.props}/>
            </div>);
  };
}

export default buildingBlock(GroupLevelOneBlock);