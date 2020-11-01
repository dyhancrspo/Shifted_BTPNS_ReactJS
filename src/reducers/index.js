import { combineReducers } from "redux";
import AuthReducer from "./auth";
import DataUsersReducer from "./datafetch";

const AllReducers = combineReducers({
  auth: AuthReducer,
  dataFetch: DataUsersReducer,
});

export default AllReducers;