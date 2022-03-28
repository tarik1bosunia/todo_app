import React from 'react'
import { useState } from 'react'
import style from './css/newtodo.module.css'

const NewTodo = (props) => {

  const[todo, setTodo] = useState ({title: "", desc: ""})

  const handleChange = (event) =>{
    setTodo((oldTodo) => {
      return {...oldTodo, [event.target.name]: event.target.value }
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({title: "", desc:""});
  }
  const{title, desc} = todo;
  return (
    <form action="" className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title: </label>
        <input type="text" id='title' name='title' value={title} onChange={handleChange}/>
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description: </label>
        <textarea type="text" id='desc' name='desc' value={desc} onChange={handleChange}/>
      </div>
      <button type='submit'> Add Todo</button>
    </form>
  )
}

export default NewTodo