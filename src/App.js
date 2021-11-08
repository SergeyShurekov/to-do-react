import React, { useState } from 'react'
import TodoList from './TodoList'

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'First todo', description: 'описание задачи', colore: 'red', completed: false },
    { id: 2, title: 'Second todo', description: 'описание задачи2', colore: 'green', completed: true }
  ])
  const [todoTitle, setTodoTitle] = useState('')
  const [todoDescription, setTodoDescription] = useState('')
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
  }

  return (
    <div className="container" >
      <h1>Todo app</h1>
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
  )
}