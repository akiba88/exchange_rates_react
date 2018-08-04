import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PATH = 'http://localhost:3000/api/currencies';

class App extends Component {
  state = {};

  componentDidMount() {
    this.getData()
    setInterval(
      () => this.getData()
      , 10000
    )
  }

  getData() {
    fetch(PATH)
      .then(result => result.json())
      .then(data => this.setState({ data }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <table className='currenciesList'>
            <tbody>
              {
                this.state.data && this.state.data.collection.map(
                  item=><tr key={item.parent_code}><td>{item.char_code}: </td><td>{item.value}</td></tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
