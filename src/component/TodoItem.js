import React, {useState, useRef}  from 'react';


export default function TodoItem(props)
{
    const [isEdit, setEdit]= useState(false);

    console.log("check edit--  ", isEdit);
      let inputRef=useRef();

    console.log("Item-- ",props);
   
    const {task}=props;
   function deleteTask () {
       console.log(props.index);
         props.deleteTask(props.index);


    }
      

        if(isEdit.isEdit) {
             
            return (
                
                <tr class="todo-un-completed">
                <td>
                 <form onSubmit={()=>{}}>
                        <input  ref={inputRef} defaultValue={task} autoFocus />
                    </form>
                   
                </td>
                <td>
                <button onClick={save}>Save</button>
                    <button className="cancel-btn" onClick={()=>{(setEdit({editTask:false}))}}>Cancel</button>
                </td>
                </tr>
            );
        }else{
           
            console.log('is Edit false.......');

       return (
       <tr class="todo-un-completed">
        <td  >{task}</td>
        <td><button onClick={()=>setEdit({isEdit:true})}>Edit</button>
        <button class="delete-btn" onClick={deleteTask}>Delete</button></td>
        </tr>
       )
        }

    
   function save(e)
   {  
       console.log("into save()");
       props.editTask(props.index,inputRef.current.value);

    setEdit({isEdit:false});

     

    e.preventDefault();
   }
    

}