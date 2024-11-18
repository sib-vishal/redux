// src/components/TodoItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todos/todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-2 border-b-2 flex justify-between">
      <div className="">
        <input
          className="mr-2 accent-current"
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      </div>
      <button
        className="bg-red-500 p-1 text-[12px] text-white rounded"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
