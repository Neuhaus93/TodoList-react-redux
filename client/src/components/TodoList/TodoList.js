import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.todoId} {...todo} onClick={() => toggleTodo(todo.todoId)} />
      ))}
    </div>
  );
};

export default TodoList;
