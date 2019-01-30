import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Todolist} from './Todolist';
import {TodoApp} from './TodoApp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            TODO React App
          </p>
          <TodoApp/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>

        </header>
      </div>
    );
  }
}

export default App;
