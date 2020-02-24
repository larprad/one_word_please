import React from 'react';
import './Slider.css';
import WordCounter from '../WordCounter/WordCounter';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.setCount(e.target.value);
  }

  render() {
    return (
      <div className="Slider">
        <input
          type="range"
          className="sliderInput"
          step="1"
          onChange={this.handleChange}
          min={this.props.min}
          max={this.props.max}
          value={this.props.count}
        />
        <WordCounter maxWords={this.props.count} />
      </div>
    );
  }
}

Slider.defaultProps = {
  min: 1,
  max: 25
};

export default Slider;
