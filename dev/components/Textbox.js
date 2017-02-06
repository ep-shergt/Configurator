import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Textbox extends Component {

  constructor(props) {
    super(props);

    this.saveTextAsFile = this.saveTextAsFile.bind(this);
    this.destroyClickedElement = this.destroyClickedElement.bind(this);
    this.loadFileAsText = this.loadFileAsText.bind(this);

    //getinitialState
    this.state = {
      contentText: "Lorem Ipsum"
    };
  }

  saveTextAsFile(event) {
      var textToSave = document.getElementById("mainArea").value,
          textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"}),
          textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob),
          fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value,
          downloadLink = document.createElement("a");

      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "Download File";
      downloadLink.href = textToSaveAsURL;
      downloadLink.onclick = this.destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
   
      downloadLink.click();
  }
 
  destroyClickedElement(event) {
      document.body.removeChild(event.target);
  }
 
  loadFileAsText(event) {
      var fileToLoad = document.getElementById("fileToLoad").files[0],
          fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent)  {
          var textFromFileLoaded = fileLoadedEvent.target.result;

          document.getElementById("mainArea").value = textFromFileLoaded;
      };
      
      fileReader.readAsText(fileToLoad, "UTF-8");
  }

  componentDidMount() {
    $('#mainArea').val(JSON.stringify(this.state.contentText, null, 2));
  }


  render() {
    return (
      <div>  
        <div>Text to Save:</div>
        <textarea id="mainArea" className={this.props.geometry}></textarea>     
            <div>Filename to Save As:</div>
            <input type="text" id="inputFileNameToSaveAs" />
            <input type="button" onClick={(e) => this.saveTextAsFile(e)} value="Save Text to File"/>
            <div>Select a File to Load:</div>
            <input type="file" id="fileToLoad" />
            <input type="button" onClick={(e) => this.loadFileAsText(e)} value="Load Selected File"/>     
      </div>
    );
  };
}