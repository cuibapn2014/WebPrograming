import { composeWithDevTools } from "redux-devtools-extension";
const { createStore } = require("redux");
const { default: rootReducer } = require("./reducers.js");

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;
