let nextTodoId = 4;

export const addTodo = todoInfo => {
  return {
    type: ActionTypes.ADD_TODO,
    text: todoInfo.todoText,
    time: todoInfo.todoTime,
    date: todoInfo.todoDate,
    id: nextTodoId++
  };
};

export const setVisibilityFilter = filter => ({
  type: ActionTypes.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = id => ({
  type: ActionTypes.TOGGLE_TODO,
  id
});

export const ActionTypes = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
};

export const FilterTypes = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};
