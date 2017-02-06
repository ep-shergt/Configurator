import React, { Component } from 'react';
import { render } from 'react-dom';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import Constants from './Constants';

class Dropzone extends Component {

  constructor(props) {
    super(props);

    this.generateTable = this.generateTable.bind(this);
    this.addCell = this.addCell.bind(this);

    //getinitialState
    this.state = {
  		dndMatrix: [6,6,6,6,6,6,6,6,6,6]
    };
  }

  addCell(event) {
    var buttonIDNumber = event.target.id.slice(3,4),
        targetRow = document.getElementById("row" + buttonIDNumber),
        newCell = targetRow.insertCell(0);

    console.log(newCell);
  }

  removeCell(event) {
    var buttonIDNumber = event.target.id.slice(6,7),
        targetRow = document.getElementById("row" + buttonIDNumber);

    targetRow.deleteCell(0);

    console.log('clicko');
  }

  generateTable() {
    var dropZoneTableNode = '<table><tbody>';

    for (var i = 0; i < this.state.dndMatrix.length; i++) {

      dropZoneTableNode += "<tr id=row" + i + ">";

      for (var j = 0; j < this.state.dndMatrix[j]; j++) {
        dropZoneTableNode += "<td align='center' class='dropZone'></td>"                    
      }
      dropZoneTableNode += "<td class='special'><button id=add" + i + " type='button' class='left-margin10 btn btn-success btn-xs'><span class='glyphicon glyphicon-ok'></span></button>" + 
                      "<button id=remove" + i + " type='button' class='left-margin10 btn btn-danger btn-xs'><span class='glyphicon glyphicon-remove'></span></button></td></tr>";
    }

    // end the table 
    dropZoneTableNode += "</tbody></table>";

    // attach table string to component
    $('#dropZoneTableNode').append(dropZoneTableNode);
    console.log(dropZoneTableNode);

  }

  componentDidMount() {
    this.generateTable();

    for (var i = 0; i < this.state.dndMatrix.length; i++) {
       $('#add' + i).on("click", this.addCell);
       $('#remove' + i).on("click", this.removeCell);
    }
  }

  render() {
    return (
      <div>
        <div className="padding10">Dropzone Areas</div>
        <div id="dropZoneTableNode"></div>
      </div>
    );
  };
}

export default Dropzone;