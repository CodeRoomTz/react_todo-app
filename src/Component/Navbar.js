import React from 'react'
import {  NavLink} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div>
        <div className="todo-center">
          <h1>Todo-list</h1>
          <ul className="link">
            <NavLink to="/"><li className="link-item">Todos</li></NavLink>
            <NavLink to="/about"><li className="link-item">About</li></NavLink>
          </ul>
        </div> 
        </div>
     );
}
 
export default Navbar;