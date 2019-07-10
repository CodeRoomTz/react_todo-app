import React from 'react';

const Todolist = ({todolist, deletetodo}) => {
    
  const todo = todolist.map(todo =>{
      return <div key ={todo.todoid}>  <h6 onClick={()=>{deletetodo(todo.todoid)}}>{todo.task}</h6></div>
  })
    return ( <div>
      {todo}
    </div> );
}
 
export default Todolist;