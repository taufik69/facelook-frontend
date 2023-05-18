import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LoginCustomSlicer from "../AllSlicer/LoginSlicer";

const reducer = combineReducers({
  login: LoginCustomSlicer, // this login name is random pick.
});
export default configureStore({
  reducer: reducer,
});
