// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getByText(/Delete/i);

    fireEvent.click(deleteButton);
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
