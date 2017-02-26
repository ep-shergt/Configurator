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
      jsonData: this.props.store.database.jsonData
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
          fileReader = new FileReader(),
          jsonData,
          self = this;

      fileReader.onload = function(fileLoadedEvent)  {
          var textFromFileLoaded = fileLoadedEvent.target.result;

          document.getElementById("mainArea").value = textFromFileLoaded;
          jsonData = JSON.parse(JSON.stringify(eval("(" + textFromFileLoaded + ")")));

          self.setState({
            jsonData
          });
          self.props.changeJSON(self.state.jsonData);
      };
      fileReader.readAsText(fileToLoad, "UTF-8");
  }

  handleChange(event){
    let jsonData = JSON.parse(JSON.stringify(eval("(" + event.target.value + ")")));
    this.setState({
      jsonData
    });
  }

  componentDidMount() {
    $('#mainArea').val(JSON.stringify(this.state.jsonData, null, 2));
  }

  componentWillReceiveProps(nextProps) {
    let newJsonData = nextProps.store.database.jsonData,
        jsonData = {...this.state.jsonData};

    jsonData = newJsonData;

    this.setState({
      jsonData
    });
  }


  render() {
    return (
      <div className="margin-around">  
        <div>Text to Save</div>
        <textarea id="mainArea" className="jsonbox" onChange={this.handleChange.bind(this)}></textarea>     
            <div>Filename to Save As:</div>
            <input type="text" id="inputFileNameToSaveAs" />
            <input type="button" onClick={(e) => this.saveTextAsFile(e)} value="Save Text to File"/>
            <div>Select a File to Load:</div>
            <input type="file" id="fileToLoad" />
            <input type="button" onClick={(e) => this.loadFileAsText(e)} value="Load Selected File"/>
            <input type="button" onClick={this.props.changeJSON.bind(null, this.state.jsonData)} value="Update JSON data"/>     
      </div>
    );
  };
}