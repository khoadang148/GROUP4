import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  thunk  from "redux-thunk";
import authReducer from "./reducers/auth.reducer";
import enrolledCoursesReducer from "./reducers/course.reducer";
import instructorsReducer from "./reducers/instructor.reducer";
import certificatesReducer from "./reducers/certificate.reducer";
import newsReducer from "./reducers/news.reducer";
import reviewReducer from "./reducers/review.reducer";
import ourblogReducer from "./reducers/ourblog.reducer";
import statementsReducer from "./reducers/statements.reducer";
import chatReducer from "./reducers/chat.reducer";
import userReducer from "./reducers/user.reducer";
import verificationReducer from "./reducers/verification.reducer"; 

const rootReducer = combineReducers({
  auth: authReducer,
  enrolledCourses: enrolledCoursesReducer,
  instructors: instructorsReducer,
  certificates: certificatesReducer,
  statements: statementsReducer,
  news:newsReducer,
  review: reviewReducer,
  ourblog: ourblogReducer,
  chat: chatReducer,
  userUpdate: userReducer,
  verification: verificationReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
