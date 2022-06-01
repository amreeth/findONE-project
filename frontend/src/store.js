import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  userUpdateProfileReducer,
  userUpdatePasswordReducer,
  forgotPasswordReducer,
  resetPasswordReducer
} from "./reducers/userReducers";

import {
  adminAddQuestionReducer,
  adminAllQuestionReducer,
  adminQuestionDeleteReducer,
} from "./reducers/adminReducers";

import {
  matchesReducer,
  matchesDetailsReducer,
  addRemoveFavReducer,
  matchSentRequestReducer,
  allSentRequestsReducer,
  allReceivedRequestReducer
} from "./reducers/matchReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userUpdateProfile: userUpdateProfileReducer,
  updatePassword:userUpdatePasswordReducer,
  forgotPassword:forgotPasswordReducer,
  resetpassword:resetPasswordReducer,



  matches: matchesReducer,
  matchDetails: matchesDetailsReducer,
  addRemoveFav: addRemoveFavReducer,
  sentRemoveRequest: matchSentRequestReducer,
  allsentrequests:allSentRequestsReducer,
  allreceivedrequests:allReceivedRequestReducer,



  adminAddQuestion: adminAddQuestionReducer,
  adminAllQuestions: adminAllQuestionReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  adminLogin: { adminInfo: adminInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
