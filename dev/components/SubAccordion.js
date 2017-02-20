import React, { Component } from 'react';
import { render } from 'react-dom';
import AccordionSection from './AccordionSection';

class SubAccordion extends Component {

  constructor(props) {
    super(props);

    this.click = this.click.bind(this);

    this.state = {
      jsonData: this.props.store.jsonData.jsonData,
      subAccordionItems: [],
      fields: this.props.store.jsonData.jsonData.fields
    };
  }

  componentWillMount() {
    let subAccordion = [];

    this.props.elem.content.forEach((j) => {
      subAccordion.push({
        key: j.key,
        title: j.title,
        content: j.content,
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

  componentDidMount() {

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
                  let groupOneKey = this.props.elem.key,
                      groupTwoKey = elem.key,
                      fieldGroup,
                      fieldsPerGroups = [];

                  fieldGroup = groupOneKey + '|' + groupTwoKey;

                  this.props.fieldsPerGroup.map((field, k) => {
                    if (field.hasOwnProperty('group') && field.group === fieldGroup) {
                      fieldsPerGroups.push(field);
                    }
                  });

                  return (
                    <div key={j}>
                      <div className="group-bar-level-one"><AccordionSection {...this.props} click={this.click} groupTwo={j} groupOne={this.props.groupOne} elem={elem} fieldsPerGroups={fieldsPerGroups}/></div>
                      <div className="group-buttons-level-one">
                        <div className="btn-group-vertical" role="group" aria-label="edit">
                          <button type="button" className="btn btn-default btn-xs">
                            <i className="fa fa-check" aria-hidden="true"></i>
                          </button>
                          <button type="button" className="btn btn-default btn-xs">
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                          </button>
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