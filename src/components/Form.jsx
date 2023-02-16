import React, {useState} from 'react';

const Form = ({api, setTodos}) =>{
  const [title , setTitle] = useState( '' )

  const handleSubmit =  async(e) =>{
    e.preventDefault()
    const input = document.querySelector('#form-input')

    if(!title){
      input.classList.add('input-error')
      return
    }

    if(input.classList.contains('input-error')){
      input.classList.remove('input-error')
    }

    const todo = {
      id: Math.random(),
      title: title, 
      done: false
    }

    await fetch(api , {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    })
  
    setTodos( (prevState) => [...prevState, todo]) 

    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} > 
      <input id="form-input" autoComplete='off' type="text" placeholder="Add a todo" value={title} onChange={ (e) => setTitle(e.target.value)}
      />
      <button type="submit"> Add Task </button>
    </form>
  )
}

export default Form 