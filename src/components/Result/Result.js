import React from 'react';
import './Result.css';
import Cell from '../Cell/Cell';

class Result extends React.Component {
  isLoading() {
    if(this.props.load) {
      console.log('I am here')
      return (
        <div className="loading_ON">

        </div>

      )
    }
  }
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
        <div className="loadingContainer flexCenter">
            {this.isLoading()}
        </div>
        <div className="cellContainer flexCenter">
            {this.makeResults()}
        </div>
      </div>
    );
  }
}

export default Result;
