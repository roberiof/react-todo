import React, { useState } from 'react'
import Form from './components/Form'
import Tasks from './components/Tasks'

const api = 'https://my-json-server.typicode.com/roberiof/react-todo/todos'

function App() {
  const [ todos , setTodos ] = useState( [] )
  
  return (
    <>
      <div id='wrapperTitleForm'>
        <h1> What's the Plan for Today? </h1>
        <Form api={api} setTodos={setTodos}/> 
      </div>

      <div id='wrapperTodoList'>
        <Tasks api={api} todos={todos} setTodos={setTodos}/>
      </div>
    </>
  )
}

export default App
