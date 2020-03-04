import React from "react";

import AddBar from "../TodoList/AddBar";
// import TodoList from "../TodoList";
import VisibleTodoList from "../../containers/VisibleTodoList";
import Footer from "../TodoList/Footer";

const TodoListPage = () => {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <AddBar />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default TodoListPage;
