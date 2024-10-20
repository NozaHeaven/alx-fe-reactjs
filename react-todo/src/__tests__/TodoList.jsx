import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo List', completed: false },
  ]);

  // ... other methods
}

export default TodoList;
// ... other code

function addTodo(text) {
    const newTodo = { id: todos.length + 1, text, completed: false };
    setTodos([...todos, newTodo]);
  }
  
  function toggleTodo(id) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }
  
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
