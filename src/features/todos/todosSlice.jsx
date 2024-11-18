// src/features/todos/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Helper function to save todos in localStorage
const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Load todos from localStorage
const loadTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
};

// Initial state with todos loaded from localStorage
const initialState = {
  todos: loadTodosFromLocalStorage(),
};

// Create slice
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(), // Unique id based on timestamp
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      saveTodosToLocalStorage(state.todos); // Save to localStorage
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodosToLocalStorage(state.todos); // Save to localStorage
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodosToLocalStorage(state.todos); // Save to localStorage
    },
  },
});

// Export actions
export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

// Export reducer
export default todosSlice.reducer;
