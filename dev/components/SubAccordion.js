import React, { Component } from 'react';
import { render } from 'react-dom';
import AccordionSection from './AccordionSection';
import { removeArrayElement } from './../helpers'; 

class SubAccordion extends Component {

  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
    this.updateSubAccordionItems = this.updateSubAccordionItems.bind(this);
    this.deleteGroupLevelTwo = this.deleteGroupLevelTwo.bind(this);
    this.markForCopy = this.markForCopy.bind(this);

    this.state = {
      jsonData: this.props.store.jsonData.jsonData,
      subAccordionItems: [],
      elementsToCopy: []
    };
  }

  componentWillReceiveProps(nextProps) {
    let newItems = nextProps.elem.content;
    this.updateSubAccordionItems(newItems);
  }

  deleteGroupLevelTwo(elem, index) {
    const buttonId = 'btn_group_level_two_mark_' + elem.key;
    let subAccordionItems = removeArrayElement(this.state.subAccordionItems, index),
        elementsToCopy = [...this.state.elementsToCopy],
        indexForElementToRemove;

    if (elem.marked) {
      $('#' + buttonId).removeClass('marked');

      indexForElementToRemove = elementsToCopy.map((arrayElement, i) => {
        return arrayElement.key;
      }).indexOf(elem.key);

      elementsToCopy = removeArrayElement(elementsToCopy, indexForElementToRemove);
    }

    this.setState({
      subAccordionItems,
      elementsToCopy
    });
  }

  markForCopy(elem, index) {
    const buttonId = 'btn_group_level_two_mark_' + elem.key;
    let elementsToCopy = [...this.state.elementsToCopy],
        subAccordionItems = [...this.state.subAccordionItems],
        indexForElementToRemove;

    if (elem.marked) {
      indexForElementToRemove = elementsToCopy.map((arrayElement, i) => {
        return arrayElement.key;
      }).indexOf(elem.key);

      subAccordionItems[index].marked = false;
      elementsToCopy = removeArrayElement(elementsToCopy, indexForElementToRemove);
      $('#' + buttonId).removeClass('marked');

    } else {
      subAccordionItems[index].marked = true;      
      elementsToCopy.push(subAccordionItems[index]);
      $('#' + buttonId).addClass('marked');
    }

    this.setState({
      elementsToCopy,
      subAccordionItems
    });
  }

  updateSubAccordionItems(newItems) {
    let subAccordion = [],
        subAccordionItems = [...this.state.subAccordionItems];

    newItems.forEach((j) => {
      subAccordion.push({
        key: j.key,
        title: j.title,
        content: j.fields,
        open: false,
        marked: false
      });
    });
        
    subAccordionItems = subAccordion;

    this.setState({ 
      subAccordionItems
    });
  }

  componentWillMount() {
    let subAccordion = [];

    this.props.elem.content.forEach((j) => {
      subAccordion.push({
        key: j.key,
        title: j.title,
        content: j.fields,
        open: false
      });
    });

    this.setState({
      subAccordionItems: subAccordion
    });
  }

  click(event, j){ 
    const newSubAccordion = this.state.subAccordionItems.slice();

    newSubAccordion[j].open = !newSubAccordion[j].open;
    this.setState({
      subAccordionItems: newSubAccordion
    });
  }

  render() {

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
            <div>
              <div>
                {this.state.subAccordionItems.map((elem, j) => {
                  let buttonId = "btn_group_level_two_mark_" + elem.key;

                  return (
                    <div key={j}>
                      <div className="group-bar-level-one"><AccordionSection {...this.props} click={this.click} groupTwo={j} groupOne={this.props.groupOne} elem={elem}/></div>
                      <div className="group-buttons-level-one">
                        <div className="btn-group-vertical" role="group" aria-label="edit">
                          <button id={buttonId} type="button" className="btn btn-default btn-xs" onClick={() => this.markForCopy(elem, j)}>
                            <i className="fa fa-check" aria-hidden="true"></i>
                          </button>
                          <div className="dropdown">
                            <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </button>
                            <ul className="dropdown-menu">
                              <li><a href="#"><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element</a></li>
                              <li><a href="#"><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden</a></li>
                              <li><a href="#"><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i>Einfügen</a></li>
                              <li><a href="#" onClick={() => this.deleteGroupLevelTwo(elem, j)}><i className="fa-margin fa fa-times" aria-hidden="true"></i>Löschen</a></li>
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