import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { ActionTypes, FilterTypes } from "../actions";
import authReducer from "./authReducer";

const STARTING_TODOS_EX = [
  {
    text: "Tarefa #1",
    time: "02:30",
    date: "2000-06-02",
    id: 0,
    isCompleted: false
  },
  {
    text: "Tarefa #2",
    time: "05:50",
    date: "2020-06-02",
    id: 1,
    isCompleted: false
  },
  {
    text: "Tarefa #5",
    time: "10:45",
    date: "2020-10-15",
    id: 2,
    isCompleted: true
  },
  {
    text: "Tarefa #4",
    time: "15:20",
    date: "2015-10-22",
    id: 3,
    isCompleted: true
  }
];

// const users = (state = STARTING_USERS_EX, action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_USER:
//       return [
//         ...state,
//         {
//           email: action.email,
//           userName: action.userName,
//           password: action.password
//         }
//       ];

//     default:
//       return state;
//   }
// };

const todos = (state = STARTING_TODOS_EX, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          time: action.time,
          date: action.date,
          id: action.id,
          isCompleted: false
        }
      ];

    case ActionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id
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
  authReducer
});
