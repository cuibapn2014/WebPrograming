import blockPage from "./blockpage";
import stateMenu from "./statemenu";
import token from "./token";
const { combineReducers } = require("redux");
const { cartItem } = require("./cart");

const rootReducer = combineReducers({
  cart: cartItem,
  stateMenu: stateMenu,
  token: token,
  blockpage: blockPage,
});

export default rootReducer;
