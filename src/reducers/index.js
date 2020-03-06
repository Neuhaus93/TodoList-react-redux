import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { ActionTypes, FilterTypes } from "../actions";
import { userActions, userDatabase } from "./authReducer";

const STARTING_TODOS_EX = [
  {
		userId: 0,
    text: "Usuário 0 - Tarefa #1",
    time: "02:30",
    date: "2000-06-02",
    todoId: 0,
    isCompleted: false
  },
  {
		userId: 0,
    text: "Usuário 0 - Tarefa #2",
    time: "05:50",
    date: "2020-06-02",
    todoId: 1,
    isCompleted: false
  },
  {
		userId: 0,
    text: "Usuário 0 - Tarefa #3",
    time: "10:45",
    date: "2020-10-15",
    todoId: 2,
    isCompleted: true
  },
  {
		userId: 1,
    text: "Usuário 1 - Tarefa #1",
    time: "15:20",
    date: "2015-10-22",
    todoId: 3,
    isCompleted: true
  },
  {
		userId: 2,
    text: "Usuário 2 - Tarefa #1",
    time: "15:20",
    date: "2015-10-22",
    todoId: 3,
    isCompleted: true
  }
];

const todos = (state = STARTING_TODOS_EX, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          time: action.time,
          date: action.date,
          todoId: action.todoId,
          isCompleted: false
        }
      ];

    case ActionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.todoId === action.todoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    default:
      return state;
  }
};

const visibilityFilter = (state = FilterTypes.SHOW_ALL, action) => {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  todos,
  visibilityFilter,
  userActions,
  userDatabase
});
