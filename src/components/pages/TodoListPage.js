import React from "react";

import AddBar from "../AddBar";
import TodoList from "../TodoList";

const TodoListPage = () => {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <AddBar />
      <TodoList />
    </div>
  );
};

export default TodoListPage;
