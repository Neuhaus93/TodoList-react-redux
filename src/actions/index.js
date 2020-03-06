let nextTodoId = 4;
let nextUserId = 3;

export const addTodo = todoInfo => ({
  type: ActionTypes.ADD_TODO,
	userId: todoInfo.userId,
  text: todoInfo.todoText,
  time: todoInfo.todoTime,
  date: todoInfo.todoDate,
  todoId: nextTodoId++
});

export const setVisibilityFilter = filter => ({
  type: ActionTypes.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = id => ({
  type: ActionTypes.TOGGLE_TODO,
  todoId: id
});

export const addUser = userInfo => ({
  type: ActionTypes.ADD_USER,
  id: nextUserId++,
  userInfo
});

export const tryLoggingIn = loginInfo => ({
  type: ActionTypes.TRY_LOGGIN_IN,
  email: loginInfo.loginEmail,
  password: loginInfo.loginPassword
});

export const tryLogginOut = () => ({
  type: ActionTypes.TRY_LOGGIN_OUT
});

export const ActionTypes = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER",
  ADD_USER: "ADD_USER",
  TRY_LOGGIN_IN: "TRY_LOGGIN_IN",
  TRY_LOGGIN_OUT: "TRY_LOGGIN_OUT"
};

export const FilterTypes = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};
