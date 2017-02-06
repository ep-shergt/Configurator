import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const textAreaSource = {
	beginDrag(props) {
		return {};
	}
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
} 

class ElementsBar extends Component {

  constructor(props) {
    super(props);

    //getinitialState
    this.state = {
  
    };
  }

  render() {
  	const { connectDragSource, isDragging } = this.props;
  	return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        <input type="checkbox" name="checkbox" />
      </div>
    );
  };
}

ElementsBar.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.TEXTAREA, textAreaSource, collect)(ElementsBar);