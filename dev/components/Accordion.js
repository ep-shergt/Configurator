import React, { Component } from 'react';
import { render } from 'react-dom';
import SubAccordion from './SubAccordion';

class Accordion extends Component {

  constructor(props) {
    super(props);

    this.click = this.click.bind(this);

    this.state = {
      jsonData: this.props.store.jsonData.jsonData,
      accordionItems: []
    };
  }

  componentWillMount() {
    let accordion = [];

    this.props.data.forEach((i) => {
      accordion.push({
        title: i.title,
        content: i.content,
        open: false
      });
    });

    this.setState({
      accordionItems: accordion
    });
  }

  click(event, i) {
    console.log(i);
    const newAccordion = this.state.accordionItems.slice();

    newAccordion[i].open = !newAccordion[i].open;
    this.setState({
      accordionItems: newAccordion
    });
  }

  componentDidMount() {
    console.log(this.state)
  }

  render() {
    return (
      <div className="accordion">
        <div>
          {this.state.accordionItems.map((elem, i) =>
           <SubAccordion {...this.props} click={this.click} key={i} i={i} elem={elem}/>)}
        </div>
      </div>
    );
  };
}

export default Accordion;