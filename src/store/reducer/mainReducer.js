import { combineReducers } from "redux";
import loginReducer from "../../modules/Login/reducer";
import userReducer from "../../modules/User/reducer";

export const mainReducer = combineReducers({
  login: loginReducer,
  userDetails: userReducer
});
