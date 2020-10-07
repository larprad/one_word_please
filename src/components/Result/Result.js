import React from 'react';
import './Result.css';
import Cell from '../Cell/Cell';
import oops from './oops.png';

class Result extends React.Component {
  isLoading() {
    if (this.props.load) {
      return <div className="loading_ON"></div>;
    }
  }
  makeResults() {
    if (this.props.results.length === 0 && !this.props.load && this.props.input) {
      console.log('Oh hello');
      return (
        <div>
          <img id="oops" src={oops} alt="nothing found"></img>
        </div>
      );
    } else {
      return this.props.results.map((x) => (
        <Cell saveWord={this.props.saveWord} type="result" key={x.word} text={x.word} />
      ));
    }
  }
  render() {
    return (
      <div className="Result">
        <h2 className="resultTitle">Results</h2>
        <div className="loadingContainer flexCenter">{this.isLoading()}</div>
        <div className="cellContainer flexCenter">{this.makeResults()}</div>
      </div>
    );
  }
}

export default Result;
