import React from 'react';
import './Sidebar.css';
import Button from '../Button/Button';
import Slider from '../Slider/Slider';

class Sidebar extends React.Component {
  makeButtons() {
    return this.props.buttons.map(x => (
      <Button
        key={x.name}
        text={x.name}
        active={x.active}
        value={x.value}
        search={this.props.search}
        setTerm={this.props.setTerm}
        removeTerm={this.props.removeTerm}
      />
    ));
  }
  render() {
    return (
      <div className="Sidebar">
        <h2 className="sidebarTitle">Options</h2>
        <div className="buttonContainer">
          {this.makeButtons()}
          <Slider count={this.props.count} setCount={this.props.setCount} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
