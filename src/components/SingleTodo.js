import React, { Component } from 'react';
import { render } from 'react-dom';

export default class SingleTodo extends Component {
  constructor(props) {
    super();
    this.state = {
    };


  }

  convertToLastName() {

  }
  getStyle(status) {
    return {

      color: status === 'high' ? 'red' : 'green'
    }
  }

  render() {
    return (
      <div className="todo" style={{ margin: 10 }} >
        <div className="card todo" style={{ padding: 10 }}>
          <span className="card-title center flex">
            <span> {this.props.todo.title}   </span>
            <span style={this.getStyle(this.props.todo.priority)}> {this.props.todo.priority}</span>
            <span>
              <a style={{padding:9} } className="fa fa-trash-o"
                onClick={this.props.deleteTodo}>
              </a>

              <a className="fa fa-pencil"
              style={{padding:9} }
                onClick={this.props.editTodo}>

              </a>
            </span>
          </span>

        </div>
      </div>
    );
  }
}

