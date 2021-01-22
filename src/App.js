import logo from './logo.svg';
import './App.css';

import createTask from './component/CreateTask';

import React, { useState, useEffect } from 'react';
import CreateTask from './component/CreateTask';
import TodoList from './component/TodoList';

let  Todo={
  items:[],
  remove (id) {
    this.items.splice(id, 1);
    
},
update (id, task) {
  
    let todoItem = this.items[id]=task;
    console.log("Todo item---- ",todoItem);
     
    
}
}

class App extends React.Component {

 
 
  constructor()
  {
    super();
    this.state={
      todos:Todo.items
    }

  }



   addTodo(task){

     console.log('into parent todo...',task);
     Todo.items.push(task);

    
     
     this.setState({ todos: Todo.items });

       console.log(Todo.items);
  }
  render()
  {
     
    return(


      
      <div>
        <CreateTask createTask={this.addTodo.bind(this)}/>
        <TodoList
                    todos={this.state}
                   // toggleTask={this.toggleTask.bind(this)}
                    editTask={this.editTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
 
     </div>
       
    )
  }

  editTask (taskId, task) {
    console.log("edit task--- ", taskId, "--", task);
   
    Todo.update(taskId, task);

    this.setState({ todos: Todo.items});
}
deleteTask (taskId) {
  console.log("TaskID", taskId);

    Todo.remove(taskId);
    this.setState({ todos: this.state.todos });
}
    
}


   

export default App;
