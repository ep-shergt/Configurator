import React, { Component } from "react";
import { render } from "react-dom";
import Field from "./Field";
import { removeArrayElement } from './../helpers';

// stateless functional component

class AccordionSection extends Component {

  constructor(props) {
    super(props);

    this.deleteField = this.deleteField.bind(this);
    this.updateFields = this.updateFields.bind(this);
    this.markForCopy = this.markForCopy.bind(this);
    this.insertElementsToCopy = this.insertElementsToCopy.bind(this);
    this.createNewField = this.createNewField.bind(this);
    this.cutAndShift = this.cutAndShift.bind(this);


    this.state = {
      jsonData: this.props.store.jsonData.jsonData,
      fields: [],
      elementsToCopy: []
    };
  }

  componentWillReceiveProps(nextProps) {
    let newFields = nextProps.elem.content;
    this.updateFields(newFields);
  }

  insertElementsToCopy(elem, index) {

  }

  createNewField(elem, index) {

  }

  cutAndShift(elem, index) {

  }

  updateFields(newFields) {
    let fields = [...this.state.fields];

    fields = newFields;
    this.setState({
      fields
    });
  }

  markForCopy(elem, index) {
    const buttonId = 'btn_field_' + elem.key;
    let elementsToCopy = [...this.state.elementsToCopy],
        fields = [...this.state.fields],
        indexForElementToRemove;

    if (elem.marked) {
      indexForElementToRemove = elementsToCopy.map((arrayElement, i) => {
        return arrayElement.key;
      }).indexOf(elem.key);

      elementsToCopy = removeArrayElement(elementsToCopy, indexForElementToRemove);
      fields[index].marked = false;
      $('#' + buttonId).removeClass('marked');

    } else {
      fields[index].marked = true;
      elementsToCopy.push(fields[index]);
      $('#' + buttonId).addClass('marked');      
    }

    this.setState({
      elementsToCopy,
      fields
    });
  }

  deleteField(elem, index){
    const buttonId = "btn_field_" + elem.key;
    let fields = removeArrayElement(this.state.fields, index),
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
      fields,
      elementsToCopy
    });
  }

  componentWillMount() {
    let fields = [];

    this.props.elem.content.forEach((i) => {
      i['marked'] = false;
      fields.push(i);
    });

    this.setState({
      fields
    });
  }

  render () {
    return (
      <div>
        <div 
          className="title" 
          onClick={(e) => this.props.click(e, this.props.groupTwo)}
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
            : "content-text"}
          > 
            {this.state.fields.map((elem, i) => {
              let fieldId = 'field_' + elem.key,
                  buttonId = "btn_field_" + elem.key;

              switch (true) {
                case elem.clearBefore && elem.clearAfter:
                  return (
                    <div key={i} id={fieldId} className="clear-both">
                      <ul className="field-ul">
                        <li className="field-li"><Field field={elem}></Field></li>
                        <li className="field-li">
                          <div className="btn-group-vertical li-div" role="group" aria-label="edit">
                            <button onClick={() => this.markForCopy(elem, i)} id={buttonId} type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#" onClick={() => this.createNewField(elem, i)}><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#" onClick={() => this.cutAndShift(elem, i)}><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#" onClick={() => this.insertElementsToCopy(elem, i)}><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
                                <li><a href="#" onClick={() => this.deleteField(elem, i)}><i className="fa-margin fa fa-times" aria-hidden="true"></i> Element löschen</a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  );
                  break;

                case elem.clearBefore && !elem.clearAfter:
                  return (
                    <div key={i} id={fieldId} className="clear-left">
                      <ul className="field-ul">
                        <li className="field-li"><Field field={elem}></Field></li>
                        <li className="field-li">
                          <div className="btn-group-vertical li-div" role="group" aria-label="edit">
                            <button onClick={() => this.markForCopy(elem, i)} id={buttonId} type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#" onClick={() => this.createNewField(elem, i)}><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#" onClick={() => this.cutAndShift(elem, i)}><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#" onClick={() => this.insertElementsToCopy(elem, i)}><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
                                <li><a href="#" onClick={() => this.deleteField(elem, i)}><i className="fa-margin fa fa-times" aria-hidden="true"></i> Element löschen</a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  );
                  break;

                case !elem.clearBefore && elem.clearAfter:
                  return (
                    <div key={i} id={fieldId} className="clear-right">
                      <ul className="field-ul">
                        <li className="field-li"><Field field={elem}></Field></li>
                        <li className="field-li">
                          <div className="btn-group-vertical li-div" role="group" aria-label="edit">
                            <button onClick={() => this.markForCopy(elem, i)} id={buttonId} type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#" onClick={() => this.createNewField(elem, i)}><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#" onClick={() => this.cutAndShift(elem, i)}><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#" onClick={() => this.insertElementsToCopy(elem, i)}><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
                                <li><a href="#" onClick={() => this.deleteField(elem, i)}><i className="fa-margin fa fa-times" aria-hidden="true"></i> Element löschen</a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  );
                  break;

                case !elem.clearBefore && !elem.clearAfter:
                  return (
                    <div key={i} id={fieldId}>
                      <ul className="field-ul">
                        <li className="field-li"><Field field={elem}></Field></li>
                        <li className="field-li">
                          <div className="btn-group-vertical li-div" role="group" aria-label="edit">
                            <button onClick={() => this.markForCopy(elem, i)} id={buttonId} type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#" onClick={() => this.createNewField(elem, i)}><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#" onClick={() => this.cutAndShift(elem, i)}><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#" onClick={() => this.insertElementsToCopy(elem, i)}><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
                                <li><a href="#" onClick={() => this.deleteField(elem, i)}><i className="fa-margin fa fa-times" aria-hidden="true"></i> Element löschen</a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  );
                  break;
              }
            })}
          </div>
        </div>
      </div>
    );
  };   
 }

export default AccordionSection;
