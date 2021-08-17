export default function createStore(reducer) {
  let currentState; //
  let currentListeners = [];
  // get
  function getState() {
    return currentState;
  }

  // set
  function dispatch(action) {
    currentState = reducer(currentState, action);
    // state
    currentListeners.forEach((listener) => listener());
  }

  //
  function subscribe(listener) {
    currentListeners.push(listener);
    return () => {
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  }

  dispatch({ type: "uniqueDefaultValue" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}
