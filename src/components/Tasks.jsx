import React , {useEffect} from 'react';
import Task from './Task'


const Tasks = ({api , todos, setTodos}) =>{

  useEffect( () => {
    const getTasks = async() =>{
      const tasks = await fetch(api).then( res => res.json()).then(data => data)
      setTodos(tasks)
    }
    getTasks()
  } , [])
  
  return (
    <>
      {todos.map((todo) => <Task key={todo.id} todo={todo} api={api} setTodos={setTodos}/>)} 
    </>
  )
}

export default Tasks