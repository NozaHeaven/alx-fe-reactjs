import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList'; // Assuming TodoList.jsx is in the same directory

test('renders initial todos', () => {
  const { getByText } = render(<TodoList />);
  const todoItems = getByText(/Learn React|Build a Todo List/i); // Match either todo using regular expression
  expect(todoItems.length).toBe(2); // Expect two initial todos
});

test('adds a new todo', () => {
  const { getByLabelText, getByText } = render(<TodoList />);
  const input = getByLabelText('Add Todo'); // Check for label text
  const addButton = getByRole('button', { name: 'Add' });

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(getByText('New Todo')).toBeInTheDocument(); // Check for the new todo
});

test('toggles a todo', () => {
  const { getByRole, getByText } = render(<TodoList />);
  const todoItem = getByText(/Learn React/i); // Match "Learn React" case-insensitively
  fireEvent.click(todoItem);

  expect(todoItem.classList.contains('completed')).toBeTruthy(); // Check for "completed" class after toggle
});

test('deletes a todo', () => {
  const { getByRole, queryByText } = render(<TodoList />);
  const todoItem = getByText(/Learn React/i);
  const deleteButton = todoItem.querySelector('button');

  fireEvent.click(deleteButton);

  expect(queryByText(/Learn React/i)).toBeNull(); // Check if "Learn React" is no longer present
});