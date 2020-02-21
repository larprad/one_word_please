import React from 'react';
import './Result.css';
import Cell from '../Cell/Cell';

class Result extends React.Component {
  makeResults() {
    return this.props.results.map(x => (
      <Cell
        saveWord={this.props.saveWord}
        type="result"
        key={x.word}
        text={x.word}
      />
    ));
  }
  render() {
    return (
      <div className="Result">
        <h2 className="resultTitle">Results</h2>
        <div className="cellContainer flexCenter">{this.makeResults()}</div>
      </div>
    );
  }
}

export default Result;
