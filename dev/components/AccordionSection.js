import React, { Component } from "react";
import { render } from "react-dom";
import Field from "./Field";
import { removeArrayElement } from './../helpers';

// stateless functional component

class AccordionSection extends Component {

  constructor(props) {
    super(props);

    this.updateFields = this.updateFields.bind(this);
    this.markForCopy = this.markForCopy.bind(this);
    this.updateMarking = this.updateMarking.bind(this);
    this.updateFieldsToCopy = this.updateFieldsToCopy.bind(this);
    this.insertfieldsToCopy = this.insertfieldsToCopy.bind(this);
    this.createNewField = this.createNewField.bind(this);
    this.cutAndShift = this.cutAndShift.bind(this);

    this.state = {
      jsonData: this.props.store.database.jsonData,
      fields: [],
      fieldsToCopy: []
    };
  }

  componentWillReceiveProps(nextProps) {
    let newFields = nextProps.elem.content,
        newFieldsToCopy = nextProps.store.database.fieldsToCopy;

    this.updateFieldsToCopy(newFieldsToCopy);    
    this.updateFields(newFields);

    setTimeout(() => {
      this.updateMarking(newFields);
    }, 100);
  }

  insertfieldsToCopy(elem, index) {

  }

  createNewField(elem, index) {

  }

  cutAndShift(elem, index) {

  }

  updateFields(newFields) {
    let fields = [...this.state.fields],
        helpingFields = [];

    newFields.forEach((i) => {
      i['marked'] = (i.marked !== undefined) ? i.marked : false;
      helpingFields.push(i);
    });

    fields = helpingFields;

    this.setState({
      fields
    });
  }

  updateMarking(newFields) {
    let fields = [...this.state.fields];

    fields = newFields;

    fields.forEach((i) => {
      const buttonId = 'btn_field_' + i.key;

      $('#' + buttonId).removeClass('marked');
      if (i.marked) {
        $('#' + buttonId).addClass('marked');
      } else {
        $('#' + buttonId).removeClass('marked');
      }
    });
  }

  updateFieldsToCopy(newFieldsToCopy) {
    let fieldsToCopy = [...this.state.fieldsToCopy];

    fieldsToCopy = newFieldsToCopy;

    this.setState({ 
      fieldsToCopy
    });
  }

  markForCopy(elem, index) {
    const buttonId = 'btn_field_' + elem.key;
    let fieldsToCopy = [...this.state.fieldsToCopy],
        fields = [...this.state.fields],
        indexForElementToRemove;

    if (elem.marked) {
      indexForElementToRemove = fieldsToCopy.map((key, i) => {
        return key;
      }).indexOf(elem.key);

      fieldsToCopy = removeArrayElement(fieldsToCopy, indexForElementToRemove);
      fields[index].marked = false;
      $('#' + buttonId).removeClass('marked');

    } else {
      fields[index].marked = true;
      fieldsToCopy.push(fields[index].key);
      $('#' + buttonId).addClass('marked');      
    }

    this.setState({
      fieldsToCopy,
      fields
    });
  }

  componentWillMount() {
    let newFields = this.props.elem.content,
        newFieldsToCopy = this.props.store.database.fieldsToCopy;

    this.updateFieldsToCopy(newFieldsToCopy)
    this.updateFields(newFields);

    setTimeout(() => {
      this.updateMarking(newFields);
    }, 100);
  }

  render () {
    let {fields, fieldsToCopy} = this.state;
    const groupLevelOneKey = this.props.groupLevelOneKey,
          groupLevelTwoKey = this.props.elem.key;

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
                            <button onClick={this.props.markFieldToCopy.bind(null, fields, fieldsToCopy, groupLevelOneKey, groupLevelTwoKey, elem, i)} id={buttonId} type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#" onClick={() => this.createNewField(elem, i)}><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#" onClick={() => this.cutAndShift(elem, i)}><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#" onClick={() => this.insertfieldsToCopy(elem, i)}><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
                                <li><a href="#" onClick={this.props.deleteField.bind(null, fields, fieldsToCopy, groupLevelOneKey, groupLevelTwoKey, elem, i)}><i className="fa-margin fa fa-times" aria-hidden="true"></i> Element löschen</a></li>
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
                            <button onClick={this.props.markFieldToCopy.bind(null, fields, fieldsToCopy, groupLevelOneKey, groupLevelTwoKey, elem, i)} id={buttonId} type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#" onClick={() => this.createNewField(elem, i)}><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#" onClick={() => this.cutAndShift(elem, i)}><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#" onClick={() => this.insertfieldsToCopy(elem, i)}><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
                                <li><a href="#" onClick={this.props.deleteField.bind(null, fields, fieldsToCopy, groupLevelOneKey, groupLevelTwoKey, elem, i)}><i className="fa-margin fa fa-times" aria-hidden="true"></i> Element löschen</a></li>
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
                            <button onClick={this.props.markFieldToCopy.bind(null, fields, fieldsToCopy, groupLevelOneKey, groupLevelTwoKey, elem, i)} id={buttonId} type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#" onClick={() => this.createNewField(elem, i)}><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#" onClick={() => this.cutAndShift(elem, i)}><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#" onClick={() => this.insertfieldsToCopy(elem, i)}><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
                                <li><a href="#" onClick={this.props.deleteField.bind(null, fields, fieldsToCopy, groupLevelOneKey, groupLevelTwoKey, elem, i)}><i className="fa-margin fa fa-times" aria-hidden="true"></i> Element löschen</a></li>
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
                            <button onClick={this.props.markFieldToCopy.bind(null, fields, fieldsToCopy, groupLevelOneKey, groupLevelTwoKey, elem, i)} id={buttonId} type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#" onClick={() => this.createNewField(elem, i)}><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#" onClick={() => this.cutAndShift(elem, i)}><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#" onClick={() => this.insertfieldsToCopy(elem, i)}><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
                                <li><a href="#" onClick={this.props.deleteField.bind(null, fields, fieldsToCopy, groupLevelOneKey, groupLevelTwoKey, elem, i)}><i className="fa-margin fa fa-times" aria-hidden="true"></i> Element löschen</a></li>
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
