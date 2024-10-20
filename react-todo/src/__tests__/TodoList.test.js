// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
    test('renders correctly with initial todos', () => {
        const { getByText } = render(<TodoList />);
        expect(getByText('Learn React')).toBeInTheDocument();
        expect(getByText('Learn Jest')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        const { getByText } = render(<TodoList />);
        fireEvent.click(getByText('Add Todo'));
        expect(getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles a todo', () => {
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
