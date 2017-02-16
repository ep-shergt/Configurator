import React, { Component } from 'react';
import { render } from 'react-dom';
import AccordionSection from './AccordionSection';

class SubAccordion extends Component {

  constructor(props) {
    super(props);

    this.click = this.click.bind(this);

    this.state = {
      jsonData: this.props.store.jsonData.jsonData,
      subAccordionItems: []
    };
  }

  componentWillMount() {
    let subAccordion = [];

    this.props.elem.content.forEach((i) => {
      subAccordion.push({
        title: i.title,
        content: i.content,
        open: false
      });
    });

    this.setState({
      subAccordionItems: subAccordion
    });
  }

  click(event, i) {
    console.log(i);
    const newSubAccordion = this.state.subAccordionItems.slice();
    console.log('newsubacc: ', newSubAccordion);

    newSubAccordion[i].open = !newSubAccordion[i].open;
    this.setState({
      subAccordionItems: newSubAccordion
    });
  }

  componentDidMount() {
    console.log(this.state)
  }

  render() {
    const cont = this.props.elem;
    console.log('elem: ', this.props.elem);
    console.log('items: ', this.state.subAccordionItems);

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
            : "content-text"}>
            <div>
              <div>
                {this.state.subAccordionItems.map((elem, i) =>
                 <AccordionSection {...this.props} click={this.click} key={i} i={i} elem={elem}/>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default SubAccordion;