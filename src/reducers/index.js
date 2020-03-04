import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { ActionTypes, FilterTypes } from "../actions";

const startingTodo = [
  {
    text: "Tarefa não concluída #1",
    time: "02:30",
    date: "2000-06-02",
    id: 0,
    isCompleted: false
  },
  {
    text: "Tarefa não concluída #2",
    time: "05:50",
    date: "2020-06-02",
    id: 1,
    isCompleted: false
  },
  {
    text: "Tarefa concluída #1",
    time: "10:45",
    date: "2020-10-15",
    id: 2,
    isCompleted: true
  },
  {
    text: "Tarefa concluída #2",
    time: "15:20",
    date: "2015-10-22",
    id: 3,
    isCompleted: true
  }
];

const todos = (state = startingTodo, action) => {
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
  visibilityFilter
});
