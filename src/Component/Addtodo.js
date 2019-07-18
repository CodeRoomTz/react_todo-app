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
            <div className="form-group">
            <label><small>Add todo Here</small></label>
            <input type="text" name = 'todo-box' className='form-control' onChange={this.handleChange} value={this.state.value} style={{width:300}}/>
            </div>
        </form>

        </div> );
    }
}
 
export default Addtodo;