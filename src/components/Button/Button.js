import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
    this.toggleState = this.toggleState.bind(this);
  }
  toggleState() {
    this.state.active === true
      ? this.setState({ active: false })
      : this.setState({ active: true });
  }
  getStyleClass() {
    if (this.state.active) {
      return 'disabled';
    } else {
      return '';
    }
  }
  render() {
    return (
      <div className="Button" onClick={this.toggleState}>
        <h3 className={'ButtonText ' + this.getStyleClass()}>
          {this.props.text}
        </h3>
        <div className="ButtonState"></div>
      </div>
    );
  }
}

Button.defaultProps = { text: 'Template' };

export default Button;
