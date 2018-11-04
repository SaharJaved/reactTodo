import React, { Component } from 'react';
import { render } from 'react-dom';
import SingleTodo from './SingleTodo';
import InputTodo from './InputTodo';

export default class TodoList extends Component {
  constructor(props) {
    super();
    this.state = {
      btnText: 'Add',
      index: '',
      todos: [{

        title: "Fast1", priority: 'high'
      }, {
        title: "Fast2", priority: 'low'
      }, {
        title: "Fast3", priority: 'high'
      }, {
        title: "Fast4", priority: 'low'
      }]
    };
  }

  addTodo(data) {
    console.log('c', data)
    let oldTodos = this.state.todos;
    if (this.state.index) {
      oldTodos[oldTodos.indexOf(this.state.index)] = data; 
      
      this.setState({ index: '', btnText: 'Add' })
    }
    else {
    
      oldTodos.push(
        data
      );
    }
    this.setState({
      todos: oldTodos
    })
  }

  deleteTodo(todo) {
    console.log(todo)
    let oldTodos = this.state.todos;
    oldTodos.splice(oldTodos.indexOf(todo), 1)
    this.setState({
      todos: oldTodos
    })
  }
  editTodo(todo) {
    this.setState({
      index: todo,
      btnText: 'Update'
    })
    console.log('todo', todo)

  }
  searchTodo(title) {
    console.log(title)
    let oldTodos = this.state.todos;
    let index;
    oldTodos.some((todo, i) => {
      if (todo.title === title) {
        return index = i
      }

    })
    console.log(index)
    if (index == undefined) {

      return
    }
    let searchedTodo = []
    searchedTodo.push(oldTodos[index])
    console.log(searchedTodo)
    this.setState({
      todos: searchedTodo
    })

  }
  sortTodo(priority) {
    let oldTodos = this.state.todos;
    console.log('p', priority)
    if (priority == 'high') { oldTodos.sort(function (a, b) { return (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0); }); }
    else {
      oldTodos.sort(function (a, b) { return (a.priority < b.priority) ? 1 : ((b.priority < a.priority) ? -1 : 0); });
    }
    console.log(oldTodos)
    this.setState({
      todos: oldTodos
    })
  }

  render() {
    return (
      <div>
        <InputTodo btnText={this.state.btnText} index={this.state.index} addTodo={(ev) => { this.addTodo(ev) }} searchTodo={(ev) => { this.searchTodo(ev) }} sortTodo={(ev) => { this.sortTodo(ev) }} />
        {this.state.todos.map((todo, i) => <SingleTodo todo={todo} key={i} deleteTodo={(ev) => { this.deleteTodo(todo) }} editTodo={(ev) => { this.editTodo(todo) }} />)}
      </div>
    );
  }
}

