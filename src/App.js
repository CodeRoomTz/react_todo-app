import React, { Component } from 'react';
import Todolist from './Todolist';

class  App extends Component {
  state = {
    todos: [
      {task:'Learn pythagorous', todoid:1},
      {task:'running early in morning', todoid:2},
      {task:'create mashine-learning tutorial', todoid:3}
    ]
  }

handledelete(id){
  console.log(id)
}
 

  render() { 
    return <React.Fragment>

        <h1>Todo-list</h1>
    <div>
        <Todolist todolist={this.state.todos} deletetodo={this.handledelete}/>
    </div>
      
    </React.Fragment>
  }
}
 
export default App;

