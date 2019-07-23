import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Todolist extends Component {

  render() {
    console.log(this.props)
    
    const todoContent = this.props.todolist.map(todos => {
        return (
          <div className="card-body" key={todos.todoid}>
            <div>
              {" "}
              <Link to={'/' + todos.todoid}>
              <h6
                onClick={() => {
                  this.props.deletetodo(todos.todoid);
                }}
                className="alert alert-secondary todo-center"
              >
                {todos.task}
                <span className="badge badge-secondary">New</span>
              </h6>
              </Link>
            </div>
          </div>
        );
      })
    // ) : (
    //   <h3>No todo, please add on todo-box below</h3>
    // );
    return <div className="card">{todoContent}</div>;
  }
}

export default Todolist;
