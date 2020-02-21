import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: this.props.active, value: this.props.value };
    this.handleClick = this.handleClick.bind(this);
  }
  getStyleClass() {
    if (this.state.active) {
      return '';
    } else {
      return 'disabled';
    }
  }
  handleClick() {
    if (this.state.active === true) {
      this.setState({ active: false });
      this.props.removeTerm(this.state.value);
    } else {
      this.setState({ active: true });
      this.props.setTerm(this.state.value);
    }
  }
  render() {
    return (
      <div className="Button" onClick={this.handleClick}>
        <h3 className={'ButtonText ' + this.getStyleClass()}>
          {this.props.text}
        </h3>
        <div className={'ButtonState flexCenter ' + this.getStyleClass()}>
          <h3>{this.state.active === true ? 'ON' : 'OFF'}</h3>
        </div>
      </div>
    );
  }
}

Button.defaultProps = { text: 'Template' };

export default Button;
