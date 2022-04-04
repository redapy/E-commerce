import currencyReducer from "./currencyReducer";
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  currency: currencyReducer,
  cartItems: cartReducer,
});

export default rootReducer;
