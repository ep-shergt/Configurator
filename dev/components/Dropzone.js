import React, { Component } from 'react';
import { render } from 'react-dom';

class Dropzone extends Component {

  constructor(props) {
    super(props);

    this.duplicateElement = this.duplicateElement.bind(this);
    this.updateField = this.updateField.bind(this);
    this.createRadioElement = this.createRadioElement.bind(this);


    this.state = {
      field: this.props.field
    };
  }

  duplicateElement(event) {
    console.log('dupliziere');
  }

  createRadioElement(name, value, checked) {
    let radioHtml = '<input type="radio" name="' + name + '" value="' + value + '"',
    		radioFragment = document.createElement('div');

    if ( checked ) {
        radioHtml += ' checked="checked"';
    }

    radioHtml += '/>';
    radioFragment.innerHTML = radioHtml;

    return radioFragment.firstChild;
	}

  updateField(newField) {
    let field = {...this.state.field};
    field = newfield;
    this.setState({ field: field});
	}

  componentDidMount() {
    const type = this.state.field.type,
          typeId = type + "_" + this.props.i,
          title = this.state.field.title,
          options = this.state.field.parameters.options;

    $('.dropdown-toggle').dropdown();
    $('#' + typeId).html(title);

		switch (type) {
      case "select":    
	      const selectValues = options.map((element, i) => element.value),
	            select = document.createElement('select'),
	            selectId = "select" + this.props.i;

	      for (let i = 0; i < selectValues.length; i++) { 
	          let new_option_element = new Option(selectValues[i], selectValues[i]);
	          select.appendChild(new_option_element);
	      }
	      document.getElementById(selectId).appendChild(select);
	      break;

      case "radio":
        const radioId = "radio" + this.props.i,
	    				radioTitles = options.map((element, i) => element.title),
	    				radioValues = options.map((element, i) => element.value);

	    	for(let i = 0; i < radioTitles.length; i++) {
	    		const radio = this.createRadioElement(this.state.field.key, radioValues[i], false),
	    		      newRadio = document.getElementById(radioId).appendChild(radio),
	    		      pTag = document.createElement('span'),
	    		      text = document.createTextNode(radioValues[i]);

	    		pTag.setAttribute("class", "radio-values");
	    		pTag.appendChild(text);
	    		document.getElementById(radioId).appendChild(pTag);
	    	}
	    	break;

	    /*case "check":
	    	const checkId = "check" + this.props.i,
	    				checkTitles = options.map((element, i) => element.title),
	    				checkValues = options.map((element, i) => element.value);
	    	
	    	for(let i = 0; i < checkTitles.length; i++) {
	    		const check = this.createCheckElement(this.state.field.key, checkValues[i], false),
	    		      newCheck = document.getElementById(radioId).appendChild(check),
	    		      pTag2 = document.createElement('span'),
	    		      text2 = document.createTextNode(checkValues[i]);

	    		pTag2.setAttribute("class", "check-values");
	    		pTag2.appendChild(text2);
	    		document.getElementById(checkId).appendChild(pTag2);
	    	}	
	    	break;*/
    } 
  }

  render() {
    const type = this.state.field.type,
          typeId = type + "_" + this.props.i;

    let controlElement;

     const controlElementId = type + this.props.i;
     controlElement = <span id={controlElementId} className="drop-node"></span>;

    return (
      <div className="dropZoneTableNode">
        <div id="a1" className="btn-group align-with-tag">
          <button className="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Steuerelement <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Inputtext</a></li>
            <li><a href="#">Textbox</a></li>
            <li><a href="#">Radiobutton</a></li>
            <li><a href="#">Checkbox</a></li>
            <li><a href="#">Code</a></li>
          </ul>
        </div>
        <div className="drop-node-wrapper">
          <div id={typeId} ></div>
          {controlElement}
          <ul className="button-list">
            <li><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></li>
            <li>
              <span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true" 
                    onClick={(e) => this.duplicateElement(e)}>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
}

export default Dropzone;
