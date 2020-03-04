export const addTodo = todoInfo => {
  return {
    type: ActionTypes.ADD_TODO,
    text: todoInfo.todoText,
    time: todoInfo.todoTime,
    date: todoInfo.todoDate
  };
};

export const ActionTypes = {
  ADD_TODO: "ADD_TODO"
};
