import React, { Component } from "react";
import { BrowserRouter, Route} from 'react-router-dom';
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
            <a href="/"><li className="link-item">Todos</li></a>
            <a href="/about"><li className="link-item">About</li></a>
          </ul>
        </div>
           <TodoApp />

           <Route path='/' Component={TodoApp}/>
           <Route path='/about' Component={About}/>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
