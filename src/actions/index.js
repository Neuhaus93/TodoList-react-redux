let nextTodoId = 2;

export const addTodo = todoInfo => {
  return {
    type: ActionTypes.ADD_TODO,
    text: todoInfo.todoText,
    time: todoInfo.todoTime,
    date: todoInfo.todoDate,
    id: nextTodoId++
  };
};

// export const setVisibilityFilter = filter => ({
//   type: ActionTypes.VISIBILITY_FILTER,
//   filter
// })

export const toggleTodo = id => ({
  type: ActionTypes.TOGGLE_TODO,
  id
});

export const ActionTypes = {
  ADD_TODO: "ADD_TODO",
  VISIBILITY_FILTER: "VISIBILITY_FILTER",
  TOGGLE_TODO: "TOGGLE_TODO"
};
