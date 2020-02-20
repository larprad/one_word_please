import React from 'react';
import './Sidebar.css';
import Button from '../Button/Button';
import Slider from '../Slider/Slider';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="Sidebar">
        <h2 className="sidebarTitle">Options</h2>
        <div className="buttonContainer">
          <Button />
          <Button />
          <Button />
          <Button />
          <Slider />
        </div>
      </div>
    );
  }
}

export default Sidebar;
