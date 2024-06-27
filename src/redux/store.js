import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/auth.reducer";
import enrolledCoursesReducer from "./reducers/course.reducer";
import instructorsReducer from "./reducers/instructor.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  enrolledCourses: enrolledCoursesReducer,
  instructors: instructorsReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
