import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
