// const initialState = {
//   dataUsers: [],
// };

// const DataUsersReducer = (state = initialState, action) => {
//   console.log("State: ", state);
//   console.log("Action: ", action);

//   switch (action.type) {
//     case "FETCH":
//       return {
//         dataUsers: action.payload.dataUsers,
//       };
//     case "REGISTER":
//       return {
//         ...state,
//         dataUsers: [...state.dataUsers, action.payload.dataRegister],
//       };
//     case "DELETE":
//       return {
//         ...state,
//         dataUsers: state.dataUsers.filter(
//           (item, index) => index !== action.payload
//         ),
//       };
//     case "addUser":
//       return {
//         ...state,
//         dataUser: action.payload.dataUser,
//       };
//     default:
//       return state;
//   }
// };

// export default DataUsersReducer;
