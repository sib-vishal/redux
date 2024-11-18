// src/features/todos/Todos.js
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../../components/TodoItem.jsx";
import TodoForm from "../../components/TodoForm.jsx";

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="w-full h-[100vh] bg-gray-400 flex justify-center p-20">
      <div>
        <h2 className="text-3xl text-center text-white font-bold">Todo List</h2>
        <TodoForm />
        <div className="mt-4">
          {todos.length === 0 ? (
            <p>No todos available</p>
          ) : (
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
