import todos from "../apis/todos";

export const fetchTodos = () => async dispatch => {
  const response = await todos.get("/todos");

  dispatch({ type: ActionTypes.FETCH_TODOS, payload: response.data });
};

export const fetchUsers = () => async dispatch => {
  const response = await todos.get("/users");

  dispatch({ type: ActionTypes.FETCH_USERS, payload: response.data });
};

export const toggleTodo = id => async (dispatch, getState) => {
  const { isCompleted } = getState().todos[id];
  const response = await todos.patch(`/todos/${id}`, {
    isCompleted: !isCompleted
  });

  dispatch({
    type: ActionTypes.TOGGLE_TODO,
    payload: response.data
  });
};

export const createTodo = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await todos.post("/todos", {
    userId,
    ...formValues,
    isCompleted: false
  });

  dispatch({
    type: ActionTypes.CREATE_TODO,
    payload: response.data
  });
};

export const createUser = formValues => async (dispatch, getState) => {
  // const { userId } = getState().auth;
  const response = await todos.post("/users", {
    ...formValues,
    userId: 1003
  });

  dispatch({
    type: ActionTypes.CREATE_USER,
    payload: response.data
  });
};

export const tryLoggingIn = loginInfo => async (dispatch, getState) => {
  const users = Object.values(getState().users);
  console.log(loginInfo, users);
  const validUser = users.filter(
    user =>
      user.email === loginInfo.loginEmail &&
      user.password === loginInfo.loginPassword
  );
  console.log(validUser);
  const userName = validUser.length !== 0 ? validUser[0].userName : null;
  const userId = validUser.length !== 0 ? validUser[0].userId : null;

  if (validUser.length !== 0) {
    dispatch({
      type: ActionTypes.TRY_LOGGIN_IN,
      userName: userName,
      userId: userId
    });
  }
};

export const ActionTypes = {
  ADD_TODO: "ADD_TODO",
  CREATE_TODO: "CREATE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  FETCH_TODOS: "FETCH_TODOS",
  FETCH_USERS: "FETCH_USERS",
  CREATE_USER: "CREATE_USER",
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

/* 

\\ ------------- OLD CODE ------------- //

*/
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

export const addUser = userInfo => ({
  type: ActionTypes.ADD_USER,
  userId: nextUserId++,
  userInfo
});

export const tryLogginOut = () => ({
  type: ActionTypes.TRY_LOGGIN_OUT
});
