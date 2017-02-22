import React, { Component } from 'react';
import { render } from 'react-dom';
import SubAccordion from './SubAccordion';
import { removeArrayElement } from './../helpers';

class Accordion extends Component {

  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
    this.deleteGroupLevelOne = this.deleteGroupLevelOne.bind(this);
    this.setAccordionItems = this.setAccordionItems.bind(this);
    this.markForCopy = this.markForCopy.bind(this);

    this.state = {
      jsonData: this.props.store.jsonData.jsonData,
      accordionItems: [],
      fields: this.props.store.jsonData.jsonData.fields,
      elementsToCopy: []
    };
  }

  componentWillMount() {
    let accordion = this.setAccordionItems();

    this.setState({
      accordionItems: accordion
    });
  }

  setAccordionItems() {
    let accordion = [],
        groups = this.state.jsonData.groups;

    groups.forEach((group) => {
      if (group.groups[0] !== undefined) {
        let groupLevelOneKey = group.key;

        group.groups.forEach((i) => {
          let groupLevelTwoKey = i.key,
              fieldGroupKey = groupLevelOneKey + '|' + groupLevelTwoKey,
              fieldsPerGroup = [];

          this.state.fields.forEach((field) => {
            if (field.group === fieldGroupKey) {
              fieldsPerGroup.push(field);
            }
          });

          i['fields'] = fieldsPerGroup;
        });
      }
    });

    groups.forEach((i) => {
      accordion.push({
        key: i.key,
        title: i.title,
        content: i.groups,
        open: false,
        marked: false
      });
    });
    return accordion;
  }

  deleteGroupLevelOne(elem, index) {
    const buttonId = 'btn_group_level_one_mark_' + elem.key;
    let accordionItems = removeArrayElement(this.state.accordionItems, index),
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
      accordionItems,
      elementsToCopy
    });

    elementsToCopy.forEach((i) => {
      const buttonId2 = 'btn_group_level_one_mark_' + i.key;
      $('#' + buttonId2).removeClass('marked');
      if (i.marked) {
        $('#' + buttonId2).addClass('marked');
      }
    });
  }

  markForCopy(elem, index) {
    const buttonId = 'btn_group_level_one_mark_' + elem.key;
    let elementsToCopy = [...this.state.elementsToCopy],
        accordionItems = [...this.state.accordionItems],
        indexForElementToRemove;

    if (elem.marked) {
      indexForElementToRemove = elementsToCopy.map((arrayElement, i) => {
        return arrayElement.key;
      }).indexOf(elem.key);

      elementsToCopy = removeArrayElement(elementsToCopy, indexForElementToRemove);
      accordionItems[index].marked = false;
      $('#' + buttonId).removeClass('marked');

    } else {
      accordionItems[index].marked = true;    
      elementsToCopy.push(accordionItems[index]);
      $('#' + buttonId).addClass('marked');
    }

    this.setState({
      elementsToCopy,
      accordionItems
    });
  }

  click(event, i) {
    const newAccordion = this.state.accordionItems.slice();

    newAccordion[i].open = !newAccordion[i].open;
    this.setState({
      accordionItems: newAccordion
    });
  }
  
  render() {
    return (
      <div className="accordion">
        <div>
          {this.state.accordionItems.map((elem, i) => {
            let buttonId = "btn_group_level_one_mark_" + elem.key;
               
            return (
              <div key={i}>
                <div className="group-bar-level-one"><SubAccordion {...this.props} click={this.click} groupOne={i} elem={elem}/></div>
                <div className="group-buttons-level-one">
                  <div className="btn-group-vertical" role="group" aria-label="edit">
                    <button id={buttonId} type="button" className="btn btn-default btn-xs" onClick={() => this.markForCopy(elem, i)}>
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
                        <li><a href="#" onClick={() => this.deleteGroupLevelOne(elem, i)}><i className="fa-margin fa fa-times" aria-hidden="true"></i>Löschen</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

export default Accordion;