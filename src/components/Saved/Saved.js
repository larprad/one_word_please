import React from 'react';
import './Saved.css';
import Cell from '../Cell/Cell';

class Saved extends React.Component {
  render() {
    return (
      <div className="Saved">
        <h2 className="savedTitle">Saved</h2>
        <div className="cellContainer flexCenter">
          <Cell text="-" />
        </div>
      </div>
    );
  }
}

export default Saved;
