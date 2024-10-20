import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList'; // Adjust the path if needed

describe('TodoList Component', () => {
  let todoItems;

  beforeEach(() => {
    todoItems = [
      { id: 1, text: 'First Todo', completed: false },
      { id: 2, text: 'Second Todo', completed: false },
    ];
  });

  test('renders correctly with initial todos', () => {
    const { getByText } = render(<TodoList todos={todoItems} />);
    
    // Check that each todo item is rendered
    todoItems.forEach(todo => {
      expect(getByText(todo.text)).toBeInTheDocument();
    });
  });

  test('adds a new todo', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList todos={todoItems} />);
    const input = getByPlaceholderText('Add a new todo');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(getByText('Add Todo')); // Simulate form submission

    expect(getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    const { getByText } = render(<TodoList todos={todoItems} />);
    
    // Simulate clicking on the first todo item
    fireEvent.click(getByText('First Todo'));
    
    // Check that the first todo is now marked as completed
    expect(getByText('First Todo')).toHaveClass('completed'); // Assuming you add a completed class
  });

  test('deletes a todo item', () => {
    const { getByText, queryByText } = render(<TodoList todos={todoItems} />);
    
    // Simulate clicking the delete button for the first todo
    fireEvent.click(getByText('Delete First Todo'));
    
    // Ensure the first todo is no longer in the document
    expect(queryByText('First Todo')).toBeNull();
  });
});
