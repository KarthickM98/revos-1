import { combineReducers } from "redux";
import updateFun from "./reducer";
const rootreducer = combineReducers({
  update : updateFun,
});
export default rootreducer;
