import currencyReducer from "./currencyReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currency: currencyReducer,
});

export default rootReducer;
