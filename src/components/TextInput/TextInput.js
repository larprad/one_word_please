import React from 'react';
import './TextInput.css';

class TextInput extends React.Component {
  render() {
    return (
      <div className="TextInput">
        <input type="text" placeholder="" />
      </div>
    );
  }
}

export default TextInput;
