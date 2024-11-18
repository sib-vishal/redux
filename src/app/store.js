// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer, // Add the todos slice to the store
  },
});

export default store;
