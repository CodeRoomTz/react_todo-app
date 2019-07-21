import React, { Component } from 'react';
import Todolist from './Todolist';
import Addtodo from './Addtodo';

class TodoApp extends Component {
    state = {
        todos: [
          { task: "Learn pythagorous", todoid: 1 },
          { task: "running early in morning", todoid: 2 },
          { task: "create mashine-learning tutorial", todoid: 3 }
        ]
      };


    //<----------function start here------------>
  handleAddtodo = todo => { 
    let todoid = Math.random();
    let todos = {
      task: todo,
      todoid: todoid
    };
    let todoitem = [todos, ...this.state.todos];

    this.setState({
      todos: todoitem
    });
  };
  handledelete = id => {
    const remaintodos = this.state.todos.filter(todo => {
      return id !== todo.todoid;
    });

    this.setState({
      todos: remaintodos
    });
  };
//<--------function end here----------->


    render() { 
        console.log(this.state.todos);
        return ( <div>
            <div>
          <Todolist
            todolist={this.state.todos}
            deletetodo={this.handledelete}
            />
        </div>
        <div>
          <Addtodo addtodo={this.handleAddtodo} />
        </div>
      
        </div> );
    }
}
 
export default TodoApp;