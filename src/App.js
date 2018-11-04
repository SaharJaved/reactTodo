import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  TodoList  from './components/TodoList'
import 'antd/dist/antd.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  convertToLastName() {
    
  }

  render() {
    return (
      <div>
        <TodoList/>
      </div>
    );
  }
}
export default App;
