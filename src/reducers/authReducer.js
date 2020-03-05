import { ActionTypes } from "../actions";

const INITIAL_STATE = {
  isSignedIn: false,
  userName: null
};

const INITIAL_USERS = [
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

export const userActions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.TRY_LOGGIN_IN:
      const validUser = INITIAL_USERS.filter(
        user => user.email === action.email && user.password === action.password
      );
      const userName = validUser.length !== 0 ? validUser[0].userName : null;
      return validUser.length !== 0
        ? { ...state, isSignedIn: true, userName: userName }
        : state;

    case ActionTypes.TRY_LOGGIN_OUT:
      return { ...state, isSignedIn: false, userName: null };

    default:
      return state;
  }
};

export const userDatabase = (state = INITIAL_USERS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return [
        ...state,
        {
          email: action.email,
          userName: action.userName,
          password: action.password
        }
      ];

    default:
      return state;
  }
};
