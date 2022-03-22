const { createStore } = require("redux");
const { default: rootReducer } = require("./reducers.js");

const store = createStore(rootReducer);

export default store;
