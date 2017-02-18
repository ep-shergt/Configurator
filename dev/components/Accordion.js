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
          {this.state.accordionItems.map((elem, i) => {
            return (
              <div key={i}>
                <div className="group-bar-level-one"><SubAccordion {...this.props} click={this.click} groupOne={i} elem={elem}/></div>
                <div className="group-buttons-level-one">
                  <div className="btn-group-vertical" role="group" aria-label="edit">
                    <button type="button" className="btn btn-default btn-xs">
                      <i className="fa fa-times" aria-hidden="true"></i>
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
    );
  };
}

export default Accordion;