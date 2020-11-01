const initialState = {
  dataUsers: [],
};

const DataUsersReducer = (state = initialState, action) => {
  console.log("State: ", state);
  console.log("Action: ", action);

  switch (action.type) {
    case "dataFetching":
      return {
        dataUsers: action.payload.dataUsers,
      };

    default:
      return state;
  }
};

export default DataUsersReducer;
