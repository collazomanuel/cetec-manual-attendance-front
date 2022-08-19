
import { createStore, combineReducers } from "redux";
import { studentReducer } from "./reducers/StudentReducer";
import { courseReducer } from "./reducers/CourseReducer";
import { statusReducer } from "./reducers/StatusReducer";
import { dateReducer } from "./reducers/DateReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const reducer = combineReducers({
    student: studentReducer,
    course: courseReducer,
    date: dateReducer,
    status: statusReducer
  })

export default createStore(reducer, composeWithDevTools());
