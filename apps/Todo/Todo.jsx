import React, { useEffect, useState, useRef } from 'react';

const Todo = () => {
    const [todoAddingValue, settodoAddingValue] = useState('');
    const [todos, settodos] = useState([]);
    const inputRef = useRef(null);

    // Load todos from localStorage on mount
    useEffect(() => {
        try {
            const savedTodos = localStorage.getItem('todos');
            if (savedTodos) {
                settodos(JSON.parse(savedTodos));
            }
        } catch (error) {
            console.error("Error loading todos:", error);
            localStorage.removeItem('todos'); // Clear corrupted data
        }
    }, []);

    // Save todos to localStorage whenever they change
    useEffect(() => {
        try {
            localStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.error("Error saving todos:", error);
        }
    }, [todos]);

    function addTodo() {
        if (!todoAddingValue.trim()) {
            alert('Task cannot be empty!');
            return;
        }

        const newTodos = [...todos, todoAddingValue.trim()];
        settodos(newTodos);
        settodoAddingValue('');
        inputRef.current?.focus();
    }

    function editTodo(index) {
        const newVal = prompt('Enter new value:', todos[index]);
        if (newVal !== null && newVal.trim() !== '') {
            const updatedTodos = todos.map((todo, i) =>
                i === index ? newVal.trim() : todo
            );
            settodos(updatedTodos);
        }
    }

    function deleteTodo(index) {
        const confirmDelete = window.confirm('Are you sure you want to delete this task?');
        if (confirmDelete) {
            const newTodos = todos.filter((_, i) => i !== index);
            settodos(newTodos);
        }
    }

    return (
        <div className="p-6 max-w-xl mx-auto">
            <div className="mb-5 flex gap-2">
                <input
                    ref={inputRef}
                    type="text"
                    className="border px-4 py-2 w-full rounded"
                    placeholder="Enter your task"
                    onChange={(e) => settodoAddingValue(e.target.value)}
                    value={todoAddingValue}
                    onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                />
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={addTodo}
                >
                    Add Task
                </button>
            </div>

            <hr className="mb-4" />

            <div>
                {todos.length === 0 ? (
                    <h2 className="text-center text-gray-500">No tasks found!</h2>
                ) : (
                    <ul className="space-y-3">
                        {todos.map((todo, index) => (
                            <li
                                key={`${index}-${todo}`}
                                className="flex justify-between items-center bg-yellow-100 px-4 py-2 rounded"
                            >
                                <span className="font-medium flex-1">{todo}</span>
                                <div className="flex gap-2">
                                    <button
                                        className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
                                        onClick={() => editTodo(index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                        onClick={() => deleteTodo(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Todo;