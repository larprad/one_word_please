import React from 'react';
import './WordCounter.css';

class WordCounter extends React.Component {
  render() {
    return (
      <div className="WordCounter">
        <h4>max words: &nbsp; </h4>
        <h4> {this.props.maxWords} </h4>
      </div>
    );
  }
}

export default WordCounter;
