import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import { Context } from './context';
import newTascForm from './modal';

export default function App() {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')
  const [todoDescription, setTodoDescription] = useState('')

  useEffect(() => {
    const raw = localStorage.getItem(`todos`) || []
    setTodos(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  })

  const addTodo = event => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          description: todoDescription,
          completed: false
        }
      ])
      setTodoTitle('')
      setTodoDescription('')
    }
  };

  const toggleTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => {
      return todo.id !== id
    }))
  };

  return (
    <Context.Provider value={{
      toggleTodo, removeTodo
    }}>
      <div className="container" >
        <h1>Список дел</h1>
        {/* <button onClick={<newTascForm />}>Новая задача</button> */}
        <newTascForm />
        <div className="input-field">
          <input type="text"
            value={todoTitle}
            onChange={event => setTodoTitle(event.target.value)}
            onKeyPress={addTodo} />
          <label>Название</label>
        </div>
        <div className="input-field">
          <input type="text"
            value={todoDescription}
            onChange={event => setTodoDescription(event.target.value)}
            onKeyPress={addTodo} />
          <label>Описание</label>
        </div>
        <TodoList todos={todos} />
      </div>
    </Context.Provider>
  )
}