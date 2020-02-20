import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Result from '../Result/Result';
import Saved from '../Saved/Saved';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <div className="resultContainer">
          <Result />
          <Saved />
        </div>
      </div>
    );
  }
}

export default Main;
