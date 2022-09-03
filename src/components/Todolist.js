import React,{useState} from 'react'
import Todo from './Todo'
import Todoform from './Todoform'

export default function Todolist() {
// ^ our global variable = (list of taskes)
const [todos,setTodos] = useState([])
 // * ALL FUNCTIONS STRUCTURES

 // ! ADD NEW TODO 
const addTodo =(todo)=> {

    if (todo.text.trim().length===0) return 0 ;
const newTodos =[todo,...todos];
setTodos(newTodos);
console.log(todos);
}

 // ! UPDATE ONE SPECIFIC TODO
const updateTodo = (todoId,newValue) => {
    if (newValue.text.trim().length===0) return 0 ;
    const newTodo = [...todos].map(item => (item.id === todoId ? newValue : item));
setTodos(newTodo);
}

 // ! REmove one todo
const  removeTodo = (id) => {
const removedArr = [...todos].filter(el => el.id !== id);
setTodos(removedArr);

}

 // ! complete one todo
 const completeTodo = (id) => {
let newTodo = todos.map(el =>{
    if (el.id === id) { el.isComplete = !el.isComplete }
    return el;
})
    setTodos(newTodo);
 }
 
    return (
    <div>
<h1>What's the plan for Today ?</h1>
<Todoform onSubmit={addTodo}/>
<Todo 

    completeTodo={completeTodo}
    /**delete todo */
    removeTodo={removeTodo}
    /**modifier todos */
    updateTodo={updateTodo}
    /**affichage todos */
    todos={todos}
/>
    </div>
  )
}
