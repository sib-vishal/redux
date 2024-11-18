// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput(''); // Reset input field
    }else{
      alert('Please enter a valid todo.');
      setInput(''); // Reset input field if invalid input is provided.
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mt-5 bg-white p-2 rounded shadow'>
      <input className='py-2 px-2 w-[250px] bg-transparent focus-within:border-none outline-none'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button className='ml-2 text-white px-2 shadow drop-shadow-sm bg-black py-2 rounded' type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
