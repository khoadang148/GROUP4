import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/auth.reducer";
import enrolledCoursesReducer from "./reducers/course.reducer";
import instructorsReducer from "./reducers/instructor.reducer";
import certificatesReducer from "./reducers/certificate.reducer";
import newsReducer from "./reducers/news.reducer";
import reviewReducer from "./reducers/review.reducer";


const rootReducer = combineReducers({
  auth: authReducer,
  enrolledCourses: enrolledCoursesReducer,
  instructors: instructorsReducer,
  certificates: certificatesReducer,
  news:newsReducer,
  review: reviewReducer
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
