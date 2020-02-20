import React from 'react';
import './Cell.css';
import AddRemove from '../AddRemove/AddRemove';

class Cell extends React.Component {
  render() {
    return (
      <div className="Cell">
        <h3 className="cellText">Word</h3>
        <AddRemove text={this.props.text} />
      </div>
    );
  }
}

export default Cell;
