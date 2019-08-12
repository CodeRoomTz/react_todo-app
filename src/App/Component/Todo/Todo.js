import React, { Component } from 'react';



class Todo extends Component {
    state = {
       todos: ''
      };
    componentDidMount(){
        const id = this.props.match.params.id;
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                todos: json
            })
        })
    }
    render() { 
        const { todos } = this.state;
      const descr = this.state.todos ?
    (<div>
        <h1>{todos.title}</h1>
        <p>{ todos.body}</p>
    </div>):<div><h1>Error 404 </h1><p>Page not found</p></div>
            
        
        return ( <div>
            {descr}
        </div> );
    }
}
 
export default Todo;