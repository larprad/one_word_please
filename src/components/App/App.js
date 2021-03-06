import React from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import { init } from '../../config/init';

// onewordplease.surge.sh

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: init.getInitValues(),
      input: '',
      results: [],
      saved: [],
      loading: false,
      count: init.defaultCount,
    };
    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.removeSearchTerm = this.removeSearchTerm.bind(this);
    this.setCount = this.setCount.bind(this);
    this.setInput = this.setInput.bind(this);
    this.saveWord = this.saveWord.bind(this);
    this.removeWord = this.removeWord.bind(this);
  }
  setInput(input) {
    this.setState({ input: input }, () => this.search());
  }
  setCount(count) {
    this.setState({ count: count }, () => this.search());
  }
  setSearchTerm(term) {
    const updatedTerm = this.state.searchTerms;
    updatedTerm.push(term);
    this.setState({ searchTerms: updatedTerm }, () => this.search());
  }
  removeSearchTerm(term) {
    const filtered = this.state.searchTerms.filter((x) => !(x === term));
    this.setState({ searchTerms: filtered }, () => this.search());
  }
  buildRequest() {
    let request = 'https://cors-anywhere.herokuapp.com/https://api.datamuse.com/words?';
    request +=
      this.state.searchTerms
        .map((x, index) => {
          if (index === 0) {
            return x + this.state.input;
          } else {
            return '&' + x + this.state.input;
          }
        })
        .join('') +
      '&max=' +
      this.state.count;
    return request;
  }
  search() {
    this.setState({ loading: true });
    fetch(this.buildRequest())
      .then((response) => {
        console.log(response);
        if (response.status === 429) {
          this.setState({ results: [], loading: false });
          alert('Too many requests, please wait a bit.');
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        this.setState({ results: response, loading: false });
      })
      .catch((e) => new Error(e.message));
  }
  saveWord(word) {
    let tmpSave = this.state.saved;
    if (!tmpSave.includes(word)) {
      tmpSave.push(word);
    }
    this.setState({ saved: tmpSave });
  }
  removeWord(word) {
    let tmpRemove = this.state.saved;
    const filtered = tmpRemove.filter((x) => !(x === word));
    this.setState({ saved: filtered });
  }
  render() {
    return (
      <div className="App">
        <Sidebar
          buttons={init.buttons}
          search={this.search}
          setTerm={this.setSearchTerm}
          removeTerm={this.removeSearchTerm}
          setCount={this.setCount}
          count={this.state.count}
          setInput={this.setInput}
        />
        <Main
          saveWord={this.saveWord}
          removeWord={this.removeWord}
          saved={this.state.saved}
          results={this.state.results}
          setInput={this.setInput}
          load={this.state.loading}
          input={this.state.input}
        />
      </div>
    );
  }
}

export default App;
