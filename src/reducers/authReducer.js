import { ActionTypes } from "../actions";

const INITIAL_STATE = {
  isSignedIn: null,
  userName: null
};

const USERS = [
  {
    email: "lucas@gmail.com",
    userName: "Lucas",
    password: "12345"
  },
  {
    email: "vitor@gmail.com",
    userName: "Vitor",
    password: "23456"
  },
  {
    email: "fernanda@gmail.com",
    userName: "Fernanda",
    password: "34567"
  }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.TRY_LOGGIN_IN:
      const validUser = USERS.filter(
        user => user.email === action.email && user.password === action.password
      );
      const userName = validUser.length !== 0 ? validUser[0].userName : null;
      return validUser.length !== 0
        ? { ...state, isSignedIn: true, userName: userName }
        : state;

    default:
      return state;
  }
};
