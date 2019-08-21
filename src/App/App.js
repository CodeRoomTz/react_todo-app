import React, { Component } from 'react';
import Addtodo from './Component/Addtodo';
import Todolist from './Component/Todolist';
import Todo from './Component/Todo';
import '../index.css';

class TodoApp extends Component {
    state = {
        todos: [
          { id: 1, task: "Learn pythagorous", 
          content: `Lorem It successfully distinguishes the different 
          concerns that classes are used for. And it’s easy to see in 
          the markup which classes are related to one another.` },
          { id: 2, task: "running early in morning", 
          content: `Lorem It successfully distinguishes the different 
          concerns that classes are used for. And it’s easy to see in 
          the markup which classes are related to one another.`},
          { id: 3, task: "create mashine-learning tutorial",
          content: `Lorem It successfully distinguishes the different 
          concerns that classes are used for. And it’s easy to see in 
          the markup which classes are related to one another.`}
        ]
      };


    //<----------function start here------------>
  handleAddtodo = todo => { 
    console.log(todo)
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
  
  // handledelete = id => {
  //   const remaintodos = this.state.todos.filter(todo => {
  //     return id !== todo.todoid;
  //   });

  //   this.setState({
  //     todos: remaintodos
  //   });
  // };
//<--------function end here----------->


    render() { 
        return ( <div>
          <div>
          <Todolist todolist={this.state.todos} />
        </div>
        <div>
          <Addtodo addtodo={this.handleAddtodo} />
        </div>
      
        </div> );
    }
}
 
export default TodoApp;