import React, { Component } from "react";
import { render } from "react-dom";

// stateless functional component

class AccordionSection extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div 
          className="title" 
          onClick={(e) => this.props.click(e, this.props.i)}
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
          > {this.props.elem.content}
          </div>
        </div>
      </div>
    );
  };   
 }

export default AccordionSection;
