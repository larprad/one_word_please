import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <div className="Button">
        <h3 className="ButtonText">{this.props.text}</h3>
        <div className="ButtonState"></div>
      </div>
    );
  }
}

Button.defaultProps = { text: 'Template' };

export default Button;
