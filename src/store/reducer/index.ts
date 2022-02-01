import {  combineReducers } from "redux";
import { movieReducer } from "./movie";
import { tvReducer } from "./tv";



export default combineReducers({
  movie: movieReducer,
  tv: tvReducer,
});
