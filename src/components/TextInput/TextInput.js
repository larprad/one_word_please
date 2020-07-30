import React from 'react';
import './TextInput.css';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.setInput(e.target.value);
  }
  render() {
    return (
      <div className="TextInput">
        <input onChange={this.handleChange} type="text" placeholder="Write a word here" />
      </div>
    );
  }
}

export default TextInput;
