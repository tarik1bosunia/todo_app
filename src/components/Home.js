import React from 'react'
import { useState } from 'react';

import {v4 as uuidv4} from "uuid"

import style from './css/home.module.css'

import NewTodo from './NewTodo';
import Todos from './Todos'


const Home = () => {

  const [todos, setTodos] = useState([
  ]);

const addTodo = (todo) =>{
    setTodos((previousTodos) =>{
      return [...previousTodos,{id: uuidv4(),todo}]
    });
}
const removeTodo = (id) =>{
    //alert(id);
    
    setTodos((previousTodos)=>{
      const filTeredTodos = previousTodos.filter((todo) => todo.id !== id);
      return filTeredTodos;
    });
}
// npm install uuid

  return (
    <div className={style.container}>
     <h1 style={{color: "white"}}>Todo App</h1>
     <NewTodo onAddTodo = {addTodo}/>
     <Todos  todos = {todos} onRemoveTodo= {removeTodo}/>
    </div>
  )
}

export default Home