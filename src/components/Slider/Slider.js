import React from 'react';
import './Slider.css';
import WordCounter from '../WordCounter/WordCounter';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 8 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="Slider">
        <input
          onChange={this.handleChange}
          type="range"
          min={this.props.min}
          max={this.props.max}
          value={this.state.value}
          className="sliderInput"
        />
        <WordCounter maxWords={this.state.value} />
      </div>
    );
  }
}

Slider.defaultProps = {
  min: 1,
  max: 30
};

export default Slider;
