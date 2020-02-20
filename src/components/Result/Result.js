import React from 'react';
import './Result.css';
import Cell from '../Cell/Cell';

class Result extends React.Component {
  render() {
    return (
      <div className="Result">
        <h2 className="resultTitle">Results</h2>
        <div className="cellContainer flexCenter">
          <Cell text="+" />
          <Cell text="+" />
          <Cell text="+" />
          <Cell text="+" />
        </div>
      </div>
    );
  }
}

export default Result;
