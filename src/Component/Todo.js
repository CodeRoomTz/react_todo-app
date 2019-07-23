import React, { Component } from 'react';
import axios from 'axios'

class Todo extends Component {
    state = { 
        todo: null
     }

    componentDidMount(){
        const id = this.props.match.params.todo_id;
        axios.get('https://jsonplaceholder.typicode.com/todos/' + id)
        .then(res =>{
            this.setState({
                todo: res.data
            })
        })
    }
    render() { 
        const tododetail = this.state.todo ? (
                <div>
                    <p>{this.state.todo.title}</p>
                </div>):(<p> Check it out</p>)
            
        
        return ( <div>
            <h2>{tododetail}</h2>
        </div> );
    }
}
 
export default Todo;