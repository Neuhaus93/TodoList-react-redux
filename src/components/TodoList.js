import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo {...todo} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
