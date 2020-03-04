import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { ActionTypes } from "../actions";

const startingTodo = [
  {
    text: "Testando essa porra",
    time: "02:30",
    date: "2000-06-02"
  },
  {
    text: "Testando novamente essa porra",
    time: "10:45",
    date: "2020-10-15"
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
          date: action.date
        }
      ];

    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  todos
});
