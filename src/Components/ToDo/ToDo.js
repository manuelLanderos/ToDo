// import { Component, useState } from "react";
import React, { useState } from 'react';
import './ToDo.css'

function TodoList() {
  const [todos, setTodos] = useState([
    { name: "Laundry", completed: false },
    { name: "Wash Dishes", completed: false },
    { name: "Vacuum", completed: false },

  ])
  function handleClick(index) {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }
  function handleAddTodoSubmit(event) {
    event.preventDefault()
    const newTodoName = event.target.elements.todoName.value
    const newTodo = { name: newTodoName, completed: false }
    setTodos([...todos, newTodo])
    event.target.reset()
  }
  function handleDeleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }




  return (
    <div>

      <h1>Todo List</h1>
      <div className='list'>
        {/* <ul> */}
        {todos.map((todo, index) => (
          <ul key={index} >
            <li>

              <input className='checkbox'
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleClick(index)}
              />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.name}
              </span>
              <button className='delete' onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          </ul>
        ))}
      </div>

      {/* </ul> */}
      <br></br>
      <br></br>
      <div className='div'>

        <form className='' onSubmit={handleAddTodoSubmit}>
          <input type="text" name="todoName" placeholder="Enter To Do's" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button href="#" class="button">
            <div class="button__line"></div>
            <div class="button__line"></div>
            <span class="button__text">ENTER</span>
            <div class="button__drow1"></div>
            <div class="button__drow2"></div>
          </button>
        </form>
      </div>
    </div >
  );
}

export default TodoList;