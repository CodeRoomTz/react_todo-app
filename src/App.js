import React, { Component } from 'react';
import Todolist from './Todolist';
import Addtodo from './Addtodo'

class  App extends Component {
  state = {
    todos: [
      {task:'Learn pythagorous', todoid:1},
      {task:'running early in morning', todoid:2},
      {task:'create mashine-learning tutorial', todoid:3}
    ]
  }

handledelete = (id) =>{
  const remaintodos = this.state.todos.filter(todo=>{
    return id !== todo.todoid
  })

  this.setState({
    todos: remaintodos
  })
  
}


handleAddtodo =(todo)=>{
  
   todo.todoid = Math.random();
   let todos = [ ...this.state.todos, todo ] 
   console.log(this.state.todos)
   this.setState({
     todos:todos
   })

  console.log(todo)
}

render() { 

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

