import React from "react";
import TodoItems from './TodoItem';
 

export default class TodosList extends React.Component {


    constructor()
    {
        super();
    }
    
    renderItems()
    {

          console.log('inside TodoList ...- ',this.props.todos.todos);

          
          return this.props.todos.todos.map((element, index)=>{

            console.log("element", element);

            return <TodoItems  task={element} 
            editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
            index={index} key={index}>

            </TodoItems>
          })
         



    }
    render(){
        
    return(
        <table>
        {/* <TodosListHeader /> */}
        <tbody>
            {this.renderItems()}
        </tbody>
    </table>

    )
    }
 
}