const { combineReducers } = require("redux");
const { cartItem } = require("./cart");

const rootReducer = combineReducers({
  cart: cartItem,
});

export default rootReducer;
