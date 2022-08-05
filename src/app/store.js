
import { createStore, combineReducers } from "redux";
import { studentReducer } from "./reducers/SudentReducer";
import { courseReducer } from "./reducers/CourseReducer";
import { stateReducer } from "./reducers/StateReducer";
import { dateReducer } from "./reducers/DateReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const reducer = combineReducers({
    student: studentReducer,
    course: courseReducer,
    date: dateReducer,
    _state: stateReducer
  })

export default createStore(reducer, composeWithDevTools());
