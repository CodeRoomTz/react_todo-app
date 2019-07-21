import React from 'react';


let Todolist = ({todolist, deletetodo}) => {
 let todo = todolist.map(todos =>{
      return <div className = "card-body">
        <div key ={todos.todoid}>  <h6 onClick={()=>{deletetodo(todos.todoid)}} className="alert alert-secondary todo-center">{todos.task}<span class="badge badge-secondary">New</span></h6></div>
        </div>
  })
    return ( <div className="card">
      {todo}
    </div> );
}
 
export default Todolist;