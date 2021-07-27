const INTIAL_STATE = {
  currentUser: 0,

  users: [
    {
      name: "Ali",
      answeredPolls: 3,
      createdPolls: 1,
    },
    {
      name: "Ahsan",
      answeredPolls: 3,
      createdPolls: 1,
    },
    {
      name: "Ahmed",
      answeredPolls: 3,
      createdPolls: 1,
    },
  ],
  polls: [
    {
      statement: "Why?",
      options: [{ name: "eh" }, { name: "dntknow" }, { name: "what" }],
      creator: 0,
      votes: [
        { user: 0, option: 0 },
        { user: 1, option: 2 },
        { user: 2, option: 1 },
      ],
    },
    {
      statement: "Where?",
      options: [{ name: "eh" }, { name: "dntknow" }, { name: "what" }],
      creator: 1,
      votes: [
        { user: 2, option: 0 },
        { user: 3, option: 2 },
        { user: 1, option: 1 },
      ],
    },
    {
      statement: "Who?",
      options: [
        { name: "eh", votes: 0 },
        { name: "dntknow", votes: 0 },
        { name: "what", votes: 0 },
      ],
      creator: 2,
      votes: [
        { user: 2, option: 0 },
        { user: 1, option: 2 },
        { user: 0, option: 1 },
      ],
    },
  ],
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATEDATA":
      return {
        ...state,
        results: action.results,
      };
    case "SETUSER":
      console.log(action.user);
      return {
        ...state,
        currentUser: action.user,
      };
    case "ADDUSER":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case "ADDPOLL":
      return {
        ...state,
        polls: [...state.polls, action.poll],
      };
    case "ADDVOTE":
      return {
        ...state,
        polls: [...action.polls],
        users: [...action.users],
      };
    default:
      return state;
  }
};
