import React, { Component } from "react";
import { render } from "react-dom";
import Field from "./Field";
import { extractContent } from './../helpers';

// stateless functional component

class AccordionSection extends Component {

  constructor(props) {
    super(props);

    this.deleteField = this.deleteField.bind(this);

    this.state = {
      jsonData: this.props.store.jsonData.jsonData,
      fields: this.props.fieldsPerGroups
    };
  }

  componentWillMount() {
    
  }

  deleteField(elem, index){
      let newJSON = {...this.state.jsonData},
        newFields = [];

      newFields = [...newJSON.fields.slice(0,index), ...newJSON.fields.slice(index+1)];
      newJSON.fields = newFields;

      console.log(newFields);

      this.setState({
        jsonData: newJSON,
        fields: [...this.state.fields.slice(0,index), ...this.state.fields.slice(index+1)]
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
              let fieldId = 'field_' + i;

              switch (true) {
                case elem.clearBefore && elem.clearAfter:
                  return (
                    <div key={i} id={fieldId} className="clear-both">
                      <ul className="field-ul">
                        <li className="field-li"><Field field={elem}></Field></li>
                        <li className="field-li">
                          <div className="btn-group-vertical li-div" role="group" aria-label="edit">
                            <button type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#"><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#"><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#"><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
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
                            <button type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#"><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#"><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#"><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
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
                            <button type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#"><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#"><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#"><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
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
                            <button type="button" className="btn btn-default btn-xs">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown">
                              <button type="button" className="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li><a href="#"><i className="fa-margin fa fa-plus" aria-hidden="true"></i> Neues Element anlegen</a></li>
                                <li><a href="#"><i className="fa-margin fa fa-scissors" aria-hidden="true"></i> Ausschneiden und verschieben</a></li>
                                <li><a href="#"><i className="fa-margin fa fa-arrow-down" aria-hidden="true"></i> Aus Zwischenablage einfügen</a></li>
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
