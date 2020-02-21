import React from 'react';
import './Saved.css';
import Cell from '../Cell/Cell';

class Saved extends React.Component {
  makeSaved() {
    return this.props.saved.map(x => (
      <Cell removeWord={this.props.removeWord} type="saved" key={x} text={x} />
    ));
  }
  render() {
    return (
      <div className="Saved">
        <h2 className="savedTitle">Saved</h2>
        <div className="cellContainer flexCenter">{this.makeSaved()}</div>
      </div>
    );
  }
}

export default Saved;
