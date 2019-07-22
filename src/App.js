import React, { Component } from "react";
import { BrowserRouter, Route,  NavLink } from 'react-router-dom';
import About from './Component/About';
import TodoApp from './Component/TodoApp';

class App extends Component {

  render() {
    
    return (
    <BrowserRouter>
      <div className="container">
        <div className="todo-center">
          <h1>Todo-list</h1>
          <ul className="link">
            <NavLink to="/"><li className="link-item">Todos</li></NavLink>
            <NavLink to="/about"><li className="link-item">About</li></NavLink>
          </ul>
        </div> 
        
           <Route exact path='/' component={TodoApp}/>
           <Route path='/about' component={About}/>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
