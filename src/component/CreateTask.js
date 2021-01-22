import React, {Component} from 'react';

export default class  CreateTask extends Component {
 
   
   render(){
      console.log(this.props);

     return(

      <div>
      <form onSubmit={this.submitTask.bind(this)} className="create-todo-form">
      <input type="text"   ref="input"  autoFocus/>
      
   
      <button>Add</button>
  </form>
  
</div>
        
     )    

}
submitTask(e)
{
   console.log('inside the submitTask', this.props);
     
   console.log('refs',this.refs.input.value);
   
    const {value}=this.refs.input;
  this.props.createTask(value );
  
  // this.refs.taskMessage.value = "";
  this.refs.input.value="";
   e.preventDefault();


}
}