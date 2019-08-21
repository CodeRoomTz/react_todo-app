import React, { Component } from 'react';
import '../../../index.css';

class Addtodo extends Component {
    state={
        value: ''
    }
    handleSubmit = (e)=>{
      e.preventDefault();
      this.props.addtodo(this.state.value);
      this.setState({
          value: ''
      })
    }
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    render() { 
        return ( <div>
      <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Add Todo Here' onChange={this.handleChange} value={this.state.value}/>
      </form>
        
        </div> );
    }
}
 
export default Addtodo;