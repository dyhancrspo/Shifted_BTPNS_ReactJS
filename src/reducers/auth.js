const initialState = {
  isLoggedIn: false,
  username: "",
};

const authReducer = (state = initialState, action) => {
  console.log("State: ", state);
  console.log("Action: ", action);
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: true,
        username: action.payload.username,
      };
    case "LOGOUT":
      return initialState;

    default:
      return initialState;
  }
};

export default authReducer;
