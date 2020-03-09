import { connect } from "react-redux";
import { toggleTodo, FilterTypes } from "../actions";

import TodoList from "../components/TodoList/TodoList";

const getVisibleTodos = (todos, userId, filter) => {
  switch (filter) {
    case FilterTypes.SHOW_ALL:
      return todos.filter(t => userId === t.userId);

    case FilterTypes.SHOW_ACTIVE:
      return todos.filter(t => userId === t.userId && !t.isCompleted);

    case FilterTypes.SHOW_COMPLETED:
      return todos.filter(t => userId === t.userId && t.isCompleted);

    default:
      throw new Error(`Unkown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  // todos: getVisibleTodos(state.userActions.userTodos, state.visibilityFilter)
  todos: getVisibleTodos(
    state.todos,
    state.userActions.userId,
    state.visibilityFilter
  )
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
