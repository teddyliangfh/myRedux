import { combineReducers, createStore } from "redux";

// define
function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - action.payload || 1;
    default:
      return state;
  }
}

// create store
const store = createStore(combineReducers({ count: countReducer }));

export default store;
