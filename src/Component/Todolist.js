import React from 'react';

let Todolist = ({todolist, deletetodo}) => {
    
 let todo = todolist.map(todos =>{
      return <div key ={todos.todoid}>  <h6 onClick={()=>{deletetodo(todos.todoid)}} className="alert alert-secondary">{todos.task}<span class="badge badge-secondary">New</span></h6></div>
  })
    return ( <div>
      {todo}
    </div> );
}
 
export default Todolist;