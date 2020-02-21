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
          onChange={this.handleChange}
          type="range"
          step="1"
          min={this.props.min}
          max={this.props.max}
          value={this.props.count}
          className="sliderInput"
        />
        <WordCounter maxWords={this.props.count} />
      </div>
    );
  }
}

Slider.defaultProps = {
  min: 1,
  max: 30
};

export default Slider;
