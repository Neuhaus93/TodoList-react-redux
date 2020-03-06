import { connect } from "react-redux";
import { toggleTodo, FilterTypes } from "../actions";

import TodoList from "../components/TodoList/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.SHOW_ALL:
      return todos;

    case FilterTypes.SHOW_ACTIVE:
      return todos.filter(t => !t.isCompleted);

    case FilterTypes.SHOW_COMPLETED:
      return todos.filter(t => t.isCompleted);

    default:
      throw new Error(`Unkown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  // todos: getVisibleTodos(state.userActions.userTodos, state.visibilityFilter)
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
