import React, { Component } from 'react';
import { render } from 'react-dom';
import SubAccordion from './SubAccordion';

class Accordion extends Component {

  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
    this.deleteGroupLevelOne = this.deleteGroupLevelOne.bind(this);
    this.setAccordionItems = this.setAccordionItems.bind(this);

    this.state = {
      jsonData: this.props.store.jsonData.jsonData,
      accordionItems: [],
      fields: this.props.store.jsonData.jsonData.fields
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

    groups.forEach((i) => {
      accordion.push({
        key: i.key,
        title: i.title,
        content: i.groups,
        open: false
      });
    });

    return accordion;
  }

  deleteGroupLevelOne(elem, index) {
    let newJSON = {...this.state.jsonData},
        newGroups = [];

    newGroups = [...newJSON.groups.slice(0,index), ...newJSON.groups.slice(index+1)];
    newJSON.groups = newGroups;

    this.setState({
      jsonData: newJSON,
      accordionItems: [...this.state.accordionItems.slice(0,index), ...this.state.accordionItems.slice(index+1)]
    });
  }

  click(event, i) {
    const newAccordion = this.state.accordionItems.slice();

    newAccordion[i].open = !newAccordion[i].open;
    this.setState({
      accordionItems: newAccordion
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="accordion">
        <div>
          {this.state.accordionItems.map((elem, i) => {
            let buttonId = "btn_group_level_one_" + i,
                groupOneKey = elem.key,
                fieldsPerGroup = [];

            this.state.fields.map((field, k) => {
              let groupKeys = field.group.split('|');
              if (field.hasOwnProperty('group') && groupOneKey === groupKeys[0]) {
                fieldsPerGroup.push(field);
              }
            });

            return (
              <div key={i}>
                <div className="group-bar-level-one"><SubAccordion {...this.props} fieldsPerGroup={fieldsPerGroup} click={this.click} groupOne={i} elem={elem}/></div>
                <div className="group-buttons-level-one">
                  <div className="btn-group-vertical" role="group" aria-label="edit">
                    <button id={buttonId} type="button" className="btn btn-default btn-xs">
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