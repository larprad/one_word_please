import React from 'react';
import './AddRemove.css';

class AddRemove extends React.Component {
  handleClick() {
    this.props.saveWord(this.props.word);
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)} className="AddRemove">
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

export default AddRemove;
