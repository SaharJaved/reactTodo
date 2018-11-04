import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputTodo extends Component {
  constructor(props) {
    super();
    this.state = {
      input: { title: '', priority: '',id:0 },



    };
    this.changeInput = this.changeInput.bind(this);

  }
  //not working properly
  // static getDerivedStateFromProps(nextProps, prevState){
  //   console.log('getDerved',nextProps)
  //   return {input:nextProps.index}
  // }

  changeInput(ev) {
    console.log('changer', ev.target.name)
    this.state.input[ev.target.name] = ev.target.value

    this.setState({
      input: this.state.input
    })
    console.log(this.state.input)
  }

  addEditTodo() {

    this.props.addTodo(this.state.input);

    this.setState({
      input: ""
    })
  }
  searchTodo() {
    this.props.searchTodo(this.state.input)
  }
  sortTodo(priority) {
    this.props.sortTodo(priority)

  }
  render() {
    return (
      <div style={{ margin: 10 }}>
        <span style={{ display: 'flex' }}>
          <input
            value={this.state.input.title || this.props.index.title}
            placeholder="title"
            onChange={this.changeInput}
            name="title"

          />
  <select class="input-field" name="priority" 
            value={this.state.input.priority || this.props.index.priority}
            onChange={this.changeInput} class="browser-default input-field">
    <option value="" disabled selected>Choose your option</option>
    <option value="high">high</option>
    <option value="low">low</option>
  </select> 

          <a style={{ margin: 33 }} className="fa fa-arrow-up" onClick={() => { this.sortTodo('high') }}></a>
          <a style={{ margin: 33 }} className="fa fa-arrow-down" onClick={() => { this.sortTodo('low') }}></a>
        </span>
        <a style={{ margin: 5}} className="waves-effect waves-light btn" onClick={() => { this.addEditTodo() }}>
          {this.props.btnText} </a>
        <a className="waves-effect waves-light btn" onClick={() => { this.searchTodo() }}>
          Search</a>

      </div>
    );
  }
}

