import React, { Component } from "react";
import Axios from "axios";

class Todolist extends Component {
  state = {
    todos: []
  };
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      console.log(res);
      this.setState({
        todos: res.data.slice(0, 5)
      });
    });
  }
  render() {
    const { todos } = this.state;
    const todoContent = todos.length ? (
      todos.map(todos => {
        return (
          <div className="card-body" key={todos.id}>
            <div>
              {" "}
              <h6
                onClick={() => {
                  this.props.deletetodo(todos.todoid);
                }}
                className="alert alert-secondary todo-center"
              >
                {todos.title}
                <span className="badge badge-secondary">New</span>
              </h6>
            </div>
          </div>
        );
      })
    ) : (
      <h3>No todo, please add on todo-box below</h3>
    );
    return <div className="card">{todoContent}</div>;
  }
}

export default Todolist;
