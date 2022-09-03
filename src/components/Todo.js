import React, { useState } from 'react';
import Todoform from './Todoform';
import {TbEditCircle} from 'react-icons/tb';
import {CgCloseR} from "react-icons/cg";

export default function Todo
({todos,completeTodo,removeTodo,updateTodo}){
  const [edit,setEdit] = useState({
    id: null,
    value : ''
  })
  const submitUpdate = (value) => {
    //* AFTER UPDATING ONE TODO
    //* RETURN THE VALUE OF EDIT INPUT TO '' FOR THE NEXT UPDATE
    updateTodo(edit.id, value);
    setEdit({id : null, value: ''})
    
  }
  return (
  
 edit.id ? <Todoform edit ={edit} onSubmit = {submitUpdate} /> 
: todos.map((todo,index) => (
  <div key={index} className="todo-row" >
  <div key={todo.id} className="todoText" onClick={()=>completeTodo(todo.id)}> {todo.text}</div>
 <div className='icons' >
<CgCloseR  onClick={()=> removeTodo(todo.id)} >X</CgCloseR>
<TbEditCircle onClick={()=> setEdit({id: todo.id , value : todo.text})}>U</TbEditCircle>

 </div>
  </div>
))





   
  )
}
