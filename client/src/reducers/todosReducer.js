import _ from "lodash";
import { ActionTypes } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case ActionTypes.TOGGLE_TODO || ActionTypes.CREATE_TODO:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
