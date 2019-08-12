import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../../index.css';

class Todolist extends Component {

  render() {
    
    const todoContent = this.props.todolist.map(todos => {
        return (
          <div className="card-body" key={todos.id}>
            <div>
              <Link to={ '/' + todos.id }>
              <h6 className="alert alert-secondary todo-center">
                {todos.task}
              </h6>
              </Link>
            </div>
          </div>
        );
      })
    return <div className="card">{todoContent}</div>;
  }
}

export default Todolist;
