import React, { Component } from 'react';
import { render } from 'react-dom';
import AccordionSection from './AccordionSection';
import { removeArrayElement } from './../helpers'; 

class SubAccordion extends Component {

  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
    this.updateSubAccordionItems = this.updateSubAccordionItems.bind(this);
    this.updateGroupsLevelTwoToCopy = this.updateGroupsLevelTwoToCopy.bind(this);
    this.updateMarking = this.updateMarking.bind(this);

    this.state = {
      jsonData: this.props.store.database.jsonData,
      subAccordionItems: [],
      groupsLevelTwoToCopy: []
    };
  }

  componentWillReceiveProps(nextProps) {
    let newItems = nextProps.elem.content,
        newGroupsLevelTwoToCopy = nextProps.store.database.groupsLevelTwoToCopy;

    this.updateGroupsLevelTwoToCopy(newGroupsLevelTwoToCopy);    
    this.updateSubAccordionItems(newItems);

    setTimeout(() => {
      this.updateMarking(newItems)
    }, 100);
  }

  updateSubAccordionItems(newItems) {
    let subAccordion = [],
        subAccordionItems = [...this.state.subAccordionItems];

    newItems.forEach((j) => {
      subAccordion.push({
        key: j.key,
        title: j.title,
        content: j.fields,
        open: (j.open !== undefined) ? j.open : false,
        marked: (j.marked !== undefined) ? j.marked : false
      });
    });
        
    subAccordionItems = subAccordion;

    this.setState({ 
      subAccordionItems
    });
  }

  updateGroupsLevelTwoToCopy(newGroupsLevelTwoToCopy) {
    let groupsLevelTwoToCopy = [...this.state.groupsLevelTwoToCopy];

    groupsLevelTwoToCopy = newGroupsLevelTwoToCopy;

    this.setState({ 
      groupsLevelTwoToCopy
    });
  }

  updateMarking(newSubAccordionItems) {
    let subAccordionItems = [...this.state.subAccordionItems];

    subAccordionItems = newSubAccordionItems;

    subAccordionItems.forEach((i) => {
      const buttonId = 'btn_group_level_two_mark_' + i.key;

      $('#' + buttonId).removeClass('marked');
      if (i.marked) {
        $('#' + buttonId).addClass('marked');
      } else {
        $('#' + buttonId).removeClass('marked');
      }
    });
  }

  componentWillMount() {
    let subAccordion = this.props.elem.content,
        newGroupsLevelTwoToCopy = this.props.store.database.groupsLevelTwoToCopy;

    this.updateGroupsLevelTwoToCopy(newGroupsLevelTwoToCopy);
    this.updateSubAccordionItems(subAccordion);

    setTimeout(() => {
      this.updateMarking(subAccordion);
    }, 100);
  }

  click(event, j){ 
    const newSubAccordion = this.state.subAccordionItems.slice();

    newSubAccordion[j].open = !newSubAccordion[j].open;
    this.setState({
      subAccordionItems: newSubAccordion
    });
  }

  render() {
    const groupLevelOneKey = this.props.elem.key;
    let {subAccordionItems, groupsLevelTwoToCopy} = this.state;

    return (
      <div>
        <div 
          className="title" 
          onClick={(e) => this.props.click(e, this.props.groupOne)}
        >        
         <span className="title-text">
            {this.props.elem.title}
         </span>
         <span className="arrow-wrapper">
           <i className={this.props.elem.open 
             ? "fa fa-angle-down fa-rotate-180" 
             : "fa fa-angle-down"}
           ></i>
         </span>
       </div>
       <div className={this.props.elem.open 
         ? "content content-open" 
         : "content"}
        >
          <div className={this.props.elem.open 
            ? "content-text content-text-open" 
            : "content-text"}>
            <div className="acc-width">
              <div>
                {this.state.subAccordionItems.map((elem, j) => {
                  let buttonId = "btn_group_level_two_mark_" + elem.key;

                  return (
                    <div key={j}>
                      <div className="group-bar-level-one"><AccordionSection {...this.props} click={this.click} groupTwo={j} groupOne={this.props.groupOne} groupLevelOneKey={groupLevelOneKey} elem={elem}/></div>
                      <div className="group-buttons-level-one">
                        <div className="btn-group-vertical" role="group" aria-label="edit">
                          <button id={buttonId} type="button" className="btn btn-default btn-xs" onClick={this.props.markGroupLevelTwoForCopy.bind(null, subAccordionItems, groupsLevelTwoToCopy, groupLevelOneKey, elem, j)}>
                            <i className="fa fa-check" aria-hidden="true"></i>
                          </button>
                          <div className="dropdown">
                            <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </button>
                            <ul className="dropdown-menu">
                              <li><a href="#"><i className="fa-margin fa fa-wrench" aria-hidden="true"></i> Bearbeiten</a></li>
                              <li><a href="#"><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element</a></li>
                              <li><a href="#"><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden</a></li>
                              <li><a href="#"><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i>Einfügen</a></li>
                              <li><a href="#" onClick={this.props.deleteGroupLevelTwo.bind(null, subAccordionItems, groupsLevelTwoToCopy, groupLevelOneKey, elem, j)}><i className="fa-margin fa fa-times" aria-hidden="true"></i>Löschen</a></li>
                            </ul>
                          </div>          
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default SubAccordion;