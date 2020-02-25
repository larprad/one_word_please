import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Result from "../Result/Result";
import Saved from "../Saved/Saved";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Header setInput={this.props.setInput} />
        <div className="resultContainer">
          <Result
            saveWord={this.props.saveWord}
            results={this.props.results}
            load={this.props.load}
          />
          <Saved removeWord={this.props.removeWord} saved={this.props.saved} />
        </div>
      </div>
    );
  }
}

export default Main;
