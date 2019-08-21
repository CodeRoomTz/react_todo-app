import React from 'react'
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="todo-center">
          <h1>My-Todo-List</h1>
          <ul className="link">
            <NavLink to="/"><li className="link-item">Todos</li></NavLink>
            <NavLink to="/about"><li className="link-item">About</li></NavLink>
          </ul>
        </div> 
     );
}
 
export default Navbar;