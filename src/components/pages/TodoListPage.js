import React from "react";

import AddBar from "../AddBar";
import Todo from "../Todo";

const TodoListPage = () => {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <AddBar />
      <Todo />
    </div>
  );
};

export default TodoListPage;
