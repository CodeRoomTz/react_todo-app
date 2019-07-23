import React, { Component } from "react";
import { BrowserRouter, Route,  Switch} from 'react-router-dom';
import About from './Component/About';
import TodoApp from './Component/TodoApp';
import Todo from './Component/Todo'
import Navbar from './Component/Navbar'

class App extends Component {

  render() {
    
    return (
    <BrowserRouter>
      <div className="container">
         <Navbar />
          <Switch>
           <Route exact path='/' component={TodoApp}/>
           <Route path='/about' component={About}/>
           <Route path='/:todo_id' component ={Todo} />
          </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
