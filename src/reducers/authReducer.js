import { ActionTypes } from "../actions";

const INITIAL_STATE = {
  isSignedIn: false,
  userName: null,
  userTodos: []
};

// const LUCAS_TODOS = [
//   {
//     text: "Estudar para prova de ICC",
//     time: "02:30",
//     date: "2000-04-18",
//     todoId: 0,
//     isCompleted: false
//   },
//   {
//     text: "Malhar",
//     time: "05:50",
//     date: "2020-03-04",
//     todoId: 1,
//     isCompleted: false
//   },
//   {
//     text: "Arrumar o quarto",
//     time: "08:00",
//     date: "2020-03-06",
//     todoId: 2,
//     isCompleted: true
//   }
// ];

// const VITOR_TODOS = [
//   {
//     text: "Reunião sobre assuntos importantes",
//     time: "17:30",
//     date: "2020-03-05",
//     todoId: 0,
//     isCompleted: true
//   },
//   {
//     text: "Ir ao cinema",
//     time: "21:00",
//     date: "2020-03-06",
//     todoId: 1,
//     isCompleted: false
//   },
//   {
//     text: "Arrumar o quarto",
//     time: "08:00",
//     date: "2020-03-05",
//     todoId: 2,
//     isCompleted: true
//   }
// ];

const INITIAL_USERS = [
  {
    userId: 0,
    email: "lucas@gmail.com",
    userName: "Lucas",
    password: "12345"
  },
  {
    userId: 1,
    email: "vitor@gmail.com",
    userName: "Vitor",
    password: "23456"
  },
  {
    userId: 2,
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
      // const userTodos = validUser.length !== 0 ? validUser[0].todos : null;
      const userId = validUser.length !== 0 ? validUser[0].userId : null;
      return validUser.length !== 0
        ? {
            ...state,
            isSignedIn: true,
            userName: userName,
            // userTodos: userTodos,
            userId: userId
          }
        : state;

    case ActionTypes.TRY_LOGGIN_OUT:
      return { ...state, isSignedIn: false, userName: null, userId: null };

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
          userId: action.userId,
          email: action.userInfo.signUpEmail,
          userName: action.userInfo.signUpUsername,
          password: action.userInfo.singUpPassword
        }
      ];

    default:
      return state;
  }
};
