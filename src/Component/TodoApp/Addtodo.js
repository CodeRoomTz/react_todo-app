import React, { Component } from 'react';

class Addtodo extends Component {
    state = { 
        value:''
     }

     handleSubmit =(e)=>{
         e.preventDefault();
         const task ={
             value: e.target[0].value
         }
         this.props.addtodo(task.value)
         this.setState({
             value: ''
         })
         
     }
     handleChange=(e)=>{
        this.setState({
            value: e.target.value
        })
     }
    render() { 
        return ( <div>
        <form onSubmit={this.handleSubmit} >
            <div className="form-group todo-form">
            <label><small>Add todo Here</small></label>
            <input type="text" name = 'todo-box' className='form-control todo-input' onChange={this.handleChange} value={this.state.value} style={{width:300}} placeholder="Add Todo Here"/>
            <button className="btn btn-sm btn-outline-secondary todo-btn">
            Submit
          </button>
            </div>
        </form>

        </div> );
    }
}
 
export default Addtodo;