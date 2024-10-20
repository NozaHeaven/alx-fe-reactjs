// src/components/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn Jest', completed: false },
        { id: 3, text: 'Build a Todo App', completed: false },
    ]);
    const [newTodo, setNewTodo] = useState('');

    const toggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const addTodo = () => {
        if (newTodo.trim() === '') return; // Prevent adding empty todos
        setTodos((prevTodos) => [
            ...prevTodos,
            { id: Date.now(), text: newTodo, completed: false }, // Use Date.now() for unique ID
        ]);
        setNewTodo(''); // Clear the input after adding
    };

    return (
        <div>
            <h1 className="text-2xl">Todo List</h1>
            <input
                type="text"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="border border-gray-300 p-2"
            />
            <button onClick={addTodo} className="bg-blue-500 text-white p-2 ml-2">
                Add
            </button>
            <ul className="mt-4">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
                    >
                        {todo.text}
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent the click from triggering the li click event
                                deleteTodo(todo.id);
                            }}
                            className="bg-red-500 text-white p-1 ml-2"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
