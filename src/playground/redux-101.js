import { createStore } from "redux";

console.log("This is the redux playground...");

const doIncrement = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const doDecrement = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const doSet = ({ count }) => ({
  type: "SET",
  count
});

const doReset = () => ({
  type: "RESET"
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(doIncrement({ incrementBy: 5 }));
store.dispatch(doIncrement());
store.dispatch(doReset());
store.dispatch(doDecrement({ decrementBy: 10 }));
store.dispatch(doDecrement());
store.dispatch(doSet({ count: 200 }));
