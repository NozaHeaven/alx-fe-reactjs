// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders correctly with initial todos', () => {
        const { getByText } = render(<TodoList />);
        expect(getByText('Learn React')).toBeInTheDocument();
        expect(getByText('Learn Jest')).toBeInTheDocument();
        expect(getByText('Build a Todo App')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        const { getByPlaceholderText, getByText } = render(<TodoList />);
        const input = getByPlaceholderText('Add a new todo');
        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(getByText('Add'));

        expect(getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles todo completion', () => {
        const { getByText } = render(<TodoList />);
        const todoItem = getByText('Learn React');
        fireEvent.click(todoItem);

        expect(todoItem).toHaveStyle('text-decoration: line-through');
    });

    test('deletes a todo', () => {
        const { getByText } = render(<TodoList />);
        const deleteButton = getByText('Delete', { selector: 'button' });
        fireEvent.click(deleteButton);

        expect(getByText('Learn React')).not.toBeInTheDocument();
    });
});
