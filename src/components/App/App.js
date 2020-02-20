import React from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
