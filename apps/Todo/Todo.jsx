import React, { useEffect, useState, useRef } from 'react';

const Todo = () => {
    const [todoAddingValue, settodoAddingValue] = useState('');
    const [todos, settodos] = useState([]);
    const inputRef = useRef(null);

    // Load todos from localStorage on mount
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        settodos(savedTodos);
    }, []);

    // Save todos to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
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
                    className="input border px-4 py-2 w-full"
                    placeholder="Enter your task"
                    onChange={(e) => settodoAddingValue(e.target.value)}
                    value={todoAddingValue}
                    onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                />
                <button
                    className="btn btn-secondary px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={addTodo}
                >
                    Add Task
                </button>
            </div>

            <hr className="mb-4" />

            <div>
                <ul className="list-none space-y-3">
                    {todos.length === 0 ? (
                        <h2 className="text-center text-gray-500">Todo Not Found!</h2>
                    ) : (
                        todos.map((todo, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-yellow-100 px-4 py-2 rounded"
                            >
                                <input
                                    type="text"
                                    className="bg-transparent font-medium w-full mr-4"
                                    value={todo}
                                    disabled
                                />
                                <div className="flex gap-2">
                                    <button
                                        className="btn btn-warning bg-yellow-400 px-2 py-1 rounded"
                                        onClick={() => editTodo(index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-error bg-red-500 text-white px-2 py-1 rounded"
                                        onClick={() => deleteTodo(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
