import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../src/TodoList.jsx';

test('renders initial todos', () => {
  render(<TodoList />);
  // Add assertions to check if the initial todos are rendered
});
test('adds a new todo', () => {
    const { getByLabelText, getByRole } = render(<TodoList />);
    const input = getByLabelText('Add Todo');
    const addButton = getByRole('button', { name: 'Add' });
  
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
  
    // Add assertions to check if the new todo is rendered
  });
  test('toggles a todo', () => {
    const { getByRole } = render(<TodoList />);
    const todoItem = getByRole('listitem', { name: 'Learn React' });
  
    fireEvent.click(todoItem);
  
    // Add assertions to check if the todo's completed status is toggled
  });
  test('deletes a todo', () => {
    const { getByRole, queryByRole } = render(<TodoList />);
    const todoItem = getByRole('listitem', { name: 'Learn React' });
    const deleteButton = todoItem.querySelector('button');
  
    fireEvent.click(deleteButton);
  
    // Add assertions to check if the todo is no longer present
  });
