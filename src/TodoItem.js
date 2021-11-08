import React from 'react'

export default function TodoItem({ title, description, colore, id, completed }) {
  return (
    <li className="todo">
      <label>
        <input
          type="checkbox"
          defaultChecked={false}
        />
        <span>{title}</span>
        <span>{description}</span>
        <i
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
}