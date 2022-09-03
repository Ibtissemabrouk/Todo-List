import React,{useState} from 'react'

export default function Todoform(props) {

  const [input,setInput]= useState
  (props.edit ? props.edit.value : '');
  const handleSubmit =(e) => {
e.preventDefault();
//* callback part
props.onSubmit({
  id:Math.floor(Math.random()*1000),
  text: input
})
//* clear input part
setInput('')

  }
  return (
    <form onSubmit={handleSubmit}>
    {props.edit ?
  <>
    <input
type="text"
placeholder='add task...'
value ={input}
onChange={(e)=> setInput(e.target.value)}
className='todo-input'
    />
    <button className='todo-button edit'>Add new Todo</button>
    </>
    :
    <>
    <input
type="text"
placeholder='add task...'
value ={input}
onChange={(e)=> setInput(e.target.value)}
className='todo-input'
    />
    <button className='todo-button'>Add new Todo</button>
    </>
  }
    </form>
  )
}
