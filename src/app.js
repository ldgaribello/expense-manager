import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Rent", amount: 1000, createdAt: 10000 })
);
store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: 5000 })
);
store.dispatch(
  addExpense({ description: "Diner", amount: 300, createdAt: 3000 })
);
store.dispatch(
  addExpense({ description: "Breakfast", amount: 200, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Lunch", amount: 800, createdAt: 2000 })
);

store.dispatch(setTextFilter("f"));

console.log(store.getState());

setTimeout(() => {
  store.dispatch(setTextFilter("r"));
}, 4000);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
