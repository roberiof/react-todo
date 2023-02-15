import React from 'react'
import { BsTrash , BsBookmarkCheckFill, BsBookmarkCheck } from 'react-icons/bs'; 


const Task = ({ api , todo , setTodos}) => {
  const editDoneTodo = async(todo) =>{
    todo.done = !todo.done 

    const edited = await fetch(`${api}/${todo.id}` , {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setTodos( (prevState) => prevState.map((t) => (  t.id === edited.id ? (t=edited) : (t) )))
  }

  const deleteTask = async(id) => {
    await fetch (`${api}/${id}` , {
      method: 'DELETE',
    })
    
    setTodos( (prevState) => prevState.filter( item => item.id !== id) )
  }

  return ( 
    <div className={todo.done ? 'todo done' : 'todo'}>
      <p> {todo.title} </p>
      <div className='icons'>
        <span onClick={() => editDoneTodo(todo)}> {todo.done ? <BsBookmarkCheckFill/> : <BsBookmarkCheck/>} </span>
        <span onClick={() => deleteTask(todo.id)}> <BsTrash/> </span>
      </div>
    </div>
  )
}

export default Task