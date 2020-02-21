import React from 'react';
import './Cell.css';
import AddRemove from '../AddRemove/AddRemove';

class Cell extends React.Component {
  setStyle() {
    return this.props.type === 'saved' ? 'saved' : 'result';
  }
  render() {
    return (
      <div className={'Cell ' + this.setStyle()}>
        <h3 className="cellText">{this.props.text}</h3>
        <AddRemove
          word={this.props.text}
          saveWord={
            this.props.type === 'saved'
              ? this.props.removeWord
              : this.props.saveWord
          }
          text={this.props.type === 'saved' ? '-' : '+'}
        />
      </div>
    );
  }
}

export default Cell;
