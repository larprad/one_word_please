import React from 'react';
import './Header.css';
import TextInput from '../TextInput/TextInput';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="title">
          <h1>One</h1>
          <h1>&nbsp;&nbsp;&nbsp;Word</h1>
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please</h1>
        </div>
        <TextInput setInput={this.props.setInput} />
      </div>
    );
  }
}

export default Header;
