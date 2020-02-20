import React from 'react';
import './AddRemove.css';

class AddRemove extends React.Component {
  render() {
    return (
      <div className="AddRemove">
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

export default AddRemove;
