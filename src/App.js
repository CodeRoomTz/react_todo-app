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
    return <div className="container">

        <h1 >Todo-list</h1>
    <div > <button className="btn btn-sm btn-outline-secondary m">Addtodo</button> </div>
    <div>
    <Todolist todolist={this.state.todos} deletetodo={this.handledelete}/>
    </div>
    <div>
      <Addtodo addtodo={this.handleAddtodo}/>
    
    </div>
      
    </div>
  }
}
 
export default App;

