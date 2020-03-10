import _ from "lodash";
import { ActionTypes } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    default:
      return state;
  }
};
