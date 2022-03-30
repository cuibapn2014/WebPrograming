import stateMenu from "./statemenu";

const { combineReducers } = require("redux");
const { cartItem } = require("./cart");

const rootReducer = combineReducers({
  cart: cartItem,
  stateMenu: stateMenu,
});

export default rootReducer;
