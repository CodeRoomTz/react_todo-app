import React, { Component } from 'react';
import Todolist from './Component/Todolist';
import Addtodo from './Component/Addtodo'

class  App extends Component {
  state = {
    todos: [
      {task:'Learn pythagorous', todoid:1},
      {task:'running early in morning', todoid:2},
      {task:'create mashine-learning tutorial', todoid:3}
    ]
  }

  handleAddtodo =(todo)=>{
    
     let todoid = Math.random()
     let todos ={
       task: todo,
       todoid:todoid
     }
     let todoitem = [todos, ...this.state.todos ];
  
    this.setState({
      todos: todoitem
    })
  
  }
handledelete = (id) =>{
  const remaintodos = this.state.todos.filter(todo=>{
    return id !== todo.todoid
  })

  this.setState({
    todos: remaintodos
  })
  
}



render() { 
     console.log(this.state.todos)
    //  const tusklist = this.state.todos.map(list =>{
    //    return(<div key={list.todoid}>
    //      <span>{list.task}</span>
    //    </div>);
    //  })
    return <React.Fragment>

        <h1>Todo-list</h1>
    <div>
    <Todolist todolist={this.state.todos} deletetodo={this.handledelete}/>
    </div>
    <div>
      <Addtodo addtodo={this.handleAddtodo}/>
    
    </div>
      
    </React.Fragment>
  }
}
 
export default App;

